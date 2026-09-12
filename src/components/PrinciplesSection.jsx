import { FileSearch, FolderKanban, Target, Workflow } from 'lucide-react'
import { principles } from '../data/landingContent'
import AnimatedCard from './AnimatedCard'
import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'

const icons = [FileSearch, Workflow, FolderKanban, Target]

export default function PrinciplesSection() {
  return (
    <section id="principes" className="section-pad section-anchor bg-ivory">
      <div className="page-container">
        <AnimatedSection>
          <SectionHeader title="Après un incendie, chaque détail compte" />
        </AnimatedSection>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {principles.map((item, index) => {
            const Icon = icons[index]
            return (
              <AnimatedCard key={item.title} delay={index * 90} className="group h-full">
                <span className="icon-soft flex size-11 items-center justify-center rounded-2xl bg-ember-soft text-copper group-hover:bg-copper group-hover:text-white">
                  <Icon className="animate-icon-bob size-5" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-5 text-base font-extrabold leading-snug tracking-tight text-charcoal sm:text-[1.05rem]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-warm">{item.text}</p>
              </AnimatedCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
