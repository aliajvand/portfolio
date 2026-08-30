import { useSeo } from '../lib/seo.js'
import Page from '../components/Page.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ServicesList from '../components/ServicesList.jsx'
import Button from '../components/Button.jsx'

export default function Services() {
  useSeo({
    title: 'Services',
    path: '/services',
    description: 'Freelance BI dashboards, data analysis, machine learning models, reporting automation and semantic search.',
  })
  return (
    <Page>
      <SectionHead
        label="Services"
        title="What you can hire me for"
        lead="Fixed-scope projects or an ongoing retainer, remote, in English. Every engagement ends with documentation and a handover call, not a zip file."
      />
      <ServicesList />
      <div className="mt-12 flex flex-wrap items-center gap-4 rounded-md border border-line bg-card px-5 py-5">
        <p className="max-w-[60ch] text-[0.9375rem] text-ink-muted">
          Not sure which of these you need? Send the problem rather than the solution and I will tell you what it actually takes.
        </p>
        <Button to="/contact" variant="primary" size="sm" icon="send">
          Get in touch
        </Button>
      </div>
    </Page>
  )
}
