import { unstable_noStore as noStore } from 'next/cache'
import { prisma } from '@/lib/prisma'
import { hashPassword } from '@/lib/password'
import type {
  AccountStatus,
  AlertLevel,
  AlertStatus,
  DeviceStatus,
  DeviceType,
  FaultStatus,
  FaultType,
  RiskLevel,
  Role,
  Severity,
  TaskPriority,
  TaskStatus,
  TicketChannel,
  TicketStatus,
} from '@/lib/generated/prisma'
import type {
  AuditLogRow,
  AlertRow,
  DashboardData,
  DashboardMetrics,
  DatasetRow,
  DeviceRow,
  FaultTrendPoint,
  FaultTypePoint,
  FaultRow,
  NetworkSiteRow,
  NetworkDetectionRow,
  PredictionRow,
  SignalSample,
  SupportTicketRow,
  TaskRow,
  UserRow,
} from '@/lib/api-types'
import type { RoleKey } from '@/lib/roles'

type DatabaseFault = Awaited<ReturnType<typeof listFaultsFromDb>>[number]

const segmentLocations: Record<string, string> = {
  'Kigali Core C-01': 'Kigali central exchange, rack C-01',
  'Huye Ring S-04': 'Huye south ring cabinet S-04',
  'Rubavu Spur W-08': 'Rubavu western spur closure W-08',
  'Kigali-Musanze NE-12': 'Kigali-Musanze north-east route marker 12',
}

