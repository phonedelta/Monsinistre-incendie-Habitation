import { Check } from 'lucide-react'

export default function FormOption({
  type = 'radio',
  name,
  value,
  checked,
  onChange,
  label,
  required = false,
}) {
  return (
    <label
      className={`form-option relative flex min-w-0 cursor-pointer items-center gap-3 rounded-2xl border px-3.5 py-3.5 sm:px-4 ${
        checked
          ? 'is-selected border-copper bg-ember-soft/60 shadow-[0_0_0_1px_rgba(166,93,58,0.18),0_8px_20px_-14px_rgba(166,93,58,0.45)]'
          : 'border-line bg-white hover:border-copper/25 hover:bg-beige/60'
      }`}
    >
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        required={required}
        className="sr-only"
      />
      <span
        className={`flex size-5 shrink-0 items-center justify-center border transition-all duration-250 ${
          type === 'checkbox' ? 'rounded-md' : 'rounded-full'
        } ${checked ? 'border-copper bg-copper text-white scale-105' : 'border-line bg-white'}`}
        aria-hidden="true"
      >
        {checked ? <Check className="check-pop size-3" strokeWidth={3} /> : null}
      </span>
      <span
        className={`min-w-0 break-words text-sm leading-snug transition-colors duration-200 sm:text-[15px] ${
          checked ? 'font-medium text-charcoal' : 'text-slate-warm'
        }`}
      >
        {label}
      </span>
    </label>
  )
}
