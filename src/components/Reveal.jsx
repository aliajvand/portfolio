import { motion, useReducedMotion } from 'framer-motion'
import { tokens } from '../lib/theme.js'

/** Scroll-in reveal. Only opacity + transform, so it never triggers layout. */
export default function Reveal({ children, delay = 0, y = 16, as = 'div', className = '', ...rest }) {
  const reduced = useReducedMotion()
  const Tag = motion[as] || motion.div
  if (reduced) return <Tag className={className} {...rest}>{children}</Tag>
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: tokens.motion.slow, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
