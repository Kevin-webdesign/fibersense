"use client"

import { useMemo, useState, useTransition, type FormEvent } from "react"
import type { CSSProperties, ReactNode } from "react"
import { Loader2, MapPinned, Monitor, Network, Plus, Router, Wifi } from "lucide-react"
import { toast } from "sonner"
import { createNetworkSiteAction } from "@/actions/network-sites"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { NetworkSiteRow } from "@/lib/api-types"

const defaultSite = {
  name: "",
  location: "",
  connectedTo: "",
  distance: "200",
  distanceUnit: "m",
  networkSegment: "",
  notes: "",
}

export function NetworkSiteManager({ sites }: { sites: NetworkSiteRow[] }) {
  const [form, setForm] = useState(defaultSite)
  const [isPending, startTransition] = useTransition()

  const totalDistance = useMemo(
    () => sites.reduce((total, site) => total + distanceInMeters(site), 0),
    [sites]
  )

  function updateField(name: keyof typeof defaultSite, value: string) {
    setForm((current) => ({ ...current, [name]: value }))
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    const distance = Number(form.distance)

    if (!form.name.trim() || !form.location.trim() || !form.connectedTo.trim()) {
      toast.error("Site name, location and connected place are required.")
      return
    }

    if (!Number.isFinite(distance) || distance <= 0) {
      toast.error("Enter a valid distance.")
      return
    }

    startTransition(async () => {
      await createNetworkSiteAction({
        name: form.name,
        location: form.location,
        connectedTo: form.connectedTo,
        distance,
        distanceUnit: form.distanceUnit || "m",
        networkSegment: form.networkSegment,
        notes: form.notes,
      })
      setForm(defaultSite)
      toast.success("Network site added")
    })
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[420px_minmax(0,1fr)]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm font-medium">
              <Plus className="size-4 text-primary" />
              Add Network Site
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Site name" id="site-name">
                  <Input
                    id="site-name"
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder="Kigali Core C-01"
                  />
                </Field>
                <Field label="Location" id="site-location">
                  <Input
                    id="site-location"
                    value={form.location}
                    onChange={(event) => updateField("location", event.target.value)}
                    placeholder="Kigali central exchange"
                  />
                </Field>
              </div>

              <Field label="Connected to" id="connected-to">
                <Input
                  id="connected-to"
                  value={form.connectedTo}
                  onChange={(event) => updateField("connectedTo", event.target.value)}
                  placeholder="Huye Ring S-04"
                />
              </Field>

              <div className="grid gap-4 sm:grid-cols-[1fr_110px]">
                <Field label="Distance between places" id="distance">
                  <Input
                    id="distance"
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={form.distance}
                    onChange={(event) => updateField("distance", event.target.value)}
                    placeholder="200"
                  />
                </Field>
                <Field label="Unit" id="distance-unit">
                  <select
                    id="distance-unit"
                    value={form.distanceUnit}
                    onChange={(event) => updateField("distanceUnit", event.target.value)}
                    className="h-8 w-full rounded-lg border border-input bg-background px-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    <option value="m">m</option>
                    <option value="km">km</option>
                  </select>
                </Field>
              </div>

              <Field label="Network segment" id="network-segment">
                <Input
                  id="network-segment"
                  value={form.networkSegment}
                  onChange={(event) => updateField("networkSegment", event.target.value)}
                  placeholder="Kigali-Huye backbone"
                />
              </Field>

              <Field label="Notes" id="site-notes">
                <Textarea
                  id="site-notes"
                  value={form.notes}
                  onChange={(event) => updateField("notes", event.target.value)}
                  placeholder="Fiber cabinet, splice point, access notes..."
                />
              </Field>

              <Button type="submit" disabled={isPending}>
                {isPending ? <Loader2 className="size-4 animate-spin" /> : <MapPinned className="size-4" />}
                Add Site
              </Button>
            </form>
          </CardContent>
        </Card>

        <NetworkSiteSignalSimulation sites={sites} totalDistance={totalDistance} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm font-medium">
            <Network className="size-4 text-primary" />
            Network Sites
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Site</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Connected to</TableHead>
                  <TableHead>Distance</TableHead>
                  <TableHead>Segment</TableHead>
                  <TableHead>Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sites.length ? (
                  sites.map((site) => (
                    <TableRow key={site.id}>
                      <TableCell className="font-medium">{site.name}</TableCell>
                      <TableCell className="text-muted-foreground">{site.location}</TableCell>
                      <TableCell>{site.connectedTo}</TableCell>
                      <TableCell>
                        {site.distance} {site.distanceUnit}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {site.networkSegment ?? "Unassigned"}
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground">{site.createdAt}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center text-sm text-muted-foreground">
                      No network sites added yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function NetworkSiteSignalSimulation({
  sites,
  totalDistance,
}: {
  sites: NetworkSiteRow[]
  totalDistance: number
}) {
  const visibleSites = sites.slice(0, 8)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm font-medium">
          <Wifi className="size-4 text-primary" />
          Signal Simulation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-border bg-background p-4">
          <div className="absolute left-1/2 top-1/2 z-10 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
            <div className="text-center">
              <Router className="mx-auto size-7 text-primary" />
              <p className="mt-1 text-xs font-medium">Core Router</p>
            </div>
          </div>

          {visibleSites.map((site, index) => {
            const position = sitePosition(index)
            return (
              <div key={site.id}>
                <SignalLine index={index} />
                <div
                  className="absolute z-20 w-40 rounded-lg border border-border bg-card p-2 shadow-sm"
                  style={position}
                >
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <Monitor className="size-4 text-primary" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium">{site.name}</p>
                      <p className="truncate text-[11px] text-muted-foreground">
                        {site.location}
                      </p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{ width: `${signalStrengthFor(index)}%` }}
                        />
                      </div>
                      <p className="mt-1 text-[11px] text-primary">
                        {site.distance} {site.distanceUnit} to {site.connectedTo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {!sites.length && (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
              Add a site to preview the topology.
            </div>
          )}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <MiniStat label="Sites" value={sites.length.toString()} />
          <MiniStat label="Total distance" value={formatDistance(totalDistance)} />
          <MiniStat label="Links shown" value={visibleSites.length.toString()} />
        </div>
      </CardContent>
    </Card>
  )
}

function SignalLine({ index }: { index: number }) {
  const lineStyles: CSSProperties[] = [
    { left: "30%", top: "26%", width: "23%", transform: "rotate(24deg)" },
    { left: "49%", top: "26%", width: "24%", transform: "rotate(-24deg)" },
    { left: "30%", top: "69%", width: "23%", transform: "rotate(-24deg)" },
    { left: "49%", top: "69%", width: "24%", transform: "rotate(24deg)" },
    { left: "45%", top: "18%", width: "10%", transform: "rotate(90deg)" },
    { left: "45%", top: "78%", width: "10%", transform: "rotate(90deg)" },
    { left: "19%", top: "50%", width: "31%" },
    { left: "50%", top: "50%", width: "31%" },
  ]

  return (
    <div
      className="absolute z-0 h-px overflow-hidden bg-primary/20"
      style={lineStyles[index % lineStyles.length]}
    >
      <div className="h-px w-1/3 animate-pulse rounded-full bg-primary" />
    </div>
  )
}

function signalStrengthFor(index: number) {
  return Math.max(35, 92 - index * 7)
}

function distanceInMeters(site: NetworkSiteRow) {
  return site.distanceUnit === "km" ? site.distance * 1000 : site.distance
}

function formatDistance(meters: number) {
  if (meters >= 1000) return `${(meters / 1000).toFixed(2)} km`
  return `${meters.toFixed(1)} m`
}

function sitePosition(index: number): CSSProperties {
  const positions: CSSProperties[] = [
    { left: "6%", top: "8%" },
    { right: "8%", top: "8%" },
    { left: "8%", bottom: "10%" },
    { right: "8%", bottom: "10%" },
    { left: "34%", top: "2%" },
    { right: "34%", bottom: "2%" },
    { left: "2%", top: "44%" },
    { right: "2%", top: "44%" },
  ]
  return positions[index % positions.length]
}

function Field({
  label,
  id,
  children,
}: {
  label: string
  id: string
  children: ReactNode
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  )
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-lg font-semibold">{value}</p>
    </div>
  )
}
