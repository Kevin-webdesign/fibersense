import { ok } from '@/app/api/_lib/responses'
import { createDataset, listDatasets } from '@/lib/fibersense-service'

export async function GET() {
  return ok(await listDatasets())
}

export async function POST(request: Request) {
  return ok(await createDataset(await request.json()))
}
