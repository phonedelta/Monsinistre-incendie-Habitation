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
          ? 'is-selected border-primary-dark bg-beige text-selected shadow-[inset_0_0_0_1px_rgb(86_154_155_/18%)]'
          : 'border-[#d8e7e5] bg-white hover:border-primary-hover hover:bg-beige'
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
        } ${checked ? 'border-mint-text bg-mint-text text-white scale-105' : 'border-[#d8e7e5] bg-white'}`}
        aria-hidden="true"
      >
        {checked ? <Check className="check-pop size-3" strokeWidth={3} /> : null}
      </span>
      <span
        className={`min-w-0 break-words text-sm leading-snug transition-colors duration-200 sm:text-[15px] ${
          checked ? 'font-medium text-selected' : 'text-charcoal'
        }`}
      >
        {label}
      </span>
    </label>
  )
}
