import Link from 'next/link'
import { Activity, ShieldCheck, TrendingUp } from 'lucide-react'
import { Logo } from '@/components/logo'

const highlights = [
  { icon: Activity, text: 'Real-time fault detection across every segment' },
  { icon: TrendingUp, text: 'Predictive maintenance with AI risk scoring' },
  { icon: ShieldCheck, text: 'Secure role-based access for every team' },
]

export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden flex-col justify-between overflow-hidden border-r border-border/60 bg-card p-10 lg:flex">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage:
              'radial-gradient(ellipse 70% 70% at 30% 30%, black 30%, transparent 100%)',
          }}
        />
        <Link href="/" className="relative">
          <Logo />
        </Link>

        <div className="relative">
          <h2 className="max-w-md text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground">
            AI-powered fiber optic fault detection &amp; predictive maintenance
          </h2>
          <ul className="mt-8 space-y-4">
            {highlights.map((item) => (
              <li key={item.text} className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                  <item.icon className="size-4 text-primary" />
                </span>
                <span className="text-sm text-muted-foreground">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-sm text-muted-foreground">
          Broadband Systems Corporation · Kigali, Rwanda
        </p>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
