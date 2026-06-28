import { ok } from '@/app/api/_lib/responses'
import { error } from '@/app/api/_lib/responses'
import { checkAiRequestLimit } from '@/lib/ai-request-limits'
import { analyzeFiberMetrics } from '@/lib/groq'

export async function POST(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const identity = forwardedFor?.split(',')[0]?.trim() || 'local'
  const limit = checkAiRequestLimit(identity)

  if (!limit.allowed) {
    return error(`AI request limit reached (${limit.used}/${limit.limit})`, 429)
  }

  const input = await request.json()
  return ok(await analyzeFiberMetrics(input))
}
