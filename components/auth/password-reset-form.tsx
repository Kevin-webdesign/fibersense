"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, Loader2, MailCheck } from "lucide-react"
import { toast } from "sonner"
import {
  requestPasswordResetOtpAction,
  resetPasswordWithOtpAction,
  verifyPasswordResetOtpAction,
} from "@/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Step = "email" | "otp" | "password"

export function PasswordResetForm() {
  const router = useRouter()
  const [step, setStep] = useState<Step>("email")
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isPending, startTransition] = useTransition()

  function requestOtp(event: React.FormEvent) {
    event.preventDefault()
    startTransition(async () => {
      const result = await requestPasswordResetOtpAction({ email })
      toast.success(result.message)
      setStep("otp")
    })
  }

  function verifyOtp(event: React.FormEvent) {
    event.preventDefault()
    startTransition(async () => {
      const result = await verifyPasswordResetOtpAction({ email, otp })
      if (!result.ok) {
        toast.error(result.error)
        return
      }
      toast.success("OTP verified")
      setStep("password")
    })
  }

  function resetPassword(event: React.FormEvent) {
    event.preventDefault()
    startTransition(async () => {
      const result = await resetPasswordWithOtpAction({ email, otp, password })
      if (!result.ok) {
        toast.error(result.error)
        return
      }
      toast.success("Password reset successfully")
      router.push("/login")
    })
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Reset password
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Verify your email with an OTP, then choose a new password.
        </p>
      </div>

      {step === "email" && (
        <form onSubmit={requestOtp} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Work email</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@fibersense.local"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? <Loader2 className="size-4 animate-spin" /> : <MailCheck className="size-4" />}
            Send OTP
          </Button>
        </form>
      )}

      {step === "otp" && (
        <form onSubmit={verifyOtp} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="otp">Verification OTP</Label>
            <Input
              id="otp"
              inputMode="numeric"
              maxLength={6}
              placeholder="123456"
              required
              value={otp}
              onChange={(event) => setOtp(event.target.value.replace(/\D/g, ""))}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isPending || otp.length !== 6}>
            {isPending && <Loader2 className="size-4 animate-spin" />}
            Verify OTP
          </Button>
        </form>
      )}

      {step === "password" && (
        <form onSubmit={resetPassword} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="password">New password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                required
                minLength={8}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending && <Loader2 className="size-4 animate-spin" />}
            Reset password
          </Button>
        </form>
      )}

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Remember your password?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}
