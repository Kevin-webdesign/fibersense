import {
  CheckCircle2,
  ClipboardList,
  Clock,
  Wrench,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PageHeader } from '@/components/dashboard/page-header'
import { StatCard, StatGrid } from '@/components/dashboard/stat-card'
import { FaultsTable } from '@/components/dashboard/data-tables'
import { SeverityBadge, StatusBadge } from '@/components/dashboard/status-badges'
import type { DashboardData } from '@/lib/api-types'

export function OperationsDashboard({ data }: { data: DashboardData }) {
  const { faults, tasks, metrics } = data

  return (
    <div className="space-y-6">
      <PageHeader
        title="Operations workspace"
        description="Track maintenance tasks, field assignments and fault resolution."
      >
        <Button size="sm">
          <ClipboardList className="size-4" />
          New task
        </Button>
      </PageHeader>

      <StatGrid>
        <StatCard
          label="Open tasks"
          value={metrics.openTasks.toString()}
          icon={ClipboardList}
          change="+2"
          trend="up"
        />
        <StatCard
          label="In progress"
          value={metrics.inProgressTasks.toString()}
          icon={Wrench}
          hint="2 critical"
        />
        <StatCard
          label="Avg resolution"
          value={`${metrics.averageResolutionHours}h`}
          icon={Clock}
          change="-12%"
          trend="up"
        />
        <StatCard
          label="Resolved (7d)"
          value={metrics.resolvedSevenDays.toString()}
          icon={CheckCircle2}
          change="+9"
          trend="up"
        />
      </StatGrid>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">My maintenance tasks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-col gap-3 rounded-lg border border-border bg-secondary/40 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    {task.id}
                  </span>
                  <SeverityBadge value={task.priority as never} />
                </div>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {task.title}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Due {task.due}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge value={task.status as never} />
                <Button variant="outline" size="sm">
                  Update
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <FaultsTable
        rows={faults}
        title="Faults to action"
        action={
          <Button variant="outline" size="sm">
            View all
          </Button>
        }
      />
    </div>
  )
}
