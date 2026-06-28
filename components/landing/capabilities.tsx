import {
  AlertTriangle,
  Brain,
  FileBarChart,
  ScanSearch,
  TrendingUp,
  Waves,
} from 'lucide-react'

const capabilities = [
  {
    icon: ScanSearch,
    title: 'Real-time fault detection',
    description:
      'Continuously analyze signal strength, attenuation, error rate and reflection to flag anomalies the moment they appear.',
  },
  {
    icon: Brain,
    title: 'AI fault classification',
    description:
      'Classify faults into fiber cuts, signal loss, connector damage, bending loss and more with confidence scores.',
  },
  {
    icon: TrendingUp,
    title: 'Risk assessment',
    description:
      'Turn every generated signal into saved risk assessments and maintenance recommendations.',
  },
  {
    icon: AlertTriangle,
    title: 'Smart alerting',
    description:
      'Generate, acknowledge and track alerts across information, warning, critical and emergency levels.',
  },
  {
    icon: Waves,
    title: 'Generated signal feed',
    description:
      'Generate realistic signal strength, attenuation, loss and reflection readings without physical devices.',
  },
  {
    icon: AlertTriangle,
    title: 'Fault response',
    description:
      'Let operations assign detected faults to technical support and track repair progress.',
  },
  {
    icon: FileBarChart,
    title: 'Reports & analytics',
    description:
      'Produce daily, weekly and monthly reports with PDF and Excel export for stakeholders.',
  },
  {
    icon: Waves,
    title: 'Network health scoring',
    description:
      'Visualize overall health, active faults and trends across every segment from one dashboard.',
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Capabilities</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything you need to keep fiber networks healthy
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From generated measurements to actionable assessments, FiberSense covers
            the full fault lifecycle with AI at the core.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="group bg-card p-6 transition-colors hover:bg-accent/40"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                <item.icon className="size-5 text-primary" />
              </span>
              <h3 className="mt-4 font-medium text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
