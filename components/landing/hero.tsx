import Link from 'next/link'
import { ArrowRight, Activity, ShieldCheck, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroPreview } from '@/components/landing/hero-preview'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24 lg:px-8">
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="flex size-2 items-center justify-center">
              <span className="size-2 animate-ping rounded-full bg-primary/70" />
              <span className="absolute size-2 rounded-full bg-primary" />
            </span>
            Live AI monitoring for fiber optic networks
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Detect, classify and assess{' '}
            <span className="text-primary">fiber optic faults</span> before they
            cause downtime.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            FiberSense is an AI-powered platform built for Broadband Systems
            Corporation to monitor network performance, automatically detect
            anomalies, assess risk and streamline maintenance across every
            segment.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/register">
                Get started
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/login">View dashboards</Link>
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
            {[
              { icon: Activity, value: '99.9%', label: 'Detection accuracy' },
              { icon: Zap, value: '3s', label: 'Signal interval' },
              { icon: ShieldCheck, value: '24/7', label: 'Network coverage' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <div className="flex items-center gap-1.5 text-2xl font-semibold text-foreground">
                    <stat.icon className="size-4 text-primary" />
                    {stat.value}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <HeroPreview />
        </div>
      </div>
    </section>
  )
}
