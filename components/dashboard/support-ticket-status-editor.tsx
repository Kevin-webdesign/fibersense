"use client"

import { useState, useTransition } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { updateSupportTicketStatusAction } from "@/actions/tickets"
import { Button } from "@/components/ui/button"
import {
  AlertLevelBadge,
  StatusBadge,
} from "@/components/dashboard/status-badges"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { SupportTicketRow } from "@/lib/api-types"
import type { TicketStatus } from "@/lib/generated/prisma"

const statusOptions: Array<{ value: TicketStatus; label: string }> = [
  { value: "OPEN", label: "Open" },
  { value: "ACKNOWLEDGED", label: "Acknowledged" },
  { value: "RESOLVED", label: "Resolved" },
  { value: "CLOSED", label: "Closed" },
]

function statusCode(label: string): TicketStatus {
  return label.toUpperCase().replaceAll(" ", "_") as TicketStatus
}

export function SupportTicketStatusEditor({
  tickets,
}: {
  tickets: SupportTicketRow[]
}) {
  const [statuses, setStatuses] = useState(
    Object.fromEntries(tickets.map((ticket) => [ticket.id, statusCode(ticket.status)]))
  )
  const [pendingTicketId, setPendingTicketId] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function saveStatus(ticket: SupportTicketRow) {
    const status = statuses[ticket.id]
    if (!status || status === statusCode(ticket.status)) return

    setPendingTicketId(ticket.id)
    startTransition(async () => {
      try {
        await updateSupportTicketStatusAction({ id: ticket.id, status })
        toast.success(
          status === "RESOLVED"
            ? "Ticket resolved and linked fault marked resolved"
            : "Ticket updated"
        )
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Ticket could not be updated")
      } finally {
        setPendingTicketId(null)
      }
    })
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Detected fault</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Resolve</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((ticket) => {
            const changed = statuses[ticket.id] !== statusCode(ticket.status)
            const pending = isPending && pendingTicketId === ticket.id
            const locked = ["Resolved", "Closed"].includes(ticket.status)

            return (
              <TableRow key={ticket.id}>
                <TableCell className="font-medium">
                  <div>
                    <p>{ticket.subject}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {ticket.channel} | {ticket.createdAt}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <AlertLevelBadge value={ticket.priority} />
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {ticket.faultSegment ?? "No detected fault linked"}
                </TableCell>
                <TableCell className="max-w-[220px] text-xs text-muted-foreground">
                  {ticket.faultLocation ?? "Unassigned"}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <StatusBadge value={ticket.status} />
                    <select
                      value={statuses[ticket.id]}
                      disabled={locked}
                      onChange={(event) =>
                        setStatuses((current) => ({
                          ...current,
                          [ticket.id]: event.target.value as TicketStatus,
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
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    size="sm"
                    variant={changed ? "default" : "outline"}
                    disabled={!changed || pending || locked}
                    onClick={() => saveStatus(ticket)}
                  >
                    {pending ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <CheckCircle2 className="size-4" />
                    )}
                    Save
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
