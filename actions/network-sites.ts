"use server"

import { revalidatePath } from "next/cache"
import { createNetworkSite } from "@/lib/fibersense-service"

export async function createNetworkSiteAction(input: {
  name: string
  location: string
  connectedTo: string
  distance: number
  distanceUnit?: string
  networkSegment?: string
  notes?: string
}) {
  const site = await createNetworkSite(input)
  revalidatePath("/dashboard")
  revalidatePath("/dashboard/network-sites")
  return site
}
