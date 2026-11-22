import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import sidebar from '../content/sidebar.config.js'
import site from '../content/site.config.js'
import Icon from './Icon.jsx'

function Tip({ children }) {
  return (
    <span
      role="tooltip"
      className="pointer-events-none absolute left-[calc(100%+14px)] top-1/2 z-50 -translate-y-1/2 translate-x-[-4px] whitespace-nowrap rounded-xl border border-white/10 bg-[#161620]/95 px-3 py-1.5 font-mono text-[11px] font-medium text-white opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
    >
      {children}
    </span>
  )
}

const itemBase =
  'group relative grid h-11 w-11 place-items-center rounded-2xl text-ink-muted transition-all duration-200 hover:bg-white/10 hover:text-white'

function Avatar() {
  const reduced = useReducedMotion()
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const initials = site.name
    .split(' ')
    .map((w) => w[0])
    .join('')
  return (
    <div className="relative mb-1 grid place-items-center">
      <motion.span
        aria-hidden="true"
        className="absolute -inset-1 rounded-full opacity-60 blur-sm"
        style={{
          background:
            'conic-gradient(from 0deg, var(--color-accent), #30d158, var(--color-accent-3), var(--color-accent))',
        }}
        animate={reduced ? undefined : { rotate: 360 }}
        transition={reduced ? undefined : { duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <a
        href="#top"
        onClick={(e) => {
          if (window.location.pathname === '/') {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
            window.history.pushState(null, '', '#top')
          }
        }}
        aria-label={`${site.name}, home`}
        className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-white/20 bg-[#12121a] shadow-lg"
      >
        <img
          src={site.profilePhoto}
          alt={`${site.name}`}
          width="48"
          height="48"
          className={`absolute inset-0 h-full w-full object-cover ${photoLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setPhotoLoaded(true)}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            setPhotoLoaded(false)
          }}
        />
        <span
          className={`relative font-mono text-[13px] font-bold text-accent ${
            photoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {initials}
        </span>
      </a>
    </div>
  )
}

export default function Rail({ theme, onToggleTheme }) {
  const { pathname } = useLocation()
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  const handleNavClick = (e, item) => {
    if (item.hash && pathname === '/') {
      e.preventDefault()
      const el = document.querySelector(item.hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', item.hash)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const items = (
    <>
      {sidebar.map((item) => (
        <a
          key={item.label}
          href={item.to}
          onClick={(e) => handleNavClick(e, item)}
          className={itemBase}
        >
          <Icon name={item.icon} size={19} />
          <span className="sr-only">{item.label}</span>
          <Tip>{item.label}</Tip>
        </a>
      ))}
    </>
  )

  const utility = (
    <>
      <a
        href="/Ali_Ajvand_Resume.html"
        target="_blank"
        rel="noopener noreferrer"
        className={itemBase}
      >
        <Icon name="fileText" size={19} />
        <span className="sr-only">رزومه ATS</span>
        <Tip>رزومه ATS (۲ صفحه)</Tip>
      </a>
      <a href={site.resumePath} download className={itemBase}>
        <Icon name="arrowDown" size={19} />
        <span className="sr-only">دانلود PDF</span>
        <Tip>دانلود PDF رسمی</Tip>
      </a>
      <button
        type="button"
        onClick={onToggleTheme}
        className={itemBase}
        aria-label={`تغییر به تم ${nextTheme === 'dark' ? 'تیره' : 'روشن'}`}
      >
        <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} />
        <Tip>{nextTheme === 'dark' ? 'Dark' : 'Light'} Mode</Tip>
      </button>
    </>
  )

  return (
    <>
      <nav
        aria-label="ناوبری اصلی"
        className="fixed left-0 top-0 z-40 hidden h-screen w-[76px] flex-col items-center py-5 lg:flex"
      >
        <div className="flex h-full flex-col items-center gap-2 rounded-full border border-white/10 bg-[#0c0c12]/80 px-2 py-4 backdrop-blur-2xl shadow-2xl">
          <Avatar />
          <span aria-hidden="true" className="my-1 h-px w-6 bg-white/10" />
          {items}
          <span className="flex-1" />
          <span aria-hidden="true" className="my-1 h-px w-6 bg-white/10" />
          {utility}
        </div>
      </nav>
      <nav
        aria-label="ناوبری موبایل"
        className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-3 lg:hidden"
      >
        <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-[#0c0c12]/85 px-3 py-2 backdrop-blur-2xl shadow-2xl">
          {items}
          <span aria-hidden="true" className="mx-1 h-6 w-px bg-white/10" />
          {utility}
        </div>
      </nav>
    </>
  )
}
