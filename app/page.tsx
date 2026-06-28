import { SiteHeader } from '@/components/landing/site-header'
import { Hero } from '@/components/landing/hero'
import { Capabilities } from '@/components/landing/capabilities'
import { Workflow } from '@/components/landing/workflow'
import { RolesSection } from '@/components/landing/roles-section'
import { CtaFooter } from '@/components/landing/cta-footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Capabilities />
        <Workflow />
        <RolesSection />
        <CtaFooter />
      </main>
    </div>
  )
}
