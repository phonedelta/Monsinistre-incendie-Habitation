import { images } from '../data/landingContent'
import AnimatedSection from './AnimatedSection'
import CTAButton from './CTAButton'
import SectionHeader from './SectionHeader'

export default function SupportSection() {
  return (
    <section id="accompagnement" className="section-pad section-anchor overflow-hidden bg-sand/60">
      <div className="page-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <AnimatedSection variant="left">
              <SectionHeader
                align="left"
                title="Vous gérez les conséquences de l’incendie. Nous renforçons votre dossier"
                subtitle="Monsinistre intervient sur l’aspect technique du sinistre pour identifier, documenter et évaluer les dommages liés à l’incendie"
              />
            </AnimatedSection>
            <AnimatedSection variant="left" delay={80}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-warm sm:text-base">
                Notre accompagnement vise à construire une vision précise des pertes
                réellement subies et à disposer d’un dossier technique solide dans les
                échanges avec votre compagnie d’assurance
              </p>
            </AnimatedSection>
            <AnimatedSection variant="left" delay={140} className="mt-7">
              <CTAButton size="lg" className="w-full sm:w-auto">
                Demander une prise en charge
              </CTAButton>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="right" delay={100}>
            <div className="overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[0_22px_50px_-36px_rgba(28,25,23,0.4)] transition-shadow duration-500 hover:shadow-[0_28px_56px_-32px_rgba(28,25,23,0.5)]">
              <div className="img-zoom">
                <img
                  src={images.expertise}
                  alt="Dossier technique d’expertise avec documents"
                  width={960}
                  height={720}
                  className="aspect-[4/3] w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="grid grid-cols-2 gap-px border-t border-line bg-line">
                <div className="bg-beige/70 px-4 py-4 transition-colors duration-300 hover:bg-ember-soft/60">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-warm">
                    Conséquences
                  </p>
                  <p className="font-display mt-1 text-sm font-bold text-charcoal">
                    De l’incendie
                  </p>
                </div>
                <div className="bg-charcoal px-4 py-4 text-white transition-colors duration-300 hover:bg-slate-warm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/55">
                    Travail technique
                  </p>
                  <p className="font-display mt-1 text-sm font-bold">Sur le dossier</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
