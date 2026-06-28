export const dynamic = 'force-dynamic'

import { notFound, redirect } from 'next/navigation'
import { ROLES } from '@/lib/roles'

export default async function LegacyRoleSectionPage({
  params,
}: {
  params: Promise<{ role: string; section: string }>
}) {
  const { role, section } = await params
  if (!(role in ROLES)) notFound()
  redirect(`/dashboard/${section}`)
}
