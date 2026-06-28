"use client"

import { useState, useTransition } from "react"
import { Brain, Gauge, Loader2, Save } from "lucide-react"
import { toast } from "sonner"
import { updateAiDailyRequestLimitAction } from "@/actions/settings"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { StatCard, StatGrid } from "@/components/dashboard/stat-card"

export function AiRequestLimitSettings({
  initialLimit,
}: {
  initialLimit: number
}) {
  const [limit, setLimit] = useState(initialLimit)
  const [savedLimit, setSavedLimit] = useState(initialLimit)
  const [isPending, startTransition] = useTransition()

  function saveLimit(event: React.FormEvent) {
    event.preventDefault()
    startTransition(async () => {
      const nextLimit = await updateAiDailyRequestLimitAction(limit)
      setLimit(nextLimit)
      setSavedLimit(nextLimit)
      toast.success("AI request limit updated")
    })
  }

  return (
    <div className="space-y-6">
      <StatGrid>
        <StatCard label="Daily AI requests" value={savedLimit.toString()} icon={Gauge} />
        <StatCard label="Provider" value="Groq" icon={Brain} />
        <StatCard label="Minimum" value="1" icon={Save} />
        <StatCard label="Maximum" value="10,000" icon={Gauge} />
      </StatGrid>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">AI Request Limit</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={saveLimit} className="max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ai-limit">Requests per day</Label>
              <Input
                id="ai-limit"
                type="number"
                min={1}
                max={10000}
                value={limit}
                onChange={(event) => setLimit(Number(event.target.value))}
              />
            </div>
            <Button type="submit" disabled={isPending || limit === savedLimit}>
              {isPending ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Save className="size-4" />
              )}
              Save limit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