function titleCaseEnum(value: string) {
  return value
    .toLowerCase()
    .split('_')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function formatRelative(value: Date) {
  const diffMs = Date.now() - value.getTime()
  const minutes = Math.max(1, Math.round(diffMs / 60000))
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.round(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  return `${Math.round(hours / 24)}d ago`
}

function formatDate(value: Date) {
  return value.toISOString().slice(0, 10)
}

function roleLabel(role: Role) {
  return titleCaseEnum(role).replace('Administrator', 'Administrator')
}

function riskFromSignal(input: {
  signalStrength: number
  signalLoss: number
  attenuation: number
  errorRate: number
  reflectionLevel: number
}) {
  const score =
    Math.max(0, Math.abs(input.signalStrength) - 18) * 4 +
    input.signalLoss * 10 +
    input.attenuation * 35 +
    input.errorRate * 8 +
    input.reflectionLevel * 4
  const probability = Math.min(98, Math.max(8, Math.round(score)))
  const riskLevel: RiskLevel =
    probability >= 85
      ? 'CRITICAL'
      : probability >= 65
        ? 'HIGH'
        : probability >= 40
          ? 'MEDIUM'
          : 'LOW'
  return { probability, riskLevel }
}

function severityFromRisk(riskLevel: RiskLevel): Severity {
  if (riskLevel === 'CRITICAL') return 'CRITICAL'
  if (riskLevel === 'HIGH') return 'HIGH'
  if (riskLevel === 'MEDIUM') return 'MEDIUM'
  return 'LOW'
}

function faultTypeFromSignal(input: {
  signalLoss: number
  attenuation: number
  reflectionLevel: number
}): FaultType {
  if (input.signalLoss >= 4) return 'SIGNAL_LOSS'
  if (input.attenuation >= 0.5) return 'SIGNAL_ATTENUATION'
  if (input.reflectionLevel >= 0.35) return 'REFLECTION_FAULT'
  return 'BENDING_LOSS'
}

function locationFromSegment(segment: string) {
  return segmentLocations[segment] ?? segment
}

function segmentAlias(segment: string) {
  return segment.split(' ').at(-1) ?? segment
}

function ticketMatchesFault(subject: string, fault: { networkSegment: string }) {
  const text = subject.toLowerCase()
  return (
    text.includes(fault.networkSegment.toLowerCase()) ||
    text.includes(segmentAlias(fault.networkSegment).toLowerCase())
  )
}

function toFaultRow(fault: DatabaseFault): FaultRow {
  return {
    id: fault.id,
    type: titleCaseEnum(fault.faultType),
    segment: fault.networkSegment,
    location: fault.location ?? locationFromSegment(fault.networkSegment),
    severity: titleCaseEnum(fault.severity) as FaultRow['severity'],
    confidence: Math.round(fault.confidenceScore),
    status: titleCaseEnum(fault.status).replace(
      'In Progress',
      'In Progress'
    ) as FaultRow['status'],
    detectedAt: formatRelative(fault.detectedAt),
    assignee: fault.assignedTo?.fullName,
  }
}

function toAlertRow(alert: Awaited<ReturnType<typeof listAlerts>>[number]): AlertRow {
  return {
    id: alert.id,
    title: alert.title,
    level: titleCaseEnum(alert.level) as AlertRow['level'],
    segment: alert.fault?.networkSegment ?? 'Unassigned',
    time: formatRelative(alert.createdAt),
    status: titleCaseEnum(alert.status) as AlertRow['status'],
  }
}

function toPredictionRow(
  prediction: Awaited<ReturnType<typeof listPredictions>>[number]
): PredictionRow {
  return {
    id: prediction.id,
    segment: prediction.networkSegment,
    faultId: prediction.faultId ?? undefined,
    faultType: prediction.fault ? titleCaseEnum(prediction.fault.faultType) : undefined,
    faultSeverity: prediction.fault
      ? (titleCaseEnum(prediction.fault.severity) as PredictionRow['faultSeverity'])
      : undefined,
    faultStatus: prediction.fault
      ? (titleCaseEnum(prediction.fault.status).replace(
          'In Progress',
          'In Progress'
        ) as PredictionRow['faultStatus'])
      : undefined,
    faultLocation:
      prediction.fault?.location ??
      (prediction.fault ? locationFromSegment(prediction.fault.networkSegment) : undefined),
    assessedAt: formatRelative(prediction.predictedAt),
    riskLevel: titleCaseEnum(prediction.riskLevel) as PredictionRow['riskLevel'],
    probability: Math.round(prediction.probability),
    recommendation: prediction.recommendation ?? 'Continue monitoring.',
    horizon: 'Generated signal',
  }
}

function toUserRow(user: Awaited<ReturnType<typeof listUsers>>[number]): UserRow {
  return {
    id: user.id,
    name: user.fullName,
    email: user.email,
    role: roleLabel(user.role),
    roleCode: user.role,
    status: titleCaseEnum(user.status) as UserRow['status'],
    lastActive: formatRelative(user.updatedAt),
  }
}

function toDeviceRow(
  device: Awaited<ReturnType<typeof listDevices>>[number]
): DeviceRow {
  return {
    id: device.id,
    name: device.deviceName,
    serial: device.serialNumber,
    type: titleCaseEnum(device.deviceType),
    status: titleCaseEnum(device.status) as DeviceRow['status'],
    location: device.location ?? 'Unassigned',
  }
}

function toNetworkSiteRow(
  site: Awaited<ReturnType<typeof listNetworkSitesFromDb>>[number]
): NetworkSiteRow {
  return {
    id: site.id,
    name: site.name,
    location: site.location,
    connectedTo: site.connectedTo,
    distance: site.distance,
    distanceUnit: site.distanceUnit,
    networkSegment: site.networkSegment ?? undefined,
    notes: site.notes ?? undefined,
    createdAt: formatRelative(site.createdAt),
  }
}

export async function listFaultsFromDb() {
  noStore()
  return prisma.fault.findMany({
    include: { assignedTo: true },
    orderBy: { detectedAt: 'desc' },
  })
}

export async function listFaults(): Promise<FaultRow[]> {
  return (await listFaultsFromDb()).map(toFaultRow)
}

export async function listAlerts() {
  noStore()
  return prisma.alert.findMany({
    include: { fault: true },
    orderBy: { createdAt: 'desc' },
  })
}

export async function listAlertRows(): Promise<AlertRow[]> {
  return (await listAlerts()).map(toAlertRow)
}

export async function listPredictions() {
  noStore()
  return prisma.prediction.findMany({
    include: { fault: true },
    orderBy: { predictedAt: 'desc' },
  })
}

export async function listPredictionRows(): Promise<PredictionRow[]> {
  return (await listPredictions()).map(toPredictionRow)
}

export async function listUsers() {
  noStore()
  return prisma.user.findMany({ orderBy: { createdAt: 'desc' } })
}

export async function listUserRows(): Promise<UserRow[]> {
  return (await listUsers()).map(toUserRow)
}

export async function listDevices() {
  noStore()
  return prisma.signalGenerator.findMany({ orderBy: { createdAt: 'desc' } })
}

export async function listDeviceRows(): Promise<DeviceRow[]> {
  return (await listDevices()).map(toDeviceRow)
}

export async function listNetworkSitesFromDb() {
  noStore()
  return prisma.networkSite.findMany({ orderBy: { createdAt: 'desc' } })
}

export async function listNetworkSiteRows(): Promise<NetworkSiteRow[]> {
  return (await listNetworkSitesFromDb()).map(toNetworkSiteRow)
}

export async function listDatasets(): Promise<DatasetRow[]> {
  noStore()
  const rows = await prisma.dataset.findMany({
    include: { uploadedBy: true },
    orderBy: { uploadDate: 'desc' },
  })

  return rows.map((dataset) => ({
    id: dataset.id,
    fileName: dataset.fileName,
    records: dataset.recordCount,
    uploadedBy: dataset.uploadedBy.fullName,
    date: formatDate(dataset.uploadDate),
    size: `${(dataset.fileSize / 1024 / 1024).toFixed(1)} MB`,
  }))
}

export async function listNetworkData(): Promise<SignalSample[]> {
  noStore()
  const rows = await prisma.networkData.findMany({
    orderBy: { timestamp: 'asc' },
    take: 24,
  })

  return rows.map((row) => ({
    time: row.timestamp.toISOString().slice(11, 16),
    strength: row.signalStrength,
    attenuation: row.attenuation,
    errorRate: row.errorRate,
  }))
}

export async function listNetworkDetections(): Promise<NetworkDetectionRow[]> {
  noStore()
  const rows = await prisma.networkData.findMany({
    orderBy: { timestamp: 'desc' },
    take: 50,
  })

  return rows.map((row) => ({
    id: row.id,
    networkSegment: row.networkSegment,
    signalStrength: row.signalStrength,
    signalLoss: row.signalLoss,
    attenuation: row.attenuation,
    errorRate: row.errorRate,
    reflectionLevel: row.reflectionLevel,
    distance: row.distance,
    detectedAt: formatRelative(row.timestamp),
  }))
}

export async function listFaultTrend(): Promise<FaultTrendPoint[]> {
  noStore()
  const faults = await prisma.fault.findMany({
    select: { detectedAt: true, status: true },
    orderBy: { detectedAt: 'asc' },
  })
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const buckets = new Map<string, FaultTrendPoint>()

  for (const fault of faults) {
    const day = days[fault.detectedAt.getDay()]
    const current = buckets.get(day) ?? { day, detected: 0, resolved: 0 }
    current.detected += 1
    if (['RESOLVED', 'CLOSED'].includes(fault.status)) current.resolved += 1
    buckets.set(day, current)
  }

  return Array.from(buckets.values())
}

export async function listFaultTypes(): Promise<FaultTypePoint[]> {
  noStore()
  const grouped = await prisma.fault.groupBy({
    by: ['faultType'],
    _count: { faultType: true },
  })

  return grouped.map((row) => ({
    type: titleCaseEnum(row.faultType),
    count: row._count.faultType,
  }))
}

export async function listAuditLogs(): Promise<AuditLogRow[]> {
  noStore()
  const rows = await prisma.auditLog.findMany({
    include: { user: true },
    orderBy: { timestamp: 'desc' },
    take: 50,
  })

  return rows.map((log) => ({
    id: log.id,
    user: log.user?.fullName ?? 'System',
    action: log.action,
    time: log.timestamp.toISOString().slice(0, 16).replace('T', ' '),
    ip: log.ipAddress ?? 'internal',
  }))
}

export async function listTasks(): Promise<TaskRow[]> {
  noStore()
  const rows = await prisma.maintenanceTask.findMany({
    include: { fault: true },
    orderBy: [{ status: 'asc' }, { dueAt: 'asc' }],
  })

  return rows.map((task) => ({
    id: task.id,
    title: task.title,
    faultId: task.faultId ?? undefined,
    faultSegment: task.fault?.networkSegment,
    faultLocation:
      task.fault?.location ??
      (task.fault ? locationFromSegment(task.fault.networkSegment) : undefined),
    priority: titleCaseEnum(task.priority),
    due: task.dueAt ? task.dueAt.toLocaleString() : 'Unscheduled',
    status:
      task.status === 'COMPLETED'
        ? 'Resolved'
        : titleCaseEnum(task.status).replace('In Progress', 'In Progress'),
  }))
}

export async function listSupportTickets() {
  noStore()
  const rows = await prisma.supportTicket.findMany({
    include: { fault: true, createdBy: true },
    orderBy: { createdAt: 'desc' },
  })
  const faults = await prisma.fault.findMany({ orderBy: { detectedAt: 'desc' } })

  return rows.map(
    (ticket): SupportTicketRow => {
      const detectedFault =
        ticket.fault ?? faults.find((fault) => ticketMatchesFault(ticket.subject, fault))

      return {
        id: ticket.id,
        subject: ticket.subject,
        description: ticket.description ?? undefined,
        channel: titleCaseEnum(ticket.channel),
        priority: titleCaseEnum(ticket.priority),
        status: titleCaseEnum(ticket.status),
        createdAt: formatRelative(ticket.createdAt),
        resolvedAt: ticket.resolvedAt ? formatRelative(ticket.resolvedAt) : undefined,
        faultId: detectedFault?.id,
        faultSegment: detectedFault?.networkSegment,
        faultLocation:
          detectedFault?.location ??
          (detectedFault ? locationFromSegment(detectedFault.networkSegment) : undefined),
        faultStatus: detectedFault
          ? titleCaseEnum(detectedFault.status).replace('In Progress', 'In Progress')
          : undefined,
      }
    }
  )
}

async function metrics(): Promise<DashboardMetrics> {
  const [
    totalUsers,
    datasetsStored,
    activeFaults,
    connectedDevices,
    openTasks,
    inProgressTasks,
    activeAlerts,
    resolvedSevenDays,
    signal,
    openTickets,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.dataset.count(),
    prisma.fault.count({ where: { status: { notIn: ['RESOLVED', 'CLOSED'] } } }),
    prisma.signalGenerator.count({ where: { status: 'ONLINE' } }),
    prisma.maintenanceTask.count({
      where: { status: { notIn: ['COMPLETED', 'CANCELLED'] } },
    }),
    prisma.maintenanceTask.count({ where: { status: 'IN_PROGRESS' } }),
    prisma.alert.count({ where: { status: { not: 'RESOLVED' } } }),
    prisma.fault.count({
      where: {
        status: { in: ['RESOLVED', 'CLOSED'] },
        resolvedAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        },
      },
    }),
    prisma.networkData.aggregate({ _avg: { signalStrength: true } }),
    prisma.supportTicket.count({ where: { status: { notIn: ['RESOLVED', 'CLOSED'] } } }),
  ])

  return {
    totalUsers,
    datasetsStored,
    activeModel: 'risk analysis',
    modelAccuracy: 0,
    systemUptime: 99.9,
    networkHealth: Math.max(0, 100 - activeFaults * 3),
    averageSignalStrength: signal._avg.signalStrength ?? 0,
    activeFaults,
    connectedDevices,
    openTasks,
    inProgressTasks,
    averageResolutionHours: 0,
    resolvedSevenDays,
    openTickets,
    activeAlerts,
    averageResponseMinutes: 0,
    resolvedToday: 0,
  }
}

