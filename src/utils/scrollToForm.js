export function scrollToForm() {
  const el = document.getElementById('dossier-form')
  if (!el) return

  const headerOffset = window.matchMedia('(min-width: 1024px)').matches ? 48 : 32
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset

  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  })
}
