"use server"

import { prisma } from "@/lib/prisma"

export interface LiveReportData {
  range: {
    from: string
    to: string
  }
  generatedAt: string
  summary: {
    faults: number
    criticalFaults: number
    alerts: number
    assessments: number
    highRiskAssessments: number
    tasks: number
    completedTasks: number
    tickets: number
    datasets: number
    networkSamples: number
  }
  scope: string
  reportType: string
  faults: Array<{
    id: string
    type: string
    severity: string
    status: string
    segment: string
    location: string
    detectedAt: string
  }>
  predictions: Array<{
    segment: string
    fault: string
    location: string
    risk: string
    probability: number
    predictedAt: string
  }>
  tasks: Array<{
    title: string
    priority: string
    status: string
    createdAt: string
  }>
  datasets: Array<{
    fileName: string
    records: number
    uploadedAt: string
  }>
}

function label(value: string) {
  return value
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function dateRange(from: string, to: string) {
  const start = new Date(`${from}T00:00:00.000Z`)
  const end = new Date(`${to}T23:59:59.999Z`)
  return { start, end }
}

export async function generateLiveReportAction(input: {
  from: string
  to: string
  role: string
  reportType: string
  scope: string
}): Promise<LiveReportData> {
  const { start, end } = dateRange(input.from, input.to)

  const [
    faults,
    alerts,
    predictions,
    tasks,
    tickets,
    datasets,
    networkSamples,
  ] = await Promise.all([
    prisma.fault.findMany({
      where: { detectedAt: { gte: start, lte: end } },
      orderBy: { detectedAt: "desc" },
    }),
    prisma.alert.count({ where: { createdAt: { gte: start, lte: end } } }),
    prisma.prediction.findMany({
      where: { predictedAt: { gte: start, lte: end } },
      include: { fault: true },
      orderBy: { predictedAt: "desc" },
    }),
    prisma.maintenanceTask.findMany({
      where: { createdAt: { gte: start, lte: end } },
      orderBy: { createdAt: "desc" },
    }),
    prisma.supportTicket.count({
      where: { createdAt: { gte: start, lte: end } },
    }),
    prisma.dataset.findMany({
      where: { uploadDate: { gte: start, lte: end } },
      orderBy: { uploadDate: "desc" },
    }),
    prisma.networkData.count({
      where: { timestamp: { gte: start, lte: end } },
    }),
  ])

  return {
    range: input,
    generatedAt: new Date().toISOString(),
    scope: input.scope,
    reportType: input.reportType,
    summary: {
      faults: faults.length,
      criticalFaults: faults.filter((fault) => fault.severity === "CRITICAL").length,
      alerts,
      assessments: predictions.length,
      highRiskAssessments: predictions.filter((prediction) =>
        ["HIGH", "CRITICAL"].includes(prediction.riskLevel)
      ).length,
      tasks: tasks.length,
      completedTasks: tasks.filter((task) => task.status === "COMPLETED").length,
      tickets,
      datasets: datasets.length,
      networkSamples,
    },
    faults: faults.map((fault) => ({
      id: fault.id,
      type: label(fault.faultType),
      severity: label(fault.severity),
      status: label(fault.status),
      segment: fault.networkSegment,
      location: fault.location ?? fault.networkSegment,
      detectedAt: fault.detectedAt.toISOString(),
    })),
    predictions: predictions.map((prediction) => ({
      segment: prediction.networkSegment,
      fault: prediction.fault ? label(prediction.fault.faultType) : "Signal assessment",
      location: prediction.fault?.location ?? prediction.networkSegment,
      risk: label(prediction.riskLevel),
      probability: Math.round(prediction.probability),
      predictedAt: prediction.predictedAt.toISOString(),
    })),
    tasks: tasks.map((task) => ({
      title: task.title,
      priority: label(task.priority),
      status: label(task.status),
      createdAt: task.createdAt.toISOString(),
    })),
    datasets: datasets.map((dataset) => ({
      fileName: dataset.fileName,
      records: dataset.recordCount,
      uploadedAt: dataset.uploadDate.toISOString(),
    })),
  }
}
