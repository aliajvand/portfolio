import Icon from './Icon.jsx'

/** Clearly-labelled empty/TODO state. Never fakes content. */
export default function Placeholder({ title, children, icon = 'warning' }) {
  return (
    <div className="flex items-start gap-3 rounded-md border border-dashed border-line bg-card px-5 py-4 text-[15px] text-ink-faint">
      <span className="mt-0.5 text-accent-3">
        <Icon name={icon} size={17} />
      </span>
      <span>
        {title && <strong className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent-3">{title} </strong>}
        {children}
      </span>
    </div>
  )
}