export async function getDashboardData(role: RoleKey): Promise<DashboardData> {
  noStore()
  const [
    dashboardMetrics,
    faults,
    alerts,
    predictions,
    users,
    devices,
    datasets,
    auditLogs,
    tasks,
    tickets,
    networkSites,
    networkDetections,
    signalSeries,
    faultTrend,
    faultTypeBreakdown,
  ] = await Promise.all([
    metrics(),
    listFaults(),
    listAlertRows(),
    listPredictionRows(),
    listUserRows(),
    listDeviceRows(),
    listDatasets(),
    listAuditLogs(),
    listTasks(),
    listSupportTickets(),
    listNetworkSiteRows(),
    listNetworkDetections(),
    listNetworkData(),
    listFaultTrend(),
    listFaultTypes(),
  ])

  return {
    role,
    metrics: dashboardMetrics,
    faults,
    alerts,
    predictions,
    users,
    devices,
    datasets,
    auditLogs,
    tasks,
    tickets,
    networkSites,
    networkDetections,
    signalSeries,
    faultTrend,
    faultTypeBreakdown,
  }
}

export type CreateFaultInput = {
  faultType: FaultType
  severity: Severity
  confidenceScore: number
  networkSegment: string
  location?: string
  notes?: string
  assignedToId?: string
}

