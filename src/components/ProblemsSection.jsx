import { AlertTriangle, ClipboardList, Gauge, Search } from 'lucide-react'
import { problems } from '../data/landingContent'
import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'

const icons = [Search, ClipboardList, Gauge, AlertTriangle]

export default function ProblemsSection() {
  return (
    <section id="apres-incendie" className="section-pad section-anchor bg-mist">
      <div className="page-container">
        <AnimatedSection>
          <SectionHeader
            title="Après l’incendie, une deuxième épreuve commence"
            subtitle="Évaluer les pertes, constituer le dossier et échanger avec l’assurance peut rapidement devenir complexe"
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {problems.map((item, index) => {
            const Icon = icons[index]
            return (
              <AnimatedSection
                key={item.id}
                delay={index * 90}
                variant="scale"
                as="article"
                className="h-full"
              >
                <div className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_8px_28px_-24px_rgba(31,51,52,0.3)] hover:border-primary-hover hover:shadow-[0_18px_40px_-28px_rgba(31,51,52,0.35)]">
                  <div className="img-zoom overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      aria-hidden="true"
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="flex items-center gap-2.5">
                      <span className="icon-soft flex size-9 shrink-0 items-center justify-center rounded-xl bg-beige text-mint-text group-hover:bg-primary-dark group-hover:text-white">
                        <Icon className="animate-icon-bob size-4" aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-sm font-extrabold leading-snug tracking-tight text-charcoal sm:text-[15px]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-warm">{item.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
