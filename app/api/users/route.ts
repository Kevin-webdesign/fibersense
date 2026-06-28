import { ok } from '@/app/api/_lib/responses'
import { createUser, listUserRows } from '@/lib/fibersense-service'

export async function GET() {
  return ok(await listUserRows())
}

export async function POST(request: Request) {
  return ok(await createUser(await request.json()))
}
