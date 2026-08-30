import { useSeo } from '../lib/seo.js'
import Page from '../components/Page.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ProjectsExplorer from '../components/ProjectsExplorer.jsx'

export default function Projects() {
  useSeo({
    title: 'Projects',
    path: '/projects',
    description:
      'Data science, business intelligence, machine learning and NLP case studies with source code, dashboards and results.',
  })
  return (
    <Page>
      <SectionHead
        label="Projects"
        title="Case studies, not a repo dump"
        lead="Pick a category on the left. Each card opens a full write-up: the problem, the data, the model, the result, and the source straight from GitHub."
      />
      <ProjectsExplorer />
    </Page>
  )
}
