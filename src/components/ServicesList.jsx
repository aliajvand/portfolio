import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { services } from '../lib/content.js'
import Markdown from './Markdown.jsx'
import Icon from './Icon.jsx'

export default function ServicesList() {
  const [open, setOpen] = useState(0)
  const reduced = useReducedMotion()

  return (
    <div className="border-t border-line">
      {services.map((service, i) => {
        const isOpen = open === i
        return (
          <div key={service.heading} className="border-b border-line">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`service-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group grid w-full grid-cols-[46px_minmax(0,1fr)_24px] items-center gap-4 py-6 text-left transition-[padding] duration-300 hover:pl-3"
              >
                <span className="font-mono text-[13px] text-accent-2">{String(i + 1).padStart(2, '0')}</span>
                <span className={`font-display text-[1.1875rem] font-medium ${isOpen ? 'text-accent-2' : 'text-ink'}`}>
                  {service.heading}
                </span>
                <span className={`text-ink-faint transition-transform duration-300 ${isOpen ? 'rotate-45 text-accent-2' : ''}`}>
                  <Icon name="plus" size={19} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`service-${i}`}
                  initial={reduced ? { opacity: 1 } : { opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? { opacity: 1 } : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="pb-8 pl-0 md:pl-[62px]"
                >
                  <Markdown className="max-w-[68ch]">{service.body}</Markdown>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
