let aiDailyRequestLimit = Number(process.env.AI_DAILY_REQUEST_LIMIT ?? 50)
const requestCounts = new Map<string, number>()

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

export function getAiDailyRequestLimit() {
  return aiDailyRequestLimit
}

export function setAiDailyRequestLimit(limit: number) {
  aiDailyRequestLimit = Math.max(1, Math.min(10000, Math.round(limit)))
}

export function checkAiRequestLimit(identity: string) {
  const key = `${todayKey()}:${identity}`
  const used = requestCounts.get(key) ?? 0

  if (used >= aiDailyRequestLimit) {
    return {
      allowed: false,
      used,
      limit: aiDailyRequestLimit,
    }
  }

  requestCounts.set(key, used + 1)

  return {
    allowed: true,
    used: used + 1,
    limit: aiDailyRequestLimit,
  }
}
