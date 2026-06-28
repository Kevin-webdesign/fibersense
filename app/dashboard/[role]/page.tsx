import { notFound, redirect } from 'next/navigation'
import { ROLES } from '@/lib/roles'

export const dynamic = 'force-dynamic'

export function generateStaticParams() {
  return Object.keys(ROLES).map((role) => ({ role }))
}

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ role: string }>
}) {
  const { role } = await params
  if (!(role in ROLES)) notFound()
  redirect('/dashboard')
}
