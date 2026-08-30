import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import site from '../content/site.config.js'
import Button from './Button.jsx'
import Icon from './Icon.jsx'

function Roles() {
  const reduced = useReducedMotion()
  return <p className="mt-5 flex flex-wrap justify-center gap-x-3 gap-y-1 font-mono text-[clamp(0.9rem,1.9vw,1.15rem)] text-accent-2">{site.roles.map((role, i) => <motion.span key={role} initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}>{role}{i < site.roles.length - 1 && <span className="ml-3 text-ink-faint">/</span>}</motion.span>)}</p>
}

export default function Hero() {
  const reduced = useReducedMotion()
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const github = site.socials.find((s) => s.id === 'github')
  const linkedin = site.socials.find((s) => s.id === 'linkedin')
  const linkedinReady = linkedin && linkedin.url && !/^TODO/.test(linkedin.url)
  const initials = site.name.split(' ').map((w) => w[0]).join('')

  return <header className="pb-[var(--t-space-section)] pt-2 text-center">
    <motion.div initial={reduced ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto h-36 w-36">
      <span aria-hidden="true" className="absolute -inset-3 rounded-full opacity-70 blur-[12px]" style={{ background: 'conic-gradient(from 0deg, var(--color-accent), var(--color-accent-2), var(--color-accent-3), var(--color-accent))' }} />
      <span aria-hidden="true" className="absolute -inset-1 rounded-full" style={{ background: 'conic-gradient(from 0deg, var(--color-accent), var(--color-accent-2), var(--color-accent-3), var(--color-accent))' }} />
      <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-full border-4 border-bg bg-card">
        <img src={site.profilePhoto} alt={`${site.name}, ${site.roles[0]}`} width="144" height="144" className={`absolute inset-0 h-full w-full object-cover ${photoLoaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setPhotoLoaded(true)} onError={(e) => { e.currentTarget.style.display = 'none'; setPhotoLoaded(false) }} />
        <span className={`relative font-display text-3xl font-semibold text-accent-2 ${photoLoaded ? 'opacity-0' : 'opacity-100'}`}>{initials}</span>
      </div>
    </motion.div>

    <motion.p initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.12 }} className="label mt-7 flex items-center justify-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent-2" />{site.availability}</motion.p>
    <motion.h1 initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }} className="mt-4 text-[clamp(2.8rem,7vw,5rem)] font-bold tracking-[-0.04em]">{site.name}</motion.h1>
    <Roles />
    <motion.p initial={reduced ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }} className="mx-auto mt-6 max-w-[58ch] text-[1.08rem] leading-relaxed text-ink-muted">{site.tagline}</motion.p>
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <Button to="/projects" variant="primary" icon="folderGit">View projects</Button>
      <Button href={site.resumePath} download icon="arrowDown">Download resume</Button>
      <Button to="/contact" variant="ghost" icon="send">Contact me</Button>
      <span aria-hidden="true" className="h-6 w-px self-center bg-line" />
      <a href={github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="grid h-10 w-10 place-items-center rounded-md border border-line text-ink-faint transition-colors hover:border-accent hover:text-accent"><Icon name="github" size={17} /></a>
      {linkedinReady ? <a href={linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="grid h-10 w-10 place-items-center rounded-md border border-line text-ink-faint transition-colors hover:border-accent hover:text-accent"><Icon name="linkedin" size={17} /></a> : <span title="Add your LinkedIn URL in src/content/site.config.js" className="grid h-10 w-10 place-items-center rounded-md border border-dashed border-line text-ink-faint opacity-50"><Icon name="linkedin" size={17} /></span>}
    </div>
  </header>
}
