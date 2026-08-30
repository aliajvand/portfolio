import { useEffect, useRef, useState } from 'react'
import Figure from './figures/Figure.jsx'
import Icon from './Icon.jsx'

/**
 * Power BI "Publish to web" embed, loaded only when it scrolls into view so it
 * never blocks first paint. Falls back to interactive screenshots (or the
 * generated dashboard figure) when no embed URL is set yet.
 */
export default function PowerBiViewer({ embedUrl, screenshots = [], title = 'Dashboard' }) {
  const [visible, setVisible] = useState(false)
  const [page, setPage] = useState(0)
  const holder = useRef(null)

  useEffect(() => {
    if (!embedUrl || !holder.current) return
    if (typeof IntersectionObserver === 'undefined') return setVisible(true)
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    io.observe(holder.current)
    return () => io.disconnect()
  }, [embedUrl])

  const tabs = screenshots.length ? screenshots.map((s, i) => `Page ${i + 1}`) : ['Overview']

  return (
    <div ref={holder} className="mt-6 overflow-hidden rounded-md border border-line bg-card">
      <div className="flex flex-wrap items-center gap-2 border-b border-line bg-raised px-3 py-2.5">
        {!embedUrl &&
          tabs.map((t, i) => (
            <button
              key={t}
              type="button"
              onClick={() => setPage(i)}
              aria-pressed={page === i}
              className={`rounded-sm px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.09em] transition-colors ${
                page === i ? 'bg-accent text-on-accent' : 'text-ink-faint hover:text-ink'
              }`}
            >
              {t}
            </button>
          ))}
        <span className="flex-1" />
        <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.09em] text-ink-faint">
          <Icon name="chart" size={12} />
          {embedUrl ? 'Live Power BI embed' : 'Interactive preview, no download'}
        </span>
      </div>

      {embedUrl ? (
        visible ? (
          <iframe
            title={`${title} - Power BI report`}
            src={embedUrl}
            loading="lazy"
            allowFullScreen
            className="block aspect-[16/9] w-full border-0"
          />
        ) : (
          <div className="grid aspect-[16/9] w-full place-items-center bg-surface text-ink-faint">
            <span className="label">Loading report…</span>
          </div>
        )
      ) : (
        <div className="p-5">
          {screenshots.length ? (
            <img
              src={screenshots[page]}
              alt={`${title} dashboard, page ${page + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full rounded-sm border border-line"
            />
          ) : (
            <Figure spec="figure:dashboard" />
          )}
        </div>
      )}
    </div>
  )
}
