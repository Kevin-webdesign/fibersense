import { ok } from '@/app/api/_lib/responses'
import { createDevice, listDeviceRows } from '@/lib/fibersense-service'

export async function GET() {
  return ok(await listDeviceRows())
}

export async function POST(request: Request) {
  return ok(await createDevice(await request.json()))
}
