'use client'

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  FaultTrendPoint,
  FaultTypePoint,
  SignalSample,
} from '@/lib/api-types'

const axisProps = {
  stroke: 'var(--muted-foreground)',
  fontSize: 12,
  tickLine: false,
  axisLine: false,
}

export function SignalChart({ data }: { data: SignalSample[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">
          Signal strength (dBm)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            strength: { label: 'Signal', color: 'var(--chart-1)' },
          }}
          className="h-64 w-full"
        >
          <AreaChart data={data} margin={{ left: -16, right: 8 }}>
            <defs>
              <linearGradient id="sigFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.4} />
                <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="var(--border)" />
            <XAxis dataKey="time" {...axisProps} />
            <YAxis {...axisProps} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="strength"
              stroke="var(--chart-1)"
              strokeWidth={2}
              fill="url(#sigFill)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export function AttenuationChart({
  data,
}: {
  data: SignalSample[]
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">
          Attenuation &amp; error rate
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            attenuation: { label: 'Attenuation', color: 'var(--chart-3)' },
            errorRate: { label: 'Error rate', color: 'var(--chart-4)' },
          }}
          className="h-64 w-full"
        >
          <LineChart data={data} margin={{ left: -16, right: 8 }}>
            <CartesianGrid vertical={false} stroke="var(--border)" />
            <XAxis dataKey="time" {...axisProps} />
            <YAxis {...axisProps} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="attenuation"
              stroke="var(--chart-3)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="errorRate"
              stroke="var(--chart-4)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export function FaultTrendChart({
  data,
}: {
  data: FaultTrendPoint[]
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">
          Faults detected vs resolved
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            detected: { label: 'Detected', color: 'var(--chart-4)' },
            resolved: { label: 'Resolved', color: 'var(--chart-5)' },
          }}
          className="h-64 w-full"
        >
          <BarChart data={data} margin={{ left: -16, right: 8 }}>
            <CartesianGrid vertical={false} stroke="var(--border)" />
            <XAxis dataKey="day" {...axisProps} />
            <YAxis {...axisProps} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="detected" fill="var(--chart-4)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="resolved" fill="var(--chart-5)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

const pieColors = [
  'var(--chart-1)',
  'var(--chart-2)',
  'var(--chart-3)',
  'var(--chart-4)',
  'var(--chart-5)',
  'var(--primary)',
  'var(--muted-foreground)',
]

export function FaultTypeChart({
  data,
}: {
  data: FaultTypePoint[]
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">
          Fault types distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="h-64 w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={data}
              dataKey="count"
              nameKey="type"
              innerRadius={50}
              outerRadius={90}
              paddingAngle={2}
            >
              {data.map((entry, i) => (
                <Cell key={entry.type} fill={pieColors[i % pieColors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {data.map((entry, i) => (
            <div
              key={entry.type}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: pieColors[i % pieColors.length] }}
              />
              {entry.type}
              <span className="ml-auto text-foreground">{entry.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
