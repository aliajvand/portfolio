/**
 * Reads every file in src/content automatically.
 * Adding a project = adding one .md file to src/content/projects/. Nothing here changes.
 */
import { parseFrontmatter, splitSections } from './frontmatter.js'
import site from '../content/site.config.js'
import skillsJson from '../content/skills.json'
import processJson from '../content/process.json'
import aboutRaw from '../content/about.md?raw'
import servicesRaw from '../content/services.md?raw'

const projectFiles = import.meta.glob('../content/projects/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const experienceFiles = import.meta.glob('../content/experience/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const fileSlug = (path) => path.split('/').pop().replace(/\.md$/, '')

export const projects = Object.entries(projectFiles)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw)
    const sections = splitSections(body)
    return {
      slug: data.slugOverride || fileSlug(path),
      title: data.title || fileSlug(path),
      categories: Array.isArray(data.categories) ? data.categories : data.categories ? [data.categories] : [],
      repo: data.repo && !/^TODO/.test(String(data.repo)) ? data.repo : null,
      repoPlaceholder: !data.repo || /^TODO/.test(String(data.repo)),
      tech: data.tech || [],
      summary: data.summary || '',
      thumbnail: data.thumbnail || 'figure:flow',
      featured: Boolean(data.featured),
      order: typeof data.order === 'number' ? data.order : 99,
      powerBiEmbedUrl: data.powerBiEmbedUrl || null,
      screenshots: Array.isArray(data.screenshots) ? data.screenshots : [],
      biSection: data.biSection || null,
      stats: Array.isArray(data.stats) ? data.stats : [],
      figures: data.figures && typeof data.figures === 'object' ? data.figures : {},
      sections,
      body,
    }
  })
  .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))

export const experience = Object.entries(experienceFiles)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw)
    return {
      id: fileSlug(path),
      company: data.company || fileSlug(path),
      role: data.role || '',
      period: data.period || '',
      location: data.location || '',
      logo: data.logo && !/^TODO/.test(String(data.logo)) ? data.logo : null,
      monogram: data.monogram || String(data.company || '??').slice(0, 2).toUpperCase(),
      tech: data.tech || [],
      order: typeof data.order === 'number' ? data.order : 99,
      body,
    }
  })
  .sort((a, b) => a.order - b.order)

export const skills = Array.isArray(skillsJson.skills) ? skillsJson.skills : Object.entries(skillsJson).map(([group, items]) => ({ group, items }))

export const services = splitSections(servicesRaw).filter((s) => s.heading)

export const about = aboutRaw.trim()

export const process = processJson

/** Ordered categories, derived from the files that exist. */
export function categoriesWithCounts() {
  const counts = new Map()
  projects.forEach((p) => p.categories.forEach((c) => counts.set(c, (counts.get(c) || 0) + 1)))
  const ordered = site.projectCategories.filter((c) => counts.has(c))
  const extras = [...counts.keys()].filter((c) => !site.projectCategories.includes(c)).sort()
  return [...ordered, ...extras].map((name) => ({ name, count: counts.get(name) }))
}

export function projectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null
}

export const showAllProjectsPage = projects.length > site.allProjectsThreshold

export { site }
