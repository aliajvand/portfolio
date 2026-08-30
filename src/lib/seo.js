import { useEffect } from 'react'
import site from '../content/site.config.js'

function upsert(selector, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(attrs.tag || 'meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'tag' || v == null) return
    el.setAttribute(k, v)
  })
  return el
}

let jsonLdNode = null

/** Sets title, description, canonical, OG/Twitter tags and JSON-LD for a route. */
export function useSeo({ title, description, path = '/', image, jsonLd, type = 'website' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.roles.join(', ')}`
    const desc = description || site.description
    const canonical = `${site.url.replace(/\/$/, '')}${path}`
    const ogImage = `${site.url.replace(/\/$/, '')}${image || site.ogImage}`

    document.title = fullTitle
    upsert('meta[name="description"]', { name: 'description', content: desc })
    upsert('link[rel="canonical"]', { tag: 'link', rel: 'canonical', href: canonical })
    upsert('meta[property="og:title"]', { property: 'og:title', content: fullTitle })
    upsert('meta[property="og:description"]', { property: 'og:description', content: desc })
    upsert('meta[property="og:url"]', { property: 'og:url', content: canonical })
    upsert('meta[property="og:image"]', { property: 'og:image', content: ogImage })
    upsert('meta[property="og:type"]', { property: 'og:type', content: type })
    upsert('meta[property="og:site_name"]', { property: 'og:site_name', content: site.name })
    upsert('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsert('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle })
    upsert('meta[name="twitter:description"]', { name: 'twitter:description', content: desc })
    upsert('meta[name="twitter:image"]', { name: 'twitter:image', content: ogImage })
    if (site.twitterHandle) {
      upsert('meta[name="twitter:creator"]', { name: 'twitter:creator', content: site.twitterHandle })
    }

    if (!jsonLdNode) {
      jsonLdNode = document.createElement('script')
      jsonLdNode.type = 'application/ld+json'
      document.head.appendChild(jsonLdNode)
    }
    jsonLdNode.textContent = JSON.stringify(jsonLd || personSchema())
  }, [title, description, path, image, type, jsonLd])
}

export function personSchema() {
  const base = site.url.replace(/\/$/, '')
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${base}/#person`,
    name: site.name,
    jobTitle: site.roles.join(', '),
    description: site.description,
    email: `mailto:${site.email}`,
    telephone: site.phoneLink,
    url: `${base}/`,
    image: `${base}${site.profilePhoto}`,
    address: { '@type': 'PostalAddress', addressLocality: site.location },
    sameAs: site.socials.filter((s) => s.url && !/^TODO/.test(s.url)).map((s) => s.url),
  }
}

export function projectSchema(project) {
  const base = site.url.replace(/\/$/, '')
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    headline: project.title,
    description: project.summary,
    url: `${base}/projects/${project.slug}`,
    author: { '@id': `${base}/#person` },
    creator: { '@id': `${base}/#person` },
    keywords: [...(project.categories || []), ...(project.tech || [])].join(', '),
    about: project.categories,
    inLanguage: 'en',
    ...(project.repo ? { codeRepository: `https://github.com/${site.githubUser}/${project.repo}` } : {}),
  }
}

export { site }
