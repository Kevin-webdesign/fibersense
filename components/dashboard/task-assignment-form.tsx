"use client"

import { useState, useTransition, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { ClipboardList, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { createTaskAction } from "@/actions/tasks"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCurrentUserSession } from "@/lib/auth-session"
import type { FaultRow, UserRow } from "@/lib/api-types"
import type { TaskPriority } from "@/lib/generated/prisma"

const priorities: Array<{ value: TaskPriority; label: string }> = [
  { value: "LOW", label: "Low" },
  { value: "MEDIUM", label: "Medium" },
  { value: "HIGH", label: "High" },
  { value: "CRITICAL", label: "Critical" },
]

export function TaskAssignmentForm({
  faults,
  users,
}: {
  faults: FaultRow[]
  users: UserRow[]
}) {
  const router = useRouter()
  const user = useCurrentUserSession()
  const technicians = users.filter((item) => item.roleCode === "TECHNICAL_SUPPORT")
  const [title, setTitle] = useState("Repair detected fiber fault")
  const [faultId, setFaultId] = useState(faults[0]?.id ?? "")
  const [assignedToId, setAssignedToId] = useState(technicians[0]?.id ?? "")
  const [priority, setPriority] = useState<TaskPriority>("HIGH")
  const [isPending, startTransition] = useTransition()

  function submit(event: FormEvent) {
    event.preventDefault()

    if (!user) {
      toast.error("Please sign in before assigning a task.")
      return
    }

    if (!faultId || !assignedToId) {
      toast.error("Select a fault and technician.")
      return
    }

    startTransition(async () => {
      await createTaskAction({
        title,
        priority,
        status: "ASSIGNED",
        faultId,
        assignedToId,
        createdById: user.id,
        description: "Assigned by operations for field repair.",
      })
      router.refresh()
      toast.success("Task assigned to technician")
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm font-medium">
          <ClipboardList className="size-4 text-primary" />
          Assign Repair Task
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={submit} className="grid gap-4 lg:grid-cols-[1fr_220px_220px_160px_auto]">
          <div className="space-y-2">
            <Label htmlFor="task-title">Task</Label>
            <Input
              id="task-title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fault">Detected fault</Label>
            <select
              id="fault"
              value={faultId}
              onChange={(event) => setFaultId(event.target.value)}
              className="h-8 w-full rounded-lg border border-input bg-background px-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {!faults.length && <option value="">No detected faults</option>}
              {faults.map((fault) => (
                <option key={fault.id} value={fault.id}>
                  {fault.segment} - {fault.location} - {fault.severity}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="technician">Technician</Label>
            <select
              id="technician"
              value={assignedToId}
              onChange={(event) => setAssignedToId(event.target.value)}
              className="h-8 w-full rounded-lg border border-input bg-background px-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {!technicians.length && <option value="">No technicians</option>}
              {technicians.map((technician) => (
                <option key={technician.id} value={technician.id}>
                  {technician.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <select
              id="priority"
              value={priority}
              onChange={(event) => setPriority(event.target.value as TaskPriority)}
              className="h-8 w-full rounded-lg border border-input bg-background px-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {priorities.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <Button type="submit" disabled={isPending || !technicians.length || !faults.length}>
              {isPending ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <ClipboardList className="size-4" />
              )}
              Assign
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
