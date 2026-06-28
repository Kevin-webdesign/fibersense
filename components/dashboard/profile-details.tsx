"use client"

import { Mail, ShieldCheck, UserRound } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { StatCard, StatGrid } from "@/components/dashboard/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  type CurrentUserSession,
  useCurrentUserSession,
} from "@/lib/auth-session"
import { ROLES, type RoleKey } from "@/lib/roles"

export function ProfileDetails({ role }: { role: RoleKey }) {
  const user = useCurrentUserSession()

  const visibleUser =
    user ??
    ({
      id: "not-signed-in",
      name: "Current User",
      email: "No active browser session",
      role,
    } satisfies CurrentUserSession)

  return (
    <div className="space-y-6">
      <PageHeader
        title="Profile"
        description="View the signed-in FiberSense account details."
      />
      <StatGrid>
        <StatCard label="Full name" value={visibleUser.name} icon={UserRound} />
        <StatCard label="Role" value={ROLES[visibleUser.role].shortName} icon={ShieldCheck} />
        <StatCard label="Email" value={visibleUser.email} icon={Mail} />
        <StatCard label="Workspace" value={ROLES[role].name} icon={ROLES[role].icon} />
      </StatGrid>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Account Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 text-sm sm:grid-cols-2">
          <ProfileRow label="User ID" value={visibleUser.id} />
          <ProfileRow label="Name" value={visibleUser.name} />
          <ProfileRow label="Email" value={visibleUser.email} />
          <ProfileRow label="Role" value={ROLES[visibleUser.role].name} />
        </CardContent>
      </Card>
    </div>
  )
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 break-words font-medium text-foreground">{value}</p>
    </div>
  )
}