export async function createFault(input: CreateFaultInput) {
  return prisma.fault.create({
    data: {
      faultType: input.faultType,
      severity: input.severity,
      confidenceScore: input.confidenceScore,
      networkSegment: input.networkSegment,
      location: input.location,
      notes: input.notes,
      assignedToId: input.assignedToId,
      status: input.assignedToId ? 'ASSIGNED' : 'NEW',
    },
  })
}

export async function updateFaultLocation(id: string, location: string) {
  return prisma.fault.update({
    where: { id },
    data: { location },
  })
}

export async function updateFaultStatus(id: string, status: FaultStatus) {
  return prisma.fault.update({
    where: { id },
    data: {
      status,
      resolvedAt: ['RESOLVED', 'CLOSED'].includes(status) ? new Date() : null,
    },
  })
}

export async function assignFault(id: string, assignedToId: string) {
  return prisma.fault.update({
    where: { id },
    data: { assignedToId, status: 'ASSIGNED' },
  })
}

export async function createAlert(input: {
  title: string
  description: string
  level: AlertLevel
  faultId?: string
}) {
  return prisma.alert.create({ data: input })
}

export async function updateAlertStatus(id: string, status: AlertStatus) {
  return prisma.alert.update({ where: { id }, data: { status } })
}

export async function createPrediction(input: {
  networkSegment: string
  riskLevel: RiskLevel
  probability: number
  recommendation?: string
  faultId?: string
}) {
  return prisma.prediction.create({ data: input })
}

