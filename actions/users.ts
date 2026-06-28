"use server"

import { revalidatePath } from "next/cache"
import {
  createUser,
  updateUserRole,
  updateUserStatus,
} from "@/lib/fibersense-service"
import type { AccountStatus, Role } from "@/lib/generated/prisma"

export async function createUserAction(input: {
  fullName: string
  email: string
  password: string
  role: Role
  status?: AccountStatus
}) {
  const user = await createUser(input)
  revalidatePath("/dashboard/admin")
  revalidatePath("/dashboard/admin/users")
  return user
}

export async function updateUserStatusAction(input: {
  id: string
  status: AccountStatus
}) {
  const user = await updateUserStatus(input.id, input.status)
  revalidatePath("/dashboard/admin")
  revalidatePath("/dashboard/admin/users")
  return user
}

export async function updateUserRoleAction(input: {
  id: string
  role: Role
}) {
  const user = await updateUserRole(input.id, input.role)
  revalidatePath("/dashboard/admin")
  revalidatePath("/dashboard/admin/users")
  return user
}
