import { AdminDashboard } from '@/components/dashboard/views/admin-dashboard'
import { EngineerDashboard } from '@/components/dashboard/views/engineer-dashboard'
import { OperationsDashboard } from '@/components/dashboard/views/operations-dashboard'
import { SupportDashboard } from '@/components/dashboard/views/support-dashboard'
import { getDashboardData } from '@/lib/fibersense-service'
import { getServerSessionRole } from '@/lib/server-session'
import type { RoleKey } from '@/lib/roles'

export const dynamic = 'force-dynamic'

const VIEWS: Record<RoleKey, React.ComponentType<{ data: Awaited<ReturnType<typeof getDashboardData>> }>> = {
  admin: AdminDashboard,
  engineer: EngineerDashboard,
  operations: OperationsDashboard,
  support: SupportDashboard,
}

export default async function DashboardRootPage() {
  const role = await getServerSessionRole()
  const View = VIEWS[role ?? 'support']
  const data = await getDashboardData(role ?? 'support')

  return <View data={data} />
}
