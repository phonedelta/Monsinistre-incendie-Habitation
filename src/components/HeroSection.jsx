import { images } from '../data/landingContent'
import CTAButton from './CTAButton'

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-[calc(100svh-78px)] overflow-hidden"
    >
      <img
        src={images.hero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-105 object-cover object-center"
        loading="eager"
        decoding="async"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-charcoal/88 via-charcoal/72 to-charcoal/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-charcoal/20"
        aria-hidden="true"
      />
      <div
        className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="page-container relative z-10 flex min-h-[calc(100svh-78px)] items-center pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16">
        <div className="max-w-2xl text-left">
          <h1 className="hero-enter font-display text-[1.65rem] font-extrabold leading-[1.15] tracking-tight text-white text-balance sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            Votre habitation a subi un incendie&nbsp;? Ne gérez pas seul votre dossier
            d’assurance
          </h1>

          <p className="hero-enter hero-enter-delay-1 mt-4 max-w-xl text-sm leading-relaxed text-white/80 text-pretty sm:text-[15px] lg:text-base">
            Si votre logement est assuré et que votre dossier est toujours en cours,
            Monsinistre vous accompagne dans l’évaluation des dommages et la défense de
            votre indemnisation
          </p>

          <div className="hero-enter hero-enter-delay-2 mt-8 flex justify-start">
            <CTAButton
              size="lg"
              className="w-full max-w-md sm:w-auto focus-visible:ring-offset-transparent"
            >
              Faire analyser mon dossier incendie
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
