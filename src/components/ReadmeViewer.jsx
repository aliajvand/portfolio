import { useState } from 'react'
import { fetchReadme, repoUrl } from '../lib/github.js'
import Markdown from './Markdown.jsx'
import Icon from './Icon.jsx'

/** "View Source": pulls the live README from GitHub and renders it in-page. */
export default function ReadmeViewer({ repo }) {
  const [state, setState] = useState({ open: false, status: 'idle', text: '', error: '' })

  async function toggle() {
    if (state.open) return setState((s) => ({ ...s, open: false }))
    if (state.text) return setState((s) => ({ ...s, open: true }))
    setState({ open: true, status: 'loading', text: '', error: '' })
    try {
      const text = await fetchReadme(repo)
      setState({ open: true, status: 'ready', text, error: '' })
    } catch (err) {
      setState({
        open: true,
        status: 'error',
        text: '',
        error: err.rateLimited
          ? 'GitHub is rate limiting this browser. Try again in a few minutes.'
          : 'No README found in that repository yet.',
      })
    }
  }

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={state.open}
        className="inline-flex items-center gap-2 rounded-sm border border-line bg-card px-3 py-2 font-mono text-[11px] uppercase tracking-[0.09em] text-ink-faint transition-colors hover:border-accent hover:text-accent-2"
      >
        <Icon name="braces" size={13} />
        {state.open ? 'Hide source' : 'View source'}
      </button>

      {state.open && (
        <div className="mt-4 overflow-hidden rounded-md border border-line bg-card">
          <div className="flex items-center justify-between gap-4 border-b border-line bg-raised px-4 py-2.5">
            <span className="label">{repo}/README.md</span>
            <a
              href={repoUrl(repo)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.09em] text-ink-faint hover:text-accent-2"
            >
              Open on GitHub <Icon name="externalLink" size={12} />
            </a>
          </div>
          <div className="max-h-[520px] overflow-auto p-5">
            {state.status === 'loading' && (
              <div className="flex flex-col gap-3">
                {[70, 92, 60, 84].map((w) => (
                  <span key={w} className="h-3 animate-pulse rounded bg-raised" style={{ width: `${w}%` }} />
                ))}
              </div>
            )}
            {state.status === 'error' && <p className="text-[0.9375rem] text-ink-faint">{state.error}</p>}
            {state.status === 'ready' && <Markdown>{state.text}</Markdown>}
          </div>
        </div>
      )}
    </div>
  )
}
