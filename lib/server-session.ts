import { cookies } from 'next/headers'
import type { RoleKey } from '@/lib/roles'

export const ROLE_COOKIE = 'fibersense.role'
export const USER_ID_COOKIE = 'fibersense.userId'

export async function getServerSessionRole() {
  const cookieStore = await cookies()
  const role = cookieStore.get(ROLE_COOKIE)?.value

  if (
    role === 'admin' ||
    role === 'engineer' ||
    role === 'operations' ||
    role === 'support'
  ) {
    return role satisfies RoleKey
  }

  return null
}

export async function getServerSessionUserId() {
  const cookieStore = await cookies()
  return cookieStore.get(USER_ID_COOKIE)?.value ?? null
}
