import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects, site } from '../lib/content.js'
import { fetchAllRepos, formatDate } from '../lib/github.js'
import { useSeo } from '../lib/seo.js'
import Page from '../components/Page.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Icon from '../components/Icon.jsx'

export default function AllProjects() {
  useSeo({ title: 'All projects', path: '/projects/all', description: 'Every public repository, pulled live from GitHub.' })
  const [state, setState] = useState({ status: 'loading', repos: [], error: '' })

  useEffect(() => {
    let alive = true
    fetchAllRepos()
      .then((repos) => alive && setState({ status: 'ready', repos: repos.filter((r) => !r.fork), error: '' }))
      .catch((err) =>
        alive &&
        setState({
          status: 'error',
          repos: [],
          error: err.rateLimited ? 'GitHub is rate limiting this browser. Try again shortly.' : 'Could not reach GitHub.',
        })
      )
    return () => {
      alive = false
    }
  }, [])

  return (
    <Page>
      <Link to="/projects" className="group label mb-6 inline-flex items-center gap-2 hover:text-accent-2">
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          <Icon name="arrowLeft" size={14} />
        </span>
        Back to projects
      </Link>
      <SectionHead label="Archive" title="Every public repository" lead="Live from the GitHub API, newest first. The written case studies live under Projects." />

      {state.status === 'loading' && (
        <div className="flex flex-col gap-3">
          {[80, 65, 90].map((w) => (
            <span key={w} className="h-16 animate-pulse rounded-md bg-card" style={{ width: `${w}%` }} />
          ))}
        </div>
      )}

      {state.status === 'error' && (
        <div className="rounded-lg border border-dashed border-line px-6 py-14 text-center">
          <h3 className="text-[1.125rem] font-semibold">{state.error}</h3>
          <a
            href={`https://github.com/${site.githubUser}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-accent-2"
          >
            Open the GitHub profile <Icon name="externalLink" size={14} />
          </a>
        </div>
      )}

      {state.status === 'ready' && (
        <ul className="grid gap-px overflow-hidden rounded-md bg-line">
          {state.repos.map((r) => {
            const mapped = projects.find((p) => p.repo === r.name)
            const inner = (
              <>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-[1.0625rem] font-semibold">{r.name}</h3>
                  <span className="font-mono text-[11px] tracking-[0.08em] text-ink-faint">
                    {(r.language || 'MULTIPLE').toUpperCase()} / {r.stargazers_count} STARS / {formatDate(r.pushed_at).toUpperCase()}
                  </span>
                </div>
                <p className="mt-2 max-w-[70ch] text-[0.9375rem] text-ink-muted">
                  {r.description || 'No description set on GitHub yet.'}
                </p>
                <p className="mt-3 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-accent-2">
                  {mapped ? 'Read the case study' : 'Open on GitHub'}
                  <Icon name={mapped ? 'arrowRight' : 'externalLink'} size={14} />
                </p>
              </>
            )
            return (
              <li key={r.id} className="bg-bg p-5 transition-colors hover:bg-card">
                {mapped ? (
                  <Link to={`/projects/${mapped.slug}`}>{inner}</Link>
                ) : (
                  <a href={r.html_url} target="_blank" rel="noopener noreferrer">
                    {inner}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </Page>
  )
}
