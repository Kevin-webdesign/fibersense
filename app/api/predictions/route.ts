import { ok } from '@/app/api/_lib/responses'
import { createPrediction, listPredictionRows } from '@/lib/fibersense-service'

export async function GET() {
  return ok(await listPredictionRows())
}

export async function POST(request: Request) {
  return ok(await createPrediction(await request.json()))
}
