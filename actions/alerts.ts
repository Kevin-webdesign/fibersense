"use server"

import { revalidatePath } from "next/cache"
import {
  createAlert,
  updateAlertStatus,
} from "@/lib/fibersense-service"
import type { AlertLevel, AlertStatus } from "@/lib/generated/prisma"

export async function createAlertAction(input: {
  title: string
  description: string
  level: AlertLevel
  faultId?: string
}) {
  const alert = await createAlert(input)
  revalidatePath("/dashboard/support")
  revalidatePath("/dashboard/operations")
  return alert
}

export async function updateAlertStatusAction(input: {
  id: string
  status: AlertStatus
}) {
  const alert = await updateAlertStatus(input.id, input.status)
  revalidatePath("/dashboard/support")
  revalidatePath("/dashboard/operations")
  return alert
}
