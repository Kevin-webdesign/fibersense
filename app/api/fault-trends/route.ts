import { ok } from '@/app/api/_lib/responses'
import { listFaultTrend } from '@/lib/fibersense-service'

export async function GET() {
  return ok(await listFaultTrend())
}
