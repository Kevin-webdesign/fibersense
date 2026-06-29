"use client"

import { useState, useTransition } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { updateTaskStatusAction } from "@/actions/tasks"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/dashboard/status-badges"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { TaskStatus } from "@/lib/generated/prisma"
import type { TaskRow } from "@/lib/api-types"

const statusOptions: Array<{ value: TaskStatus; label: string }> = [
  { value: "NEW", label: "New" },
  { value: "ASSIGNED", label: "Assigned" },
  { value: "IN_PROGRESS", label: "In Progress" },
  { value: "COMPLETED", label: "Resolved" },
  { value: "CANCELLED", label: "Rejected" },
]

function statusCode(label: string): TaskStatus {
  if (label === "Resolved") return "COMPLETED"
  if (label === "Rejected") return "CANCELLED"
  return label.toUpperCase().replaceAll(" ", "_") as TaskStatus
}

function statusLabel(label: string) {
  if (label === "Completed") return "Resolved"
  return label === "Cancelled" ? "Rejected" : label
}

export function TaskStatusEditor({ tasks }: { tasks: TaskRow[] }) {
  const [statuses, setStatuses] = useState(
    Object.fromEntries(tasks.map((task) => [task.id, statusCode(task.status)]))
  )
  const [pendingTaskId, setPendingTaskId] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function saveStatus(task: TaskRow) {
    const status = statuses[task.id]
    if (!status || status === statusCode(task.status)) return

    setPendingTaskId(task.id)
    startTransition(async () => {
      try {
        await updateTaskStatusAction({ id: task.id, status: status as TaskStatus })
        toast.success(status === "COMPLETED" ? "Task resolved with linked fault and escalation" : "Task updated")
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Task could not be updated")
      } finally {
        setPendingTaskId(null)
      }
    })
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Task</TableHead>
            <TableHead>Fault location</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Due</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => {
            const changed = statuses[task.id] !== statusCode(task.status)
            const pending = isPending && pendingTaskId === task.id
            const locked = ['Resolved', 'Completed', 'Cancelled', 'Rejected'].includes(task.status)

            return (
              <TableRow key={task.id}>
                <TableCell className="font-medium">
                  <div>
                    <p>{task.title}</p>
                    {locked && (
                      <p className="mt-1 text-xs text-muted-foreground">
                        Final status locked
                      </p>
                    )}
                  </div>
                </TableCell>
                <TableCell className="max-w-[220px] text-xs text-muted-foreground">
                  {task.faultLocation ?? task.faultSegment ?? 'Unassigned'}
                </TableCell>
                <TableCell>{task.priority}</TableCell>
                <TableCell className="text-muted-foreground">{task.due}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <StatusBadge value={statusLabel(task.status)} />
                    {!locked && (
                      <select
                        value={statuses[task.id]}
                        onChange={(event) =>
                          setStatuses((current) => ({
                            ...current,
                            [task.id]: event.target.value as TaskStatus,
                          }))
                        }
                        className="h-8 rounded-lg border border-input bg-background px-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                      >
                        {statusOptions.map((status) => (
                          <option key={status.value} value={status.value}>
                            {status.label}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {locked ? (
                    <span className="text-xs text-muted-foreground">
                      No edits
                    </span>
                  ) : (
                    <Button
                      size="sm"
                      variant={changed ? "default" : "outline"}
                      disabled={!changed || pending}
                      onClick={() => saveStatus(task)}
                    >
                      {pending ? (
                        <Loader2 className="size-4 animate-spin" />
                      ) : (
                        <CheckCircle2 className="size-4" />
                      )}
                      Save
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
