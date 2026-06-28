import { notFound } from 'next/navigation'
import { DashboardSectionContent } from './dashboard-section-content'
import { ROLES, type RoleKey } from '@/lib/roles'

export async function ConcreteSectionPage({
  params,
  section,
}: {
  params: Promise<{ role: string }>
  section: string
}) {
  const { role } = await params

  if (!(role in ROLES)) {
    notFound()
  }

  return <DashboardSectionContent role={role as RoleKey} section={section} />
}
