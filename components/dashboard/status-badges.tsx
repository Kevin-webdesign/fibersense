import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const severityStyles: Record<string, string> = {
  Low: 'bg-chart-5/15 text-chart-5 border-chart-5/30',
  Medium: 'bg-chart-3/15 text-chart-3 border-chart-3/30',
  High: 'bg-chart-4/15 text-chart-4 border-chart-4/30',
  Critical: 'bg-destructive/15 text-destructive border-destructive/30',
}

const statusStyles: Record<string, string> = {
  New: 'bg-chart-2/15 text-chart-2 border-chart-2/30',
  Assigned: 'bg-primary/15 text-primary border-primary/30',
  'In Progress': 'bg-chart-3/15 text-chart-3 border-chart-3/30',
  Resolved: 'bg-chart-5/15 text-chart-5 border-chart-5/30',
  Rejected: 'bg-muted text-muted-foreground border-border',
  Closed: 'bg-muted text-muted-foreground border-border',
  Open: 'bg-destructive/15 text-destructive border-destructive/30',
  Acknowledged: 'bg-chart-3/15 text-chart-3 border-chart-3/30',
  Active: 'bg-chart-5/15 text-chart-5 border-chart-5/30',
  Inactive: 'bg-muted text-muted-foreground border-border',
  Suspended: 'bg-destructive/15 text-destructive border-destructive/30',
  Online: 'bg-chart-5/15 text-chart-5 border-chart-5/30',
  Offline: 'bg-muted text-muted-foreground border-border',
  Maintenance: 'bg-chart-3/15 text-chart-3 border-chart-3/30',
}

const alertLevelStyles: Record<string, string> = {
  Information: 'bg-chart-2/15 text-chart-2 border-chart-2/30',
  Warning: 'bg-chart-3/15 text-chart-3 border-chart-3/30',
  Critical: 'bg-chart-4/15 text-chart-4 border-chart-4/30',
  Emergency: 'bg-destructive/15 text-destructive border-destructive/30',
}

const riskStyles: Record<string, string> = {
  Low: 'bg-chart-5/15 text-chart-5 border-chart-5/30',
  Medium: 'bg-chart-3/15 text-chart-3 border-chart-3/30',
  High: 'bg-chart-4/15 text-chart-4 border-chart-4/30',
  Critical: 'bg-destructive/15 text-destructive border-destructive/30',
}

function Pill({ label, className }: { label: string; className?: string }) {
  return (
    <Badge variant="outline" className={cn('font-medium', className)}>
      {label}
    </Badge>
  )
}

export function SeverityBadge({ value }: { value: string }) {
  return <Pill label={value} className={severityStyles[value]} />
}

export function StatusBadge({ value }: { value: string }) {
  return <Pill label={value} className={statusStyles[value]} />
}

export function AlertLevelBadge({ value }: { value: string }) {
  return <Pill label={value} className={alertLevelStyles[value]} />
}

export function RiskBadge({ value }: { value: string }) {
  return <Pill label={value} className={riskStyles[value]} />
}
