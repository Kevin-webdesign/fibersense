import { ok } from '@/app/api/_lib/responses'
import { createAlert, listAlertRows } from '@/lib/fibersense-service'

export async function GET() {
  return ok(await listAlertRows())
}

export async function POST(request: Request) {
  return ok(await createAlert(await request.json()))
}
