"use client"

import { useState, useTransition, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { MapPin, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { updateFaultLocationAction } from "@/actions/faults"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { FaultRow } from "@/lib/api-types"

export function FaultLocationEditor({ faults }: { faults: FaultRow[] }) {
  const router = useRouter()
  const [faultId, setFaultId] = useState(faults[0]?.id ?? "")
  const selectedFault = faults.find((fault) => fault.id === faultId)
  const [location, setLocation] = useState(selectedFault?.location ?? "")
  const [isPending, startTransition] = useTransition()

  function changeFault(nextFaultId: string) {
    const nextFault = faults.find((fault) => fault.id === nextFaultId)
    setFaultId(nextFaultId)
    setLocation(nextFault?.location ?? "")
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    if (!faultId || !location.trim()) {
      toast.error("Select a fault and enter the physical location.")
      return
    }

    startTransition(async () => {
      await updateFaultLocationAction({ id: faultId, location: location.trim() })
      router.refresh()
      toast.success("Fault location saved")
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm font-medium">
          <MapPin className="size-4 text-primary" />
          Fault Location
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={submit} className="grid gap-4 lg:grid-cols-[260px_1fr_auto]">
          <div className="space-y-2">
            <Label htmlFor="location-fault">Detected fault</Label>
            <select
              id="location-fault"
              value={faultId}
              onChange={(event) => changeFault(event.target.value)}
              className="h-8 w-full rounded-lg border border-input bg-background px-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {!faults.length && <option value="">No detected faults</option>}
              {faults.map((fault) => (
                <option key={fault.id} value={fault.id}>
                  {fault.segment} - {fault.severity}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="fault-location">Physical location</Label>
            <Input
              id="fault-location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Example: Kigali central exchange, rack C-01"
            />
          </div>
          <div className="flex items-end">
            <Button type="submit" disabled={isPending || !faults.length}>
              {isPending ? <Loader2 className="size-4 animate-spin" /> : <MapPin className="size-4" />}
              Save
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
