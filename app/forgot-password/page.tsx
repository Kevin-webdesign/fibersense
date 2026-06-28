import type { Metadata } from 'next'
import { AuthShell } from '@/components/auth/auth-shell'
import { PasswordResetForm } from '@/components/auth/password-reset-form'

export const metadata: Metadata = {
  title: 'Reset password - FiberSense',
}

export default function ForgotPasswordPage() {
  return (
    <AuthShell>
      <PasswordResetForm />
    </AuthShell>
  )
}
