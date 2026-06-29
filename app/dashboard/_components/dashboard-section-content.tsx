import { notFound } from 'next/navigation'
import {
  Activity,
  AlertTriangle,
  Brain,
  CheckCircle2,
  FileText,
  MapPinned,
  Radio,
  Settings,
  ShieldCheck,
  TicketCheck,
  Users,
  Wrench,
} from 'lucide-react'
import { PageHeader } from '@/components/dashboard/page-header'
import { AdminUserManagement } from '@/components/dashboard/admin-user-management'
import { AiRequestLimitSettings } from '@/components/dashboard/ai-request-limit-settings'
import { FaultLocationEditor } from '@/components/dashboard/fault-location-editor'
import { LiveSignalMonitor } from '@/components/dashboard/live-signal-monitor'
import {
  NetworkSiteManager,
  NetworkSiteSignalSimulation,
} from '@/components/dashboard/network-site-manager'
import { ReportGenerator } from '@/components/dashboard/report-generator'
import { RiskAssessmentWorkspace } from '@/components/dashboard/risk-assessment-workspace'
import { SupportTicketStatusEditor } from '@/components/dashboard/support-ticket-status-editor'
import { TaskAssignmentForm } from '@/components/dashboard/task-assignment-form'
import { TaskStatusEditor } from '@/components/dashboard/task-status-editor'
import {
  AlertsTable,
  FaultsTable,
} from '@/components/dashboard/data-tables'
import { StatCard, StatGrid } from '@/components/dashboard/stat-card'
import {
  AttenuationChart,
  FaultTrendChart,
  FaultTypeChart,
  SignalChart,
} from '@/components/dashboard/dashboard-charts'
import {
  AlertLevelBadge,
  StatusBadge,
} from '@/components/dashboard/status-badges'
import { AiAnalysisForm } from '@/components/dashboard/ai-analysis-form'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getDashboardData } from '@/lib/fibersense-service'
import { getAiDailyRequestLimit } from '@/lib/ai-request-limits'
import { ROLE_NAV, ROLES, type RoleKey } from '@/lib/roles'

export const dynamic = 'force-dynamic'

type DashboardData = Awaited<ReturnType<typeof getDashboardData>>

const SECTION_META: Record<string, { title: string; description: string }> = {
  users: {
    title: 'Users',
    description: 'Manage platform accounts, roles, and operational access.',
  },
  reports: {
    title: 'Reports',
    description: 'Access generated operational, maintenance, assessment, and fault reports.',
  },
  'audit-logs': {
    title: 'Audit Logs',
    description: 'Review administrative activity and system events.',
  },
  settings: {
    title: 'Settings',
    description: 'Set the daily AI analysis request limit.',
  },
  'live-monitoring': {
    title: 'Live Monitoring',
    description: 'Monitor signal strength, attenuation, and fault trends in real time.',
  },
  'network-sites': {
    title: 'Network Sites',
    description: 'Add fiber network sites, distances, and location links for simulation.',
  },
  'ai-analysis': {
    title: 'AI Analysis',
    description: 'Analyze fiber metrics with Groq-powered risk classification.',
  },
  faults: {
    title: 'Fault Analysis',
    description: 'Classify, prioritize, and track detected network faults.',
  },
  assessments: {
    title: 'Risk Assessments',
    description: 'Review previous signal assessments and risk recommendations.',
  },
  alerts: {
    title: 'Alerts',
    description: 'Triage open incidents and network events.',
  },
  tickets: {
    title: 'Tickets',
    description: 'Manage customer outage reports and support escalations.',
  },
  tasks: {
    title: 'Tasks & Escalations',
    description: 'Assign repair work, track technician progress, and resolve linked escalations.',
  },
}

export async function DashboardSectionPage({
  params,
}: {
  params: Promise<{ role: string; section: string }>
}) {
  const { role, section } = await params
  if (!(role in ROLES)) notFound()

  return <DashboardSectionContent role={role as RoleKey} section={section} />
}

export async function DashboardSectionContent({
  role,
  section,
}: {
  role: RoleKey
  section: string
}) {
  const meta = SECTION_META[section]
  if (!meta || !isSectionInRoleMenu(role, section)) notFound()

  const data = await getDashboardData(role)

  return (
    <div className="space-y-6">
      <PageHeader title={meta.title} description={meta.description} />
      {renderSection(section, role, data)}
    </div>
  )
}

function renderSection(section: string, role: RoleKey, data: DashboardData) {
  if (section === 'users') return <UsersPage data={data} />
  if (section === 'reports') return <ReportsPage data={data} role={role} />
  if (section === 'audit-logs') return <AuditLogsPage data={data} />
  if (section === 'settings') return <SettingsPage />
  if (section === 'live-monitoring') return <LiveMonitoringPage data={data} />
  if (section === 'network-sites') return <NetworkSitesPage data={data} />
  if (section === 'ai-analysis') return <AiAnalysisForm detections={data.networkDetections} />
  if (section === 'faults') return <FaultsPage data={data} role={role} />
  if (section === 'assessments') return <AssessmentsPage data={data} role={role} />
  if (section === 'alerts') return <AlertsPage data={data} role={role} />
  if (section === 'tickets') return <TicketsPage data={data} />
  if (section === 'tasks') return <TasksPage data={data} role={role} />
  notFound()
}

