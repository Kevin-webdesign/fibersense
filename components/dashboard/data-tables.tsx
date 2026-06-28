"use client"

import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import {
  AlertLevelBadge,
  RiskBadge,
  SeverityBadge,
  StatusBadge,
} from '@/components/dashboard/status-badges'
import { Progress } from '@/components/ui/progress'
import {
  type AlertRow,
  type FaultRow,
  type PredictionRow,
} from '@/lib/api-types'

function TableCard({
  title,
  action,
  children,
}: {
  title: string
  action?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {action}
      </CardHeader>
      <CardContent className="px-0">
        <div className="overflow-x-auto">{children}</div>
      </CardContent>
    </Card>
  )
}

function usePagination<T>(rows: T[], pageSize = 10) {
  const [page, setPage] = useState(1)
  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize))
  const safePage = Math.min(page, totalPages)
  const pageRows = useMemo(
    () => rows.slice((safePage - 1) * pageSize, safePage * pageSize),
    [rows, safePage, pageSize]
  )

  return {
    page: safePage,
    pageRows,
    totalPages,
    setPage,
  }
}

function PaginationControls({
  page,
  totalPages,
  totalRows,
  onPageChange,
}: {
  page: number
  totalPages: number
  totalRows: number
  onPageChange: (page: number) => void
}) {
  if (totalRows <= 10) return null

  return (
    <div className="flex items-center justify-between border-t border-border px-4 py-3 text-xs text-muted-foreground">
      <span>
        Page {page} of {totalPages}
      </span>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page <= 1}
        >
          Previous
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page >= totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export function FaultsTable({
  rows,
  title = 'Recent faults',
  action,
}: {
  rows: FaultRow[]
  title?: string
  action?: React.ReactNode
}) {
  const { page, pageRows, totalPages, setPage } = usePagination(rows)

  return (
    <TableCard title={title} action={action}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Segment</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead>Confidence</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Detected</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pageRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-mono text-xs text-muted-foreground">
                {row.id}
              </TableCell>
              <TableCell className="font-medium text-foreground">
                {row.type}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {row.segment}
              </TableCell>
              <TableCell className="max-w-[220px] text-xs text-muted-foreground">
                {row.location}
              </TableCell>
              <TableCell>
                <SeverityBadge value={row.severity} />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={row.confidence} className="h-1.5 w-14" />
                  <span className="text-xs text-muted-foreground">
                    {row.confidence}%
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <StatusBadge value={row.status} />
              </TableCell>
              <TableCell className="text-right text-xs text-muted-foreground">
                {row.detectedAt}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationControls
        page={page}
        totalPages={totalPages}
        totalRows={rows.length}
        onPageChange={setPage}
      />
    </TableCard>
  )
}

export function AlertsTable({
  rows,
  title = 'Active alerts',
  action,
}: {
  rows: AlertRow[]
  title?: string
  action?: React.ReactNode
}) {
  const { page, pageRows, totalPages, setPage } = usePagination(rows)

  return (
    <TableCard title={title} action={action}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Alert</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Segment</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pageRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium text-foreground">
                {row.title}
              </TableCell>
              <TableCell>
                <AlertLevelBadge value={row.level} />
              </TableCell>
              <TableCell className="text-muted-foreground">
                {row.segment}
              </TableCell>
              <TableCell>
                <StatusBadge value={row.status} />
              </TableCell>
              <TableCell className="text-right text-xs text-muted-foreground">
                {row.time}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationControls
        page={page}
        totalPages={totalPages}
        totalRows={rows.length}
        onPageChange={setPage}
      />
    </TableCard>
  )
}

export function PredictionsTable({
  rows,
  title = 'Risk assessments',
  action,
  onSelect,
  selectedId,
}: {
  rows: PredictionRow[]
  title?: string
  action?: React.ReactNode
  onSelect?: (row: PredictionRow) => void
  selectedId?: string
}) {
  const { page, pageRows, totalPages, setPage } = usePagination(rows)

  return (
    <TableCard title={title} action={action}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Segment</TableHead>
            <TableHead>Fault</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Risk</TableHead>
            <TableHead>Probability</TableHead>
            <TableHead>Source</TableHead>
            <TableHead>Recommendation</TableHead>
            {onSelect && <TableHead className="text-right">Details</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {pageRows.map((row) => (
            <TableRow key={row.id} className={row.id === selectedId ? 'bg-muted/50' : undefined}>
              <TableCell className="font-medium text-foreground">
                {row.segment}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {row.faultType ?? 'Signal assessment'}
              </TableCell>
              <TableCell className="max-w-[220px] text-xs text-muted-foreground">
                {row.faultLocation ?? 'Not linked'}
              </TableCell>
              <TableCell>
                <RiskBadge value={row.riskLevel} />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={row.probability} className="h-1.5 w-14" />
                  <span className="text-xs text-muted-foreground">
                    {row.probability}%
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {row.horizon}
              </TableCell>
              <TableCell className="max-w-xs text-xs text-muted-foreground">
                {row.recommendation}
              </TableCell>
              {onSelect && (
                <TableCell className="text-right">
                  <Button
                    type="button"
                    variant={row.id === selectedId ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => onSelect(row)}
                  >
                    View
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationControls
        page={page}
        totalPages={totalPages}
        totalRows={rows.length}
        onPageChange={setPage}
      />
    </TableCard>
  )
}
