"use server"

import { revalidatePath } from "next/cache"
import {
  createDevice,
  updateDeviceStatus,
} from "@/lib/fibersense-service"
import type { DeviceStatus, DeviceType } from "@/lib/generated/prisma"

export async function createDeviceAction(input: {
  deviceName: string
  serialNumber: string
  deviceType: DeviceType
  status?: DeviceStatus
  location?: string
}) {
  const device = await createDevice(input)
  revalidatePath("/dashboard/engineer")
  return device
}

export async function updateDeviceStatusAction(input: {
  id: string
  status: DeviceStatus
}) {
  const device = await updateDeviceStatus(input.id, input.status)
  revalidatePath("/dashboard/engineer")
  return device
}
