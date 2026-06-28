'use client'

import { Area, AreaChart } from 'recharts'
import { AlertTriangle, ArrowUpRight, Cpu } from 'lucide-react'
import { ChartContainer } from '@/components/ui/chart'

const previewSignalSeries = [
  { time: '00:00', strength: -18.2 },
  { time: '04:00', strength: -19.1 },
  { time: '08:00', strength: -20.4 },
  { time: '12:00', strength: -21.3 },
  { time: '16:00', strength: -19.2 },
  { time: '20:00', strength: -18.4 },
]

export function HeroPreview() {
  return (
    <div className="relative rounded-xl border border-border bg-card/80 p-4 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center gap-2">
          <Cpu className="size-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            Network Monitoring
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          Live
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 py-4">
        {[
          { label: 'Health score', value: '94', suffix: '%' },
          { label: 'Active faults', value: '6' },
          { label: 'Open alerts', value: '3' },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-lg border border-border/60 bg-background/60 p-3">
            <p className="text-xs text-muted-foreground">{kpi.label}</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">
              {kpi.value}
              {kpi.suffix && (
                <span className="text-base text-muted-foreground">{kpi.suffix}</span>
              )}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-border/60 bg-background/60 p-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">Signal strength (dBm)</p>
          <span className="flex items-center gap-1 text-xs text-primary">
            <ArrowUpRight className="size-3" /> stable
          </span>
        </div>
        <div className="h-28 min-w-0">
          <ChartContainer
            config={{ strength: { label: 'Signal', color: 'var(--primary)' } }}
            className="h-full w-full"
            initialDimension={{ width: 280, height: 112 }}
          >
            <AreaChart data={previewSignalSeries} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="strength"
                stroke="var(--primary)"
                strokeWidth={2}
                fill="url(#heroFill)"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>

      <div className="mt-3 flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3">
        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-destructive" />
        <div>
          <p className="text-sm font-medium text-foreground">
            Fiber cut assessed - Huye Ring S-04
          </p>
          <p className="text-xs text-muted-foreground">
            Risk 91% - recommended inspection within 72h
          </p>
        </div>
      </div>
    </div>
  )
}

