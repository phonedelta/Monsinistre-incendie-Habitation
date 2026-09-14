export default function FormProgress({ current, total }) {
  const percent = Math.round((current / total) * 100)

  return (
    <div className="mb-6 sm:mb-8" aria-label={`Étape ${current} sur ${total}`}>
      <div className="mb-2 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted-warm">
        <span className="transition-all duration-300">
          Étape {current} / {total}
        </span>
        <span className="tabular-nums transition-all duration-300">{percent}%</span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full bg-beige"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`h-full rounded-full bg-primary-dark transition-all duration-500 ease-out ${
            percent > 0 ? 'progress-glow' : ''
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
