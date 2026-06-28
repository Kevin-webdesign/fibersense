"use client"

import { useState } from "react"
import type { ComponentType, ReactNode } from "react"
import {
  AlertTriangle,
  ClipboardCheck,
  MapPin,
  Radio,
  Wrench,
  X,
} from "lucide-react"
import { AssessmentFromFaultForm } from "@/components/dashboard/assessment-from-fault-form"
import { PredictionsTable } from "@/components/dashboard/data-tables"
import { RiskBadge, SeverityBadge, StatusBadge } from "@/components/dashboard/status-badges"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { FaultRow, PredictionRow } from "@/lib/api-types"
import type { RoleKey } from "@/lib/roles"

export function RiskAssessmentWorkspace({
  assessments,
  faults,
  role,
}: {
  assessments: PredictionRow[]
  faults: FaultRow[]
  role: RoleKey
}) {
  const [selected, setSelected] = useState<PredictionRow | null>(null)
  const canGenerate = role === "engineer" || role === "operations"

  return (
    <div className="space-y-6">
      {canGenerate && <AssessmentFromFaultForm faults={faults} />}

      <PredictionsTable
        rows={assessments}
        title="Assessment records"
        onSelect={setSelected}
      />

      {selected && (
        <AssessmentDetailsModal
          assessment={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}

function AssessmentDetailsModal({
  assessment,
  onClose,
}: {
  assessment: PredictionRow
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 print:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="assessment-details-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <Card className="max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-background shadow-xl">
        <CardHeader className="flex flex-row items-start justify-between gap-4 border-b border-border">
          <div>
            <CardTitle id="assessment-details-title" className="text-base font-semibold">
              Assessment Details
            </CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">
              {assessment.assessedAt} | {assessment.horizon}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <RiskBadge value={assessment.riskLevel} />
            <button
              type="button"
              aria-label="Close assessment details"
              className="rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
              onClick={onClose}
            >
              <X className="size-4" />
            </button>
          </div>
        </CardHeader>
        <CardContent className="space-y-5 pt-5">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <DetailItem
              icon={Radio}
              label="Network segment"
              value={assessment.segment}
            />
            <DetailItem
              icon={AlertTriangle}
              label="Detected fault"
              value={assessment.faultType ?? "Generated signal assessment"}
            />
            <DetailItem
              icon={MapPin}
              label="Fault location"
              value={assessment.faultLocation ?? "Not linked to a fault"}
            />
            <DetailItem
              icon={Wrench}
              label="Fault status"
              value={
                assessment.faultStatus ? (
                  <StatusBadge value={assessment.faultStatus} />
                ) : (
                  "Not linked"
                )
              }
            />
          </div>

          <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
            <div className="rounded-lg border border-border p-4">
              <p className="text-xs text-muted-foreground">Risk probability</p>
              <div className="mt-3 flex items-center gap-3">
                <Progress value={assessment.probability} className="h-2 flex-1" />
                <span className="text-sm font-semibold">
                  {assessment.probability}%
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {assessment.faultSeverity && (
                  <SeverityBadge value={assessment.faultSeverity} />
                )}
                <RiskBadge value={assessment.riskLevel} />
              </div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="flex items-center gap-2 text-sm font-medium">
                <ClipboardCheck className="size-4 text-primary" />
                Recommendation
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {assessment.recommendation}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function DetailItem({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>
  label: string
  value: ReactNode
}) {
  return (
    <div className="rounded-lg border border-border p-4">
      <p className="flex items-center gap-2 text-xs text-muted-foreground">
        <Icon className="size-3.5 text-primary" />
        {label}
      </p>
      <div className="mt-2 text-sm font-medium text-foreground">{value}</div>
    </div>
  )
}
