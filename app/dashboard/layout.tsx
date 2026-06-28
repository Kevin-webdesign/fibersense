import { redirect } from 'next/navigation'
import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { getServerSessionRole } from '@/lib/server-session'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const role = await getServerSessionRole()

  if (!role) {
    redirect('/login')
  }

  return <DashboardShell role={role}>{children}</DashboardShell>
}
