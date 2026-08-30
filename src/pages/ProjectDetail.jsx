import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projectBySlug, site } from '../lib/content.js'
import { projectSchema, useSeo } from '../lib/seo.js'
import { hasTodo } from '../lib/frontmatter.js'
import { repoUrl } from '../lib/github.js'
import Page from '../components/Page.jsx'
import Markdown from '../components/Markdown.jsx'
import Figure from '../components/figures/Figure.jsx'
import RepoMeta from '../components/RepoMeta.jsx'
import Chips from '../components/Chips.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import ReadmeViewer from '../components/ReadmeViewer.jsx'
import CodeViewer from '../components/CodeViewer.jsx'
import PowerBiViewer from '../components/PowerBiViewer.jsx'
import NotFound from './NotFound.jsx'

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

function Contents({ sections, activeId }) {
  return (
    <nav aria-label="Case study sections" className="sticky top-10 hidden max-h-[80vh] flex-col gap-0.5 overflow-auto xl:flex">
      <p className="label px-2.5 pb-2">Contents</p>
      {sections.map((s) => {
        const id = slugify(s.heading)
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`rounded-sm px-2.5 py-1.5 text-[0.8125rem] transition-colors ${
              activeId === id ? 'bg-raised text-accent-2' : 'text-ink-faint hover:bg-card hover:text-ink'
            }`}
          >
            {s.heading}
          </a>
        )
      })}
    </nav>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projectBySlug(slug)
  const [activeId, setActiveId] = useState(null)

  const sections = useMemo(() => (project ? project.sections.filter((s) => s.heading) : []), [project])

  useSeo({
    title: project ? project.title : 'Project',
    path: `/projects/${slug}`,
    description: project ? project.summary : undefined,
    type: 'article',
    jsonLd: project ? projectSchema(project) : undefined,
  })

  useEffect(() => {
    if (!sections.length || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    sections.forEach((s) => {
      const el = document.getElementById(slugify(s.heading))
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [sections])

  if (!project) return <NotFound />

  const heroSpec = project.figures[sections[0]?.heading] || project.thumbnail
  const biTarget = project.biSection || (project.powerBiEmbedUrl || project.screenshots.length ? 'Dashboard' : null)

  return (
    <Page>
      <article>
        <header className="border-b border-line pb-9">
          <Link to="/projects" className="group label inline-flex items-center gap-2 hover:text-accent-2">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              <Icon name="arrowLeft" size={14} />
            </span>
            {project.categories[0] || 'Projects'}
          </Link>

          <h1 className="mt-5 text-[clamp(2rem,4.6vw,3.1rem)] font-bold tracking-[-0.03em]">{project.title}</h1>
          <p className="mt-5 max-w-[68ch] text-[1.125rem] text-ink-muted">{project.summary}</p>

          <div className="mt-5">
            <RepoMeta repo={project.repo} placeholder={project.repoPlaceholder} />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.repo ? (
              <Button href={repoUrl(project.repo)} size="sm" icon="github">Repository</Button>
            ) : (
              <span className="rounded-md border border-dashed border-line px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.09em] text-ink-faint">
                Repo name pending
              </span>
            )}
            <Button to="/contact" variant="ghost" size="sm" icon="send">Discuss similar work</Button>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg border border-line bg-card">
            <Figure spec={heroSpec} alt={`${project.title} overview visual`} />
          </div>

          {project.stats.length > 0 && (
            <dl className="mt-6 grid gap-px overflow-hidden rounded-md bg-line sm:grid-cols-2 lg:grid-cols-4">
              {project.stats.map((s) => (
                <div key={s.label} className="bg-bg p-4">
                  <dt className="label">{s.label}</dt>
                  <dd className={`stat-num mt-1.5 text-[1.15rem] font-semibold ${hasTodo(s.value) ? 'text-ink-faint' : 'text-ink'}`}>
                    {hasTodo(s.value) ? 'TBC' : s.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
          <div className="mt-4">
            <Chips items={project.tech} />
          </div>
        </header>

        <div className="grid gap-12 pt-12 xl:grid-cols-[minmax(0,1fr)_200px]">
          <div>
            {sections.map((section, i) => {
              const id = slugify(section.heading)
              const isBi = biTarget && section.heading === biTarget
              const spec = project.figures[section.heading]
              return (
                <Reveal key={id} as="section" id={id} className="scroll-mt-10 pb-16">
                  <span className="label block">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="mt-3 text-[clamp(1.35rem,2.6vw,1.7rem)] font-semibold">{section.heading}</h2>
                  <Markdown className="mt-4 max-w-[70ch]">{section.body}</Markdown>

                  {isBi ? (
                    <PowerBiViewer
                      embedUrl={project.powerBiEmbedUrl}
                      screenshots={project.screenshots}
                      title={project.title}
                    />
                  ) : (
                    spec && (
                      <figure className="mt-6 overflow-hidden rounded-md border border-line bg-card">
                        <Figure spec={spec} alt={`${section.heading}: ${project.title}`} />
                        <figcaption className="border-t border-line px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-faint">
                          Fig. {i + 1} — {section.heading}
                        </figcaption>
                      </figure>
                    )
                  )}

                  {i === 0 && project.repo && <ReadmeViewer repo={project.repo} />}
                </Reveal>
              )
            })}

            <section id="source" className="scroll-mt-10 border-t border-line pt-10">
              <span className="label block">Source</span>
              <h2 className="mt-3 text-[clamp(1.35rem,2.6vw,1.7rem)] font-semibold">Read the code without leaving</h2>
              <p className="mt-4 max-w-[68ch] text-ink-muted">
                Files load straight from the repository. Nothing to download, nothing to clone.
              </p>
              {project.repo ? (
                <CodeViewer repo={project.repo} />
              ) : (
                <div className="mt-6 rounded-md border border-dashed border-line px-5 py-8 text-[0.9375rem] text-ink-faint">
                  Add the repository name to <code className="font-mono text-accent-2">src/content/projects/{slug}.md</code>{' '}
                  (the <code className="font-mono text-accent-2">repo:</code> line) and the file browser turns on here automatically.
                </div>
              )}
            </section>

            <div className="mt-10 flex flex-wrap items-center gap-3 rounded-md border border-line bg-card px-5 py-4">
              <span className="text-accent-2"><Icon name="send" size={17} /></span>
              <p className="text-[0.9375rem] text-ink-muted">Want the deeper version, including what did not work?</p>
              <Link to="/contact" className="text-[0.9375rem] font-semibold text-accent-2">Ask me about it</Link>
            </div>
          </div>

          <Contents sections={sections} activeId={activeId} />
        </div>
      </article>

      <p className="mt-14 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">
        {site.name} / {project.categories.join(' / ')}
      </p>
    </Page>
  )
}
