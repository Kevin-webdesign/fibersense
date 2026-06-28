"use server"

import { revalidatePath } from "next/cache"
import {
  createTask,
  updateTaskStatus,
} from "@/lib/fibersense-service"
import type { TaskPriority, TaskStatus } from "@/lib/generated/prisma"

export async function createTaskAction(input: {
  title: string
  description?: string
  priority: TaskPriority
  status?: TaskStatus
  dueAt?: Date
  faultId?: string
  assignedToId?: string
  createdById?: string
}) {
  const task = await createTask(input)
  revalidatePath("/dashboard/operations")
  revalidatePath("/dashboard")
  revalidatePath("/dashboard/tasks")
  return task
}

export async function updateTaskStatusAction(input: {
  id: string
  status: TaskStatus
}) {
  const task = await updateTaskStatus(input.id, input.status)
  revalidatePath("/dashboard/operations")
  revalidatePath("/dashboard")
  revalidatePath("/dashboard/tasks")
  revalidatePath("/dashboard/faults")
  revalidatePath("/dashboard/assessments")
  revalidatePath("/dashboard/tickets")
  return task
}
