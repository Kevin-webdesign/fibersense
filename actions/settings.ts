"use server"

import { revalidatePath } from "next/cache"
import {
  getAiDailyRequestLimit,
  setAiDailyRequestLimit,
} from "@/lib/ai-request-limits"

export async function getAiDailyRequestLimitAction() {
  return getAiDailyRequestLimit()
}

export async function updateAiDailyRequestLimitAction(limit: number) {
  setAiDailyRequestLimit(limit)
  revalidatePath("/dashboard/admin/settings")
  return getAiDailyRequestLimit()
}
