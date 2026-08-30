/**
 * Who you are and where people can find you.
 * This is the only place your name, contact details and links are written.
 */
const configuredBase = typeof import.meta !== 'undefined' && import.meta.env?.VITE_BASE_PATH
  ? import.meta.env.VITE_BASE_PATH
  : (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL ? import.meta.env.BASE_URL : '/')
const basePath = configuredBase.replace(/\/$/, '') || ''

export const site = {
  /* --- identity ---------------------------------------------------- */
  name: 'Ali Ajvand',
  roles: ['Data Scientist', 'ML Engineer', 'BI Developer'],
  tagline: 'Data Scientist who builds leakage-safe models and dashboards that drive real decisions.',
  valueProp:
    'End-to-end data science and BI: from Python/SQL pipelines to ML models and Power BI dashboards. I build systems that survive production — not notebooks that impress on test data.',
  location: 'Tehran, Iran',
  timezone: 'UTC+3:30',
  availability: 'Available for full-time remote or on-site roles',

  /* --- SEO --------------------------------------------------------- */
  url: `https://aliajvand.github.io${basePath}`,
  description:
    'Ali Ajvand — Data Scientist, ML Engineer, and BI Developer. Predictive modeling, credit risk, demand forecasting, Power BI dashboards, and MLOps.',
  ogImage: '/og-image.png',
  twitterHandle: '',

  /* --- contact ----------------------------------------------------- */
  email: 'aliajvand@gmail.com',
  phone: '09195253462',
  phoneLink: '+989195253462',

  /* --- files ------------------------------------------------------- */
  resumePath: `${basePath}/Ali_Ajvand_Resume.pdf`,
  profilePhoto: `${basePath}/images/profile.png`,

  /* --- socials ----------------------------------------------------- */
  socials: [
    { id: 'github', label: 'GitHub', icon: 'github', url: 'https://github.com/aliajvand' },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://linkedin.com/in/ali-ajvand-2342b3232',
    },
  ],

  /* --- github integration ------------------------------------------ */
  githubUser: 'aliajvand',

  /* --- projects ----------------------------------------------------- */
  projectCategories: [
    'Data Analysis',
    'Machine Learning',
    'Business Intelligence',
    'Dashboard',
    'Automation',
  ],
  allProjectsThreshold: 6,
}

export default site