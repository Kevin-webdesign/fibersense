"use server"

import { revalidatePath } from "next/cache"
import {
  assignFault,
  createFault,
  updateFaultLocation,
  updateFaultStatus,
  type CreateFaultInput,
} from "@/lib/fibersense-service"
import type { FaultStatus } from "@/lib/generated/prisma"

function revalidateDashboards() {
  revalidatePath("/dashboard/admin")
  revalidatePath("/dashboard/engineer")
  revalidatePath("/dashboard/operations")
  revalidatePath("/dashboard/support")
}

export async function createFaultAction(input: CreateFaultInput) {
  const fault = await createFault(input)
  revalidateDashboards()
  return fault
}

export async function updateFaultStatusAction(input: {
  id: string
  status: FaultStatus
}) {
  const fault = await updateFaultStatus(input.id, input.status)
  revalidateDashboards()
  return fault
}

export async function assignFaultAction(input: {
  id: string
  assignedToId: string
}) {
  const fault = await assignFault(input.id, input.assignedToId)
  revalidateDashboards()
  return fault
}

export async function updateFaultLocationAction(input: {
  id: string
  location: string
}) {
  const fault = await updateFaultLocation(input.id, input.location)
  revalidatePath("/dashboard")
  revalidatePath("/dashboard/faults")
  revalidatePath("/dashboard/assessments")
  revalidateDashboards()
  return fault
}