function isSectionInRoleMenu(role: RoleKey, section: string) {
  return ROLES[role] && roleMenuSections(role).has(section)
}

function roleMenuSections(role: RoleKey) {
  return new Set(
    ROLE_NAV[role]
      .map((item) => item.href.split('/').at(-1))
      .filter((value): value is string => Boolean(value) && value !== role)
  )
}

function UsersPage({ data }: { data: DashboardData }) {
  return (
    <>
      <StatGrid>
        <StatCard label="Total users" value={data.metrics.totalUsers.toString()} icon={Users} />
        <StatCard label="Active users" value={data.users.filter((u) => u.status === 'Active').length.toString()} icon={CheckCircle2} />
        <StatCard label="Suspended" value={data.users.filter((u) => u.status === 'Suspended').length.toString()} icon={ShieldCheck} />
        <StatCard label="Roles" value="4" icon={Settings} hint="Admin, engineer, operations, support" />
      </StatGrid>
      <AdminUserManagement users={data.users} />
    </>
  )
}

function ReportsPage({ data, role }: { data: DashboardData; role: RoleKey }) {
  return (
    <>
      <StatGrid>
        <StatCard label="Faults" value={data.faults.length.toString()} icon={AlertTriangle} />
        <StatCard label="Assessments" value={data.predictions.length.toString()} icon={Brain} />
        <StatCard label="Active alerts" value={data.metrics.activeAlerts.toString()} icon={FileText} />
        <StatCard label="Open tasks" value={data.metrics.openTasks.toString()} icon={Wrench} />
        <StatCard label="Workspace" value={ROLES[role].shortName} icon={ROLES[role].icon} />
      </StatGrid>
      <ReportGenerator role={role} />
    </>
  )
}

function AuditLogsPage({ data }: { data: DashboardData }) {
  return (
    <SimpleTable
      title="Audit Trail"
      headers={['User', 'Action', 'Time', 'IP address']}
      rows={data.auditLogs.map((row) => [row.user, row.action, row.time, row.ip])}
    />
  )
}

function SettingsPage() {
  return <AiRequestLimitSettings initialLimit={getAiDailyRequestLimit()} />
}

function LiveMonitoringPage({ data }: { data: DashboardData }) {
  return (
    <>
      <StatGrid>
        <StatCard label="Network health" value={`${data.metrics.networkHealth}%`} icon={Activity} />
        <StatCard label="Average signal" value={`${data.metrics.averageSignalStrength.toFixed(1)} dBm`} icon={Radio} />
        <StatCard label="Active faults" value={data.metrics.activeFaults.toString()} icon={AlertTriangle} />
        <StatCard label="Generated feed" value="3 sec" icon={CheckCircle2} />
      </StatGrid>
      <div className="grid gap-6 lg:grid-cols-2">
        <SignalChart data={data.signalSeries} />
        <AttenuationChart data={data.signalSeries} />
      </div>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
        <LiveSignalMonitor sites={data.networkSites} />
        <NetworkSiteSignalSimulation
          sites={data.networkSites}
          totalDistance={data.networkSites.reduce(
            (total, site) =>
              total + (site.distanceUnit === 'km' ? site.distance * 1000 : site.distance),
            0
          )}
        />
      </div>
      <FaultTrendChart data={data.faultTrend} />
    </>
  )
}

function NetworkSitesPage({ data }: { data: DashboardData }) {
  const totalDistance = data.networkSites.reduce(
    (total, site) => total + site.distance,
    0
  )

  return (
    <>
      <StatGrid>
        <StatCard label="Sites" value={data.networkSites.length.toString()} icon={MapPinned} />
        <StatCard label="Total distance" value={`${totalDistance.toFixed(1)} m`} icon={Activity} />
        <StatCard label="Segments" value={new Set(data.networkSites.map((site) => site.networkSegment).filter(Boolean)).size.toString()} icon={Radio} />
        <StatCard label="Simulation" value="Active" icon={CheckCircle2} />
      </StatGrid>
      <NetworkSiteManager sites={data.networkSites} />
    </>
  )
}

function FaultsPage({ data, role }: { data: DashboardData; role: RoleKey }) {
  return (
    <>
      <StatGrid>
        <StatCard label="Active faults" value={data.metrics.activeFaults.toString()} icon={AlertTriangle} />
        <StatCard label="Critical" value={data.faults.filter((row) => row.severity === 'Critical').length.toString()} icon={ShieldCheck} />
        <StatCard label="Resolved 7d" value={data.metrics.resolvedSevenDays.toString()} icon={CheckCircle2} />
        <StatCard label="Owner" value={ROLES[role].shortName} icon={ROLES[role].icon} />
      </StatGrid>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <FaultsTable rows={data.faults} title="Fault Queue" />
        <FaultTypeChart data={data.faultTypeBreakdown} />
      </div>
      <FaultLocationEditor faults={data.faults} />
    </>
  )
}

