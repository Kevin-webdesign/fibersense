import { Activity, AlertTriangle, Brain, Gauge } from 'lucide-react'
import { PageHeader } from '@/components/dashboard/page-header'
import { LiveSignalMonitor } from '@/components/dashboard/live-signal-monitor'
import { StatCard, StatGrid } from '@/components/dashboard/stat-card'
import {
  AttenuationChart,
  FaultTypeChart,
  SignalChart,
} from '@/components/dashboard/dashboard-charts'
import {
  FaultsTable,
  PredictionsTable,
} from '@/components/dashboard/data-tables'
import type { DashboardData } from '@/lib/api-types'

export function EngineerDashboard({ data }: { data: DashboardData }) {
  const { faults, predictions, metrics } = data

  return (
    <div className="space-y-6">
      <PageHeader
        title="Network engineering"
        description="Monitor generated network performance, detected faults, previous assessments and network issue response."
      />

      <StatGrid>
        <StatCard
          label="Network health"
          value={`${metrics.networkHealth}%`}
          icon={Gauge}
        />
        <StatCard
          label="Avg signal strength"
          value={`${metrics.averageSignalStrength.toFixed(1)} dBm`}
          icon={Activity}
        />
        <StatCard
          label="Active faults"
          value={metrics.activeFaults.toString()}
          icon={AlertTriangle}
        />
        <StatCard
          label="Assessments"
          value={predictions.length.toString()}
          icon={Brain}
          hint="Previous risk assessment"
        />
      </StatGrid>

      <LiveSignalMonitor sites={data.networkSites} />

      <div className="grid gap-6 lg:grid-cols-2">
        <SignalChart data={data.signalSeries} />
        <AttenuationChart data={data.signalSeries} />
      </div>

      <PredictionsTable rows={predictions} />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <FaultsTable rows={faults} title="Detected faults" />
        </div>
        <FaultTypeChart data={data.faultTypeBreakdown} />
      </div>
    </div>
  )
}
