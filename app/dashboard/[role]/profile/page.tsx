import { notFound } from 'next/navigation'
import { ProfileDetails } from '@/components/dashboard/profile-details'
import { ROLES, type RoleKey } from '@/lib/roles'

export const dynamic = 'force-dynamic'

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ role: string }>
}) {
  const { role } = await params

  if (!(role in ROLES)) {
    notFound()
  }

  return <ProfileDetails role={role as RoleKey} />
}
