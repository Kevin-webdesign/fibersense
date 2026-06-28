"use server"

import { revalidatePath } from "next/cache"
import { createAssessmentForFault } from "@/lib/fibersense-service"

export async function createAssessmentForFaultAction(faultId: string) {
  const assessment = await createAssessmentForFault(faultId)
  revalidatePath("/dashboard")
  revalidatePath("/dashboard/assessments")
  revalidatePath("/dashboard/faults")
  return assessment
}
