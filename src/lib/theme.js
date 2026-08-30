import tokens from '../content/design-tokens.js'

const STORAGE_KEY = 'ali-theme'

/** Writes design-tokens.js into CSS custom properties on <html>. */
export function applyTheme(mode) {
  const root = document.documentElement
  const palette = tokens.colors[mode] || tokens.colors.dark

  Object.entries(palette).forEach(([key, value]) => root.style.setProperty(`--t-${key}`, value))
  Object.entries(tokens.fonts).forEach(([key, value]) => root.style.setProperty(`--t-font-${key}`, value))
  Object.entries(tokens.radii).forEach(([key, value]) => root.style.setProperty(`--t-radius-${key}`, value))
  Object.entries(tokens.space).forEach(([key, value]) => root.style.setProperty(`--t-space-${key}`, value))
  root.style.setProperty('--t-ease-out', tokens.motion.easeOut)

  root.dataset.theme = mode
  root.style.colorScheme = mode
}

export function initialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* private mode, ignore */
  }
  if (typeof matchMedia === 'function' && matchMedia('(prefers-color-scheme: light)').matches) return 'light'
  return 'dark'
}

export function storeTheme(mode) {
  try {
    localStorage.setItem(STORAGE_KEY, mode)
  } catch {
    /* ignore */
  }
}

export { tokens }
