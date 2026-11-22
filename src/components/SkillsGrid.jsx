import { motion, useReducedMotion } from 'framer-motion'
import { skills } from '../lib/content.js'
import Icon from './Icon.jsx'

export default function SkillsGrid() {
  const reduced = useReducedMotion()
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {skills.map((group, gi) => (
        <motion.section
          key={group.group}
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: Math.min(gi * 0.05, 0.2), ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e0e16]/80 p-6 backdrop-blur-md shadow-lg transition-all hover:border-accent/40"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
              {group.group}
            </h3>
            <span className="font-mono text-[11px] text-ink-faint">
              {group.items?.length || 0} مهارت
            </span>
          </div>

          <ul className="mt-5 flex flex-wrap gap-2">
            {(group.items || []).map((item) => (
              <li
                key={item.name}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-white/90 transition-all duration-200 hover:border-accent/50 hover:bg-white/[0.08] hover:text-white"
              >
                {item.icon && <Icon name={item.icon} size={14} className="text-accent shrink-0" />}
                <span className="font-medium">{item.name}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      ))}
    </div>
  )
}
