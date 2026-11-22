import { useSeo } from '../lib/seo.js'
import { projects, site } from '../lib/content.js'
import Page from '../components/Page.jsx'
import Hero from '../components/Hero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ProjectsExplorer from '../components/ProjectsExplorer.jsx'
import SkillsGrid from '../components/SkillsGrid.jsx'
import ExperienceList from '../components/ExperienceList.jsx'
import RciStartupShowcase from '../components/RciStartupShowcase.jsx'
import Icon from '../components/Icon.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Home() {
  useSeo({
    path: '/',
    title: `${site.name} — Senior Data Scientist & ML Architect`,
    description: site.tagline,
  })

  const github = site.socials.find((s) => s.id === 'github')
  const linkedin = site.socials.find((s) => s.id === 'linkedin')

  const impactMetrics = [
    {
      value: '۸',
      label: 'سیستم پروداکشن',
      detail: 'ممیزی‌شده، تست خودکار و فعال در گیت‌هاب',
      icon: 'folderGit',
    },
    {
      value: '۸۴۴K+',
      label: 'روز-فروشگاه پیش‌بینی',
      detail: '۷۲.۵٪ کاهش خطا در ۱,۱۱۵ شعبه',
      icon: 'trending',
    },
    {
      value: '۲۸۹K+',
      label: 'ناوگان خودرو برقی',
      detail: 'استاراسکیما و مدل‌سازی پذیرش بازار',
      icon: 'database',
    },
    {
      value: 'رتبه ۲ از ۱۳',
      label: 'هکاتون کشوری پل ۴',
      detail: '۹,۶۳۰ پیش‌بینی تقاضا در ۳۲۱ شهر',
      icon: 'star',
    },
    {
      value: '۶۹.۸۵٪',
      label: 'دقت جهتی بورس تهران',
      detail: 'ترکیب GNN + LSTM در ۵ فولد پیوسته',
      icon: 'chart',
    },
    {
      value: '۲.۵۲x',
      label: 'ضریب لیفت حفظ مشتری',
      detail: '۱۷۶.۷ هزار دلار ارزش قرارداد حفاظت‌شده',
      icon: 'target',
    },
    {
      value: '<۱۵ms',
      label: 'تأخیر بازیابی برداری',
      detail: 'جستجوی معنایی FAISS روی اسناد بالینی',
      icon: 'api',
    },
    {
      value: '۰٪',
      label: 'نشت اطلاعات (Leakage)',
      detail: 'اعتبارسنجی رو به جلو و ممیزی ویژگی‌ها',
      icon: 'check',
    },
  ]

  return (
    <Page>
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. APPLE-STYLE KEYNOTE METRICS TICKER */}
      <section className="pb-24 pt-2" aria-label="شاخص‌های کمی اثرگذاری">
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4 lg:gap-4">
          {impactMetrics.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.04}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e14]/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-[#14141e]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {m.value}
                </span>
                <span className="text-ink-faint transition-colors group-hover:text-accent">
                  <Icon name={m.icon} size={18} />
                </span>
              </div>
              <h3 className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/90">
                {m.label}
              </h3>
              <p className="mt-1 text-xs text-ink-muted leading-relaxed">{m.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. STEALTH STARTUP SECTION (RCI 7.0 - به زودی) */}
      <section id="startup" className="scroll-mt-14 pb-28" aria-labelledby="startup-title">
        <SectionHead
          id="startup-title"
          label="پروژه در دست احداث • Stealth Venture"
          title="پلتفرم هوش تجاری و تصمیم‌یار سود نقدی (RCI 7.0)"
          lead="محصول متمرکز بر شفافیت سود نقدی، ممیزی نشت درآمد و رادار ریسک اعتباری برای صنایع FMCG و شبکه توزیع سراسری."
        />
        <RciStartupShowcase />
      </section>

      {/* 4. PROJECTS SECTION (Bento Grid Showcase) */}
      <section id="projects" className="scroll-mt-14 pb-28" aria-labelledby="projects-title">
        <SectionHead
          id="projects-title"
          label="سیستم‌های عملیاتی پروداکشن"
          title="۸ مخزن ممیزی‌شده یادگیری ماشین و هوش تجاری"
          lead="پایپ‌لاین‌های بدون نشت، پروتکل‌های اعتبارسنجی واک‌فوروارد، مایکروسرویس‌های FastAPI و شبیه‌سازهای تعاملی Dash روی داده‌های واقعی."
        />
        <ProjectsExplorer />
      </section>

      {/* 5. TECHNICAL SKILLS SECTION */}
      <section id="skills" className="scroll-mt-14 pb-28" aria-labelledby="skills-title">
        <SectionHead
          id="skills-title"
          label="مهارت‌ها و متدولوژی‌ها"
          title="ماتریس مهارت‌های فنی و استک مهندسی"
          lead="از خطوط لوله داده و استاراسکیماهای Kimball تا مدل‌سازی پیشرفته ریسک، سری‌های زمانی و استقرار سرویس‌های ابری."
        />
        <SkillsGrid />
      </section>

      {/* 6. PROFESSIONAL EXPERIENCE & COMPETITIONS */}
      <section id="experience" className="scroll-mt-14 pb-28" aria-labelledby="experience-title">
        <SectionHead
          id="experience-title"
          label="سوابق و افتخارات"
          title="تجربه حرفه‌ای و مدال‌های مسابقات کشوری"
          lead="مهندسی داده میدانی در مقیاس ملی و افتخار کسب رتبه دوم هکاتون تقاضای گردشگری."
        />
        <ExperienceList />
      </section>

      {/* 7. ATS RESUME SECTION */}
      <section id="resume" className="scroll-mt-14 pb-28" aria-labelledby="resume-title">
        <SectionHead
          id="resume-title"
          label="مدارک و شایستگی‌ها"
          title="رزومه بهینه‌شده ATS (صدک ۹۹ — استاندارد ۲ صفحه)"
          lead="فرمول ضربه گوگل (Google XYZ) با اولویت‌بندی صنایع بانکداری، رمزارز و بازارهای مالی، بیمه و خودرو."
        />
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e0e16] p-6 shadow-2xl sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-emerald-400">
                <Icon name="check" size={13} />
                <span>۱۰۰٪ داده‌های ممیزی‌شده واقعی</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                علی اجوند
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                کارشناسی ارشد هوش مصنوعی (دانشگاه آزاد واحد الکترونیکی) • کارشناسی مهندسی کامپیوتر (علوم و تحقیقات)
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                href="/Ali_Ajvand_Resume.html"
                target="_blank"
                variant="primary"
                icon="fileText"
              >
                مشاهده و پرینت HTML رزومه
              </Button>
              <Button href={site.resumePath} download variant="secondary" icon="arrowDown">
                دانلود PDF رسمی (۲ صفحه)
              </Button>
              <Button
                href="/Ali_Ajvand_Resume_ATS_Optimized.md"
                download
                variant="ghost"
                icon="file"
              >
                سورس مارک‌داون
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                بانک و فین‌تک
              </p>
              <p className="mt-1 text-xl font-bold text-white">۳۸٪ کاهش نکول</p>
              <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                فرانتیر ۵ به ۱ با حفظ نرخ تصویب ۵۴.۴٪ در نرخ بد ۹.۸٪.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                رمزارز و بازارهای کمی
              </p>
              <p className="mt-1 text-xl font-bold text-white">۶۹.۸۵٪ دقت جهتی</p>
              <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                ترکیب GNN + LSTM روی ۱۰,۸۷۴ روز معاملاتی بورس تهران.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                بیمه و ریسک اکچوئری
              </p>
              <p className="mt-1 text-xl font-bold text-white">مدال نقره هکاتون</p>
              <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                منحنی‌های Chain-Ladder در ۳۲۱ شهر ایران (رتبه ۲ از ۱۳).
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                خودرو و موبیلیتی
              </p>
              <p className="mt-1 text-xl font-bold text-white">R² = ۰.۸۳۲۶</p>
              <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                رگرسیون قیمت خودرو و استاراسکیما ۲۸۹K خودرو برقی.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 8. CONTACT SECTION */}
      <section id="contact" className="scroll-mt-14" aria-labelledby="contact-title">
        <SectionHead
          id="contact-title"
          label="ارتباط مستقیم"
          title="همکاری روی پروژه‌های بزرگ داده و یادگیری ماشین"
          lead="آماده برای همکاری تمام‌وقت در جایگاه‌های ارشد دیتا و پروژه‌های تحلیلی با اثرگذاری اقتصادی بالا."
        />
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-[#0e0e16] p-6 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href={`mailto:${site.email}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-accent hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-3 text-accent">
                  <Icon name="mail" size={20} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">ایمیل مستقیم</span>
                </div>
                <p className="mt-3 break-words text-base font-semibold text-white group-hover:text-accent">
                  {site.email}
                </p>
                <p className="mt-1 text-xs text-ink-muted">پاسخ‌گویی سریع در کمتر از ۲۴ ساعت</p>
              </a>

              <a
                href={`tel:${site.phoneLink}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-accent hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-3 text-accent">
                  <Icon name="phone" size={20} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">تلفن و تلگرام</span>
                </div>
                <p className="mt-3 text-base font-semibold text-white group-hover:text-accent">
                  {site.phone}
                </p>
                <p className="mt-1 text-xs text-ink-muted">تماس کاری و تلگرام مستقیم</p>
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center gap-3 text-accent">
                  <Icon name="mapPin" size={20} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">موقعیت مکانی</span>
                </div>
                <p className="mt-3 text-base font-semibold text-white">{site.location}</p>
                <p className="mt-1 text-xs text-ink-muted">تهران (UTC+3:30) • آماده همکاری ریموت و حضوری</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:border-accent transition-colors"
                >
                  <Icon name="github" size={16} />
                  <span>github.com/aliajvand</span>
                  <Icon name="arrowUpRight" size={13} />
                </a>
                {linkedin?.url && (
                  <a
                    href={linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:border-accent transition-colors"
                  >
                    <Icon name="linkedin" size={16} />
                    <span>LinkedIn</span>
                    <Icon name="arrowUpRight" size={13} />
                  </a>
                )}
              </div>

              <p className="text-xs text-ink-faint font-mono">
                طراحی به سبک Apple Pro • تایپوگرافی دانا • ری‌اکت ۱۸ و Tailwind CSS
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </Page>
  )
}
