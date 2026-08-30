import { about, site } from '../lib/content.js'
import { useSeo } from '../lib/seo.js'
import Page from '../components/Page.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Markdown from '../components/Markdown.jsx'
import Reveal from '../components/Reveal.jsx'

export default function About() {
  useSeo({
    title: 'About',
    path: '/about',
    description: `About ${site.name}: ${site.description}`,
  })

  return (
    <Page>
      <SectionHead label="About" title="Who you would be hiring" />
      <Reveal>
        <Markdown className="max-w-[70ch] text-[1.0625rem]">{about}</Markdown>
      </Reveal>
    </Page>
  )
}