function AssessmentsPage({ data, role }: { data: DashboardData; role: RoleKey }) {
  const highRisk = data.predictions.filter((row) =>
    ['High', 'Critical'].includes(row.riskLevel)
  ).length
  return (
    <>
      <StatGrid>
        <StatCard label="Assessments" value={data.predictions.length.toString()} icon={Brain} />
        <StatCard label="High risk" value={highRisk.toString()} icon={AlertTriangle} />
        <StatCard label="Saved signals" value={data.signalSeries.length.toString()} icon={Radio} />
        <StatCard label="Active faults" value={data.metrics.activeFaults.toString()} icon={AlertTriangle} />
      </StatGrid>
      <RiskAssessmentWorkspace
        assessments={data.predictions}
        faults={data.faults}
        role={role}
      />
    </>
  )
}

function AlertsPage({ data, role }: { data: DashboardData; role: RoleKey }) {
  return (
    <>
      <StatGrid>
        <StatCard label="Active alerts" value={data.metrics.activeAlerts.toString()} icon={AlertTriangle} />
        <StatCard label="Emergency" value={data.alerts.filter((row) => row.level === 'Emergency').length.toString()} icon={ShieldCheck} />
        <StatCard label="Tickets" value={data.tickets.length.toString()} icon={FileText} />
        <StatCard label="Workspace" value={ROLES[role].shortName} icon={ROLES[role].icon} />
      </StatGrid>
      <AlertsTable rows={data.alerts} title="Alert Feed" />
      <TicketsCard data={data} />
    </>
  )
}

function TicketsPage({ data }: { data: DashboardData }) {
  const emergencyTickets = data.tickets.filter(
    (row) => row.priority === 'Emergency'
  ).length

  return (
    <>
      <StatGrid>
        <StatCard label="Open tickets" value={data.metrics.openTickets.toString()} icon={TicketCheck} />
        <StatCard label="Emergency" value={emergencyTickets.toString()} icon={AlertTriangle} />
        <StatCard label="Avg response" value={`${data.metrics.averageResponseMinutes} min`} icon={Activity} />
        <StatCard label="Resolved today" value={data.metrics.resolvedToday.toString()} icon={CheckCircle2} />
      </StatGrid>
      <SupportTicketStatusEditor tickets={data.tickets} />
    </>
  )
}

function TasksPage({ data, role }: { data: DashboardData; role: RoleKey }) {
  const isOperations = role === 'operations'
  const emergencyTickets = data.tickets.filter(
    (row) => row.priority === 'Emergency'
  ).length
  const resolvedTasks = data.tasks.filter((row) => row.status === 'Resolved').length

  return (
    <>
      <StatGrid>
        <StatCard label="Open tasks" value={data.metrics.openTasks.toString()} icon={Wrench} />
        <StatCard label="In progress" value={data.metrics.inProgressTasks.toString()} icon={Activity} />
        {isOperations ? (
          <>
            <StatCard label="Open escalations" value={data.metrics.openTickets.toString()} icon={TicketCheck} />
            <StatCard label="Emergency" value={emergencyTickets.toString()} icon={AlertTriangle} />
          </>
        ) : (
          <>
            <StatCard label="Resolved tasks" value={resolvedTasks.toString()} icon={CheckCircle2} />
            <StatCard label="Critical" value={data.tasks.filter((row) => row.priority === 'Critical').length.toString()} icon={AlertTriangle} />
          </>
        )}
        <StatCard label="Workspace" value={ROLES[role].shortName} icon={ROLES[role].icon} />
      </StatGrid>
      {isOperations && (
        <TaskAssignmentForm faults={data.faults} users={data.users} />
      )}
      <TaskStatusEditor tasks={data.tasks} />
      {isOperations && <SupportTicketStatusEditor tickets={data.tickets} />}
    </>
  )
}

function TicketsCard({ data }: { data: DashboardData }) {
  return (
    <SimpleTable
      title="Support Tickets"
      headers={['Subject', 'Channel', 'Priority', 'Status', 'Detected fault', 'Location', 'Created']}
      rows={data.tickets.map((row) => [
        row.subject,
        row.channel,
        <AlertLevelBadge key={`${row.id}-priority`} value={row.priority} />,
        <StatusBadge key={`${row.id}-status`} value={row.status} />,
        row.faultSegment ?? 'No detected fault linked',
        row.faultLocation ?? 'Unassigned',
        row.createdAt,
      ])}
    />
  )
}

function SimpleTable({
  title,
  headers,
  rows,
}: {
  title: string
  headers: string[]
  rows: React.ReactNode[][]
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                {headers.map((header) => (
                  <TableHead key={header}>{header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.length ? (
                rows.map((row, index) => (
                  <TableRow key={index}>
                    {row.map((cell, cellIndex) => (
                      <TableCell key={cellIndex}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={headers.length}
                    className="h-24 text-center text-sm text-muted-foreground"
                  >
                    No records found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
