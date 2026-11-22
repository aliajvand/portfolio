export default function Chips({ items = [] }) {
  if (!items.length) return null
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[11px] tracking-wide text-ink-muted transition-colors hover:border-white/20 hover:text-white"
        >
          {t}
        </li>
      ))}
    </ul>
  )
}
