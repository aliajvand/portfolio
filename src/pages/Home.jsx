import { useSeo } from '../lib/seo.js'
import { projects, site } from '../lib/content.js'
import Page from '../components/Page.jsx'
import Hero from '../components/Hero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ProjectsExplorer from '../components/ProjectsExplorer.jsx'
import SkillsGrid from '../components/SkillsGrid.jsx'
import ExperienceList from '../components/ExperienceList.jsx'
import Icon from '../components/Icon.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Home() {
  useSeo({
    path: '/',
    title: `${site.name} — Senior Data Scientist & Analytics Engineer`,
    description: site.tagline,
  })

  const github = site.socials.find((s) => s.id === 'github')
  const linkedin = site.socials.find((s) => s.id === 'linkedin')

  const impactMetrics = [
    {
      value: '8',
      label: 'Production Systems',
      detail: 'Audited, tested & live on GitHub',
      icon: 'folderGit',
    },
    {
      value: '844K+',
      label: 'Store-Days Forecasted',
      detail: '72.5% error reduction (Rossmann)',
      icon: 'trending',
    },
    {
      value: '289K+',
      label: 'Registrations Analyzed',
      detail: 'Washington State EV star schema',
      icon: 'database',
    },
    {
      value: '2nd / 13',
      label: 'Hackathon Pol 4',
      detail: '9,630 daily city forecasts',
      icon: 'star',
    },
    {
      value: '69.85%',
      label: 'Directional Accuracy',
      detail: 'TSETMC GNN + LSTM walk-forward',
      icon: 'chart',
    },
    {
      value: '2.52x',
      label: 'Retention Decile Lift',
      detail: '$176.7K annual contract VaR saved',
      icon: 'target',
    },
    {
      value: '<15ms',
      label: 'Vector Search Latency',
      detail: 'Clinical FAISS NLP retrieval',
      icon: 'api',
    },
    {
      value: '0',
      label: 'Data Leakage',
      detail: 'Temporal & proxy leakage audited',
      icon: 'check',
    },
  ]

  return (
    <Page>
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. QUANTITATIVE IMPACT METRICS TICKER */}
      <section className="pb-24 pt-4" aria-label="Quantitative Impact Metrics">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          {impactMetrics.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.04}
              className="group rounded-xl border border-line bg-card p-4 transition-all duration-300 hover:border-accent hover:bg-raised"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold tracking-tight text-accent-2 sm:text-3xl">
                  {m.value}
                </span>
                <span className="text-ink-faint transition-colors group-hover:text-accent-2">
                  <Icon name={m.icon} size={18} />
                </span>
              </div>
              <h3 className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink">
                {m.label}
              </h3>
              <p className="mt-1 text-[11px] text-ink-muted">{m.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="scroll-mt-12 pb-24" aria-labelledby="projects-title">
        <SectionHead
          id="projects-title"
          label="Portfolio Systems"
          title="8 Audited Machine Learning & BI Repositories"
          lead="Leakage-safe pipelines, walk-forward validation protocols, sub-second FastAPI microservices, and interactive Plotly/Dash decision simulators."
        />
        <ProjectsExplorer />
      </section>

      {/* 4. TECHNICAL SKILLS SECTION */}
      <section id="skills" className="scroll-mt-12 pb-24" aria-labelledby="skills-title">
        <SectionHead
          id="skills-title"
          label="Expertise"
          title="Technical Skills & Engineering Stack"
          lead="Disciplined, zero-leakage engineering from raw SQL pipelines and dimensional schemas to calibrated ML models and executive BI dashboards."
        />
        <SkillsGrid />
      </section>

      {/* 5. EXPERIENCE & COMPETITIONS SECTION */}
      <section id="experience" className="scroll-mt-12 pb-24" aria-labelledby="experience-title">
        <SectionHead
          id="experience-title"
          label="Track Record"
          title="Professional Experience & Competitions"
          lead="Real-world operational field engineering at FMCG scale and top-tier competitive demand forecasting."
        />
        <ExperienceList />
      </section>

      {/* 6. ATS RESUME SECTION */}
      <section id="resume" className="scroll-mt-12 pb-24" aria-labelledby="resume-title">
        <SectionHead
          id="resume-title"
          label="Credentials"
          title="99th Percentile ATS-Optimized Resume"
          lead="Engineered using Google's XYZ formula (Accomplished [X] measured by [Y] by doing [Z]) with 100% verified production facts."
        />
        <Reveal className="rounded-xl border border-line bg-card p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-line pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent-2">
                <Icon name="check" size={13} />
                <span>100% Verified Production Data</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">Ali Ajvand</h3>
              <p className="mt-1 text-sm font-medium text-accent-2">
                Senior Data Scientist & Analytics Engineer • B.Sc. Computer Engineering
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                href="/Ali_Ajvand_Resume.html"
                target="_blank"
                variant="primary"
                icon="fileText"
              >
                View / Print ATS HTML
              </Button>
              <Button href={site.resumePath} download variant="secondary" icon="arrowDown">
                Download PDF
              </Button>
              <Button
                href="/Ali_Ajvand_Resume_ATS_Optimized.md"
                download
                variant="ghost"
                icon="file"
              >
                Markdown Source
              </Button>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-line/60 bg-raised/50 p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-2 font-semibold">
                Retail Forecasting
              </p>
              <p className="mt-1 text-xl font-bold">72.5% Error Cut</p>
              <p className="mt-1 text-xs text-ink-muted">
                9.36% WMAPE vs 34.06% heuristic over 844,338 store-days.
              </p>
            </div>
            <div className="rounded-lg border border-line/60 bg-raised/50 p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-2 font-semibold">
                Credit Underwriting
              </p>
              <p className="mt-1 text-xl font-bold">38% Default Drop</p>
              <p className="mt-1 text-xs text-ink-muted">
                5:1 cost frontier preserving 54.4% approval at 9.8% bad rate.
              </p>
            </div>
            <div className="rounded-lg border border-line/60 bg-raised/50 p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-2 font-semibold">
                Customer Retention
              </p>
              <p className="mt-1 text-xl font-bold">2.52x Decile Lift</p>
              <p className="mt-1 text-xs text-ink-muted">
                50.5% churners captured protecting $176.7K annual contract VaR.
              </p>
            </div>
            <div className="rounded-lg border border-line/60 bg-raised/50 p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-2 font-semibold">
                Quantitative Trading
              </p>
              <p className="mt-1 text-xl font-bold">69.85% Directional</p>
              <p className="mt-1 text-xs text-ink-muted">
                TSETMC GNN + LSTM walk-forward over 10,874 trading days.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="scroll-mt-12" aria-labelledby="contact-title">
        <SectionHead
          id="contact-title"
          label="Get In Touch"
          title="Let's build reliable data systems"
          lead="Tell me the decision you are trying to make and what data you already have. I reply within 24 hours."
        />
        <Reveal>
          <div className="rounded-xl border border-line bg-card p-6 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href={`mailto:${site.email}`}
                className="group rounded-lg border border-line bg-raised/40 p-5 transition-all hover:border-accent hover:bg-raised"
              >
                <div className="flex items-center gap-3 text-accent-2">
                  <Icon name="mail" size={20} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">Email</span>
                </div>
                <p className="mt-3 break-words text-base font-medium text-ink group-hover:text-accent-2">
                  {site.email}
                </p>
                <p className="mt-1 text-xs text-ink-muted">Direct personal inbox</p>
              </a>

              <a
                href={`tel:${site.phoneLink}`}
                className="group rounded-lg border border-line bg-raised/40 p-5 transition-all hover:border-accent hover:bg-raised"
              >
                <div className="flex items-center gap-3 text-accent-2">
                  <Icon name="phone" size={20} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">Phone</span>
                </div>
                <p className="mt-3 text-base font-medium text-ink group-hover:text-accent-2">
                  {site.phone}
                </p>
                <p className="mt-1 text-xs text-ink-muted">Calls & Telegram</p>
              </a>

              <div className="rounded-lg border border-line bg-raised/40 p-5">
                <div className="flex items-center gap-3 text-accent-2">
                  <Icon name="mapPin" size={20} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">Location</span>
                </div>
                <p className="mt-3 text-base font-medium text-ink">{site.location}</p>
                <p className="mt-1 text-xs text-ink-muted">{site.timezone} • Open to Remote & Relocation</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-6">
              <div className="flex items-center gap-3">
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent-2 transition-colors"
                >
                  <Icon name="github" size={16} />
                  <span>github.com/aliajvand</span>
                  <Icon name="arrowUpRight" size={13} />
                </a>
                {linkedin?.url && (
                  <a
                    href={linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent-2 transition-colors"
                  >
                    <Icon name="linkedin" size={16} />
                    <span>LinkedIn</span>
                    <Icon name="arrowUpRight" size={13} />
                  </a>
                )}
              </div>

              <p className="text-xs text-ink-faint font-mono">
                Built with React 18 • Tailwind CSS • Framer Motion
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </Page>
  )
}
