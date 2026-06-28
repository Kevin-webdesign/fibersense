import {
  Activity,
  Plus,
  Settings,
  Users as UsersIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
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
import { PageHeader } from '@/components/dashboard/page-header'
import { StatCard, StatGrid } from '@/components/dashboard/stat-card'
import { FaultTrendChart } from '@/components/dashboard/dashboard-charts'
import { StatusBadge } from '@/components/dashboard/status-badges'
import type { DashboardData } from '@/lib/api-types'

export function AdminDashboard({ data }: { data: DashboardData }) {
  const { users, auditLogs, metrics } = data

  return (
    <div className="space-y-6">
      <PageHeader
        title="Administrator overview"
        description="Manage users, reports, settings and operational audit activity."
      />

      <StatGrid>
        <StatCard
          label="Total users"
          value={metrics.totalUsers.toString()}
          icon={UsersIcon}
          change="+3"
          trend="up"
        />
        <StatCard
          label="Settings"
          value="AI limits"
          icon={Settings}
          trend="neutral"
        />
        <StatCard
          label="System uptime"
          value="99.9%"
          icon={Activity}
          change="30d"
          trend="neutral"
        />
      </StatGrid>

      <FaultTrendChart data={data.faultTrend} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium">User management</CardTitle>
          <Button variant="outline" size="sm">
            <Plus className="size-4" />
            New user
          </Button>
        </CardHeader>
        <CardContent className="px-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Last active</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((u) => (
                  <TableRow key={u.id}>
                    <TableCell className="font-medium text-foreground">
                      {u.name}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {u.email}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {u.role}
                    </TableCell>
                    <TableCell>
                      <StatusBadge value={u.status} />
                    </TableCell>
                    <TableCell className="text-right text-xs text-muted-foreground">
                      {u.lastActive}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Recent audit logs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {auditLogs.map((log) => (
              <div key={log.id} className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-foreground">{log.action}</p>
                  <p className="text-xs text-muted-foreground">
                    {log.user} · {log.time} · {log.ip}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
