/**
 * ===========================================================================
 *  THE ENTIRE DESIGN SYSTEM LIVES HERE.
 *  No other file in this project hardcodes a colour, font or radius.
 *  Change a value below, save, and the whole site updates.
 * ===========================================================================
 */

export const tokens = {
  /* ------------------------------------------------------------------ */
  /*  COLOURS                                                            */
  /*  Left column = the name used in the UI. Right column = the colour.  */
  /* ------------------------------------------------------------------ */
  colors: {
    dark: {
      bg: '#070B14', //  navy-950  page background
      surface: '#0C1220', //  navy-900  sidebar rail / panels
      card: '#121A2E', //  navy-800  card surface
      raised: '#1A2440', //  navy-700  hover / active state
      line: '#223055', //  line-700  hairline borders
      ink: '#EDF1FA', //  ink-100   primary text
      inkMuted: '#B7C0DA', //  ink-300   secondary text
      inkFaint: '#7C87A6', //  ink-500   muted text / labels
      accent: '#4C7DFF', //  signal-blue    primary accent
      accent2: '#35E7C6', //  signal-cyan    secondary accent
      accent3: '#9B7BFA', //  signal-violet  rare tertiary accent
      onAccent: '#050912', //  text printed on top of an accent colour
    },
    light: {
      bg: '#F6F8FD', //  paper-50
      surface: '#FFFFFF', //  paper-0
      card: '#FFFFFF',
      raised: '#EDF1FA', //  paper-200
      line: '#D8DEEE', //  graphite-200
      ink: '#0A1020', //  graphite-900
      inkMuted: '#454F6B', //  graphite-600
      inkFaint: '#6B7590', //  graphite-500
      accent: '#2A56E0',
      accent2: '#0E9C84',
      accent3: '#7551DE',
      onAccent: '#FFFFFF',
    },
  },

  /* ------------------------------------------------------------------ */
  /*  FONTS                                                              */
  /*  If you change these, also update the Google Fonts <link>           */
  /*  on line ~28 of index.html so the browser downloads them.           */
  /* ------------------------------------------------------------------ */
  fonts: {
    display: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
    body: "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  },

  /* ------------------------------------------------------------------ */
  /*  SHAPE + SPACE                                                      */
  /* ------------------------------------------------------------------ */
  radii: {
    sm: '8px',
    md: '12px',
    lg: '20px',
    pill: '999px',
  },

  /* Vertical rhythm. Section padding scales off these. */
  space: {
    gutter: '28px', //  page side padding on mobile
    gutterLg: '64px', //  page side padding on desktop
    section: '112px', //  gap between major page sections
    rail: '76px', //  width of the icon sidebar
  },

  /* Motion. Keep it restrained: no bounce, no elastic. */
  motion: {
    easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
    fast: 0.18,
    base: 0.32,
    slow: 0.6,
  },
}

export default tokens
