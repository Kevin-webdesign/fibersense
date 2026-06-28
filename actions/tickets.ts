"use server"

import { revalidatePath } from "next/cache"
import {
  createSupportTicket,
  updateSupportTicketStatus,
} from "@/lib/fibersense-service"
import type {
  AlertLevel,
  TicketChannel,
  TicketStatus,
} from "@/lib/generated/prisma"

export async function createSupportTicketAction(input: {
  subject: string
  description?: string
  channel: TicketChannel
  priority: AlertLevel
  faultId?: string
  createdById?: string
}) {
  const ticket = await createSupportTicket(input)
  revalidatePath("/dashboard/support")
  revalidatePath("/dashboard/tickets")
  revalidatePath("/dashboard")
  return ticket
}

export async function updateSupportTicketStatusAction(input: {
  id: string
  status: TicketStatus
}) {
  const ticket = await updateSupportTicketStatus(input.id, input.status)
  revalidatePath("/dashboard/support")
  revalidatePath("/dashboard/tickets")
  revalidatePath("/dashboard/faults")
  revalidatePath("/dashboard")
  return ticket
}
