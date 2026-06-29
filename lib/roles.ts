import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Brain,
  Cpu,
  FileText,
  LayoutDashboard,
  ListChecks,
  MapPinned,
  Radio,
  ScrollText,
  Settings,
  ShieldCheck,
  TicketCheck,
  TrendingUp,
  Users,
  Wrench,
} from 'lucide-react'

export type RoleKey = 'admin' | 'engineer' | 'operations' | 'support'

export interface RoleInfo {
  key: RoleKey
  name: string
  shortName: string
  description: string
  icon: LucideIcon
}

export const ROLES: Record<RoleKey, RoleInfo> = {
  admin: {
    key: 'admin',
    name: 'Administrator',
    shortName: 'Admin',
    description: 'Manage users, reports and system settings.',
    icon: ShieldCheck,
  },
  engineer: {
    key: 'engineer',
    name: 'Network Engineer',
    shortName: 'Engineer',
    description: 'Monitor network performance, detected faults, assessments and responses.',
    icon: Cpu,
  },
  operations: {
    key: 'operations',
    name: 'Operations Staff',
    shortName: 'Operations',
    description: 'Monitor alerts, network status and critical escalations.',
    icon: Wrench,
  },
  support: {
    key: 'support',
    name: 'Technical Support',
    shortName: 'Support',
    description: 'View fault locations, maintenance tasks and repair status.',
    icon: Radio,
  },
}

export const ROLE_LIST = Object.values(ROLES)

export interface NavItem {
  label: string
  icon: LucideIcon
  href: string
}

export const ROLE_NAV: Record<RoleKey, NavItem[]> = {
  admin: [
    { label: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'Users', icon: Users, href: '/dashboard/users' },
    { label: 'Reports', icon: FileText, href: '/dashboard/reports' },
    { label: 'Audit Logs', icon: ScrollText, href: '/dashboard/audit-logs' },
    { label: 'Settings', icon: Settings, href: '/dashboard/settings' },
  ],
  engineer: [
    { label: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'Network Performance', icon: Activity, href: '/dashboard/live-monitoring' },
    { label: 'Network Sites', icon: MapPinned, href: '/dashboard/network-sites' },
    { label: 'Detected Faults', icon: AlertTriangle, href: '/dashboard/faults' },
    { label: 'Assessments', icon: TrendingUp, href: '/dashboard/assessments' },
    { label: 'AI Analysis', icon: Brain, href: '/dashboard/ai-analysis' },
    { label: 'Issue Response', icon: ListChecks, href: '/dashboard/tasks' },
    { label: 'Reports', icon: BarChart3, href: '/dashboard/reports' },
  ],
  operations: [
    { label: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'Alerts', icon: AlertTriangle, href: '/dashboard/alerts' },
    { label: 'Network Status', icon: Activity, href: '/dashboard/live-monitoring' },
    { label: 'Critical Faults', icon: ListChecks, href: '/dashboard/faults' },
    { label: 'Tasks & Escalations', icon: TicketCheck, href: '/dashboard/tasks' },
    { label: 'Reports', icon: BarChart3, href: '/dashboard/reports' },
  ],
  support: [
    { label: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'Fault Locations', icon: AlertTriangle, href: '/dashboard/faults' },
    { label: 'Assessments', icon: TrendingUp, href: '/dashboard/assessments' },
    { label: 'Maintenance Tasks', icon: Wrench, href: '/dashboard/tasks' },
    { label: 'Reports', icon: BarChart3, href: '/dashboard/reports' },
  ],
}
