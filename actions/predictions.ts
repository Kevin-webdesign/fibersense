"use server"

import { revalidatePath } from "next/cache"
import { createPrediction } from "@/lib/fibersense-service"
import { analyzeFiberMetrics, type FiberMetricInput } from "@/lib/groq"
import type { RiskLevel } from "@/lib/generated/prisma"

export async function createPredictionAction(input: {
  networkSegment: string
  riskLevel: RiskLevel
  probability: number
  recommendation?: string
}) {
  const prediction = await createPrediction(input)
  revalidatePath("/dashboard/engineer")
  return prediction
}

export async function generatePredictionFromMetricsAction(input: FiberMetricInput) {
  const analysis = await analyzeFiberMetrics(input)
  const prediction = await createPrediction({
    networkSegment: input.networkSegment,
    riskLevel: analysis.riskLevel,
    probability: analysis.probability,
    recommendation: analysis.recommendation,
  })

  revalidatePath("/dashboard/engineer")
  revalidatePath("/dashboard/engineer/predictions")
  return { prediction, analysis }
}
