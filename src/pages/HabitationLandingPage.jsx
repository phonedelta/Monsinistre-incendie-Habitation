import HeroSection from '../components/HeroSection'
import ProblemsSection from '../components/ProblemsSection'
import EligibilitySection from '../components/EligibilitySection'
import SupportSection from '../components/SupportSection'
import ProcessSection from '../components/ProcessSection'
import DamageSourcesSection from '../components/DamageSourcesSection'
import ComparisonSection from '../components/ComparisonSection'
import AudienceSection from '../components/AudienceSection'
import UrgencySection from '../components/UrgencySection'
import PrinciplesSection from '../components/PrinciplesSection'
import QualificationForm from '../components/QualificationForm'
import FixedCtaBar from '../components/FixedCtaBar'
import ScrollToTop from '../components/ScrollToTop'

export default function HabitationLandingPage() {
  return (
    <div id="top" className="min-h-svh overflow-x-hidden bg-ivory text-slate-warm">
      <main className="pb-safe-cta">
        <HeroSection />
        <ProblemsSection />
        <EligibilitySection />
        <SupportSection />
        <ProcessSection />
        <DamageSourcesSection />
        <ComparisonSection />
        <AudienceSection />
        <UrgencySection />
        <PrinciplesSection />
        <QualificationForm />
      </main>
      <FixedCtaBar />
      <ScrollToTop />
    </div>
  )
}
