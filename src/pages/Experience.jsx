import { useSeo } from '../lib/seo.js'
import Page from '../components/Page.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ExperienceList from '../components/ExperienceList.jsx'

export default function Experience() {
  useSeo({
    title: 'Experience',
    path: '/experience',
    description: 'Data analysis, BI dashboards, reporting automation and Python teaching experience.',
  })
  return (
    <Page>
      <SectionHead label="Experience" title="Where the work happened" />
      <ExperienceList />
    </Page>
  )
}
