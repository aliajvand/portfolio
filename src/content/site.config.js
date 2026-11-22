/**
 * Who you are and where people can find you.
 * This is the only place your name, contact details and links are written.
 */
const configuredBase =
  typeof import.meta !== 'undefined' && import.meta.env?.VITE_BASE_PATH
    ? import.meta.env.VITE_BASE_PATH
    : typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL
    ? import.meta.env.BASE_URL
    : '/'
const basePath = configuredBase.replace(/\/$/, '') || ''

export const site = {
  /* --- identity ---------------------------------------------------- */
  name: 'علی اجوند (Ali Ajvand)',
  roles: [
    'Senior Data Scientist',
    'Machine Learning Architect',
    'Commercial Intelligence Engineer',
  ],
  tagline:
    'مهندسی تصمیم، مدل‌سازی ریسک و هوش تجاری در مقیاس پروداکشن — بدون نشت زمانی و با ارقام اثبات‌شده.',
  valueProp:
    'طراحی و استقرار سیستم‌های تصمیم‌یار از پایپ‌لاین‌های تراکنشی SQL و استاراسکیما تا سرویس‌های کم‌تأخیر یادگیری ماشین و شبیه‌سازهای مالی؛ متعهد به ارقام واقعی، اعتبارسنجی بدون نشت زمانی و بازدهی اقتصادی ملموس.',
  location: 'تهران، ایران',
  timezone: 'UTC+3:30',
  availability: 'آماده همکاری تمام‌وقت در موقعیت‌های ارشد دیتا و پایلوت‌های صنعتی',

  /* --- SEO --------------------------------------------------------- */
  url: `https://aliajvand.github.io${basePath}`,
  description:
    'علی اجوند — Senior Data Scientist & ML Architect. پیش‌بینی تقاضای زنجیره تأمین، موتورهای تصمیم‌گیری ریسک اعتباری، هوش تجاری و پلتفرم‌های ممیزی سود.',
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
      url: 'https://linkedin.com/in/aliajvand',
    },
  ],

  /* --- github integration ------------------------------------------ */
  githubUser: 'aliajvand',

  /* --- projects ----------------------------------------------------- */
  projectCategories: [
    'Machine Learning',
    'Forecasting & Time Series',
    'Decision Engines & Risk',
    'Business Intelligence',
    'Healthcare & NLP',
  ],
  allProjectsThreshold: 6,
}

export default site
