import { useEffect, useRef } from 'react'

/** A single soft accent glow that follows the pointer. Skipped on touch and reduced-motion. */
export default function AmbientGlow() {
  const ref = useRef(null)

  useEffect(() => {
    if (typeof matchMedia !== 'function') return
    if (!matchMedia('(pointer: fine)').matches) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return
    let frame = 0
    const onMove = (e) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX - 320}px, ${e.clientY - 320}px, 0)`
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={ref}
        className="h-[640px] w-[640px] rounded-full opacity-[0.18] transition-transform duration-500 will-change-transform"
        style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 66%)' }}
      />
    </div>
  )
}
