'use client'

import { useState } from 'react'
import { Brain, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RiskBadge } from '@/components/dashboard/status-badges'

type AnalysisResult = {
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  probability: number
  recommendation: string
  faultType: string
  explanation: string
}

export function AiAnalysisForm() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    const form = new FormData(event.currentTarget)

    try {
      const response = await fetch('/api/ai/analyze', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          networkSegment: form.get('networkSegment'),
          signalStrength: Number(form.get('signalStrength')),
          signalLoss: Number(form.get('signalLoss')),
          attenuation: Number(form.get('attenuation')),
          errorRate: Number(form.get('errorRate')),
          reflectionLevel: Number(form.get('reflectionLevel')),
          distance: Number(form.get('distance')),
        }),
      })
      const payload = await response.json()
      if (!response.ok || payload.status !== 'ok') {
        throw new Error('AI analysis failed')
      }
      setResult(payload.data)
      toast.success('AI analysis complete')
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'AI analysis failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm font-medium">
            <Brain className="size-4" />
            fault analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="networkSegment">Network segment</Label>
              <Input
                id="networkSegment"
                name="networkSegment"
                defaultValue="Huye Ring S-04"
                required
              />
            </div>
            <MetricInput name="signalStrength" label="Signal strength" value="-22.1" />
            <MetricInput name="signalLoss" label="Signal loss" value="2.7" />
            <MetricInput name="attenuation" label="Attenuation" value="0.48" />
            <MetricInput name="errorRate" label="Error rate" value="1.8" />
            <MetricInput name="reflectionLevel" label="Reflection level" value="0.31" />
            <MetricInput name="distance" label="Distance km" value="18.2" />
            <div className="sm:col-span-2">
              <Button type="submit" disabled={loading}>
                {loading && <Loader2 className="size-4 animate-spin" />}
                Analyze fault risk
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Result</CardTitle>
        </CardHeader>
        <CardContent>
          {result ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Risk</span>
                <RiskBadge value={toLabel(result.riskLevel)} />
              </div>
              <div>
                <p className="text-3xl font-semibold">{result.probability}%</p>
                <p className="text-xs text-muted-foreground">Failure probability</p>
              </div>
              <div>
                <p className="text-sm font-medium">Fault type</p>
                <p className="text-sm text-muted-foreground">
                  {toLabel(result.faultType)}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Recommendation</p>
                <p className="text-sm text-muted-foreground">
                  {result.recommendation}
                </p>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {result.explanation}
              </p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Run an analysis to see the AI risk classification.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function MetricInput({
  name,
  label,
  value,
}: {
  name: string
  label: string
  value: string
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type="number" step="0.01" defaultValue={value} />
    </div>
  )
}

function toLabel(value: string) {
  return value
    .toLowerCase()
    .split('_')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}
