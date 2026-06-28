'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'
import { ROLE_NAV, ROLES, type RoleKey } from '@/lib/roles'

export function DashboardSidebar({ role }: { role: RoleKey }) {
  const nav = ROLE_NAV[role]
  const info = ROLES[role]
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-50 flex h-screen w-60 shrink-0 flex-col border-r border-border/60 bg-sidebar shadow-lg lg:shadow-none">
      <div className="flex h-16 items-center border-b border-border/60 px-5">
        <Link href="/" aria-label="FiberSense home">
          <Logo />
        </Link>
      </div>

      <div className="px-3 py-4">
        <div className="flex items-center gap-2 rounded-lg bg-sidebar-accent px-3 py-2">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/25">
            <info.icon className="size-4 text-primary" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-sidebar-foreground">
              {info.name}
            </p>
            <p className="text-xs text-muted-foreground">Workspace</p>
          </div>
        </div>
      </div>

      <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto px-3 pb-4">
        {nav.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                isActive
                  ? 'bg-sidebar-primary/15 text-sidebar-foreground ring-1 ring-sidebar-primary/25'
                  : 'text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground',
              )}
            >
              <item.icon
                className={cn('size-4', isActive && 'text-primary')}
              />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-border/60 p-3">
        <div className="rounded-lg bg-sidebar-accent p-3">
          <p className="text-xs font-medium text-sidebar-foreground">
            System status
          </p>
          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-chart-5" />
            All services operational
          </div>
        </div>
      </div>
    </aside>
  )
}
