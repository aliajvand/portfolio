import { motion, useReducedMotion } from 'framer-motion'
import { skills } from '../lib/content.js'
import Icon from './Icon.jsx'

/** Grid of skills, grouped by what they are for (see EDITING-GUIDE §5). */
export default function SkillsGrid() {
  const reduced = useReducedMotion()
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {skills.map((group, gi) => (
        <motion.section
          key={group.group}
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: Math.min(gi * 0.05, 0.2), ease: [0.16, 1, 0.3, 1] }}
          className="rounded-lg border border-line bg-card"
        >
          <div className="border-b border-line px-5 py-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-2">{group.group}</h3>
          </div>
          <ul className="flex flex-wrap gap-2 px-5 py-5">
            {(group.items || []).map((item) => (
              <li
                key={item.name}
                className="inline-flex items-center gap-2 rounded-sm border border-line bg-surface px-3 py-1.5 text-[0.875rem] text-ink transition-colors duration-200 hover:border-accent hover:text-accent-2"
              >
                {item.icon && <Icon name={item.icon} size={15} />}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      ))}
    </div>
  )
}
