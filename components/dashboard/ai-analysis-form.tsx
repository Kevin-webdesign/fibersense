'use client'

import { useMemo, useState } from 'react'
import { Brain, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RiskBadge } from '@/components/dashboard/status-badges'
import type { NetworkDetectionRow } from '@/lib/api-types'

type AnalysisResult = {
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  probability: number
  recommendation: string
  faultType: string
  explanation: string
}

type AnalysisFormState = {
  networkSegment: string
  signalStrength: string
  signalLoss: string
  attenuation: string
  errorRate: string
  reflectionLevel: string
  distance: string
}

const defaultForm: AnalysisFormState = {
  networkSegment: 'Huye Ring S-04',
  signalStrength: '-22.1',
  signalLoss: '2.7',
  attenuation: '0.48',
  errorRate: '1.8',
  reflectionLevel: '0.31',
  distance: '18.2',
}

export function AiAnalysisForm({
  detections = [],
}: {
  detections?: NetworkDetectionRow[]
}) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [selectedDetectionId, setSelectedDetectionId] = useState('')
  const [formValues, setFormValues] = useState<AnalysisFormState>(defaultForm)
  const latestDetections = useMemo(() => detections.slice(0, 20), [detections])

  function updateField(name: keyof AnalysisFormState, value: string) {
    setFormValues((current) => ({ ...current, [name]: value }))
  }

  function selectDetection(id: string) {
    setSelectedDetectionId(id)
    const detection = detections.find((item) => item.id === id)
    if (!detection) return

    setFormValues({
      networkSegment: detection.networkSegment,
      signalStrength: detection.signalStrength.toString(),
      signalLoss: detection.signalLoss.toString(),
      attenuation: detection.attenuation.toString(),
      errorRate: detection.errorRate.toString(),
      reflectionLevel: detection.reflectionLevel.toString(),
      distance: detection.distance.toString(),
    })
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/ai/analyze', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          networkSegment: formValues.networkSegment,
          signalStrength: Number(formValues.signalStrength),
          signalLoss: Number(formValues.signalLoss),
          attenuation: Number(formValues.attenuation),
          errorRate: Number(formValues.errorRate),
          reflectionLevel: Number(formValues.reflectionLevel),
          distance: Number(formValues.distance),
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
              <Label htmlFor="existingDetection">Existing detection</Label>
              <select
                id="existingDetection"
                value={selectedDetectionId}
                onChange={(event) => selectDetection(event.target.value)}
                className="h-8 w-full rounded-lg border border-input bg-background px-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <option value="">Manual analysis</option>
                {latestDetections.map((detection) => (
                  <option key={detection.id} value={detection.id}>
                    {detection.networkSegment} | {detection.detectedAt} | {detection.signalStrength} dBm
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="networkSegment">Network segment</Label>
              <Input
                id="networkSegment"
                name="networkSegment"
                value={formValues.networkSegment}
                onChange={(event) => updateField('networkSegment', event.target.value)}
                required
              />
            </div>
            <MetricInput
              name="signalStrength"
              label="Signal strength"
              value={formValues.signalStrength}
              onChange={(value) => updateField('signalStrength', value)}
            />
            <MetricInput
              name="signalLoss"
              label="Signal loss"
              value={formValues.signalLoss}
              onChange={(value) => updateField('signalLoss', value)}
            />
            <MetricInput
              name="attenuation"
              label="Attenuation"
              value={formValues.attenuation}
              onChange={(value) => updateField('attenuation', value)}
            />
            <MetricInput
              name="errorRate"
              label="Error rate"
              value={formValues.errorRate}
              onChange={(value) => updateField('errorRate', value)}
            />
            <MetricInput
              name="reflectionLevel"
              label="Reflection level"
              value={formValues.reflectionLevel}
              onChange={(value) => updateField('reflectionLevel', value)}
            />
            <MetricInput
              name="distance"
              label="Distance m"
              value={formValues.distance}
              onChange={(value) => updateField('distance', value)}
            />
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
  onChange,
}: {
  name: string
  label: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type="number"
        step="0.01"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
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
