import { useEffect, useState } from 'react'
import { fetchFile, fetchTree } from '../lib/github.js'
import { highlight, languageOf } from '../lib/highlight.js'
import Markdown from './Markdown.jsx'
import Icon from './Icon.jsx'

/** GitHub-style in-page code browser: file tree, tabs, copy button. */
export default function CodeViewer({ repo }) {
  const [tree, setTree] = useState({ status: 'idle', branch: '', files: [], error: '' })
  const [tabs, setTabs] = useState([])
  const [current, setCurrent] = useState(null)
  const [file, setFile] = useState({ status: 'idle', text: '', error: '' })
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let alive = true
    setTree({ status: 'loading', branch: '', files: [], error: '' })
    fetchTree(repo)
      .then(({ branch, files }) => {
        if (!alive) return
        setTree({ status: files.length ? 'ready' : 'empty', branch, files, error: '' })
        if (files.length) open(files[0].path, branch)
      })
      .catch((err) =>
        alive &&
        setTree({
          status: 'error',
          branch: '',
          files: [],
          error: err.rateLimited ? 'GitHub is rate limiting this browser.' : 'Repository is not readable yet.',
        })
      )
    return () => {
      alive = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repo])

  async function open(path, branchOverride) {
    const branch = branchOverride || tree.branch
    setCurrent(path)
    setTabs((t) => (t.includes(path) ? t : [...t, path].slice(-5)))
    setFile({ status: 'loading', text: '', error: '' })
    try {
      const text = await fetchFile(repo, branch, path)
      setFile({ status: 'ready', text, error: '' })
    } catch {
      setFile({ status: 'error', text: '', error: 'Could not read that file.' })
    }
  }

  function copy() {
    navigator.clipboard.writeText(file.text || '').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  if (tree.status === 'error' || tree.status === 'empty') {
    return (
      <div className="mt-6 rounded-md border border-dashed border-line px-5 py-8 text-center text-[0.9375rem] text-ink-faint">
        <span className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-md bg-card">
          <Icon name="fileMissing" size={18} />
        </span>
        {tree.error || 'No readable source files in that repository yet.'}
      </div>
    )
  }

  const groups = tree.files.reduce((acc, f) => {
    const dir = f.path.includes('/') ? f.path.split('/').slice(0, -1).join('/') : 'root'
    acc[dir] = acc[dir] || []
    acc[dir].push(f)
    return acc
  }, {})

  return (
    <div className="mt-6 overflow-hidden rounded-md border border-line bg-card">
      <div className="flex items-center justify-between gap-4 border-b border-line bg-raised px-4 py-2.5">
        <span className="label">
          {repo}
          {tree.branch && ` / ${tree.branch}`}
        </span>
        <button
          type="button"
          onClick={copy}
          disabled={file.status !== 'ready'}
          className="inline-flex items-center gap-1.5 rounded-sm border border-line px-2.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.09em] text-ink-faint transition-colors hover:border-accent hover:text-accent-2 disabled:opacity-40"
        >
          <Icon name={copied ? 'check' : 'clipboard'} size={12} />
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div className="grid lg:grid-cols-[240px_minmax(0,1fr)]">
        <div className="max-h-[200px] overflow-auto border-b border-line p-2 lg:max-h-[520px] lg:border-b-0 lg:border-r">
          {tree.status === 'loading' && <span className="block h-3 w-2/3 animate-pulse rounded bg-raised" />}
          {Object.keys(groups)
            .sort()
            .map((dir) => (
              <div key={dir}>
                <p className="px-2 pb-1.5 pt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint opacity-70">{dir}</p>
                {groups[dir].map((f) => (
                  <button
                    key={f.path}
                    type="button"
                    onClick={() => open(f.path)}
                    className={`flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left font-mono text-[11.5px] transition-colors ${
                      current === f.path ? 'bg-raised text-accent-2' : 'text-ink-faint hover:bg-raised hover:text-ink'
                    }`}
                  >
                    <Icon name="file" size={12} />
                    <span className="truncate">{f.path.split('/').pop()}</span>
                  </button>
                ))}
              </div>
            ))}
        </div>

        <div className="min-w-0">
          {tabs.length > 0 && (
            <div className="flex gap-0.5 overflow-x-auto border-b border-line bg-raised px-2 pt-2">
              {tabs.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => open(t)}
                  className={`whitespace-nowrap rounded-t-sm px-3 py-2 font-mono text-[11.5px] transition-colors ${
                    current === t ? 'bg-card text-ink' : 'text-ink-faint hover:text-ink'
                  }`}
                >
                  {t.split('/').pop()}
                </button>
              ))}
            </div>
          )}
          <div className="max-h-[470px] overflow-auto">
            {file.status === 'loading' && (
              <div className="flex flex-col gap-3 p-5">
                {[60, 88, 74].map((w) => (
                  <span key={w} className="h-3 animate-pulse rounded bg-raised" style={{ width: `${w}%` }} />
                ))}
              </div>
            )}
            {file.status === 'error' && <p className="p-5 text-[0.9375rem] text-ink-faint">{file.error}</p>}
            {file.status === 'ready' &&
              (/\.md$/i.test(current || '') ? (
                <div className="p-5">
                  <Markdown>{file.text}</Markdown>
                </div>
              ) : (
                <pre
                  className="hl m-0 overflow-auto p-4 text-[13px] leading-[1.65] text-ink-muted"
                  // highlight() escapes the source before adding spans
                  dangerouslySetInnerHTML={{ __html: highlight(file.text, languageOf(current || '')) }}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
