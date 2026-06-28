import type { LucideIcon } from 'lucide-react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export interface StatCardProps {
  label: string
  value: string
  icon: LucideIcon
  change?: string
  trend?: 'up' | 'down' | 'neutral'
  hint?: string
}

export function StatCard({
  label,
  value,
  icon: Icon,
  change,
  trend = 'neutral',
  hint,
}: StatCardProps) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
          <Icon className="size-4 text-primary" />
        </span>
        {change && (
          <span
            className={cn(
              'inline-flex items-center gap-1 text-xs font-medium',
              trend === 'up' && 'text-chart-5',
              trend === 'down' && 'text-destructive',
              trend === 'neutral' && 'text-muted-foreground',
            )}
          >
            {trend === 'up' && <ArrowUpRight className="size-3" />}
            {trend === 'down' && <ArrowDownRight className="size-3" />}
            {change}
          </span>
        )}
      </div>
      <p className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
        {value}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
      {hint && <p className="mt-2 text-xs text-muted-foreground">{hint}</p>}
    </Card>
  )
}

export function StatGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{children}</div>
  )
}
