import { error, ok } from '@/app/api/_lib/responses'
import { checkAiRequestLimit } from '@/lib/ai-request-limits'
import {
  answerFiberSenseHelpQuestion,
  type FiberSenseHelpRole,
} from '@/lib/groq'

const allowedRoles = new Set<FiberSenseHelpRole>([
  'admin',
  'engineer',
  'operations',
])

export async function POST(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const identity = forwardedFor?.split(',')[0]?.trim() || 'local'
  const limit = checkAiRequestLimit(identity)

  if (!limit.allowed) {
    return error(`AI request limit reached (${limit.used}/${limit.limit})`, 429)
  }

  const input = (await request.json()) as {
    question?: string
    role?: FiberSenseHelpRole
  }

  if (!input.question?.trim()) {
    return error('Question is required.', 400)
  }

  if (!input.role || !allowedRoles.has(input.role)) {
    return error('Help chatbot is available for admin, engineer, and operations roles.', 403)
  }

  return ok({
    answer: await answerFiberSenseHelpQuestion({
      question: input.question,
      role: input.role,
    }),
  })
}
