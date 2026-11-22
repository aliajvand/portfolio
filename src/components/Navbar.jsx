import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import site from '../content/site.config.js'
import Icon from './Icon.jsx'
import { useLocale } from '../lib/locale.jsx'

export default function Navbar({ theme, onToggleTheme }) {
  const { pathname } = useLocation()
  const { locale, toggleLocale, t } = useLocale()
  const reduced = useReducedMotion()
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  const navLinks = [
    { hash: '#top', label: t.nav.home },
    { hash: '#startup', label: t.nav.startup },
    { hash: '#projects', label: t.nav.projects },
    { hash: '#skills', label: t.nav.skills },
    { hash: '#experience', label: t.nav.experience },
    { hash: '#resume', label: t.nav.resume },
    { hash: '#contact', label: t.nav.contact },
  ]

  const handleNavClick = (e, hash) => {
    if (pathname === '/') {
      e.preventDefault()
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', hash)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const initials = site.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <header className="sticky top-3.5 z-50 mx-auto w-full max-w-5xl px-3 sm:px-6">
      <nav
        aria-label="ناوبری اصلی"
        className="flex items-center justify-between rounded-full border border-white/10 bg-[#09090e]/75 px-3 py-2 sm:px-5 sm:py-2.5 backdrop-blur-2xl shadow-2xl transition-all"
      >
        {/* Brand / Avatar */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/20 bg-[#12121a] shadow-inner">
            <img
              src={site.profilePhoto}
              alt={site.name}
              width="36"
              height="36"
              className={`absolute inset-0 h-full w-full object-cover ${photoLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setPhotoLoaded(true)}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                setPhotoLoaded(false)
              }}
            />
            <span
              className={`relative grid h-full w-full place-items-center font-mono text-xs font-bold text-accent ${
                photoLoaded ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {initials}
            </span>
          </div>
          <span className="font-display text-sm font-bold tracking-tight text-white transition-colors group-hover:text-accent hidden sm:inline-block">
            {locale === 'fa' ? 'علی اجوند' : 'Ali Ajvand'}
          </span>
        </a>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => (
            <a
              key={item.hash}
              href={item.hash}
              onClick={(e) => handleNavClick(e, item.hash)}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-ink-muted transition-all duration-200 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Actions (Language Toggle, Theme, Resume) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLocale}
            title={locale === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] font-semibold text-white transition-all hover:border-accent hover:bg-white/10"
          >
            <span className={locale === 'fa' ? 'text-accent font-bold' : 'text-ink-faint'}>FA</span>
            <span className="text-white/20">|</span>
            <span className={locale === 'en' ? 'text-accent font-bold' : 'text-ink-faint'}>EN</span>
          </button>

          {/* Resume PDF Shortcut */}
          <a
            href={site.resumePath}
            download
            title={locale === 'fa' ? 'دانلود فایل PDF رزومه' : 'Download Resume PDF'}
            className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 text-ink-muted transition-all hover:border-white/25 hover:text-white hover:bg-white/10"
          >
            <Icon name="fileDown" size={15} />
          </a>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`تغییر به تم ${nextTheme}`}
            className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 text-ink-muted transition-all hover:border-white/25 hover:text-white hover:bg-white/10"
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={15} />
          </button>
        </div>
      </nav>
    </header>
  )
}
