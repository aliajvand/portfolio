import { experience } from '../lib/content.js'
import Markdown from './Markdown.jsx'
import Chips from './Chips.jsx'
import Reveal from './Reveal.jsx'

function Logo({ logo, monogram, company }) {
  if (logo) {
    return (
      <img
        src={logo}
        alt={`${company} logo`}
        width="56"
        height="56"
        loading="lazy"
        className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5 object-contain p-2"
      />
    )
  }
  return (
    <span
      aria-hidden="true"
      className="grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/5 font-mono text-base font-bold text-accent shadow-inner"
    >
      {monogram}
    </span>
  )
}

export default function ExperienceList() {
  return (
    <div className="flex flex-col gap-6">
      {experience.map((job, i) => (
        <Reveal
          key={job.id}
          delay={i * 0.06}
          as="article"
          className="rounded-3xl border border-white/10 bg-[#0e0e16]/80 p-6 sm:p-8 backdrop-blur-md shadow-lg transition-all hover:border-accent/40"
        >
          <div className="grid gap-6 md:grid-cols-[56px_minmax(0,1fr)]">
            <Logo logo={job.logo} monogram={job.monogram} company={job.company} />
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                  {job.period} {job.location && `• ${job.location}`}
                </p>
              </div>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                {job.company}
              </h3>
              <p className="mt-1 text-sm font-semibold text-accent/90 sm:text-base">{job.role}</p>
              <Markdown className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
                {job.body}
              </Markdown>
              <div className="mt-5">
                <Chips items={job.tech} />
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
