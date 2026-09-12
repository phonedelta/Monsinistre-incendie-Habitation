import { ArrowRight } from 'lucide-react'
import { scrollToForm } from '../utils/scrollToForm'

export default function CTAButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
  fullWidth = false,
  disabled = false,
}) {
  const sizes = {
    sm: 'gap-2 rounded-xl px-4 py-2.5 text-sm',
    md: 'gap-2 rounded-xl px-5 py-3 text-sm sm:text-[15px]',
    lg: 'gap-2.5 rounded-2xl px-6 py-3.5 text-[15px] sm:text-base',
  }

  const base =
    'group cta-shine inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed whitespace-normal text-center sm:whitespace-nowrap'

  const variants = {
    primary:
      'bg-copper text-white shadow-[0_10px_28px_-14px_rgba(166,93,58,0.55)] hover:bg-copper-dark hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-12px_rgba(166,93,58,0.6)] focus-visible:ring-copper active:translate-y-0 active:scale-[0.98]',
    secondary:
      'bg-white text-charcoal border border-line hover:border-copper/30 hover:bg-ember-soft/50 hover:-translate-y-0.5 focus-visible:ring-copper',
    ghost:
      'bg-transparent text-charcoal border border-line hover:border-copper/25 hover:bg-white focus-visible:ring-copper',
    light:
      'bg-white text-charcoal shadow-md hover:bg-ivory hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-white active:translate-y-0',
  }

  const handleClick = (event) => {
    if (disabled) return
    if (onClick) {
      onClick(event)
      return
    }
    if (type === 'submit') return
    scrollToForm()
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <span className="relative z-10 min-w-0">{children}</span>
      <ArrowRight
        className="relative z-10 size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-4"
        aria-hidden="true"
      />
    </button>
  )
}
