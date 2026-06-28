import {
  Headset,
  LifeBuoy,
  MessageSquare,
  TicketCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PageHeader } from '@/components/dashboard/page-header'
import { StatCard, StatGrid } from '@/components/dashboard/stat-card'
import { AlertsTable } from '@/components/dashboard/data-tables'
import { AlertLevelBadge, StatusBadge } from '@/components/dashboard/status-badges'
import type { DashboardData } from '@/lib/api-types'

export function SupportDashboard({ data }: { data: DashboardData }) {
  const { alerts, tickets, metrics } = data

  return (
    <div className="space-y-6">
      <PageHeader
        title="Technical support desk"
        description="Monitor alerts, manage customer tickets and coordinate responses."
      >
        <Button size="sm">
          <MessageSquare className="size-4" />
          New ticket
        </Button>
      </PageHeader>

      <StatGrid>
        <StatCard
          label="Open tickets"
          value={metrics.openTickets.toString()}
          icon={LifeBuoy}
          change="+4"
          trend="down"
        />
        <StatCard
          label="Active alerts"
          value={metrics.activeAlerts.toString()}
          icon={Headset}
          hint="Live alert feed"
        />
        <StatCard
          label="Avg response"
          value={`${metrics.averageResponseMinutes}m`}
          icon={MessageSquare}
          change="-18%"
          trend="up"
        />
        <StatCard
          label="Resolved today"
          value={metrics.resolvedToday.toString()}
          icon={TicketCheck}
          change="+11"
          trend="up"
        />
      </StatGrid>

      <AlertsTable rows={alerts} title="Network alerts feed" />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium">Customer tickets</CardTitle>
          <Button variant="outline" size="sm">
            View all
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="flex flex-col gap-3 rounded-lg border border-border bg-secondary/40 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    {ticket.id}
                  </span>
                  <AlertLevelBadge value={ticket.priority} />
                </div>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {ticket.subject}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {ticket.channel} · {ticket.createdAt}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge value={ticket.status} />
                <Button variant="outline" size="sm">
                  Respond
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
