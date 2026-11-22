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
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.2), ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduced ? undefined : { y: -3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d14]/90 p-1 shadow-xl transition-all duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5"
    >
      <div className="grid gap-6 rounded-[22px] bg-[#12121a]/60 p-5 sm:p-7 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-8">
        {/* Project Visual / Poster Container */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-inner group/img">
          <Link
            to={`/projects/${project.slug}`}
            className="block aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[16/10]"
          >
            <Figure
              spec={project.thumbnail}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
            />
            {/* Subtle Apple gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />
          </Link>

          {/* Quick status badge over image */}
          {project.stats && project.stats.length > 0 && (
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3 py-1 font-mono text-xs font-semibold text-white backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span>{project.stats[0].value}</span>
                <span className="text-ink-faint text-[10px]">({project.stats[0].label})</span>
              </span>
            </div>
          )}
        </div>

        {/* Project Content / Story */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Category & GitHub Link */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                {project.categories.join(' • ')}
              </p>
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-ink-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon name="github" size={13} />
                  <span>GitHub</span>
                  <Icon name="arrowUpRight" size={11} />
                </a>
              )}
            </div>

            {/* Title */}
            <h3 className="mt-3 text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-accent sm:text-2xl">
              <Link to={`/projects/${project.slug}`}>{project.title}</Link>
            </h3>

            {/* Summary */}
            <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              {project.summary}
            </p>

            {/* Audited Key Metrics Pill Ribbon */}
            {project.stats && project.stats.length > 1 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stats.slice(1, 4).map((st) => (
                  <div
                    key={st.label}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-ink-muted"
                  >
                    <strong className="text-white font-semibold">{st.value}</strong>
                    <span className="text-ink-faint text-[11px]">{st.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Chips */}
            <div className="mt-5">
              <Chips items={project.tech.slice(0, 6)} />
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-transform hover:translate-x-1"
            >
              <span>مشاهده مستندات و بررسی کامل</span>
              <Icon name="arrowRight" size={15} />
            </Link>

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-faint transition-colors hover:text-white"
              >
                <span>سورس‌کد پروداکشن</span>
                <Icon name="externalLink" size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
