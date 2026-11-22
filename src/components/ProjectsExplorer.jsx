import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { categoriesWithCounts, projects, showAllProjectsPage } from '../lib/content.js'
import ProjectCard from './ProjectCard.jsx'
import Icon from './Icon.jsx'

export default function ProjectsExplorer({ compact = false }) {
  const categories = useMemo(() => categoriesWithCounts(), [])
  const [active, setActive] = useState('all')
  const list = active === 'all' ? projects : projects.filter((p) => p.categories.includes(active))

  const btn = (isActive) =>
    `flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 shrink-0 whitespace-nowrap border ${
      isActive
        ? 'border-accent/40 bg-accent/15 text-white shadow-sm shadow-accent/10'
        : 'border-white/10 bg-white/[0.03] text-ink-muted hover:border-white/20 hover:text-white hover:bg-white/[0.06]'
    }`

  return (
    <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
      {/* Category selector */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex gap-2 overflow-x-auto pb-2 lg:sticky lg:top-10 lg:flex-col lg:gap-1.5 lg:self-start lg:overflow-visible"
      >
        <button
          type="button"
          onClick={() => setActive('all')}
          aria-pressed={active === 'all'}
          className={btn(active === 'all')}
        >
          <span>همه سیستم‌ها</span>
          <span className="font-mono text-[11px] opacity-80 rounded-full bg-white/10 px-2 py-0.5">
            {projects.length}
          </span>
        </button>

        <span aria-hidden="true" className="my-2 hidden h-px bg-white/10 lg:block" />

        {categories.map((c) => (
          <button
            key={c.name}
            type="button"
            onClick={() => setActive(c.name)}
            aria-pressed={active === c.name}
            className={btn(active === c.name)}
          >
            <span>{c.name}</span>
            <span className="font-mono text-[11px] opacity-80 rounded-full bg-white/10 px-2 py-0.5">
              {c.count}
            </span>
          </button>
        ))}

        {showAllProjectsPage && (
          <>
            <span aria-hidden="true" className="my-2 hidden h-px bg-white/10 lg:block" />
            <Link to="/projects/all" className={`${btn(false)} lg:justify-start text-xs`}>
              <span>آرشیو کامل گیت‌هاب</span>
              <Icon name="arrowUpRight" size={13} />
            </Link>
          </>
        )}
      </div>

      {/* Projects List */}
      <div>
        {list.length ? (
          <div className="flex flex-col gap-6">
            {list.map((p, i) => (
              <ProjectCard
                key={p.slug}
                project={p}
                index={i}
                featured={!compact && p.featured && active === 'all' && i === 0}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-white/10 p-12 text-center bg-white/[0.02]">
            <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-ink-muted">
              <Icon name="folderOpen" size={22} />
            </span>
            <h3 className="text-lg font-bold text-white">پروژه‌ای در این دسته منتشر نشده است</h3>
            <p className="mx-auto mt-2 max-w-[42ch] text-sm text-ink-muted">
              پروژه‌های تکمیل‌شده در سایر دسته‌بندی‌ها قابل مشاهده هستند.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
