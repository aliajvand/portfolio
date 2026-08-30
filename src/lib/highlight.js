/** Dependency-free syntax highlighting. Returns HTML for a <pre class="hl">. */
const KEYWORDS = {
  py: 'def|class|return|if|elif|else|for|while|in|is|not|and|or|import|from|as|with|try|except|finally|raise|lambda|None|True|False|async|await|yield|pass|break|continue|global|assert|del|self',
  sql: 'SELECT|FROM|WHERE|GROUP|BY|ORDER|JOIN|LEFT|RIGHT|INNER|OUTER|FULL|ON|AS|WITH|HAVING|LIMIT|OFFSET|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|ALTER|DROP|TABLE|VIEW|INDEX|CASE|WHEN|THEN|ELSE|END|AND|OR|NOT|NULL|IS|IN|DISTINCT|UNION|ALL|OVER|PARTITION|PRIMARY|KEY|FOREIGN|REFERENCES',
  js: 'const|let|var|function|return|if|else|for|while|of|in|class|new|await|async|import|export|default|from|try|catch|finally|throw|typeof|instanceof|null|undefined|true|false',
  sh: 'if|then|fi|for|do|done|echo|export|cd|sudo|pip|python|docker|git',
}

export function languageOf(path = '') {
  const ext = (path.split('.').pop() || '').toLowerCase()
  if (ext === 'py' || ext === 'ipynb') return 'py'
  if (ext === 'sql' || ext === 'dax') return 'sql'
  if (['js', 'jsx', 'ts', 'tsx', 'json'].includes(ext)) return 'js'
  if (ext === 'sh') return 'sh'
  return 'txt'
}

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export function highlight(code, lang = 'txt') {
  const kw = KEYWORDS[lang] || ''
  const pattern =
    '(?<c>#[^\\n]*|//[^\\n]*|--[^\\n]*|/\\*[\\s\\S]*?\\*/)' +
    '|(?<s>\'\'\'[\\s\\S]*?\'\'\'|"""[\\s\\S]*?"""|\'[^\'\\n]*\'|"[^"\\n]*"|`[^`]*`)' +
    '|(?<n>\\b\\d+(?:\\.\\d+)?\\b)' +
    (kw ? `|(?<k>\\b(?:${kw})\\b)` : '') +
    '|(?<f>\\b[A-Za-z_][A-Za-z0-9_]*(?=\\())'

  let regex
  try {
    regex = new RegExp(pattern, 'g' + (lang === 'sql' ? 'i' : ''))
  } catch {
    return escapeHtml(code)
  }

  const marked = escapeHtml(code).replace(regex, (match, ...args) => {
    const groups = args[args.length - 1]
    if (!groups) return match
    const cls = groups.c ? 'c' : groups.s ? 's' : groups.n ? 'n' : groups.k ? 'k' : 'f'
    return `<span class="${cls}">${match}</span>`
  })

  return marked
    .split('\n')
    .map((line, i) => `<span class="ln">${i + 1}</span>${line}`)
    .join('\n')
}
