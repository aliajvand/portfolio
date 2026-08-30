import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import sidebar from '../content/sidebar.config.js'
import site from '../content/site.config.js'
import Icon from './Icon.jsx'

function Tip({ children }) {
  return <span role="tooltip" className="pointer-events-none absolute left-[calc(100%+14px)] top-1/2 z-50 -translate-y-1/2 translate-x-[-4px] whitespace-nowrap rounded-md border border-line bg-card px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink opacity-0 shadow-lg transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">{children}</span>
}

const itemBase = 'group relative grid h-11 w-11 place-items-center rounded-[14px] text-ink-faint transition-colors duration-200 hover:bg-raised hover:text-ink'

function Avatar() {
  const reduced = useReducedMotion()
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const initials = site.name.split(' ').map((w) => w[0]).join('')
  return (
    <div className="relative mb-1 grid place-items-center">
      <motion.span aria-hidden="true" className="absolute -inset-1 rounded-full opacity-70 blur-[6px]" style={{ background: 'conic-gradient(from 0deg, var(--color-accent), var(--color-accent-2), var(--color-accent-3), var(--color-accent))' }} animate={reduced ? undefined : { rotate: 360 }} transition={reduced ? undefined : { duration: 18, repeat: Infinity, ease: 'linear' }} />
      <span aria-hidden="true" className="absolute -inset-px rounded-full" style={{ background: 'conic-gradient(from 0deg, var(--color-accent), var(--color-accent-2), var(--color-accent-3), var(--color-accent))' }} />
      <NavLink to="/" aria-label={`${site.name}, home`} className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full border-2 border-surface bg-card">
        <img src={site.profilePhoto} alt={`${site.name}, ${site.roles[0]}`} width="48" height="48" className={`absolute inset-0 h-full w-full object-cover ${photoLoaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setPhotoLoaded(true)} onError={(e) => { e.currentTarget.style.display = 'none'; setPhotoLoaded(false) }} />
        <span className={`relative font-mono text-[13px] font-medium text-accent-2 ${photoLoaded ? 'opacity-0' : 'opacity-100'}`}>{initials}</span>
      </NavLink>
    </div>
  )
}

export default function Rail({ theme, onToggleTheme }) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const items = <>{sidebar.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `${itemBase} ${isActive ? 'bg-raised text-accent-2' : ''}`}>{({ isActive }) => <><Icon name={item.icon} size={19} /><span className="sr-only">{item.label}</span><Tip>{item.label}</Tip>{isActive && <span aria-hidden="true" className="absolute -left-[13px] h-5 w-[3px] rounded-full bg-accent-2 max-lg:-bottom-[9px] max-lg:left-auto max-lg:h-[3px] max-lg:w-5" />}</>}</NavLink>)}</>
  const utility = <><a href={site.resumePath} download className={itemBase}><Icon name="arrowDown" size={19} /><span className="sr-only">Download resume</span><Tip>Resume</Tip></a><button type="button" onClick={onToggleTheme} className={itemBase} aria-label={`Switch to ${nextTheme} theme`}><Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} /><Tip>{nextTheme === 'dark' ? 'Dark' : 'Light'} mode</Tip></button></>
  return <>
    <nav aria-label="Primary" className="fixed left-0 top-0 z-40 hidden h-screen w-[76px] flex-col items-center py-5 lg:flex"><div className="flex h-full flex-col items-center gap-2 rounded-pill border border-line bg-surface px-2 py-4"><Avatar /><span aria-hidden="true" className="my-1 h-px w-6 bg-line" />{items}<span className="flex-1" /><span aria-hidden="true" className="my-1 h-px w-6 bg-line" />{utility}</div></nav>
    <nav aria-label="Primary" className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-3 lg:hidden"><div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-pill border border-line bg-surface px-2 py-2">{items}<span aria-hidden="true" className="mx-1 h-6 w-px bg-line" />{utility}</div></nav>
  </>
}
