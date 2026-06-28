"use client"

import { useState, useTransition } from "react"
import { Loader2, ShieldCheck } from "lucide-react"
import { toast } from "sonner"
import { updateUserRoleAction } from "@/actions/users"
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
import type { Role } from "@/lib/generated/prisma"
import type { UserRow } from "@/lib/api-types"

const roleOptions: Array<{ value: Role; label: string }> = [
  { value: "ADMINISTRATOR", label: "Administrator" },
  { value: "NETWORK_ENGINEER", label: "Network Engineer" },
  { value: "OPERATIONS_STAFF", label: "Operations Staff" },
  { value: "TECHNICAL_SUPPORT", label: "Technical Support" },
]

export function AdminUserManagement({ users }: { users: UserRow[] }) {
  const [selectedRoles, setSelectedRoles] = useState(
    Object.fromEntries(users.map((user) => [user.id, user.roleCode]))
  )
  const [pendingUserId, setPendingUserId] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function saveRole(user: UserRow) {
    const role = selectedRoles[user.id]
    if (!role || role === user.roleCode) return

    setPendingUserId(user.id)
    startTransition(async () => {
      await updateUserRoleAction({ id: user.id, role: role as Role })
      toast.success("User role updated")
      setPendingUserId(null)
    })
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last active</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => {
            const pending = isPending && pendingUserId === user.id
            const roleChanged = selectedRoles[user.id] !== user.roleCode

            return (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell className="text-muted-foreground">{user.email}</TableCell>
                <TableCell>
                  <select
                    value={selectedRoles[user.id]}
                    onChange={(event) =>
                      setSelectedRoles((current) => ({
                        ...current,
                        [user.id]: event.target.value as Role,
                      }))
                    }
                    className="h-8 rounded-lg border border-input bg-background px-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {roleOptions.map((role) => (
                      <option key={role.value} value={role.value}>
                        {role.label}
                      </option>
                    ))}
                  </select>
                </TableCell>
                <TableCell>
                  <StatusBadge value={user.status} />
                </TableCell>
                <TableCell className="text-muted-foreground">{user.lastActive}</TableCell>
                <TableCell className="text-right">
                  <Button
                    size="sm"
                    variant={roleChanged ? "default" : "outline"}
                    disabled={!roleChanged || pending}
                    onClick={() => saveRole(user)}
                  >
                    {pending ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <ShieldCheck className="size-4" />
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
