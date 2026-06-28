import { ConcreteSectionPage } from '../../_components/concrete-section-page'

export const dynamic = 'force-dynamic'

export default function UsersPage({
  params,
}: {
  params: Promise<{ role: string }>
}) {
  return <ConcreteSectionPage params={params} section="users" />
}
