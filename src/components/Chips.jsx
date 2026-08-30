export default function Chips({ items = [] }) {
  if (!items.length) return null
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-sm border border-line bg-surface px-2 py-1 font-mono text-[10.5px] tracking-[0.07em] text-ink-faint"
        >
          {t}
        </li>
      ))}
    </ul>
  )
}
