/**
 * GitHub REST API, unauthenticated (60 requests/hour per visitor IP).
 * Everything is cached in sessionStorage so a visit costs very few requests.
 */
import site from '../content/site.config.js'

const OWNER = site.githubUser
const memory = new Map()

async function request(url, { raw = false } = {}) {
  const cacheKey = `gh:${url}:${raw ? 'raw' : 'json'}`
  if (memory.has(cacheKey)) return memory.get(cacheKey)
  try {
    const stored = sessionStorage.getItem(cacheKey)
    if (stored) {
      const value = raw ? stored : JSON.parse(stored)
      memory.set(cacheKey, value)
      return value
    }
  } catch {
    /* ignore */
  }

  const res = await fetch(url, {
    headers: { Accept: raw ? 'application/vnd.github.raw' : 'application/vnd.github+json' },
  })
  if (res.status === 403 || res.status === 429) {
    const err = new Error('GitHub rate limit reached')
    err.rateLimited = true
    throw err
  }
  if (res.status === 404) {
    const err = new Error('Not found on GitHub')
    err.notFound = true
    throw err
  }
  if (!res.ok) throw new Error(`GitHub request failed (${res.status})`)

  const value = raw ? await res.text() : await res.json()
  memory.set(cacheKey, value)
  try {
    sessionStorage.setItem(cacheKey, raw ? value : JSON.stringify(value))
  } catch {
    /* quota, ignore */
  }
  return value
}

export const repoUrl = (repo) => `https://github.com/${OWNER}/${repo}`

export const fetchRepo = (repo) => request(`https://api.github.com/repos/${OWNER}/${repo}`)

export const fetchAllRepos = () =>
  request(`https://api.github.com/users/${OWNER}/repos?per_page=100&sort=updated`)

export const fetchReadme = (repo) => request(`https://api.github.com/repos/${OWNER}/${repo}/readme`, { raw: true })

const CODE_EXT = /\.(py|ipynb|sql|dax|js|jsx|ts|tsx|md|json|ya?ml|toml|sh|r|txt|cfg|ini)$/i

export async function fetchTree(repo) {
  const meta = await fetchRepo(repo)
  const branch = meta.default_branch || 'main'
  const tree = await request(
    `https://api.github.com/repos/${OWNER}/${repo}/git/trees/${branch}?recursive=1`
  )
  const files = (tree.tree || [])
    .filter((f) => f.type === 'blob' && CODE_EXT.test(f.path) && f.size < 250000)
    .slice(0, 120)
  return { branch, files }
}

export const fetchFile = (repo, branch, path) =>
  fetch(`https://raw.githubusercontent.com/${OWNER}/${repo}/${branch}/${encodeURI(path)}`).then((r) => {
    if (!r.ok) throw new Error('Could not read that file')
    return r.text()
  })

export function formatDate(iso) {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  } catch {
    return ''
  }
}
