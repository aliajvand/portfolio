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
        className="h-14 w-14 rounded-md border border-line bg-card object-contain p-2"
      />
    )
  }
  return (
    <span
      aria-hidden="true"
      title="Placeholder monogram - drop a logo into src/content/experience/logos/"
      className="grid h-14 w-14 place-items-center rounded-md border border-dashed border-line bg-card font-mono text-[15px] font-medium text-accent-2"
    >
      {monogram}
    </span>
  )
}

export default function ExperienceList() {
  return (
    <div className="flex flex-col gap-12">
      {experience.map((job, i) => (
        <Reveal key={job.id} delay={i * 0.06} as="article" className="grid gap-5 md:grid-cols-[56px_minmax(0,1fr)] md:gap-6">
          <Logo logo={job.logo} monogram={job.monogram} company={job.company} />
          <div>
            <p className="label">
              {job.period}
              {job.location && ` / ${job.location}`}
            </p>
            <h3 className="mt-2 text-[1.35rem] font-semibold">{job.company}</h3>
            <p className="mt-1 text-[0.9375rem] text-accent-2">{job.role}</p>
            <Markdown className="mt-4 text-[0.9375rem]">{job.body}</Markdown>
            <div className="mt-5">
              <Chips items={job.tech} />
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
