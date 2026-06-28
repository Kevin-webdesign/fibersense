import { ConcreteSectionPage } from '../../_components/concrete-section-page'

export const dynamic = 'force-dynamic'

export default function LiveMonitoringPage({
  params,
}: {
  params: Promise<{ role: string }>
}) {
  return <ConcreteSectionPage params={params} section="live-monitoring" />
}
