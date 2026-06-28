"use client"

import { useState, useTransition, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { ClipboardCheck, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { createAssessmentForFaultAction } from "@/actions/assessments"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import type { FaultRow } from "@/lib/api-types"

export function AssessmentFromFaultForm({ faults }: { faults: FaultRow[] }) {
  const router = useRouter()
  const [faultId, setFaultId] = useState(faults[0]?.id ?? "")
  const [isPending, startTransition] = useTransition()

  function submit(event: FormEvent) {
    event.preventDefault()
    if (!faultId) {
      toast.error("Select a detected fault first.")
      return
    }

    startTransition(async () => {
      await createAssessmentForFaultAction(faultId)
      router.refresh()
      toast.success("Assessment generated from detected fault")
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm font-medium">
          <ClipboardCheck className="size-4 text-primary" />
          Generate Assessment From Fault
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={submit} className="grid gap-4 lg:grid-cols-[1fr_auto]">
          <div className="space-y-2">
            <Label htmlFor="assessment-fault">Detected fault</Label>
            <select
              id="assessment-fault"
              value={faultId}
              onChange={(event) => setFaultId(event.target.value)}
              className="h-8 w-full rounded-lg border border-input bg-background px-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {!faults.length && <option value="">No detected faults</option>}
              {faults.map((fault) => (
                <option key={fault.id} value={fault.id}>
                  {fault.segment} - {fault.type} - {fault.location}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <Button type="submit" disabled={isPending || !faults.length}>
              {isPending ? <Loader2 className="size-4 animate-spin" /> : <ClipboardCheck className="size-4" />}
              Generate
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
