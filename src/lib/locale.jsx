import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'ali-portfolio-locale'

const translations = {
  fa: {
    dir: 'rtl',
    lang: 'fa',
    nav: {
      home: 'صفحه اصلی',
      startup: 'استارتاپ RCI',
      projects: 'پروژه‌ها',
      skills: 'مهارت‌ها',
      experience: 'سوابق',
      resume: 'رزومه ATS',
      contact: 'ارتباط',
    },
    hero: {
      badge: 'Senior Data Scientist & Machine Learning Architect',
      title: 'علی اجوند',
      headline: 'مهندسی تصمیم، مدل‌سازی ریسک و هوش تجاری در مقیاس پروداکشن.',
      sub: 'طراحی و استقرار سیستم‌های تصمیم‌یار از پایپ‌لاین‌های تراکنشی SQL و استاراسکیما تا سرویس‌های کم‌تأخیر یادگیری ماشین و شبیه‌سازهای مالی؛ متعهد به ارقام واقعی، اعتبارسنجی بدون نشت زمانی و بازدهی اقتصادی ملموس.',
      btnProjects: 'مشاهده ۸ سیستم عملیاتی',
      btnStartup: 'پروژه استارتاپی RCI (به زودی)',
      btnResume: 'رزومه ATS (۲ صفحه)',
    },
    metrics: {
      m1_val: '۸',
      m1_lbl: 'سیستم پروداکشن',
      m1_sub: 'ممیزی‌شده، تست خودکار و فعال در گیت‌هاب',
      m2_val: '۸۴۴K+',
      m2_lbl: 'روز-فروشگاه پیش‌بینی',
      m2_sub: '۷۲.۵٪ کاهش خطا در ۱,۱۱۵ شعبه',
      m3_val: '۲۸۹K+',
      m3_lbl: 'ناوگان خودرو برقی',
      m3_sub: 'استاراسکیما و مدل‌سازی پذیرش بازار',
      m4_val: 'رتبه ۲ از ۱۳',
      m4_lbl: 'هکاتون چهارم کارخانه نوآوری',
      m4_sub: '۹,۶۳۰ پیش‌بینی تقاضا در ۳۲۱ شهر',
      m5_val: '۶۹.۸۵٪',
      m5_lbl: 'دقت جهتی بورس تهران',
      m5_sub: 'ترکیب GNN + LSTM در ۵ فولد پیوسته',
      m6_val: '۲.۵۲x',
      m6_lbl: 'ضریب لیفت حفظ مشتری',
      m6_sub: '۱۷۶.۷ هزار دلار ارزش قرارداد حفاظت‌شده',
      m7_val: '<۱۵ms',
      m7_lbl: 'تأخیر بازیابی برداری',
      m7_sub: 'جستجوی معنایی FAISS روی اسناد بالینی',
      m8_val: '۰٪',
      m8_lbl: 'نشت اطلاعات (Leakage)',
      m8_sub: 'اعتبارسنجی رو به جلو و ممیزی ویژگی‌ها',
    },
    projectsHead: {
      label: 'سیستم‌های عملیاتی پروداکشن',
      title: '۸ مخزن ممیزی‌شده یادگیری ماشین و هوش تجاری',
      lead: 'پایپ‌لاین‌های بدون نشت، پروتکل‌های اعتبارسنجی واک‌فوروارد، مایکروسرویس‌های FastAPI و شبیه‌سازهای تعاملی Dash روی داده‌های واقعی.',
      allBtn: 'همه سیستم‌ها',
    },
    skillsHead: {
      label: 'مهارت‌ها و متدولوژی‌ها',
      title: 'ماتریس مهارت‌های فنی و استک مهندسی',
      lead: 'از خطوط لوله داده و استاراسکیماهای Kimball تا مدل‌سازی پیشرفته ریسک، سری‌های زمانی و استقرار سرویس‌های ابری.',
    },
    expHead: {
      label: 'سوابق و افتخارات',
      title: 'تجربه حرفه‌ای و مدال‌های مسابقات کشوری',
      lead: 'مهندسی داده میدانی در مقیاس ملی و افتخار کسب رتبه دوم در هکاتون چهارم کارخانه نوآوری.',
    },
    resumeHead: {
      label: 'مدارک و شایستگی‌ها',
      title: 'رزومه بهینه‌شده ATS (صدک ۹۹ — استاندارد ۲ صفحه)',
      lead: 'فرمول ضربه گوگل (Google XYZ) با اولویت‌بندی صنایع بانکداری، رمزارز و بازارهای مالی، بیمه و خودرو.',
      btnHtml: 'مشاهده و پرینت HTML',
      btnPdf: 'دانلود PDF رسمی (۲ صفحه)',
      btnMd: 'سورس مارک‌داون',
    },
    contactHead: {
      label: 'ارتباط مستقیم',
      title: 'همکاری روی پروژه‌های بزرگ داده و یادگیری ماشین',
      lead: 'آماده برای همکاری تمام‌وقت در جایگاه‌های ارشد دیتا و پروژه‌های تحلیلی با اثرگذاری اقتصادی بالا.',
      emailLabel: 'ایمیل مستقیم',
      emailSub: 'پاسخ‌گویی سریع در کمتر از ۲۴ ساعت',
      phoneLabel: 'تلفن و تلگرام',
      phoneSub: 'تماس کاری و تلگرام مستقیم',
      locLabel: 'موقعیت مکانی',
      locVal: 'تهران، ایران',
      locSub: 'تهران (UTC+3:30) • آماده همکاری ریموت و حضوری',
    },
    projectDetails: {
      'demand-sales-forecasting': {
        title: 'سیستم پیش‌بینی تقاضای فروشگاهی زنجیره‌ای',
        summary: 'خط لوله پیش‌بینی ۴۲ روزه تقاضا در ۱,۱۱۵ شعبه فروشگاهی با کاهش ۷۲.۵٪ خطا نسبت به روش سنتی (رسیدن به WMAPE برابر ۹.۳۶٪)، اعتبارسنجی‌شده در ۵ فولد پیوسته بدون نشت زمانی.',
        stats: [
          { label: 'خطای WMAPE', value: '۹.۳۶٪' },
          { label: 'روز-فروشگاه پیش‌بینی', value: '۸۴۴,۳۳۸' },
          { label: 'شعب تحت پوشش', value: '۱,۱۱۵' },
          { label: 'شعب با خطای زیر ۱۵٪', value: '۹۸.۳٪' },
        ],
      },
      'credit-risk-decision-engine': {
        title: 'موتور تصمیم‌یار اعتبارسنجی و مدیریت ریسک تسهیلات',
        summary: 'سیستم اعتبارسنجی وام و تصمیم‌یار تخصیص تسهیلات بانکی با راندمان اقتصادی؛ بهینه‌سازی ماتریس هزینه نامتقارن ۵ به ۱ (کاهش ۳۸٪ نکول تسهیلات با حفظ نرخ پذیرش ۵۴.۴٪ در نرخ بد ۹.۸٪) و شبیه‌ساز تعاملی Dash.',
        stats: [
          { label: 'کاهش نرخ نکول', value: '۳۸٪' },
          { label: 'نرخ پذیرش تسهیلات', value: '۵۴.۴٪' },
          { label: 'نرخ وام بد', value: '۹.۸٪' },
          { label: 'نسبت ماتریس هزینه', value: '۵:۱' },
        ],
      },
      'tehran-stock-forecasting': {
        title: 'موتور یادگیری ماشین و گراف بورس اوراق بهادار تهران',
        summary: 'سیستم کمی تحلیل و پیش‌بینی بازارهای مالی با ترکیب شبکه‌های عصبی گرافی (GNN) و LSTM روی ۱۰,۸۷۴ روز معاملاتی؛ مدل‌سازی روابط بین‌نمادی و ورود پول هوشمند با دقت جهتی ۶۹.۸۵٪.',
        stats: [
          { label: 'دقت جهتی بازار', value: '۶۹.۸۵٪' },
          { label: 'روزهای معاملاتی', value: '۱۰,۸۷۴' },
          { label: 'فولدهای اعتبارسنجی', value: '۵ فولد' },
          { label: 'ویژگی‌های مهندسی‌شده', value: '۱۴۲ ویژگی' },
        ],
      },
      'pol4-hackathon': {
        title: 'سامانه پیش‌بینی تقاضای اقامتگاه (هکاتون چهارم کارخانه نوآوری)',
        summary: 'کسب رتبه دوم کشوری (مدال نقره) در هکاتون چهارم کارخانه نوآوری (جاباما × کارخانه نوآوری هوش مصنوعی) با تولید ۹,۶۳۰ پیش‌بینی روزانه تقاضا در ۳۲۱ شهر ایران با خطای میانه ۰.۱۴۳ WAPE.',
        stats: [
          { label: 'رتبه در مسابقه', value: 'رتبه ۲ از ۱۳' },
          { label: 'شهرهای تحت پوشش', value: '۳۲۱ شهر' },
          { label: 'خطای میانه WAPE', value: '۰.۱۴۳' },
          { label: 'ویژگی‌های مهندسی‌شده', value: '۹۶ ویژگی' },
        ],
      },
      'customer-churn-intelligence': {
        title: 'رادار حفظ مشتری و ارزش در معرض ریسک سازمانی (B2B SaaS)',
        summary: 'سیستم تحلیل رفتار مشتریان سازمانی، رتبه‌بندی تمایل به خروج با بوستینگ و محاسبه ارزش سالانه در معرض ریسک (VaR) با ضریب لیفت ۲.۵۲ برابری در دهک بحرانی و شبیه‌ساز مالی سود و زیان.',
        stats: [
          { label: 'ضریب لیفت دهک اول', value: '۲.۵۲x' },
          { label: 'ارزش قرارداد حفاظت‌شده', value: '$۱۷۶.۷K' },
          { label: 'شاخص تمایز AUC', value: '۰.۸۸۴' },
          { label: 'افق هشدار زودهنگام', value: '۳۰ تا ۶۰ روز' },
        ],
      },
      'olist-delivery-analytics': {
        title: 'موتور بهینه‌سازی مسیر و تحلیل لجستیک تجارت الکترونیک (Olist)',
        summary: 'تحلیل و مدل‌سازی تاخیر و هزینه حمل‌ونقل روی ۱۰۰,۰۰۰ سفارش تجارت الکترونیک؛ استاراسکیما و داشبورد ژئواسپاشیال بهینه‌سازی مسیرها برای کاهش ۳۱٪ تاخیرهای بین‌استانی.',
        stats: [
          { label: 'سفارش‌های ممیزی‌شده', value: '۱۰۰K+' },
          { label: 'کاهش تاخیر بین‌استانی', value: '۳۱٪' },
          { label: 'صرفه‌جویی هزینه حمل', value: '۱۸.۴٪' },
          { label: 'جداول استاراسکیما', value: '۷ جدول' },
        ],
      },
      'intelligent-medical-assistant': {
        title: 'دستیار هوشمند بالینی و موتور جستجوی برداری اسناد پزشکی',
        summary: 'سیستم هوشمند بازیابی اطلاعات بالینی با پردازش تصویر و OCR، تعبیه‌سازی برداری معنایی (Sentence-Transformers) و نمایه برداری فوق‌سریع FAISS با پاسخ‌گویی در کمتر از ۱۵ میلی‌ثانیه.',
        stats: [
          { label: 'تأخیر جستجوی برداری', value: '<۱۵ms' },
          { label: 'فازهای نقشه راه', value: '۶ فاز' },
          { label: 'موتور جستجوی برداری', value: 'FAISS' },
          { label: 'فریمورک سرویس‌دهی', value: 'FastAPI' },
        ],
      },
      'ev-automotive-analytics': {
        title: 'موتور تحلیلی ناوگان خودروهای برقی و پیش‌بینی قیمت خودرو',
        summary: 'استاراسکیما و خط لوله تحلیلی ۲۸۹,۰۰۰ خودرو برقی و زیرساخت شارژ، به همراه مدل رگرسیون برآورد قیمت خودرو با ضریب تبیین R² برابر ۰.۸۳۲۶ و داشبورد تحلیلی تعاملی.',
        stats: [
          { label: 'ناوگان خودرو برقی', value: '۲۸۹K+' },
          { label: 'ضریب تبیین رگرسیون (R²)', value: '۰.۸۳۲۶' },
          { label: 'میانگین خطای مطلق', value: '$۱,۴۲۰' },
          { label: 'نقاط شارژ تحلیل‌شده', value: '۴,۳۲۰ نقطه' },
        ],
      },
    },
  },
  en: {
    dir: 'ltr',
    lang: 'en',
    nav: {
      home: 'Overview',
      startup: 'RCI Stealth',
      projects: 'Systems',
      skills: 'Skills',
      experience: 'Experience',
      resume: 'ATS Resume',
      contact: 'Contact',
    },
    hero: {
      badge: 'Senior Data Scientist & Machine Learning Architect',
      title: 'Ali Ajvand',
      headline: 'Decision Systems, Risk Modeling & Production Intelligence.',
      sub: 'Architecting end-to-end decision systems: from raw SQL dimensional star schemas to low-latency ML microservices and financial policy simulators—grounded strictly in real audited data with zero temporal leakage.',
      btnProjects: 'Explore 8 Production Systems',
      btnStartup: 'RCI Platform (Coming Soon)',
      btnResume: 'ATS Resume (2 Pages)',
    },
    metrics: {
      m1_val: '8',
      m1_lbl: 'Production Systems',
      m1_sub: 'Audited, automated tests & live on GitHub',
      m2_val: '844K+',
      m2_lbl: 'Store-Days Forecasted',
      m2_sub: '72.5% error reduction across 1,115 stores',
      m3_val: '289K+',
      m3_lbl: 'EV Fleet Records',
      m3_sub: 'Star schema & market adoption modeling',
      m4_val: '2nd / 13',
      m4_lbl: '4th Innovation Factory Hackathon',
      m4_sub: '9,630 daily forecasts across 321 cities',
      m5_val: '69.85%',
      m5_lbl: 'TSETMC Directional Accuracy',
      m5_sub: 'Hybrid GNN + LSTM in 5 continuous folds',
      m6_val: '2.52x',
      m6_lbl: 'Retention Decile Lift',
      m6_sub: '$176.7K annual contract VaR protected',
      m7_val: '<15ms',
      m7_lbl: 'Vector Search Latency',
      m7_sub: 'FAISS semantic retrieval on clinical notes',
      m8_val: '0%',
      m8_lbl: 'Data Leakage',
      m8_sub: 'Strict walk-forward splits & audited features',
    },
    projectsHead: {
      label: 'Production Systems',
      title: '8 Audited Machine Learning & BI Repositories',
      lead: 'Leakage-safe pipelines, walk-forward validation protocols, FastAPI microservices, and interactive Plotly/Dash decision simulators.',
      allBtn: 'All Systems',
    },
    skillsHead: {
      label: 'Expertise & Stack',
      title: 'Technical Skills & Engineering Stack',
      lead: 'From transactional pipelines and Kimball star schemas to advanced risk modeling, time-series forecasting, and cloud deployment.',
    },
    expHead: {
      label: 'Track Record',
      title: 'Professional Experience & Competition Honors',
      lead: 'Nationwide field data engineering and Silver Medal placement at the 4th Innovation Factory Hackathon.',
    },
    resumeHead: {
      label: 'Credentials',
      title: '99th Percentile ATS-Optimized Resume (2 Pages)',
      lead: 'Engineered using Google XYZ achievement formula, prioritizing Banking, FinTech/Crypto, Insurance, and Automotive.',
      btnHtml: 'View / Print HTML',
      btnPdf: 'Download Official PDF (2 Pages)',
      btnMd: 'Markdown Source',
    },
    contactHead: {
      label: 'Get in Touch',
      title: "Let's build reliable data systems",
      lead: 'Available for full-time senior roles and high-impact analytics engineering contracts.',
      emailLabel: 'Direct Email',
      emailSub: 'Prompt reply within 24 hours',
      phoneLabel: 'Phone & Telegram',
      phoneSub: 'Direct business call & Telegram',
      locLabel: 'Location',
      locVal: 'Tehran, Iran',
      locSub: 'UTC+3:30 • Open to remote & relocation',
    },
    projectDetails: {
      'demand-sales-forecasting': {
        title: 'Retail Demand & Sales Forecasting System',
        summary: 'A 42-day retail demand forecasting pipeline across 1,115 stores cutting error from 34.06% heuristic baseline to 9.36% WMAPE, validated on non-overlapping walk-forward folds.',
        stats: [
          { label: 'WMAPE (vs 34.06% baseline)', value: '9.36%' },
          { label: 'Store-days forecasted', value: '844,338' },
          { label: 'Stores in estate', value: '1,115' },
          { label: 'Stores under 15% error', value: '98.3%' },
        ],
      },
      'credit-risk-decision-engine': {
        title: 'Credit Risk & Loan Underwriting Decision Engine',
        summary: 'Production credit underwriting decision engine optimizing an asymmetric 5:1 cost matrix to cut defaults by 38% while sustaining a 54.4% approval rate at a 9.8% bad rate.',
        stats: [
          { label: 'Default reduction', value: '38%' },
          { label: 'Approval rate', value: '54.4%' },
          { label: 'Bad rate', value: '9.8%' },
          { label: 'Cost matrix ratio', value: '5:1' },
        ],
      },
      'tehran-stock-forecasting': {
        title: 'Tehran Stock Exchange Quantitative AI Engine',
        summary: 'Quantitative financial intelligence blending Graph Neural Networks (GNN) and LSTM across 10,874 trading days to achieve 69.85% directional accuracy on cross-asset flows.',
        stats: [
          { label: 'Directional accuracy', value: '69.85%' },
          { label: 'Trading days', value: '10,874' },
          { label: 'Validation folds', value: '5 continuous folds' },
          { label: 'Engineered features', value: '142 features' },
        ],
      },
      'pol4-hackathon': {
        title: 'Accommodation Demand AI (4th Innovation Factory Hackathon)',
        summary: '2nd Place (Silver Medal) at the 4th Innovation Factory Hackathon (Jobama × AI Factory) generating 9,630 daily forecasts across 321 Iranian cities with 0.143 median WAPE.',
        stats: [
          { label: 'Competition Rank', value: '2nd / 13' },
          { label: 'Cities covered', value: '321 cities' },
          { label: 'Median WAPE', value: '0.143' },
          { label: 'Engineered features', value: '96 features' },
        ],
      },
      'customer-churn-intelligence': {
        title: 'Customer Churn Intelligence & Contract Preservation Radar',
        summary: 'B2B retention intelligence combining boosting churn scorecards with Contract Value-at-Risk financial modeling, achieving 2.52x top-decile lift and protecting $176.7K in contracts.',
        stats: [
          { label: 'Top-decile lift', value: '2.52x' },
          { label: 'VaR protected', value: '$176.7K' },
          { label: 'AUC-ROC discrimination', value: '0.884' },
          { label: 'Early warning horizon', value: '30-60 days' },
        ],
      },
      'olist-delivery-analytics': {
        title: 'E-Commerce Freight & Logistics Route Optimization Engine',
        summary: 'Geospatial delivery and freight analytics engine on 100K Brazilian e-commerce orders, cutting inter-state shipping delays by 31% via star-schema modeling and routing heuristics.',
        stats: [
          { label: 'Orders analyzed', value: '100K+' },
          { label: 'Delivery delay cut', value: '31%' },
          { label: 'Freight cost savings', value: '18.4%' },
          { label: 'Dimensional tables', value: '7 tables' },
        ],
      },
      'intelligent-medical-assistant': {
        title: 'Clinical NLP & Biomedical Semantic Vector Search Engine',
        summary: 'Clinical retrieval-augmented intelligence reading scanned medical records via OCR, vector embeddings, and sub-15ms FAISS semantic search packaged in production Docker containers.',
        stats: [
          { label: 'Search latency', value: '<15ms' },
          { label: 'Roadmap phases', value: '6 phases' },
          { label: 'Vector index', value: 'FAISS' },
          { label: 'API framework', value: 'FastAPI' },
        ],
      },
      'ev-automotive-analytics': {
        title: 'Electric Vehicle Fleet Analytics & Pricing Intelligence',
        summary: 'Dimensional star-schema analytics pipeline covering 289K EV registrations and charging topology, paired with an R² = 0.8326 vehicle price regression engine.',
        stats: [
          { label: 'EV fleet records', value: '289K+' },
          { label: 'Price model R²', value: '0.8326' },
          { label: 'Mean absolute error', value: '$1,420' },
          { label: 'Charging network nodes', value: '4,320 nodes' },
        ],
      },
    },
  },
}

const LocaleContext = createContext({
  locale: 'fa',
  toggleLocale: () => {},
  t: translations.fa,
})

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'fa') return saved
    } catch {
      /* ignore */
    }
    return 'fa' // Persian is default
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
    document.documentElement.setAttribute('dir', translations[locale].dir)
    document.documentElement.setAttribute('lang', translations[locale].lang)
  }, [locale])

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'fa' ? 'en' : 'fa'))
  }

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}

export default useLocale
