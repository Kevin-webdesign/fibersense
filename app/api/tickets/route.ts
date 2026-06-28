import { ok } from '@/app/api/_lib/responses'
import {
  createSupportTicket,
  listSupportTickets,
} from '@/lib/fibersense-service'

export async function GET() {
  return ok(await listSupportTickets())
}

export async function POST(request: Request) {
  return ok(await createSupportTicket(await request.json()))
}
