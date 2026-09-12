import { Check } from 'lucide-react'
import { eligibilityItems } from '../data/landingContent'
import AnimatedSection from './AnimatedSection'
import CTAButton from './CTAButton'
import SectionHeader from './SectionHeader'

export default function EligibilitySection() {
  return (
    <section id="situation" className="section-pad section-anchor bg-ivory">
      <div className="page-container">
        <AnimatedSection>
          <SectionHeader title="Votre situation ressemble à celle-ci ?" />
        </AnimatedSection>

        <div className="mx-auto mt-10 max-w-3xl rounded-[1.75rem] border border-line bg-surface p-5 shadow-[0_18px_50px_-36px_rgba(28,25,23,0.35)] sm:mt-12 sm:p-8">
          <ul className="space-y-3.5">
            {eligibilityItems.map((item, index) => (
              <AnimatedSection
                key={item}
                as="li"
                delay={index * 80}
                className="flex items-start gap-3 rounded-2xl border border-line/80 bg-beige/40 px-4 py-3.5 transition-all duration-300 hover:border-copper/20 hover:bg-ember-soft/40 hover:translate-x-0.5"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-copper text-white">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-slate-warm sm:text-[15px]">
                  {item}
                </span>
              </AnimatedSection>
            ))}
          </ul>

          <AnimatedSection delay={360} className="mt-7 flex justify-center">
            <CTAButton size="lg" className="w-full sm:w-auto">
              Oui, je souhaite faire examiner mon dossier
            </CTAButton>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
