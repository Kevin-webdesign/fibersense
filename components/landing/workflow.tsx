const steps = [
  {
    step: '01',
    title: 'Generate live signals',
    description:
      'Create continuous simulated fiber signal readings every few seconds for monitored network segments.',
  },
  {
    step: '02',
    title: 'Detect & classify',
    description:
      'AI models analyze the data in real time, detect anomalies and classify fault types with confidence scores.',
  },
  {
    step: '03',
    title: 'Assess network risk',
    description:
      'Each signal is saved, assessed for risk and converted into maintenance recommendations.',
  },
  {
    step: '04',
    title: 'Alert & resolve',
    description:
      'Alerts route to the right teams, faults are assigned and tracked through to resolution.',
  },
]

export function Workflow() {
  return (
    <section id="workflow" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">How it works</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From signal to resolution in four steps
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <div key={item.step} className="relative">
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="font-mono text-sm text-primary">
                  {item.step}
                </span>
                <h3 className="mt-3 font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-border lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
