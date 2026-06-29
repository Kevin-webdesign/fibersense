import type { RoleKey } from '@/lib/roles'

export type ApiStatus = 'ok' | 'error'

export interface ApiEnvelope<T> {
  status: ApiStatus
  data: T
}

export interface DatasetRow {
  id: string
  fileName: string
  records: number
  uploadedBy: string
  date: string
  size: string
}

export interface AuditLogRow {
  id: string
  user: string
  action: string
  time: string
  ip: string
}

export interface TaskRow {
  id: string
  title: string
  faultId?: string
  faultSegment?: string
  faultLocation?: string
  priority: string
  due: string
  status: string
}

export interface SupportTicketRow {
  id: string
  subject: string
  description?: string
  channel: string
  priority: string
  status: string
  createdAt: string
  resolvedAt?: string
  faultId?: string
  faultSegment?: string
  faultLocation?: string
  faultStatus?: string
}

export type FaultSeverity = 'Low' | 'Medium' | 'High' | 'Critical'
export type FaultStatusLabel =
  | 'New'
  | 'Assigned'
  | 'In Progress'
  | 'Resolved'
  | 'Closed'
export type AlertLevelLabel = 'Information' | 'Warning' | 'Critical' | 'Emergency'
export type AlertStatusLabel = 'Open' | 'Acknowledged' | 'Resolved'
export type RiskLevelLabel = 'Low' | 'Medium' | 'High' | 'Critical'
export type AccountStatusLabel = 'Active' | 'Inactive' | 'Suspended'
export type DeviceStatusLabel = 'Online' | 'Offline' | 'Maintenance'

export interface FaultRow {
  id: string
  type: string
  segment: string
  location: string
  severity: FaultSeverity
  confidence: number
  status: FaultStatusLabel
  detectedAt: string
  assignee?: string
}

export interface AlertRow {
  id: string
  title: string
  level: AlertLevelLabel
  segment: string
  time: string
  status: AlertStatusLabel
}

export interface PredictionRow {
  id: string
  segment: string
  faultId?: string
  faultType?: string
  faultSeverity?: FaultSeverity
  faultStatus?: FaultStatusLabel
  faultLocation?: string
  assessedAt: string
  riskLevel: RiskLevelLabel
  probability: number
  recommendation: string
  horizon: string
}

export interface UserRow {
  id: string
  name: string
  email: string
  role: string
  roleCode: 'ADMINISTRATOR' | 'NETWORK_ENGINEER' | 'OPERATIONS_STAFF' | 'TECHNICAL_SUPPORT'
  status: AccountStatusLabel
  lastActive: string
}

export interface DeviceRow {
  id: string
  name: string
  serial: string
  type: string
  status: DeviceStatusLabel
  location: string
}

export interface NetworkSiteRow {
  id: string
  name: string
  location: string
  connectedTo: string
  distance: number
  distanceUnit: string
  networkSegment?: string
  notes?: string
  createdAt: string
}

export interface SignalSample {
  time: string
  strength: number
  attenuation: number
  errorRate: number
}

export interface NetworkDetectionRow {
  id: string
  networkSegment: string
  signalStrength: number
  signalLoss: number
  attenuation: number
  errorRate: number
  reflectionLevel: number
  distance: number
  detectedAt: string
}

export interface FaultTrendPoint {
  day: string
  detected: number
  resolved: number
}

export interface FaultTypePoint {
  type: string
  count: number
}

export interface DashboardMetrics {
  totalUsers: number
  datasetsStored: number
  activeModel: string
  modelAccuracy: number
  systemUptime: number
  networkHealth: number
  averageSignalStrength: number
  activeFaults: number
  connectedDevices: number
  openTasks: number
  inProgressTasks: number
  averageResolutionHours: number
  resolvedSevenDays: number
  openTickets: number
  activeAlerts: number
  averageResponseMinutes: number
  resolvedToday: number
}

export interface DashboardData {
  role: RoleKey
  metrics: DashboardMetrics
  faults: FaultRow[]
  alerts: AlertRow[]
  predictions: PredictionRow[]
  users: UserRow[]
  devices: DeviceRow[]
  datasets: DatasetRow[]
  auditLogs: AuditLogRow[]
  tasks: TaskRow[]
  tickets: SupportTicketRow[]
  networkSites: NetworkSiteRow[]
  networkDetections: NetworkDetectionRow[]
  signalSeries: SignalSample[]
  faultTrend: FaultTrendPoint[]
  faultTypeBreakdown: FaultTypePoint[]
}
