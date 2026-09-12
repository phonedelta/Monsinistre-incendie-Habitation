import { images } from '../data/landingContent'
import AnimatedSection from './AnimatedSection'
import CTAButton from './CTAButton'
import SectionHeader from './SectionHeader'

export default function UrgencySection() {
  return (
    <section id="urgence" className="section-pad section-anchor relative overflow-hidden text-white">
      <img
        src={images.urgency}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-105 object-cover transition-transform duration-[8s] ease-out hover:scale-110"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-charcoal/88 transition-opacity duration-500" aria-hidden="true" />
      <div className="absolute inset-0 bg-mesh-urgency/40" aria-hidden="true" />

      <div className="page-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection variant="scale">
            <SectionHeader
              light
              title="Une fois le dossier clôturé, vos options peuvent devenir plus limitées"
              subtitle="Le meilleur moment pour examiner les dommages et renforcer techniquement votre dossier est lorsqu’il est encore en cours"
            />
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              Plus tôt les dommages sont identifiés et documentés, plus il est possible de
              disposer d’éléments précis dans le traitement du dossier
            </p>
          </AnimatedSection>

          <AnimatedSection delay={140} className="mt-8 flex justify-center">
            <CTAButton variant="light" size="lg" className="w-full sm:w-auto">
              Mon dossier est encore en cours
            </CTAButton>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