export async function createAssessmentForFault(faultId: string) {
  const fault = await prisma.fault.findUniqueOrThrow({
    where: { id: faultId },
  })
  const probability = Math.min(98, Math.max(10, Math.round(fault.confidenceScore)))
  const riskLevel: RiskLevel = fault.severity

  return prisma.prediction.create({
    data: {
      faultId: fault.id,
      networkSegment: fault.networkSegment,
      riskLevel,
      probability,
      recommendation:
        fault.severity === 'CRITICAL'
          ? `Immediate repair required at ${fault.location ?? locationFromSegment(fault.networkSegment)}.`
          : fault.severity === 'HIGH'
            ? `Assign field repair and monitor ${fault.networkSegment}.`
            : fault.severity === 'MEDIUM'
              ? `Schedule inspection at ${fault.location ?? locationFromSegment(fault.networkSegment)}.`
              : `Continue monitoring ${fault.networkSegment}.`,
    },
  })
}

export async function createDataset(input: {
  fileName: string
  fileSize: number
  recordCount: number
  uploadedById: string
}) {
  return prisma.dataset.create({ data: input })
}

export async function createNetworkData(input: {
  networkSegment: string
  signalStrength: number
  signalLoss: number
  errorRate: number
  attenuation: number
  reflectionLevel: number
  distance: number
  datasetId?: string
}) {
  return prisma.networkData.create({ data: input })
}

export async function createNetworkSite(input: {
  name: string
  location: string
  connectedTo: string
  distance: number
  distanceUnit?: string
  networkSegment?: string
  notes?: string
}) {
  return prisma.networkSite.create({
    data: {
      name: input.name.trim(),
      location: input.location.trim(),
      connectedTo: input.connectedTo.trim(),
      distance: input.distance,
      distanceUnit: input.distanceUnit?.trim() || 'm',
      networkSegment: input.networkSegment?.trim() || null,
      notes: input.notes?.trim() || null,
    },
  })
}

export async function processGeneratedSignal(input: {
  networkSegment: string
  signalStrength: number
  signalLoss: number
  errorRate: number
  attenuation: number
  reflectionLevel: number
  distance: number
}) {
  const assessment = riskFromSignal(input)
  const faultType = faultTypeFromSignal(input)

  const networkData = await prisma.networkData.create({
    data: input,
  })

  const prediction = await prisma.prediction.create({
    data: {
      networkSegment: input.networkSegment,
      riskLevel: assessment.riskLevel,
      probability: assessment.probability,
      recommendation:
        assessment.riskLevel === 'CRITICAL'
          ? 'Immediate repair response required for this segment.'
          : assessment.riskLevel === 'HIGH'
            ? 'Assign a technician and monitor the segment closely.'
            : assessment.riskLevel === 'MEDIUM'
              ? 'Schedule inspection and continue monitoring.'
              : 'Signal is acceptable. Continue monitoring.',
    },
  })

  const fault =
    assessment.riskLevel === 'LOW'
      ? null
      : await prisma.fault.create({
        data: {
          faultType,
          severity: severityFromRisk(assessment.riskLevel),
          status: 'NEW',
          confidenceScore: assessment.probability,
          networkSegment: input.networkSegment,
          location: locationFromSegment(input.networkSegment),
          networkDataId: networkData.id,
          notes: `Auto-detected from generated signal: ${assessment.riskLevel} risk.`,
        },
      })

  if (fault) {
    await prisma.prediction.update({
      where: { id: prediction.id },
      data: { faultId: fault.id },
    })
  }

  if (fault && ['HIGH', 'CRITICAL'].includes(assessment.riskLevel)) {
    await prisma.alert.create({
      data: {
        title: `${titleCaseEnum(faultType)} detected`,
        description: `Generated signal detected ${assessment.riskLevel.toLowerCase()} risk on ${input.networkSegment}.`,
        level: assessment.riskLevel === 'CRITICAL' ? 'EMERGENCY' : 'CRITICAL',
        status: 'OPEN',
        faultId: fault.id,
      },
    })
  }

  return { networkData, assessment: prediction, fault }
}

