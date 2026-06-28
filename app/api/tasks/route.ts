import { ok } from '@/app/api/_lib/responses'
import { createTask, listTasks } from '@/lib/fibersense-service'

export async function GET() {
  return ok(await listTasks())
}

export async function POST(request: Request) {
  const input = await request.json()
  return ok(await createTask({ ...input, dueAt: input.dueAt ? new Date(input.dueAt) : undefined }))
}
