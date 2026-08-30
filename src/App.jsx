import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { applyTheme, initialTheme, storeTheme } from './lib/theme.js'
import Rail from './components/Rail.jsx'
import AmbientGlow from './components/AmbientGlow.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import AllProjects from './pages/AllProjects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Experience from './pages/Experience.jsx'
import Skills from './pages/Skills.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    applyTheme(theme)
    storeTheme(theme)
  }, [theme])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <AmbientGlow />
      <Rail theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <ScrollToTop />
      <main id="main" className="relative z-10 lg:pl-[76px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/all" element={<AllProjects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}