export async function createDevice(input: {
  deviceName: string
  serialNumber: string
  deviceType: DeviceType
  status?: DeviceStatus
  location?: string
}) {
  return prisma.signalGenerator.create({ data: input })
}

export async function updateDeviceStatus(id: string, status: DeviceStatus) {
  return prisma.signalGenerator.update({ where: { id }, data: { status } })
}

export async function createUser(input: {
  fullName: string
  email: string
  password: string
  role: Role
  status?: AccountStatus
}) {
  return prisma.user.create({
    data: {
      ...input,
      email: input.email.trim().toLowerCase(),
      password: hashPassword(input.password),
    },
  })
}

export async function updateUserStatus(id: string, status: AccountStatus) {
  return prisma.user.update({ where: { id }, data: { status } })
}

export async function updateUserRole(id: string, role: Role) {
  return prisma.user.update({ where: { id }, data: { role } })
}

export async function createTask(input: {
  title: string
  description?: string
  priority: TaskPriority
  status?: TaskStatus
  dueAt?: Date
  faultId?: string
  assignedToId?: string
  createdById?: string
}) {
  return prisma.maintenanceTask.create({ data: input })
}

export async function updateTaskStatus(id: string, status: TaskStatus) {
  return prisma.$transaction(async (tx) => {
    const task = await tx.maintenanceTask.findUniqueOrThrow({
      where: { id },
      select: { status: true, faultId: true },
    })

    if (['COMPLETED', 'CANCELLED'].includes(task.status)) {
      throw new Error('This task is already done or rejected and cannot be changed.')
    }

    const updatedTask = await tx.maintenanceTask.update({
      where: { id },
      data: {
        status,
        completedAt: status === 'COMPLETED' ? new Date() : null,
      },
    })

    if (status === 'COMPLETED' && task.faultId) {
      await tx.fault.update({
        where: { id: task.faultId },
        data: {
          status: 'RESOLVED',
          resolvedAt: new Date(),
        },
      })
      await tx.supportTicket.updateMany({
        where: {
          faultId: task.faultId,
          status: { notIn: ['RESOLVED', 'CLOSED'] },
        },
        data: {
          status: 'RESOLVED',
          resolvedAt: new Date(),
        },
      })
    }

    return updatedTask
  })
}

export async function createSupportTicket(input: {
  subject: string
  description?: string
  channel: TicketChannel
  priority: AlertLevel
  faultId?: string
  createdById?: string
}) {
  const faultId =
    input.faultId ??
    (
      await prisma.fault.findMany({ orderBy: { detectedAt: 'desc' } })
    ).find((fault) => ticketMatchesFault(input.subject, fault))?.id

  return prisma.supportTicket.create({
    data: {
      ...input,
      faultId,
    },
  })
}

export async function updateSupportTicketStatus(id: string, status: TicketStatus) {
  return prisma.$transaction(async (tx) => {
    const ticket = await tx.supportTicket.findUniqueOrThrow({
      where: { id },
      select: { status: true, faultId: true, subject: true },
    })

    if (['RESOLVED', 'CLOSED'].includes(ticket.status)) {
      throw new Error('This support ticket is already resolved and cannot be changed.')
    }

    const matchedFaultId =
      ticket.faultId ??
      (
        await tx.fault.findMany({ orderBy: { detectedAt: 'desc' } })
      ).find((fault) => ticketMatchesFault(ticket.subject, fault))?.id

    const updatedTicket = await tx.supportTicket.update({
      where: { id },
      data: {
        status,
        faultId: matchedFaultId,
        resolvedAt: ['RESOLVED', 'CLOSED'].includes(status) ? new Date() : null,
      },
    })

    if (status === 'RESOLVED' && matchedFaultId) {
      await tx.fault.update({
        where: { id: matchedFaultId },
        data: {
          status: 'RESOLVED',
          resolvedAt: new Date(),
        },
      })
    }

    return updatedTicket
  })
}
