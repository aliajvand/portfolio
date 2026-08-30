// Regenerates public/sitemap.xml from site.config.js + the files in src/content/projects/.
// Runs automatically before every `npm run build`. Also runnable with `npm run sitemap`.
import { readdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, '..')
const siteConfigUrl = pathToFileURL(resolve(root, 'src/content/site.config.js')).href
const { site } = await import(siteConfigUrl)

// This script runs in plain Node (no Vite import.meta.env), so it derives the base
// path itself instead of relying on site.config.js. The site is deployed under a
// subfolder, so the URL host and path are resolved here.
const basePath = (process.env.BASE_PATH || process.env.VITE_BASE_PATH || '/portfolio/').replace(/\/$/, '')
const base = `https://aliajvand.github.io${basePath}`
const staticRoutes = ['/', '/about', '/projects', '/projects/all', '/experience', '/skills', '/services', '/contact']
const files = await readdir(resolve(root, 'src/content/projects'))
const projectRoutes = files.filter((f) => f.endsWith('.md')).map((f) => `/projects/${f.replace(/\.md$/, '')}`)
const today = new Date().toISOString().slice(0, 10)

const urls = [...staticRoutes, ...projectRoutes]
  .map((p) => `  <url>\n    <loc>${base}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${p === '/' ? '1.0' : '0.8'}</priority>\n  </url>`)
  .join('\n')

await writeFile(
  resolve(root, 'public/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
)
console.log(`sitemap.xml written with ${staticRoutes.length + projectRoutes.length} urls`)
