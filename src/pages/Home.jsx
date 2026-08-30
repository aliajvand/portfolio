import { Link } from 'react-router-dom'
import { projects, process as processData } from '../lib/content.js'
import { useSeo } from '../lib/seo.js'
import Page from '../components/Page.jsx'
import Hero from '../components/Hero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ProcessMap from '../components/ProcessMap.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Icon from '../components/Icon.jsx'

export default function Home() {
  useSeo({ path: '/' })
  const featured = projects.filter((p) => p.featured).slice(0, 2)
  const shown = featured.length ? featured : projects.slice(0, 2)

  return (
    <Page>
      <Hero />

      <section className="pb-[var(--t-space-section)]" aria-labelledby="process-title">
        <SectionHead id="process-title" label="Method" title={processData.title} lead={processData.intro} />
        <ProcessMap />
      </section>

      <section aria-labelledby="work-title">
        <SectionHead id="work-title" label="Selected work" title="Case studies worth your time" />
        <div className="flex flex-col gap-6">
          {shown.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} featured={i === 0} />
          ))}
        </div>
        <Link
          to="/projects"
          className="group mt-7 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-accent-2"
        >
          All projects by category
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <Icon name="arrowRight" size={15} />
          </span>
        </Link>
      </section>
    </Page>
  )
}
