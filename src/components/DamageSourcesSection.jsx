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
            className="pointer-events-none absolute left-1/2 top-1/2 hidden size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-copper/15 bg-ember-soft/40 lg:block"
            aria-hidden="true"
          />
          <div
            className="animate-pulse-ring pointer-events-none absolute left-1/2 top-1/2 hidden size-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper/10 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {damageSources.map((source, index) => {
              const Icon = iconMap[source.id]
              const centerOffset =
                index === 4
                  ? 'sm:col-span-2 sm:mx-auto sm:max-w-md lg:col-span-1 lg:col-start-2 lg:mx-0 lg:max-w-none'
                  : ''

              return (
                <AnimatedCard
                  key={source.id}
                  delay={index * 80}
                  className={`group relative overflow-hidden ${centerOffset}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="icon-soft flex size-11 items-center justify-center rounded-2xl bg-ember-soft text-copper group-hover:bg-copper group-hover:text-white group-hover:shadow-[0_10px_24px_-14px_rgba(166,93,58,0.7)]">
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
