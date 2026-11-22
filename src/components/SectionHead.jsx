import Reveal from './Reveal.jsx'

export default function SectionHead({ label, title, lead, id }) {
  return (
    <Reveal className="mb-12" dir="rtl">
      <div className="flex flex-col gap-2 text-right">
        {label && (
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            {label}
          </span>
        )}
        <div className="flex items-center gap-5">
          <h2
            id={id}
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl text-right"
          >
            {title}
          </h2>
          <span className="h-px flex-1 bg-white/10 hidden sm:block" />
        </div>
      </div>
      {lead && (
        <p className="mt-3.5 max-w-[74ch] text-sm leading-relaxed text-ink-muted sm:text-base text-right">
          {lead}
        </p>
      )}
    </Reveal>
  )
}
