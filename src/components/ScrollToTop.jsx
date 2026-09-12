import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      aria-label="Retour en haut de page"
      onClick={() => {
        document.getElementById('accueil')?.scrollIntoView({ behavior: 'smooth' })
      }}
      className="fixed right-4 z-50 inline-flex size-10 items-center justify-center rounded-full bg-copper text-white shadow-[0_10px_30px_-12px_rgba(166,93,58,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 sm:right-5"
      style={{
        bottom: 'calc(6.75rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <ArrowUp className="size-4" aria-hidden="true" />
    </button>
  )
}
