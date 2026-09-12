import { processSteps } from '../data/landingContent'
import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import StepCard from './StepCard'

export default function ProcessSection() {
  return (
    <section id="methode" className="section-pad section-anchor bg-ivory">
      <div className="page-container">
        <AnimatedSection>
          <SectionHeader title="Concrètement, que faisons-nous pour votre dossier ?" />
        </AnimatedSection>

        <ol className="mx-auto mt-10 max-w-3xl space-y-5 sm:mt-12 sm:space-y-6 lg:mt-14">
          {processSteps.map((step, index) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              text={step.text}
              delay={index * 100}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}
