import { Building2, Home, KeyRound } from 'lucide-react'
import { audienceProfiles } from '../data/landingContent'
import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'

const icons = [Home, Building2, KeyRound]

export default function AudienceSection() {
  return (
    <section id="profils" className="section-pad section-anchor bg-sand/50">
      <div className="page-container">
        <AnimatedSection>
          <SectionHeader title="Cet accompagnement est-il adapté à votre situation ?" />
        </AnimatedSection>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 lg:mt-14 lg:gap-5">
          {audienceProfiles.map((profile, index) => {
            const Icon = icons[index]
            return (
              <AnimatedSection
                key={profile.title}
                delay={index * 90}
                variant="scale"
                as="article"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_8px_28px_-24px_rgba(28,25,23,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:border-copper/20 hover:shadow-[0_18px_40px_-28px_rgba(28,25,23,0.35)]"
              >
                <div className="img-zoom overflow-hidden">
                  <img
                    src={profile.image}
                    alt=""
                    aria-hidden="true"
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3">
                    <span className="icon-soft flex size-10 items-center justify-center rounded-2xl bg-ember-soft text-copper group-hover:bg-copper group-hover:text-white">
                      <Icon className="animate-icon-bob size-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-extrabold tracking-tight text-charcoal">
                      {profile.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-warm">{profile.text}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection
          delay={160}
          variant="scale"
          className="mx-auto mt-8 max-w-3xl rounded-[1.5rem] border border-copper/25 bg-ember-soft/70 p-5 transition-shadow duration-300 hover:shadow-[0_16px_36px_-24px_rgba(166,93,58,0.35)] sm:mt-10 sm:p-7"
        >
          <h3 className="font-display text-lg font-extrabold tracking-tight text-charcoal sm:text-xl">
            Condition essentielle
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-warm sm:text-[15px]">
            Le dossier doit encore être en cours et ne pas avoir fait l’objet d’une décision
            définitive de la compagnie d’assurance
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
