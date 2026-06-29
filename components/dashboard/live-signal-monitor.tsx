"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { AlertTriangle, Radio, Signal } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatCard, StatGrid } from "@/components/dashboard/stat-card"
import { RiskBadge } from "@/components/dashboard/status-badges"
import type { NetworkSiteRow } from "@/lib/api-types"

type SignalPoint = {
  time: string
  segment: string
  strength: number
  attenuation: number
  loss: number
  errorRate: number
  reflectionLevel: number
  distance: number
  risk: "Low" | "Medium" | "High" | "Critical"
}

const fallbackSegments = [
  "Kigali Core C-01",
  "Huye Ring S-04",
  "Rubavu Spur W-08",
  "Kigali-Musanze NE-12",
]

function riskFrom(point: Pick<SignalPoint, "strength" | "attenuation" | "loss">) {
  const score =
    Math.max(0, Math.abs(point.strength) - 18) * 4 +
    point.attenuation * 35 +
    point.loss * 10

  if (score >= 85) return "Critical"
  if (score >= 65) return "High"
  if (score >= 40) return "Medium"
  return "Low"
}

function makePoint(
  index: number,
  sites: NetworkSiteRow[],
  now = 0,
  time = "Starting"
): SignalPoint {
  const site = sites[index % Math.max(1, sites.length)]
  const segment =
    site?.networkSegment || site?.name || fallbackSegments[index % fallbackSegments.length]
  const wave = Math.sin(now / 9000 + index)
  const strength = Number((-18 - index * 1.7 - Math.abs(wave * 5)).toFixed(2))
  const attenuation = Number((0.22 + index * 0.08 + Math.abs(wave * 0.18)).toFixed(2))
  const loss = Number((0.7 + index * 0.4 + Math.abs(wave * 1.1)).toFixed(2))
  const errorRate = Number((0.2 + index * 0.18 + Math.abs(wave * 0.55)).toFixed(2))
  const reflectionLevel = Number((0.1 + index * 0.06 + Math.abs(wave * 0.16)).toFixed(2))
  return {
    time,
    segment,
    strength,
    attenuation,
    loss,
    errorRate,
    reflectionLevel,
    distance: site
      ? Number((site.distanceUnit === "km" ? site.distance * 1000 : site.distance).toFixed(1))
      : Number((4.8 + index * 10.6).toFixed(1)),
    risk: riskFrom({ strength, attenuation, loss }),
  }
}

export function LiveSignalMonitor({ sites = [] }: { sites?: NetworkSiteRow[] }) {
  const savingRef = useRef(false)
  const activeCount = Math.max(1, Math.min(6, sites.length || fallbackSegments.length))
  const [points, setPoints] = useState<SignalPoint[]>(() =>
    Array.from({ length: activeCount }, (_, index) =>
      makePoint(index, sites, 0, "Starting")
    )
  )

  useEffect(() => {
    async function persistSignals(nextPoints: SignalPoint[]) {
      if (savingRef.current) return
      savingRef.current = true
      try {
        await Promise.all(
          nextPoints.map((point) =>
            fetch("/api/network-data", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({
                networkSegment: point.segment,
                signalStrength: point.strength,
                signalLoss: point.loss,
                errorRate: point.errorRate,
                attenuation: point.attenuation,
                reflectionLevel: point.reflectionLevel,
                distance: point.distance,
              }),
            })
          )
        )
      } finally {
        savingRef.current = false
      }
    }

    function generatePoints() {
      const now = Date.now()
      return Array.from({ length: activeCount }, (_, index) =>
        makePoint(index, sites, now, new Date(now).toLocaleTimeString())
      )
    }

    const firstTimer = window.setTimeout(() => {
      const firstPoints = generatePoints()
      setPoints(firstPoints)
      void persistSignals(firstPoints)
    }, 0)

    const timer = window.setInterval(() => {
      const nextPoints = generatePoints()
      setPoints(nextPoints)
      void persistSignals(nextPoints)
    }, 3000)

    return () => {
      window.clearTimeout(firstTimer)
      window.clearInterval(timer)
    }
  }, [activeCount, sites])

  const summary = useMemo(() => {
    const averageStrength =
      points.reduce((total, point) => total + point.strength, 0) / points.length
    const critical = points.filter((point) =>
      ["High", "Critical"].includes(point.risk)
    ).length

    return {
      averageStrength,
      critical,
      health: Math.max(0, Math.round(100 - critical * 12)),
    }
  }, [points])

  return (
    <div className="space-y-6">
      <StatGrid>
        <StatCard label="Generated every" value="3 sec" icon={Signal} />
        <StatCard label="Monitored sites" value={sites.length.toString()} icon={Radio} />
        <StatCard
          label="Average signal"
          value={`${summary.averageStrength.toFixed(1)} dBm`}
          icon={Radio}
        />
        <StatCard label="Risk segments" value={summary.critical.toString()} icon={AlertTriangle} />
      </StatGrid>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Auto-generated Live Signals</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {points.map((point) => (
            <div
              key={point.segment}
              className="grid gap-3 rounded-lg border border-border p-3 text-sm md:grid-cols-[1.4fr_repeat(6,1fr)]"
            >
              <div>
                <p className="font-medium text-foreground">{point.segment}</p>
                <p className="text-xs text-muted-foreground">
                  {point.time} | {point.distance} m route
                </p>
              </div>
              <Metric label="Strength" value={`${point.strength} dBm`} />
              <Metric label="Attenuation" value={point.attenuation.toString()} />
              <Metric label="Loss" value={`${point.loss} dB`} />
              <Metric label="Error rate" value={point.errorRate.toString()} />
              <div className="flex items-center">
                <RiskBadge value={point.risk} />
              </div>
              <div className="h-2 self-center overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${summary.health}%` }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-medium text-foreground">{value}</p>
    </div>
  )
}
