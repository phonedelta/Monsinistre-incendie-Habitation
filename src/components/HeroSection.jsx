import { images } from '../data/landingContent'
import CTAButton from './CTAButton'

export default function HeroSection() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-mesh-warm">
      <div className="page-container grid items-center gap-10 py-12 sm:gap-12 sm:py-16 lg:min-h-[100svh] lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
          <h1 className="hero-enter font-display text-[1.7rem] font-extrabold leading-[1.12] tracking-tight text-charcoal text-balance sm:text-4xl md:text-5xl lg:text-[3.15rem]">
            Votre habitation a subi un incendie&nbsp;? Ne gérez pas seul votre dossier
            d’assurance
          </h1>

          <p className="hero-enter hero-enter-delay-1 mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-warm text-pretty sm:text-base lg:mx-0">
            Si votre logement est assuré et que votre dossier est toujours en cours,
            Monsinistre vous accompagne dans l’évaluation des dommages et la défense de
            votre indemnisation
          </p>

          <div className="hero-enter hero-enter-delay-2 mt-7 flex justify-center lg:justify-start">
            <CTAButton size="lg" className="w-full max-w-md sm:w-auto">
              Faire analyser mon dossier incendie
            </CTAButton>
          </div>
        </div>

        <div className="hero-media-enter relative mx-auto w-full max-w-[420px] lg:max-w-[480px] lg:justify-self-end">
          <div className="animate-pulse-ring absolute -inset-3 rounded-[2rem] bg-copper/5 blur-2xl" aria-hidden="true" />
          <div className="img-zoom relative overflow-hidden rounded-[1.75rem] border border-line/80 shadow-[0_28px_60px_-36px_rgba(28,25,23,0.45)]">
            <img
              src={images.hero}
              alt="Habitation résidentielle moderne"
              width={960}
              height={960}
              className="aspect-square w-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
