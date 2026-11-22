import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import site from '../content/site.config.js'
import Button from './Button.jsx'
import Icon from './Icon.jsx'
import { useLocale } from '../lib/locale.jsx'

export default function Hero() {
  const { t, lang } = useLocale()
  const reduced = useReducedMotion()
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const github = site.socials.find((s) => s.id === 'github')
  const linkedin = site.socials.find((s) => s.id === 'linkedin')
  const linkedinReady = linkedin && linkedin.url && !/^TODO/.test(linkedin.url)
  const initials = site.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <header className="relative pb-20 pt-6 text-center" id="top">
      {/* Apple Keynote Ambient Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-12 h-[340px] w-[580px] rounded-full bg-gradient-to-tr from-accent/20 via-accent-3/15 to-transparent blur-[100px] opacity-70"
      />

      {/* Profile Avatar with subtle Apple iridescent halo */}
      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto h-32 w-32 sm:h-36 sm:w-36"
      >
        <span
          aria-hidden="true"
          className="absolute -inset-2 rounded-full opacity-60 blur-md"
          style={{
            background:
              'conic-gradient(from 0deg, var(--color-accent), #30d158, var(--color-accent-3), var(--color-accent))',
          }}
        />
        <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-full border-2 border-white/20 bg-[#0d0d14] shadow-2xl">
          <img
            src={site.profilePhoto}
            alt={`${site.name}`}
            width="144"
            height="144"
            className={`absolute inset-0 h-full w-full object-cover ${photoLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setPhotoLoaded(true)}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              setPhotoLoaded(false)
            }}
          />
          <span
            className={`relative font-display text-3xl font-bold tracking-tight text-white ${
              photoLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {initials}
          </span>
        </div>
      </motion.div>

      {/* Role Pill */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-6 flex items-center justify-center gap-2"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs font-semibold tracking-wider text-ink-muted backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{t.hero.badge}</span>
        </span>
      </motion.div>

      {/* Name Headline */}
      <motion.h1
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl font-display"
      >
        {lang === 'fa' ? 'علی اجوند' : 'Ali Ajvand'}
      </motion.h1>

      {/* Primary Value Statement */}
      <motion.p
        initial={reduced ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-4 max-w-2xl text-xl font-medium tracking-tight text-white/90 sm:text-2xl"
      >
        {t.hero.headline}
      </motion.p>

      {/* Subtitle */}
      <motion.p
        initial={reduced ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-4 max-w-[64ch] text-base leading-relaxed text-ink-muted sm:text-lg"
      >
        {t.hero.sub}
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
      >
        <Button href="#projects" variant="primary" icon="folderGit">
          {t.hero.btnProjects}
        </Button>
        <Button href="#startup" variant="secondary" icon="sparkles">
          {t.hero.btnStartup}
        </Button>
        <Button href="#resume" variant="ghost" icon="fileText">
          {t.hero.btnResume}
        </Button>

        <span aria-hidden="true" className="h-6 w-px self-center bg-white/10 hidden sm:block" />

        <div className="flex items-center gap-2">
          <a
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-ink-muted transition-all hover:border-accent hover:text-white hover:bg-white/10"
          >
            <Icon name="github" size={18} />
          </a>
          {linkedinReady && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-ink-muted transition-all hover:border-accent hover:text-white hover:bg-white/10"
            >
              <Icon name="linkedin" size={18} />
            </a>
          )}
        </div>
      </motion.div>
    </header>
  )
}
