import { ok } from '@/app/api/_lib/responses'
import { listNetworkData, processGeneratedSignal } from '@/lib/fibersense-service'

export async function GET() {
  return ok(await listNetworkData())
}

export async function POST(request: Request) {
  return ok(await processGeneratedSignal(await request.json()))
}
