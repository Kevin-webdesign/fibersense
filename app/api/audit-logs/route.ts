import { ok } from '@/app/api/_lib/responses'
import { listAuditLogs } from '@/lib/fibersense-service'

export async function GET() {
  return ok(await listAuditLogs())
}
