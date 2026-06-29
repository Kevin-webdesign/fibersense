"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import {
  ChevronDown,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Settings,
  User,
} from "lucide-react"
import { toast } from "sonner"
import { logoutAction } from "@/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  clearCurrentUserSession,
  type CurrentUserSession,
  useCurrentUserSession,
} from "@/lib/auth-session"
import { ROLES, type RoleKey } from "@/lib/roles"

const fallbackUsers: Record<RoleKey, CurrentUserSession> = {
  admin: {
    id: "local-admin",
    name: "FiberSense Administrator",
    email: "admin@fibersense.local",
    role: "admin",
  },
  engineer: {
    id: "local-engineer",
    name: "Network Engineer",
    email: "engineer@fibersense.local",
    role: "engineer",
  },
  operations: {
    id: "local-operations",
    name: "Operations Lead",
    email: "operations@fibersense.local",
    role: "operations",
  },
  support: {
    id: "local-support",
    name: "Technical Support",
    email: "support@fibersense.local",
    role: "support",
  },
}

export function DashboardTopbar({
  role,
  sidebarOpen,
  onToggleSidebar,
}: {
  role: RoleKey
  sidebarOpen: boolean
  onToggleSidebar: () => void
}) {
  const router = useRouter()
  const info = ROLES[role]
  const user = useCurrentUserSession() ?? fallbackUsers[role]
  const [accountMenuOpen, setAccountMenuOpen] = useState(false)
  const accountMenuRef = useRef<HTMLDivElement>(null)

  const initials = useMemo(
    () =>
      user.name
        .split(" ")
        .map((name) => name[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    [user.name]
  )

  async function handleLogout() {
    setAccountMenuOpen(false)
    await logoutAction()
    clearCurrentUserSession()
    toast.success("Signed out")
    router.push("/login")
  }

  function goToProfile() {
    setAccountMenuOpen(false)
    router.push("/dashboard/profile")
  }

  function goToSettings() {
    setAccountMenuOpen(false)
    router.push("/dashboard/settings")
  }

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        accountMenuRef.current &&
        !accountMenuRef.current.contains(event.target as Node)
      ) {
        setAccountMenuOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setAccountMenuOpen(false)
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-3 border-b border-border/60 bg-background/80 px-4 backdrop-blur sm:px-6">
      <Button
        variant="ghost"
        size="icon"
        aria-label={sidebarOpen ? "Hide sidebar" : "Show sidebar"}
        onClick={onToggleSidebar}
      >
        {sidebarOpen ? (
          <PanelLeftClose className="size-4" />
        ) : (
          <PanelLeftOpen className="size-4" />
        )}
      </Button>

      <div className="relative hidden max-w-sm flex-1 sm:block">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search faults, alerts, tasks..."
          className="pl-9"
        />
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <div ref={accountMenuRef} className="relative">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-accent"
            aria-haspopup="menu"
            aria-expanded={accountMenuOpen}
            onClick={() => setAccountMenuOpen((open) => !open)}
          >
            <Avatar className="size-8">
              <AvatarFallback className="bg-primary/15 text-xs text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-medium leading-tight text-foreground">
                {user.name}
              </p>
              <p className="text-xs leading-tight text-muted-foreground">
                {info.name}
              </p>
            </div>
            <ChevronDown className="size-4 text-muted-foreground" />
          </button>

          {accountMenuOpen && (
            <div
              role="menu"
              className="absolute right-0 top-full z-50 mt-2 w-72 rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10"
            >
              <div className="px-2 py-2">
                <p className="text-sm font-medium text-foreground">
                  {user.name}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {user.email}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {info.name}
                </p>
              </div>
              <div className="-mx-1 my-1 h-px bg-border" />
              <button
                type="button"
                role="menuitem"
                className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                onClick={goToProfile}
              >
                <User className="size-4" />
                Profile details
              </button>
              {role === "admin" && (
                <button
                  type="button"
                  role="menuitem"
                  className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                  onClick={goToSettings}
                >
                  <Settings className="size-4" />
                  AI request settings
                </button>
              )}
              <div className="-mx-1 my-1 h-px bg-border" />
              <button
                type="button"
                role="menuitem"
                className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-destructive outline-none hover:bg-destructive/10"
                onClick={handleLogout}
              >
                <LogOut className="size-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
