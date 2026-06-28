import { ok } from '@/app/api/_lib/responses'

export function GET() {
  return ok({
    service: 'FiberSense API',
    version: process.env.NEXT_PUBLIC_APP_VERSION ?? '0.1.0',
    uptime: 'operational',
  })
}
