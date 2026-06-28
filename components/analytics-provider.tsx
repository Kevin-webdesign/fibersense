import { Analytics } from '@vercel/analytics/next'

export function AnalyticsProvider() {
  if (process.env.VERCEL !== '1') {
    return null
  }

  return <Analytics />
}
