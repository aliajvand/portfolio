import { useEffect, useState } from 'react'
import { fetchRepo, formatDate } from '../lib/github.js'
import Icon from './Icon.jsx'

/** Live stars / language / last-updated for one repo. Degrades quietly. */
export default function RepoMeta({ repo, placeholder = false }) {
  const [state, setState] = useState({ status: repo ? 'loading' : 'none', data: null, message: '' })

  useEffect(() => {
    if (!repo) return
    let alive = true
    fetchRepo(repo)
      .then((data) => alive && setState({ status: 'ready', data, message: '' }))
      .catch((err) =>
        alive &&
        setState({
          status: 'error',
          data: null,
          message: err.rateLimited ? 'GitHub rate limit, stats back shortly' : 'Repository not public yet',
        })
      )
    return () => {
      alive = false
    }
  }, [repo])

  const wrap = 'flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] tracking-[0.08em] text-ink-faint'

  if (!repo) {
    return (
      <div className={wrap}>
        <span className="inline-flex items-center gap-1.5">
          <Icon name={placeholder ? 'lock' : 'github'} size={13} />
          {placeholder ? 'REPO NAME TO BE CONFIRMED' : 'PRIVATE WORK'}
        </span>
      </div>
    )
  }
  if (state.status === 'loading') {
    return (
      <div className={wrap}>
        <span className="h-3 w-40 animate-pulse rounded bg-raised" />
      </div>
    )
  }
  if (state.status === 'error') {
    return (
      <div className={wrap}>
        <span className="inline-flex items-center gap-1.5">
          <Icon name="clock" size={13} />
          {state.message.toUpperCase()}
        </span>
      </div>
    )
  }

  const d = state.data
  return (
    <div className={wrap}>
      <span className="inline-flex items-center gap-2">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent-2" />
        {(d.language || 'MULTIPLE').toUpperCase()}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Icon name="star" size={13} /> {d.stargazers_count || 0}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Icon name="updated" size={13} /> UPDATED {formatDate(d.pushed_at || d.updated_at).toUpperCase()}
      </span>
    </div>
  )
}
