import { DashboardSectionContent } from './dashboard-section-content'
import { getServerSessionRole } from '@/lib/server-session'

export async function UnifiedSectionPage({ section }: { section: string }) {
  const role = await getServerSessionRole()
  return <DashboardSectionContent role={role ?? 'support'} section={section} />
}
