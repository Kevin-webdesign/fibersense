"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar"
import { HelpChatbot } from "@/components/dashboard/help-chatbot"
import { cn } from "@/lib/utils"
import type { RoleKey } from "@/lib/roles"

export function DashboardShell({
  role,
  children,
}: {
  role: RoleKey
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {sidebarOpen && <DashboardSidebar role={role} />}
      <div
        className={cn(
          "flex min-h-screen min-w-0 flex-1 flex-col transition-[padding] duration-200",
          sidebarOpen && "lg:pl-60"
        )}
      >
        <DashboardTopbar
          role={role}
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((open) => !open)}
        />
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
      <HelpChatbot role={role} />
    </div>
  )
}
