/**
 * Placeholder visuals for case-study sections, drawn as SVG so they are sharp,
 * theme-aware and weightless. Replace any of them with a real screenshot by
 * pointing the project's `figures:` frontmatter at an image path instead of
 * `figure:name`, e.g.  Overview: /images/my-dashboard.png
 */
const A = 'var(--color-accent)'
const A2 = 'var(--color-accent-2)'
const A3 = 'var(--color-accent-3)'
const LINE = 'var(--color-line)'
const CARD = 'var(--color-card)'
const RAISED = 'var(--color-raised)'
const INK = 'var(--color-ink)'
const FAINT = 'var(--color-ink-faint)'
const MONO = 'var(--font-mono)'
const SANS = 'var(--font-body)'

/* deterministic pseudo-random so figures never change between renders */
function rng(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return s / 2147483647
  }
}

function Pipeline() {
  const steps = ['Ingest', 'Clean', 'Embed', 'Index', 'API', 'Client']
  return (
    <svg viewBox="0 0 800 130" role="img" aria-label="Processing pipeline diagram">
      {steps.map((s, i) => {
        const x = 46 + i * 126
        return (
          <g key={s}>
            {i < steps.length - 1 && (
              <>
                <path d={`M${x + 40} 65 H${x + 86}`} stroke={LINE} strokeWidth="1" />
                <circle cx={x + 63} cy={65} r="2.5" fill={A2} />
              </>
            )}
            <rect x={x - 38} y={45} width="76" height="40" rx="10" fill={CARD} stroke={i === 3 ? A : LINE} />
            <text x={x} y={69} textAnchor="middle" fontFamily={MONO} fontSize="9" fill={i === 3 ? A : INK}>
              {s}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

function Flow() {
  return (
    <svg viewBox="0 0 800 150" role="img" aria-label="Schematic flow diagram">
      <defs>
        <pattern id="fdots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill={LINE} />
        </pattern>
      </defs>
      <rect width="800" height="150" fill="url(#fdots)" opacity="0.6" />
      <rect x="58" y="42" width="152" height="66" rx="12" fill={CARD} stroke={LINE} />
      <text x="134" y="70" textAnchor="middle" fontFamily={MONO} fontSize="9" fill={FAINT}>SOURCE</text>
      <text x="134" y="89" textAnchor="middle" fontFamily={SANS} fontSize="11.5" fill={INK}>Messy input</text>
      <path d="M216 75 H310" stroke={A} strokeWidth="1.4" strokeDasharray="4 4" />
      <rect x="316" y="30" width="170" height="90" rx="12" fill={RAISED} stroke={A} />
      <text x="401" y="59" textAnchor="middle" fontFamily={MONO} fontSize="9" fill={A}>TRANSFORM</text>
      <text x="401" y="79" textAnchor="middle" fontFamily={SANS} fontSize="11.5" fill={INK}>Validate, model,</text>
      <text x="401" y="97" textAnchor="middle" fontFamily={SANS} fontSize="11.5" fill={INK}>measure</text>
      <path d="M492 75 H586" stroke={A2} strokeWidth="1.4" strokeDasharray="4 4" />
      <rect x="592" y="42" width="152" height="66" rx="12" fill={CARD} stroke={LINE} />
      <text x="668" y="70" textAnchor="middle" fontFamily={MONO} fontSize="9" fill={FAINT}>OUTPUT</text>
      <text x="668" y="89" textAnchor="middle" fontFamily={SANS} fontSize="11.5" fill={INK}>Decision</text>
    </svg>
  )
}

function Bars() {
  const d = [62, 88, 41, 74, 96, 53, 68, 35, 80, 47, 90, 58]
  const labels = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
  return (
    <svg viewBox="0 0 800 158" role="img" aria-label="Distribution bar chart">
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="52" y1={28 + i * 26} x2="772" y2={28 + i * 26} stroke={LINE} />
      ))}
      {[100, 75, 50, 25].map((v, i) => (
        <text key={v} x="42" y={32 + i * 26} textAnchor="end" fontFamily={MONO} fontSize="8" fill={FAINT}>{v}</text>
      ))}
      {d.map((v, i) => (
        <g key={i}>
          <rect x={64 + i * 59} y={132 - v * 1.04} width="30" height={v * 1.04} rx="4" fill={v > 85 ? A : RAISED} />
          <text x={79 + i * 59} y="148" textAnchor="middle" fontFamily={MONO} fontSize="8" fill={FAINT}>{labels[i]}</text>
        </g>
      ))}
    </svg>
  )
}

function LineChart() {
  const d = [34, 38, 31, 44, 52, 49, 58, 63, 57, 71, 84, 92]
  const pts = d.map((v, i) => [60 + i * 62, 140 - v * 1.15])
  const path = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]} ${p[1].toFixed(1)}`).join(' ')
  return (
    <svg viewBox="0 0 800 160" role="img" aria-label="Trend line chart">
      <defs>
        <linearGradient id="lgrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={A} stopOpacity="0.3" />
          <stop offset="1" stopColor={A} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[40, 90, 140].map((y) => <line key={y} x1="60" y1={y} x2="762" y2={y} stroke={LINE} />)}
      <path d={`${path} L${pts[pts.length - 1][0]} 140 L60 140 Z`} fill="url(#lgrad)" />
      <path d={path} fill="none" stroke={A} strokeWidth="2" strokeLinecap="round" />
      {pts.filter((_, i) => i % 3 === 0).map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1].toFixed(1)} r="3.2" fill="var(--color-bg)" stroke={A2} strokeWidth="1.6" />
      ))}
      <text x="60" y="156" fontFamily={MONO} fontSize="8" fill={FAINT}>JAN</text>
      <text x="762" y="156" textAnchor="end" fontFamily={MONO} fontSize="8" fill={FAINT}>DEC</text>
    </svg>
  )
}

function Donut() {
  const seg = [[41, A, 'High value'], [24, A3, 'Loyal'], [18, A2, 'Occasional'], [11, RAISED, 'Discount'], [6, FAINT, 'At risk']]
  let angle = -90
  const rad = (x) => (x * Math.PI) / 180
  return (
    <svg viewBox="0 0 430 160" role="img" aria-label="Share by segment">
      {seg.map(([pct, color, label], i) => {
        const sweep = pct * 3.6
        const r = 54
        const cx = 110
        const cy = 80
        const x1 = cx + r * Math.cos(rad(angle))
        const y1 = cy + r * Math.sin(rad(angle))
        const x2 = cx + r * Math.cos(rad(angle + sweep))
        const y2 = cy + r * Math.sin(rad(angle + sweep))
        const arc = `M${x1.toFixed(1)} ${y1.toFixed(1)} A${r} ${r} 0 ${sweep > 180 ? 1 : 0} 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`
        angle += sweep
        const ly = 36 + i * 25
        return (
          <g key={label}>
            <path d={arc} fill="none" stroke={color} strokeWidth="17" />
            <circle cx="236" cy={ly - 4} r="4" fill={color} />
            <text x="250" y={ly} fontFamily={SANS} fontSize="11.5" fill="var(--color-ink-muted)">{label}</text>
            <text x="412" y={ly} textAnchor="end" fontFamily={MONO} fontSize="11" fill={INK}>{pct}%</text>
          </g>
        )
      })}
      <text x="110" y="78" textAnchor="middle" fontFamily={MONO} fontSize="16" fill={INK}>5</text>
      <text x="110" y="94" textAnchor="middle" fontFamily={MONO} fontSize="7.5" fill={FAINT}>SEGMENTS</text>
    </svg>
  )
}

function Clusters() {
  const rand = rng(7)
  const centers = [[190, 70, A], [330, 50, A3], [420, 105, A2], [240, 120, A], [520, 72, FAINT]]
  const dots = []
  centers.forEach((c, ci) => {
    for (let i = 0; i < 26; i += 1) {
      const x = c[0] + (rand() - 0.5) * 88
      const y = Math.min(142, Math.max(18, c[1] + (rand() - 0.5) * 54))
      dots.push(<circle key={`${ci}-${i}`} cx={x.toFixed(1)} cy={y.toFixed(1)} r="3.1" fill={c[2]} opacity="0.7" />)
    }
  })
  return (
    <svg viewBox="0 0 800 164" role="img" aria-label="Cluster scatter plot">
      <line x1="56" y1="148" x2="762" y2="148" stroke={LINE} />
      <line x1="56" y1="14" x2="56" y2="148" stroke={LINE} />
      {dots}
      {centers.map((c, i) => (
        <g key={i}>
          <circle cx={c[0]} cy={c[1]} r="6.5" fill="none" stroke={c[2]} strokeWidth="1.5" />
          <circle cx={c[0]} cy={c[1]} r="1.8" fill={c[2]} />
        </g>
      ))}
      <text x="62" y="12" fontFamily={MONO} fontSize="8" fill={FAINT}>MONETARY</text>
      <text x="762" y="160" textAnchor="end" fontFamily={MONO} fontSize="8" fill={FAINT}>FREQUENCY</text>
    </svg>
  )
}

function Matrix() {
  const m = [[86, 7, 4, 3], [6, 81, 9, 4], [5, 8, 79, 8], [3, 4, 7, 86]]
  const labels = ['CLASS A', 'CLASS B', 'CLASS C', 'CLASS D']
  return (
    <svg viewBox="0 0 480 176" role="img" aria-label="Confusion matrix">
      {m.map((row, r) =>
        row.map((v, c) => (
          <g key={`${r}-${c}`}>
            <rect x={142 + c * 74} y={20 + r * 32} width="70" height="28" rx="5" fill={r === c ? A : A3} opacity={(v / 100) * 0.9 + 0.06} />
            <text x={177 + c * 74} y={38 + r * 32} textAnchor="middle" fontFamily={MONO} fontSize="10" fill={v > 50 ? 'var(--color-on-accent)' : 'var(--color-ink-muted)'}>{v}</text>
          </g>
        ))
      )}
      {labels.map((l, i) => (
        <g key={l}>
          <text x="134" y={38 + i * 32} textAnchor="end" fontFamily={MONO} fontSize="8" fill={FAINT}>{l}</text>
          <text x={177 + i * 74} y="166" textAnchor="middle" fontFamily={MONO} fontSize="8" fill={FAINT}>{l}</text>
        </g>
      ))}
    </svg>
  )
}

function Rules() {
  const rows = [['Coffee', 'Filters', 4.7], ['Yoga mat', 'Blocks', 3.9], ['Router', 'Cat6 cable', 3.4], ['Printer', 'Toner', 2.8], ['Monitor', 'HDMI cable', 2.2]]
  return (
    <svg viewBox="0 0 480 158" role="img" aria-label="Association rules ranked by lift">
      <text x="16" y="10" fontFamily={MONO} fontSize="7.5" fill={FAINT}>ANTECEDENT</text>
      <text x="192" y="10" fontFamily={MONO} fontSize="7.5" fill={FAINT}>CONSEQUENT</text>
      <text x="466" y="10" textAnchor="end" fontFamily={MONO} fontSize="7.5" fill={FAINT}>LIFT</text>
      {rows.map(([a, b, lift], i) => {
        const y = 30 + i * 27
        return (
          <g key={a}>
            <text x="16" y={y} fontFamily={SANS} fontSize="11.5" fill="var(--color-ink-muted)">{a}</text>
            <path d={`M122 ${y - 4} H178`} stroke={LINE} />
            <path d={`M172 ${y - 7.5} l6 3.5 -6 3.5z`} fill={A2} />
            <text x="192" y={y} fontFamily={SANS} fontSize="11.5" fill="var(--color-ink-muted)">{b}</text>
            <rect x="306" y={y - 11} width={lift * 30} height="13" rx="3" fill={A} opacity={(lift / 5).toFixed(2)} />
            <text x="466" y={y} textAnchor="end" fontFamily={MONO} fontSize="10" fill={INK}>{lift}x</text>
          </g>
        )
      })}
    </svg>
  )
}

function Shap() {
  const rows = [['tenure_months', -0.42], ['support_tickets_90d', 0.31], ['monthly_spend_delta', -0.27], ['days_since_last_order', 0.22], ['discount_dependency', 0.16]]
  return (
    <svg viewBox="0 0 480 168" role="img" aria-label="Feature contribution chart">
      <line x1="250" y1="18" x2="250" y2="156" stroke={LINE} />
      <text x="250" y="12" textAnchor="middle" fontFamily={MONO} fontSize="7.5" fill={FAINT}>0</text>
      {rows.map(([f, v], i) => {
        const y = 32 + i * 26
        const w = Math.abs(v) * 380
        return (
          <g key={f}>
            <text x="16" y={y + 4} fontFamily={MONO} fontSize="9" fill="var(--color-ink-muted)">{f}</text>
            <rect x={v < 0 ? 250 - w : 250} y={y - 6} width={w} height="13" rx="3" fill={v < 0 ? A2 : A3} opacity="0.85" />
          </g>
        )
      })}
      <text x="16" y="166" fontFamily={MONO} fontSize="7.5" fill={A2}>LOWERS RISK</text>
      <text x="466" y="166" textAnchor="end" fontFamily={MONO} fontSize="7.5" fill={A3}>RAISES RISK</text>
    </svg>
  )
}

function MapFig() {
  const rand = rng(23)
  const dots = []
  for (let i = 0; i < 58; i += 1) {
    const x = 140 + rand() * 430
    const y = 32 + rand() * 98
    const hot = rand() > 0.78
    dots.push(<circle key={i} cx={x.toFixed(1)} cy={y.toFixed(1)} r={hot ? 4 : 2.4} fill={hot ? A : A2} opacity={hot ? 0.95 : 0.5} />)
  }
  return (
    <svg viewBox="0 0 760 164" role="img" aria-label="Store coverage map with optimal route">
      <path d="M120 20 C60 60 70 130 150 140 C240 152 300 120 380 138 C470 158 560 130 600 96 C650 52 560 18 460 24 C360 30 200 -8 120 20 Z" fill={CARD} stroke={LINE} />
      {dots}
      <path d="M180 110 L250 70 L330 92 L410 58 L500 80" fill="none" stroke={A} strokeWidth="1.4" strokeDasharray="5 4" />
      <text x="622" y="48" fontFamily={MONO} fontSize="8.5" fill={A2}>COVERED</text>
      <text x="622" y="68" fontFamily={MONO} fontSize="8.5" fill={A}>GAP</text>
      <text x="622" y="88" fontFamily={MONO} fontSize="8.5" fill={FAINT}>ROUTE</text>
    </svg>
  )
}

function Dashboard() {
  const kpis = [['Revenue', '$4.82M', '+12.4%'], ['Gross margin', '31.6%', '-1.9pp'], ['Orders', '118K', '+8.1%'], ['Avg basket', '$40.80', '+3.6%']]
  const cats = [['Electronics', 92], ['Home', 74], ['Apparel', 58], ['Sports', 41], ['Beauty', 29]]
  const bars = [52, 68, 44, 79, 92, 61, 74, 88, 57, 96, 81, 70]
  return (
    <svg viewBox="0 0 800 324" role="img" aria-label="Business intelligence dashboard layout">
      <rect width="800" height="324" fill="var(--color-surface)" />
      <rect width="800" height="40" fill={RAISED} />
      <circle cx="24" cy="20" r="5.5" fill={A} />
      <text x="42" y="24" fontFamily={SANS} fontSize="12" fill={INK}>Sales Performance</text>
      <text x="700" y="24" fontFamily={MONO} fontSize="8.5" fill={FAINT}>FY / ALL REGIONS</text>
      {kpis.map(([label, value, delta], i) => (
        <g key={label} transform={`translate(${20 + i * 192},56)`}>
          <rect width="176" height="62" rx="9" fill={CARD} stroke={LINE} />
          <text x="14" y="21" fontFamily={MONO} fontSize="7.5" fill={FAINT}>{label.toUpperCase()}</text>
          <text x="14" y="45" fontFamily={MONO} fontSize="17" fill={INK}>{value}</text>
          <text x="162" y="45" textAnchor="end" fontFamily={MONO} fontSize="9" fill={delta.startsWith('-') ? A3 : A2}>{delta}</text>
        </g>
      ))}
      <rect x="20" y="132" width="470" height="170" rx="9" fill={CARD} stroke={LINE} />
      <text x="34" y="152" fontFamily={MONO} fontSize="7.5" fill={FAINT}>REVENUE VS MARGIN BY MONTH</text>
      {bars.map((v, i) => (
        <rect key={i} x={38 + i * 37} y={286 - v * 1.2} width="20" height={v * 1.2} rx="3" fill={v > 85 ? A : RAISED} />
      ))}
      <path d="M48 242 L85 230 L122 248 L159 216 L196 202 L233 234 L270 220 L307 208 L344 238 L381 198 L418 212 L455 224" fill="none" stroke={A3} strokeWidth="1.8" />
      <rect x="506" y="132" width="274" height="170" rx="9" fill={CARD} stroke={LINE} />
      <text x="520" y="152" fontFamily={MONO} fontSize="7.5" fill={FAINT}>TOP CATEGORIES</text>
      {cats.map(([name, v], i) => (
        <g key={name}>
          <text x="520" y={180 + i * 24} fontFamily={SANS} fontSize="10.5" fill="var(--color-ink-muted)">{name}</text>
          <rect x="620" y={170 + i * 24} width={v * 1.4} height="12" rx="3" fill={A} opacity={(v / 110).toFixed(2)} />
          <text x="766" y={180 + i * 24} textAnchor="end" fontFamily={MONO} fontSize="9" fill={FAINT}>{v}</text>
        </g>
      ))}
    </svg>
  )
}

const FIGURES = {
  pipeline: Pipeline,
  flow: Flow,
  bars: Bars,
  line: LineChart,
  donut: Donut,
  clusters: Clusters,
  matrix: Matrix,
  rules: Rules,
  shap: Shap,
  map: MapFig,
  dashboard: Dashboard,
  kv: Flow,
}

/** `spec` is either "figure:name" or an image path. */
export default function Figure({ spec = 'figure:flow', alt = '', className = '' }) {
  if (spec && !spec.startsWith('figure:')) {
    return <img src={spec} alt={alt} loading="lazy" decoding="async" className={`w-full ${className}`} />
  }
  const key = (spec || '').replace('figure:', '')
  const Cmp = FIGURES[key] || Flow
  return (
    <div className={`w-full [&>svg]:h-auto [&>svg]:w-full ${className}`}>
      <Cmp />
    </div>
  )
}

export { FIGURES }
