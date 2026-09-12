import AnimatedSection from './AnimatedSection'

export default function StepCard({ number, title, text, delay = 0, isLast = false }) {
  return (
    <AnimatedSection
      as="li"
      delay={delay}
      className="group relative grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-6"
    >
      <div className="relative flex items-start gap-4 sm:flex-col sm:items-center">
        <div className="font-display flex size-14 shrink-0 items-center justify-center rounded-2xl border border-copper/20 bg-ember-soft text-lg font-extrabold text-copper shadow-[0_10px_24px_-18px_rgba(166,93,58,0.55)] transition-all duration-400 group-hover:scale-105 group-hover:border-copper/40 group-hover:shadow-[0_14px_28px_-16px_rgba(166,93,58,0.65)] sm:size-16 sm:text-xl">
          {number}
        </div>
        {!isLast ? (
          <span
            className="timeline-line absolute left-7 top-16 hidden h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-copper/35 to-transparent sm:block"
            aria-hidden="true"
          />
        ) : null}
      </div>
      <div className="rounded-2xl border border-line bg-surface p-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-copper/20 group-hover:shadow-[0_16px_36px_-28px_rgba(28,25,23,0.35)] sm:p-6">
        <h3 className="font-display text-lg font-extrabold tracking-tight text-charcoal">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-warm sm:text-[15px]">{text}</p>
      </div>
    </AnimatedSection>
  )
}
