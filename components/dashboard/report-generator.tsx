"use client"

import { useMemo, useState, useTransition } from "react"
import { Download, FileText, Loader2, Printer } from "lucide-react"
import { toast } from "sonner"
import {
  generateLiveReportAction,
  type LiveReportData,
} from "@/actions/reports"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { RoleKey } from "@/lib/roles"

const reportOptions: Record<RoleKey, Array<{ value: string; label: string }>> = {
  admin: [
    { value: "all", label: "All system activity" },
    { value: "users", label: "User management" },
    { value: "settings", label: "System settings" },
    { value: "operations", label: "Operations summary" },
  ],
  engineer: [
    { value: "network-performance", label: "Network performance" },
    { value: "detected-faults", label: "Detected faults" },
    { value: "assessments", label: "Risk assessments" },
    { value: "issue-response", label: "Network issue response" },
  ],
  operations: [
    { value: "alerts", label: "Alerts" },
    { value: "network-status", label: "Network status" },
    { value: "critical-faults", label: "Critical fault escalations" },
  ],
  support: [
    { value: "fault-locations", label: "Fault locations" },
    { value: "maintenance-tasks", label: "Maintenance tasks" },
    { value: "repair-status", label: "Repair status" },
  ],
}

function today() {
  return new Date().toISOString().slice(0, 10)
}

function weekAgo() {
  const date = new Date()
  date.setDate(date.getDate() - 7)
  return date.toISOString().slice(0, 10)
}

export function ReportGenerator({ role }: { role: RoleKey }) {
  const [from, setFrom] = useState(weekAgo())
  const [to, setTo] = useState(today())
  const [reportType, setReportType] = useState(reportOptions[role][0].value)
  const [scope, setScope] = useState(role === "admin" ? "all-system" : role)
  const [report, setReport] = useState<LiveReportData | null>(null)
  const [isPending, startTransition] = useTransition()

  const availableScopes = useMemo(
    () =>
      role === "admin"
        ? [
            { value: "all-system", label: "All system" },
            { value: "engineer", label: "Network engineer" },
            { value: "operations", label: "Operations staff" },
            { value: "support", label: "Technical support" },
          ]
        : [{ value: role, label: "My role workspace" }],
    [role]
  )

  function generateReport(event: React.FormEvent) {
    event.preventDefault()
    startTransition(async () => {
      const data = await generateLiveReportAction({
        from,
        to,
        role,
        reportType,
        scope,
      })
      setReport(data)
      toast.success("Customized report generated")
    })
  }

  function exportCsv() {
    if (!report) return

    const rows = [
      ["Report", report.reportType],
      ["Scope", report.scope],
      ["From", report.range.from],
      ["To", report.range.to],
      [],
      ["Metric", "Value"],
      ...Object.entries(report.summary).map(([key, value]) => [key, value]),
      [],
      ["Fault ID", "Type", "Severity", "Status", "Segment", "Location", "Detected At"],
      ...report.faults.map((fault) => [
        fault.id,
        fault.type,
        fault.severity,
        fault.status,
        fault.segment,
        fault.location,
        fault.detectedAt,
      ]),
      [],
      ["Assessment Segment", "Fault", "Location", "Risk", "Probability", "Assessed At"],
      ...report.predictions.map((prediction) => [
        prediction.segment,
        prediction.fault,
        prediction.location,
        prediction.risk,
        `${prediction.probability}%`,
        prediction.predictedAt,
      ]),
      [],
      ["Task", "Priority", "Status", "Created At"],
      ...report.tasks.map((task) => [
        task.title,
        task.priority,
        task.status,
        task.createdAt,
      ]),
    ]

    const csv = rows
      .map((row) =>
        row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(",")
      )
      .join("\n")

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement("a")
    anchor.href = url
    anchor.download = `fibersense-${report.reportType}-${report.range.from}-to-${report.range.to}.csv`
    anchor.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <Card className="print:hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm font-medium">
            <FileText className="size-4 text-primary" />
            Customized Report
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={generateReport} className="grid gap-4 lg:grid-cols-[180px_180px_220px_220px_auto]">
            <div className="space-y-2">
              <Label htmlFor="report-from">From</Label>
              <Input id="report-from" type="date" value={from} onChange={(event) => setFrom(event.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="report-to">To</Label>
              <Input id="report-to" type="date" value={to} onChange={(event) => setTo(event.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="report-type">Report needed</Label>
              <select
                id="report-type"
                value={reportType}
                onChange={(event) => setReportType(event.target.value)}
                className="h-8 w-full rounded-lg border border-input bg-background px-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {reportOptions[role].map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="report-scope">Scope</Label>
              <select
                id="report-scope"
                value={scope}
                onChange={(event) => setScope(event.target.value)}
                className="h-8 w-full rounded-lg border border-input bg-background px-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {availableScopes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <Button type="submit" disabled={isPending}>
                {isPending ? <Loader2 className="size-4 animate-spin" /> : <FileText className="size-4" />}
                Generate
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {report && (
        <Card data-print-report>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">
              {title(report.reportType)} | {report.range.from} to {report.range.to}
            </CardTitle>
            <div className="flex gap-2 print:hidden">
              <Button variant="outline" size="sm" onClick={exportCsv}>
                <Download className="size-4" />
                CSV
              </Button>
              <Button variant="outline" size="sm" onClick={() => window.print()}>
                <Printer className="size-4" />
                PDF
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground">Scope: {title(report.scope)}</p>
              <p className="text-sm text-muted-foreground">
                Generated: {new Date(report.generatedAt).toLocaleString()}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {Object.entries(report.summary).map(([key, value]) => (
                <div key={key} className="rounded-lg border border-border p-3">
                  <p className="text-xs text-muted-foreground">{title(key)}</p>
                  <p className="mt-1 text-2xl font-semibold">{value}</p>
                </div>
              ))}
            </div>
            <ReportList title="Faults" rows={report.faults.map((fault) => [fault.type, fault.severity, fault.status, fault.location])} />
            <ReportList title="Assessments" rows={report.predictions.map((prediction) => [prediction.fault, prediction.location, prediction.risk, `${prediction.probability}%`])} />
            <ReportList title="Tasks" rows={report.tasks.map((task) => [task.title, task.priority, task.status])} />
          </CardContent>
        </Card>
      )}
    </div>
  )
}

function ReportList({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <div>
      <h3 className="text-sm font-medium">{title}</h3>
      <div className="mt-2 space-y-2">
        {rows.length ? (
          rows.map((row, index) => (
            <div key={index} className="grid gap-2 rounded-md border border-border p-2 text-sm sm:grid-cols-4">
              {row.map((cell, cellIndex) => (
                <span key={cellIndex}>{cell}</span>
              ))}
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No records in this range.</p>
        )}
      </div>
    </div>
  )
}

function title(value: string) {
  return value
    .replaceAll("-", " ")
    .replace(/([A-Z])/g, " $1")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}
