import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Figure from './figures/Figure.jsx'
import RepoMeta from './RepoMeta.jsx'
import Chips from './Chips.jsx'
import Icon from './Icon.jsx'
import site from '../content/site.config.js'

export default function ProjectCard({ project, featured = false, index = 0 }) {
  const reduced = useReducedMotion()
  const githubUrl = project.repo ? `https://github.com/${site.githubUser}/${project.repo}` : null

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.24), ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduced ? undefined : { y: -4 }}
      className="group overflow-hidden rounded-xl border border-line bg-card shadow-sm transition-all duration-300 hover:border-accent hover:shadow-md"
    >
      <div
        className={`grid gap-5 ${
          featured ? 'p-0 md:grid-cols-[1fr]' : 'p-5 md:grid-cols-[280px_minmax(0,1fr)] md:gap-6'
        }`}
      >
        <Link
          to={`/projects/${project.slug}`}
          className={`overflow-hidden border-line bg-surface block ${
            featured ? 'border-b aspect-[21/9]' : 'aspect-[16/10] rounded-lg border'
          }`}
        >
          <Figure
            spec={project.thumbnail}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </Link>

        <div className={featured ? 'px-6 pb-7 pt-5' : 'flex flex-col justify-between'}>
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent-2 font-semibold">
                {project.categories.join(' / ')}
              </p>
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-ink-faint hover:text-accent-2 transition-colors"
                >
                  <Icon name="github" size={13} />
                  <span>GitHub</span>
                  <Icon name="arrowUpRight" size={11} />
                </a>
              )}
            </div>

            <h3
              className={`mt-2 font-semibold tracking-tight transition-colors duration-200 group-hover:text-accent-2 ${
                featured ? 'text-[1.65rem]' : 'text-[1.25rem]'
              }`}
            >
              <Link to={`/projects/${project.slug}`}>{project.title}</Link>
            </h3>

            <p className="mt-2.5 max-w-[68ch] text-[0.9375rem] text-ink-muted leading-relaxed">
              {project.summary}
            </p>

            {/* Audited Metrics Badges */}
            {project.stats && project.stats.length > 0 && (
              <div className="mt-3.5 flex flex-wrap gap-2">
                {project.stats.slice(0, 3).map((st) => (
                  <div
                    key={st.label}
                    className="inline-flex items-center gap-1.5 rounded-md border border-line bg-raised px-2.5 py-1 text-[11px] font-mono text-ink"
                  >
                    <span className="text-accent-2 font-semibold">{st.value}</span>
                    <span className="text-ink-faint">({st.label})</span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-3.5">
              <RepoMeta repo={project.repo} placeholder={project.repoPlaceholder} />
            </div>

            <div className="mt-3">
              <Chips items={project.tech.slice(0, 6)} />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-line/60 pt-3">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-accent-2"
            >
              Read full case study
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Icon name="arrowRight" size={15} />
              </span>
            </Link>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-ink-muted hover:text-ink transition-colors"
              >
                <span>Code Repository</span>
                <Icon name="externalLink" size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
