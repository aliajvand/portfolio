/**
 * ===========================================================================
 *  APPLE-INSPIRED DESIGN SYSTEM TOKENS
 *  Vazir (وزیر) Font Integration + Apple Luxury Dark/Light Palette
 * ===========================================================================
 */

export const tokens = {
  colors: {
    dark: {
      bg: '#050508', // Apple pitch black for OLED clarity
      surface: '#0d0d12', // Apple dark graphite panels / glass
      card: '#13131a', // Elevated bento card surface
      raised: '#1c1c24', // Hover & active elevated state
      line: 'rgba(255, 255, 255, 0.08)', // Apple hairline border
      ink: '#f5f5f7', // High-contrast Apple off-white
      inkMuted: '#a1a1a6', // Secondary text gray
      inkFaint: '#6e6e73', // Faint captions / metadata
      accent: '#2997ff', // Apple electric blue
      accent2: '#30d158', // Apple emerald green
      accent3: '#bf5af2', // Apple vibrant purple
      accentAmber: '#ff9f0a', // Apple warm amber for alerts
      onAccent: '#ffffff',
    },
    light: {
      bg: '#f5f5f7', // Apple signature gray canvas
      surface: '#ffffff', // Pure white frosted surface
      card: '#ffffff', // Card surface
      raised: '#e8e8ed', // Subtle elevated gray
      line: 'rgba(0, 0, 0, 0.08)', // Soft hairline border
      ink: '#1d1d1f', // Apple deep obsidian
      inkMuted: '#515154', // Muted dark gray
      inkFaint: '#86868b', // Faint tertiary gray
      accent: '#0071e3', // Apple light mode action blue
      accent2: '#0077ed',
      accent3: '#af52de',
      accentAmber: '#d97706',
      onAccent: '#ffffff',
    },
  },

  fonts: {
    display: "'Vazir', -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', system-ui, sans-serif",
    body: "'Vazir', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', system-ui, sans-serif",
    mono: "'SF Mono', 'JetBrains Mono', 'Fira Code', Menlo, monospace",
  },

  radii: {
    sm: '10px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    pill: '999px',
  },

  space: {
    gutter: '24px',
    gutterLg: '56px',
    section: '96px',
    rail: '76px',
  },

  motion: {
    easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
    fast: 0.18,
    base: 0.32,
    slow: 0.6,
  },
}

export default tokens
