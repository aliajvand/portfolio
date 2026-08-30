import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { categoriesWithCounts, projects, showAllProjectsPage } from '../lib/content.js'
import ProjectCard from './ProjectCard.jsx'
import Icon from './Icon.jsx'

/** Category rail + filtered cards. Categories are derived from the project files. */
export default function ProjectsExplorer({ compact = false }) {
  const categories = useMemo(() => categoriesWithCounts(), [])
  const [active, setActive] = useState('all')
  const list = active === 'all' ? projects : projects.filter((p) => p.categories.includes(active))

  const btn = (isActive) =>
    `flex items-center justify-between gap-3 rounded-sm px-3 py-2.5 text-left text-[0.9375rem] font-medium transition-colors duration-200 max-lg:shrink-0 max-lg:whitespace-nowrap max-lg:rounded-pill max-lg:border max-lg:border-line max-lg:px-4 ${
      isActive ? 'bg-raised text-accent-2' : 'text-ink-faint hover:bg-card hover:text-ink'
    }`

  return (
    <div className="grid gap-8 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12">
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex gap-2 overflow-x-auto pb-1 lg:sticky lg:top-10 lg:flex-col lg:gap-0.5 lg:self-start lg:overflow-visible"
      >
        <button type="button" onClick={() => setActive('all')} aria-pressed={active === 'all'} className={btn(active === 'all')}>
          All work <span className="font-mono text-[11px] opacity-70">{projects.length}</span>
        </button>
        <span aria-hidden="true" className="my-3 hidden h-px bg-line lg:block" />
        {categories.map((c) => (
          <button key={c.name} type="button" onClick={() => setActive(c.name)} aria-pressed={active === c.name} className={btn(active === c.name)}>
            {c.name} <span className="font-mono text-[11px] opacity-70">{c.count}</span>
          </button>
        ))}
        {showAllProjectsPage && (
          <>
            <span aria-hidden="true" className="my-3 hidden h-px bg-line lg:block" />
            <Link to="/projects/all" className={`${btn(false)} lg:justify-start`}>
              Full GitHub archive <Icon name="arrowUpRight" size={13} />
            </Link>
          </>
        )}
      </div>

      <div>
        {list.length ? (
          <div className="flex flex-col gap-6">
            {list.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} featured={!compact && p.featured && active === 'all' && i === 0} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-line px-6 py-16 text-center">
            <span className="mx-auto mb-4 grid h-11 w-11 place-items-center rounded-md bg-card text-ink-faint">
              <Icon name="folderOpen" size={20} />
            </span>
            <h3 className="text-[1.125rem] font-semibold">Nothing published here yet</h3>
            <p className="mx-auto mt-2 max-w-[44ch] text-[0.9375rem] text-ink-muted">
              This category is on the roadmap. The finished work sits under the other filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
