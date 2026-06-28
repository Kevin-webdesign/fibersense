"use server"

import { revalidatePath } from "next/cache"
import {
  createDataset,
  createNetworkData,
  createPrediction,
} from "@/lib/fibersense-service"
import { analyzeFiberMetrics } from "@/lib/groq"

export async function createDatasetAction(input: {
  fileName: string
  fileSize: number
  recordCount: number
  uploadedById: string
}) {
  const dataset = await createDataset(input)
  revalidatePath("/dashboard/admin")
  revalidatePath("/dashboard/admin/datasets")
  revalidatePath("/dashboard/engineer")
  revalidatePath("/dashboard/engineer/datasets")
  revalidatePath("/dashboard")
  revalidatePath("/dashboard/datasets")
  return dataset
}

export async function createAnalyzedDatasetAction(input: {
  uploadedById: string
  fileName: string
  networkSegment: string
  signalStrength: number
  signalLoss: number
  errorRate: number
  attenuation: number
  reflectionLevel: number
  distance: number
}) {
  const dataset = await createDataset({
    fileName: input.fileName,
    fileSize: 0,
    recordCount: 1,
    uploadedById: input.uploadedById,
  })

  await createNetworkData({
    datasetId: dataset.id,
    networkSegment: input.networkSegment,
    signalStrength: input.signalStrength,
    signalLoss: input.signalLoss,
    errorRate: input.errorRate,
    attenuation: input.attenuation,
    reflectionLevel: input.reflectionLevel,
    distance: input.distance,
  })

  const analysis = await analyzeFiberMetrics({
    networkSegment: input.networkSegment,
    signalStrength: input.signalStrength,
    signalLoss: input.signalLoss,
    attenuation: input.attenuation,
    errorRate: input.errorRate,
    reflectionLevel: input.reflectionLevel,
    distance: input.distance,
  })

  const prediction = await createPrediction({
    networkSegment: input.networkSegment,
    riskLevel: analysis.riskLevel,
    probability: analysis.probability,
    recommendation: analysis.recommendation,
  })

  revalidatePath("/dashboard")
  revalidatePath("/dashboard/datasets")
  revalidatePath("/dashboard/predictions")

  return { dataset, prediction, analysis }
}
