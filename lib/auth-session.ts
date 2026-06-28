"use client"

import { useSyncExternalStore } from "react"
import type { RoleKey } from "@/lib/roles"

export interface CurrentUserSession {
  id: string
  name: string
  email: string
  role: RoleKey
}

const SESSION_KEY = "fibersense.currentUser"
const SESSION_EVENT = "fibersense-session-change"

export function getCurrentUserSession() {
  if (typeof window === "undefined") return null

  const raw = window.localStorage.getItem(SESSION_KEY)
  if (!raw) return null

  try {
    return JSON.parse(raw) as CurrentUserSession
  } catch {
    window.localStorage.removeItem(SESSION_KEY)
    return null
  }
}

export function setCurrentUserSession(user: CurrentUserSession) {
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(user))
  window.dispatchEvent(new Event(SESSION_EVENT))
}

export function clearCurrentUserSession() {
  window.localStorage.removeItem(SESSION_KEY)
  window.dispatchEvent(new Event(SESSION_EVENT))
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback)
  window.addEventListener(SESSION_EVENT, callback)

  return () => {
    window.removeEventListener("storage", callback)
    window.removeEventListener(SESSION_EVENT, callback)
  }
}

function getSnapshot() {
  return JSON.stringify(getCurrentUserSession())
}

export function useCurrentUserSession() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => "null")
  return JSON.parse(snapshot) as CurrentUserSession | null
}
