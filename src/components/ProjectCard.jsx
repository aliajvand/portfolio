import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Figure from './figures/Figure.jsx'
import RepoMeta from './RepoMeta.jsx'
import Chips from './Chips.jsx'
import Icon from './Icon.jsx'

/** The approved card layout: figure on the left, story on the right. */
export default function ProjectCard({ project, featured = false, index = 0 }) {
  const reduced = useReducedMotion()
  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.24), ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduced ? undefined : { y: -4 }}
      className="group overflow-hidden rounded-lg border border-line bg-card transition-colors duration-300 hover:border-accent"
    >
      <Link
        to={`/projects/${project.slug}`}
        className={`grid gap-5 ${featured ? 'p-0' : 'p-5 md:grid-cols-[220px_minmax(0,1fr)] md:gap-6'}`}
      >
        <div
          className={`overflow-hidden border-line bg-surface ${
            featured ? 'border-b' : 'aspect-[16/10] rounded-md border'
          }`}
        >
          <Figure spec={project.thumbnail} alt={`${project.title} preview`} />
        </div>

        <div className={featured ? 'px-6 pb-7 pt-5' : ''}>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent-2">
            {project.categories.join(' / ')}
          </p>
          <h3
            className={`mt-2 font-semibold transition-colors duration-200 group-hover:text-accent-2 ${
              featured ? 'text-[1.6rem]' : 'text-[1.25rem]'
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-3 max-w-[64ch] text-[0.9375rem] text-ink-muted">{project.summary}</p>
          <div className="mt-4">
            <RepoMeta repo={project.repo} placeholder={project.repoPlaceholder} />
          </div>
          <div className="mt-4">
            <Chips items={project.tech.slice(0, 6)} />
          </div>
          <p className="mt-5 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-accent-2">
            Read the case study
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <Icon name="arrowRight" size={15} />
            </span>
          </p>
        </div>
      </Link>
    </motion.article>
  )
}
