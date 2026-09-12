import CTAButton from './CTAButton'
import { scrollToForm } from '../utils/scrollToForm'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/monsinistrema/',
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/monsinistrema/',
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden="true">
        <path d="M14 9h3V5h-3c-2.76 0-5 2.24-5 5v2H6v4h3v8h4v-8h3.1l.9-4H13v-2c0-.55.45-1 1-1z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/monsinistre/',
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.7c0-1.6-.03-3.65-2.22-3.65-2.22 0-2.56 1.73-2.56 3.53V23h-4V8.5z" />
      </svg>
    ),
  },
]

export default function FixedCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 shadow-[0_-8px_30px_-18px_rgba(28,25,23,0.35)] backdrop-blur-xl"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="page-container flex flex-col items-center gap-2 py-2 sm:gap-2.5 sm:py-2.5 lg:grid lg:h-[70px] lg:grid-cols-[1fr_minmax(0,28rem)_1fr] lg:items-center lg:gap-4 lg:py-0">
        <div className="flex items-center justify-center gap-2 lg:justify-start">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="inline-flex size-9 items-center justify-center rounded-full border border-line bg-white text-muted-warm transition-all duration-200 hover:border-copper/30 hover:bg-ember-soft/50 hover:text-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper sm:size-[2.15rem]"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="hidden min-w-0 text-center lg:block">
          <p className="font-display text-sm font-extrabold text-charcoal">
            Votre dossier est encore en cours&nbsp;?
          </p>
          <p className="mt-0.5 text-xs leading-snug text-muted-warm">
            Faites analyser vos dommages avant la décision définitive.
          </p>
        </div>

        <div className="flex w-full justify-center lg:justify-end">
          <CTAButton
            size="sm"
            className="w-full max-w-md !px-4 !py-2.5 text-[13px] sm:max-w-sm lg:w-auto lg:max-w-none"
            onClick={scrollToForm}
          >
            Faire analyser mon dossier
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
