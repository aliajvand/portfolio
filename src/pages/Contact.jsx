import { site } from '../lib/content.js'
import { useSeo } from '../lib/seo.js'
import Page from '../components/Page.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  useSeo({ title: 'Contact', path: '/contact', description: `Contact ${site.name} by email or phone, or connect on LinkedIn and GitHub.` })
  const linkedin = site.socials.find((s) => s.id === 'linkedin')
  const github = site.socials.find((s) => s.id === 'github')
  const instagram = site.socials.find((s) => s.id === 'instagram')
  const linkedinReady = linkedin && linkedin.url && !/^TODO/.test(linkedin.url)
  const button = 'inline-flex min-h-12 items-center gap-3 rounded-md border border-line bg-card px-4 text-[0.9375rem] font-medium text-ink transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-raised'

  return <Page>
    <SectionHead label="Contact" title="Let's talk about your data" lead="Tell me the decision you are trying to make and what data you already have. I reply within 24 hours." />
    <Reveal>
      <div className="max-w-2xl rounded-lg border border-line bg-card p-6 sm:p-8">
        <div className="flex flex-col gap-5">
          <a href={`mailto:${site.email}`} className="group flex items-center gap-4 border-b border-line pb-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-raised text-accent-2"><Icon name="mail" size={19} /></span>
            <span><span className="label block">Email</span><span className="mt-1 block break-words text-[1.05rem] font-medium text-ink group-hover:text-accent-2">{site.email}</span></span>
          </a>
          <a href={`tel:${site.phoneLink}`} className="group flex items-center gap-4 border-b border-line pb-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-raised text-accent-2"><Icon name="phone" size={19} /></span>
            <span><span className="label block">Phone</span><span className="stat-num mt-1 block text-[1.05rem] font-medium text-ink group-hover:text-accent-2">{site.phone}</span></span>
          </a>
        </div>
        <div className="mt-8">
          <p className="label">Connect</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a href={github.url} target="_blank" rel="noopener noreferrer" className={button}><Icon name="github" size={18} />GitHub<Icon name="arrowUpRight" size={14} /></a>
            {linkedinReady ? <a href={linkedin.url} target="_blank" rel="noopener noreferrer" className={button}><Icon name="linkedin" size={18} />LinkedIn<Icon name="arrowUpRight" size={14} /></a> : <span className={`${button} cursor-not-allowed opacity-50`} title="Add your LinkedIn URL in src/content/site.config.js"><Icon name="linkedin" size={18} />LinkedIn</span>}
            {instagram?.url ? <a href={instagram.url} target="_blank" rel="noopener noreferrer" className={button}><Icon name="instagram" size={18} />Instagram<Icon name="arrowUpRight" size={14} /></a> : <span className={`${button} cursor-not-allowed opacity-50`} title="Instagram launching soon"><Icon name="instagram" size={18} />Instagram <span className="font-mono text-[10px] text-accent-2">SOON</span></span>}
          </div>
        </div>
      </div>
    </Reveal>
  </Page>
}
