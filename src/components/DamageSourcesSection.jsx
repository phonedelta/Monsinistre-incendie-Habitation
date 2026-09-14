import { Droplets, Flame, Thermometer, Wind, Zap } from 'lucide-react'
import { damageSources } from '../data/landingContent'
import AnimatedCard from './AnimatedCard'
import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'

const iconMap = {
  feu: Flame,
  fumee: Wind,
  chaleur: Thermometer,
  extinction: Droplets,
  installations: Zap,
}

function cardColClass(index) {
  // Desktop: 3 cards on top, 2 centered below
  if (index < 3) return 'lg:col-span-2'
  if (index === 3) return 'sm:col-span-1 lg:col-span-2 lg:col-start-2'
  return 'sm:col-span-1 lg:col-span-2 lg:col-start-4'
}

export default function DamageSourcesSection() {
  return (
    <section id="dommages" className="section-pad section-anchor overflow-hidden bg-mist">
      <div className="page-container">
        <AnimatedSection>
          <SectionHeader
            title="Le feu n’est pas la seule source de dommages"
            subtitle="Une expertise incendie doit regarder au-delà de ce qui est immédiatement visible"
          />
        </AnimatedSection>

        <div className="relative mx-auto mt-12 max-w-5xl sm:mt-14">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 hidden size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-mint-border/40 bg-beige/40 lg:block"
            aria-hidden="true"
          />
          <div
            className="animate-pulse-ring pointer-events-none absolute left-1/2 top-1/2 hidden size-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {damageSources.map((source, index) => {
              const Icon = iconMap[source.id]

              return (
                <AnimatedCard
                  key={source.id}
                  delay={index * 80}
                  wrapperClassName={cardColClass(index)}
                  className="group relative overflow-hidden"
                >
                  <div className="flex items-center gap-3">
                    <span className="icon-soft flex size-11 items-center justify-center rounded-2xl bg-beige text-mint-text group-hover:bg-primary-dark group-hover:text-white group-hover:shadow-[0_10px_24px_-14px_rgba(86,154,155,0.45)]">
                      <Icon className="animate-icon-bob size-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-extrabold tracking-tight text-charcoal">
                      {source.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-warm">{source.text}</p>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
