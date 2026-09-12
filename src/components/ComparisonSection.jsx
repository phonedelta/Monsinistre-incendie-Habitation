import { Check, Minus } from 'lucide-react'
import { comparisonWith, comparisonWithout } from '../data/landingContent'
import AnimatedSection from './AnimatedSection'
import CTAButton from './CTAButton'
import SectionHeader from './SectionHeader'

export default function ComparisonSection() {
  return (
    <section id="comparaison" className="section-pad section-anchor bg-ivory">
      <div className="page-container">
        <AnimatedSection>
          <SectionHeader title="Un incendie. Deux façons de gérer le dossier" />
        </AnimatedSection>

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          <AnimatedSection
            variant="left"
            className="rounded-[1.75rem] border border-line bg-surface p-6 transition-shadow duration-300 hover:shadow-[0_16px_40px_-30px_rgba(28,25,23,0.35)] sm:p-8"
          >
            <h3 className="font-display text-xl font-extrabold tracking-tight text-charcoal">
              Sans analyse approfondie
            </h3>
            <ul className="mt-6 space-y-3.5">
              {comparisonWithout.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-0.5"
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sand text-muted-warm">
                    <Minus className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed text-slate-warm sm:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection
            variant="right"
            delay={100}
            className="rounded-[1.75rem] border border-copper/25 bg-gradient-to-br from-beige to-ember-soft/70 p-6 shadow-[0_20px_50px_-34px_rgba(166,93,58,0.45)] transition-shadow duration-300 hover:shadow-[0_24px_56px_-30px_rgba(166,93,58,0.55)] sm:p-8"
          >
            <h3 className="font-display text-xl font-extrabold tracking-tight text-charcoal">
              Avec Monsinistre
            </h3>
            <ul className="mt-6 space-y-3.5">
              {comparisonWith.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-0.5"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-copper text-white">
                    <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed text-slate-warm sm:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={140} className="mt-8 flex justify-center sm:mt-10">
          <CTAButton size="lg" className="w-full sm:w-auto">
            Renforcer mon dossier incendie
          </CTAButton>
        </AnimatedSection>
      </div>
    </section>
  )
}
