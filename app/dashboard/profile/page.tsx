import { ProfileDetails } from '@/components/dashboard/profile-details'
import { getServerSessionRole } from '@/lib/server-session'

export const dynamic = 'force-dynamic'

export default async function ProfilePage() {
  const role = await getServerSessionRole()
  return <ProfileDetails role={role ?? 'support'} />
}
