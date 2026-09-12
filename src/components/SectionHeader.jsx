export default function SectionHeader({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <div className={`flex max-w-3xl flex-col ${alignClass} ${className}`}>
      {eyebrow ? (
        <span
          className={`mb-3 inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] ${
            light
              ? 'border-white/20 bg-white/10 text-white/80'
              : 'border-copper/15 bg-ember-soft/80 text-copper'
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`font-display text-[1.55rem] font-extrabold leading-[1.18] tracking-tight text-balance sm:text-3xl lg:text-4xl ${
          light ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 max-w-2xl text-sm leading-relaxed text-pretty sm:text-base ${
            light ? 'text-white/70' : 'text-muted-warm'
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
