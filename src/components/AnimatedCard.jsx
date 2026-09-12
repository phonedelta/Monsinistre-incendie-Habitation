import AnimatedSection from './AnimatedSection'

export default function AnimatedCard({
  children,
  className = '',
  wrapperClassName = '',
  delay = 0,
  as: Tag = 'article',
}) {
  return (
    <AnimatedSection
      as={Tag}
      delay={delay}
      variant="scale"
      className={`h-full ${wrapperClassName}`}
    >
      <div
        className={`card-lift h-full rounded-2xl border border-line bg-surface p-5 hover:border-copper/20 hover:shadow-[0_18px_40px_-28px_rgba(28,25,23,0.35)] sm:p-6 ${className}`}
      >
        {children}
      </div>
    </AnimatedSection>
  )
}
