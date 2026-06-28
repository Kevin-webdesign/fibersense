import { ok } from '@/app/api/_lib/responses'
import { createFault, listFaults } from '@/lib/fibersense-service'

export async function GET() {
  return ok(await listFaults())
}

export async function POST(request: Request) {
  return ok(await createFault(await request.json()))
}
