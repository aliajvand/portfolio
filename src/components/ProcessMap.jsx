import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { process as processData } from '../lib/content.js'
import Icon from './Icon.jsx'

/**
 * Three connected nodes. Hovering (mouse) or focusing/tapping (keyboard, touch)
 * a node opens a connected sub-list with a visible connector back to its parent.
 * Content comes from src/content/process.json.
 */
export default function ProcessMap() {
  const [active, setActive] = useState(null)
  const [pinned, setPinned] = useState(null)
  const reduced = useReducedMotion()
  const wrap = useRef(null)
  const open = pinned || active

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setPinned(null)
        setActive(null)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div ref={wrap} className="relative">
      <ol className="grid gap-x-6 gap-y-10 md:grid-cols-3" role="list">
        {processData.steps.map((step, i) => {
          const isOpen = open === step.id
          return (
            <li key={step.id} className="relative">
              {/* connector to the next node */}
              {i < processData.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-full z-0 h-10 w-px -translate-x-1/2 bg-line md:left-full md:top-[58px] md:h-px md:w-6 md:translate-x-0"
                />
              )}

              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`process-${step.id}`}
                onMouseEnter={() => setActive(step.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(step.id)}
                onBlur={() => setActive(null)}
                onClick={() => setPinned(pinned === step.id ? null : step.id)}
                className={`relative z-10 w-full rounded-lg border px-5 py-5 text-left transition-[border-color,background-color,transform] duration-300 ${
                  isOpen ? 'border-accent bg-raised' : 'border-line bg-card hover:border-ink-faint'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-md transition-colors ${
                      isOpen ? 'bg-accent text-on-accent' : 'bg-raised text-accent-2'
                    }`}
                  >
                    <Icon name={step.icon} size={17} />
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.12em] text-ink-faint">
                    STEP {String(i + 1).padStart(2, '0')}
                  </span>
                </span>
                <span className="mt-4 block font-display text-[1.25rem] font-semibold text-ink">{step.label}</span>
                <span className="mt-2 block text-[0.9375rem] text-ink-muted">{step.summary}</span>
                <span className="mt-4 flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-accent-2">
                  {isOpen ? 'Showing' : 'Hover or tap'} <Icon name={isOpen ? 'x' : 'plus'} size={12} />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`process-${step.id}`}
                    initial={reduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduced ? { opacity: 1 } : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 mt-4 pl-6"
                    onMouseEnter={() => setActive(step.id)}
                    onMouseLeave={() => setActive(null)}
                  >
                    {/* elbow connector: up the left edge, then an arrowhead pointing at the parent node */}
                    <svg
                      aria-hidden="true"
                      className="absolute left-0 top-[-16px] h-[calc(100%+16px)] w-6"
                      viewBox="0 0 24 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M12 100 V14"
                        stroke="var(--color-accent)"
                        strokeWidth="1"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                    <svg aria-hidden="true" className="absolute left-[7px] top-[-18px] h-3 w-3" viewBox="0 0 10 10">
                      <path d="M5 0 L10 9 H0 Z" fill="var(--color-accent)" />
                    </svg>

                    <ul className="flex flex-col gap-2">
                      {step.items.map((item, k) => (
                        <motion.li
                          key={item}
                          initial={reduced ? false : { opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25, delay: reduced ? 0 : k * 0.05, ease: [0.16, 1, 0.3, 1] }}
                          className="relative rounded-sm border border-line bg-surface px-3.5 py-2.5 text-[0.9375rem] text-ink-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute -left-6 top-1/2 h-px w-6 bg-accent opacity-60"
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ol>
      <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
        Tab to move between stages, Enter to keep one open, Esc to close
      </p>
    </div>
  )
}
