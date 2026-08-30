import Reveal from './Reveal.jsx'

export default function SectionHead({ label, title, lead, id }) {
  return (
    <Reveal className="mb-10">
      <div className="flex items-baseline gap-5">
        {label && <span className="label whitespace-nowrap">{label}</span>}
        <h2 id={id} className="text-[clamp(1.65rem,3.2vw,2.35rem)] font-semibold">
          {title}
        </h2>
        <span className="h-px flex-1 bg-line" />
      </div>
      {lead && <p className="mt-5 max-w-[68ch] text-ink-muted">{lead}</p>}
    </Reveal>
  )
}
