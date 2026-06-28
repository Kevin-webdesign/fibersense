import { error, ok } from '@/app/api/_lib/responses'
import { getDashboardData } from '@/lib/dashboard-data'
import { ROLES, type RoleKey } from '@/lib/roles'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ role: string }> }
) {
  const { role } = await params

  if (!(role in ROLES)) {
    return error('Unknown dashboard role.', 404)
  }

  return ok(await getDashboardData(role as RoleKey))
}
