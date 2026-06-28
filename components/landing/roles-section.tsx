import { Check } from 'lucide-react'
import { ROLE_LIST } from '@/lib/roles'

const roleCapabilities: Record<string, string[]> = {
  admin: [
    'Manage users & roles',
    'Generate system reports',
    'Configure system settings',
    'Monitor activity & audit logs',
  ],
  engineer: [
    'Monitor network performance',
    'Analyze detected faults',
    'View risk assessments',
  ],
  operations: [
    'Receive real-time alerts',
    'Assign repair tasks',
    'Record maintenance actions',
    'Track field tasks',
  ],
  support: [
    'View incidents',
    'Monitor assigned tasks',
    'Access reports',
    'Coordinate resolutions',
  ],
}

export function RolesSection() {
  return (
    <section id="roles" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Role-based access</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A dedicated dashboard for every team
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Secure, role-based access control means each user sees exactly what
            they need to do their job.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ROLE_LIST.map((role) => (
            <div
              key={role.key}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                <role.icon className="size-5 text-primary" />
              </span>
              <h3 className="mt-4 font-medium text-foreground">{role.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {role.description}
              </p>
              <ul className="mt-4 space-y-2 border-t border-border/60 pt-4">
                {roleCapabilities[role.key].map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
