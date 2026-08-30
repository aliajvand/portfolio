/**
 * Minimal YAML frontmatter reader. Supports what the content files need:
 *   key: value
 *   key: [one, two, three]
 *   key:
 *     - list item
 *   key:
 *     - label: x
 *       value: y
 *   key:
 *     Nested: value
 */
function coerce(raw) {
  const v = raw.trim()
  if (v === '') return ''
  if (/^\[.*\]$/.test(v)) {
    return v
      .slice(1, -1)
      .split(',')
      .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
      .filter(Boolean)
  }
  if (/^(true|false)$/i.test(v)) return v.toLowerCase() === 'true'
  if (/^(null|~)$/i.test(v)) return null
  if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v)
  return v.replace(/^['"]|['"]$/g, '')
}

function parseYaml(block) {
  const lines = block.split(/\r?\n/).filter((l) => l.trim() && !/^\s*#/.test(l))
  const data = {}
  let key = null

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i]
    const indent = line.match(/^\s*/)[0].length

    if (indent === 0) {
      const m = line.match(/^([\w-]+):\s*(.*)$/)
      if (!m) continue
      key = m[1]
      data[key] = m[2].trim() === '' ? undefined : coerce(m[2])
      continue
    }
    if (!key) continue

    const item = line.trim()
    if (item.startsWith('- ')) {
      const rest = item.slice(2)
      if (!Array.isArray(data[key])) data[key] = []
      const pair = rest.match(/^([\w-]+):\s*(.*)$/)
      if (pair) {
        const obj = { [pair[1]]: coerce(pair[2]) }
        // absorb following deeper lines that belong to this object
        while (i + 1 < lines.length) {
          const next = lines[i + 1]
          const nextIndent = next.match(/^\s*/)[0].length
          const nextPair = next.trim().match(/^([\w-]+):\s*(.*)$/)
          if (nextIndent > indent && nextPair && !next.trim().startsWith('- ')) {
            obj[nextPair[1]] = coerce(nextPair[2])
            i += 1
          } else break
        }
        data[key].push(obj)
      } else {
        data[key].push(coerce(rest))
      }
      continue
    }

    const pair = item.match(/^(.+?):\s*(.*)$/)
    if (pair) {
      if (typeof data[key] !== 'object' || Array.isArray(data[key]) || !data[key]) data[key] = {}
      data[key][pair[1].trim().replace(/^['"]|['"]$/g, '')] = coerce(pair[2])
    }
  }

  Object.keys(data).forEach((k) => {
    if (data[k] === undefined) delete data[k]
  })
  return data
}

export function parseFrontmatter(raw) {
  const text = String(raw).replace(/^\uFEFF/, '')
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text)
  if (!match) return { data: {}, body: text.trim() }
  return { data: parseYaml(match[1]), body: text.slice(match[0].length).trim() }
}

/** Splits a markdown body into `## Heading` sections, in file order. */
export function splitSections(body) {
  const parts = body.split(/^##\s+(.+)$/gm)
  const sections = []
  const intro = parts.shift()
  if (intro && intro.trim()) sections.push({ heading: null, body: intro.trim() })
  for (let i = 0; i < parts.length; i += 2) {
    sections.push({ heading: parts[i].trim(), body: (parts[i + 1] || '').trim() })
  }
  return sections
}

export function hasTodo(text) {
  return /TODO/.test(String(text || ''))
}
