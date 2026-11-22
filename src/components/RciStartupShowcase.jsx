import { motion, useReducedMotion } from 'framer-motion'
import Icon from './Icon.jsx'

export default function RciStartupShowcase() {
  const reduced = useReducedMotion()

  const features = [
    {
      title: 'اتصال فقط‌خواندنی (Read-Only) به ERP',
      desc: 'اتصال امن به راهکاران، ورانگر و مبنا بدون ریسک نشت داده و بدون Write-Back روی نرم‌افزارهای جاری.',
      icon: 'database',
    },
    {
      title: 'آبشار حاشیه سود نقدی (Pocket-Margin Waterfall)',
      desc: 'محاسبه شفاف سود خالص بعد از کسر تخفیفات پلکانی، اشانتیون، ریبیت، مرجوعی و بهای روز جایگزینی کالا.',
      icon: 'trending',
    },
    {
      title: 'رادار ریسک اعتباری و وصول چک',
      desc: 'کشف مشتریان و فاکتورهای پرفروشی که به دلیل خواب چک و تأخیر تسویه، حاشیه سود نقدی را منفی می‌کنند.',
      icon: 'target',
    },
    {
      title: 'تفکیک رشد واقعی از تورم اسمی',
      desc: 'تمایز دقیق اثر رشد حجم و ترکیب سبد کالا از رشد ظاهری حاصل از افزایش مداوم قیمت و تورم بازار.',
      icon: 'chart',
    },
    {
      title: 'پیش‌بینی احتمالاتی تقاضا (P10 / P50 / P90)',
      desc: 'مدل‌سازی تقاضای چندسطحی و هشدار زودهنگام کسری موجودی (Stockout) با حفظ شفافیت کامل آماری.',
      icon: 'brain',
    },
    {
      title: 'پرونده‌سازی نشت سود با ممیزی مالی',
      desc: 'تولید روزانه کارت‌های اقدام با فرمول ریاضی قطعی، قابل بازبینی و تأیید مستقیم توسط مدیر مالی (CFO).',
      icon: 'check',
    },
  ]

  const boundaries = [
    {
      label: 'جایگزین ERP یا سیستم حسابداری نیست',
      detail: 'روی سیستم‌های موجود مستقر می‌شود و هیچ تداخلی در عملیات فروش، انبارداری و ثبت فاکتور جاری ایجاد نمی‌کند.',
    },
    {
      label: 'داشبورد صامت و تزیینی بدون اقدام نیست',
      detail: 'به جای صدها نمودار منفعل و سردرگم‌کننده، مستقیماً چرایی افت حاشیه سود و اقدامات اصلاحی را نشان می‌دهد.',
    },
    {
      label: 'سیستم خودمختار تغییردهنده قیمت نیست',
      detail: 'تصمیم‌گیری نهایی کاملاً در اختیار مدیران بازرگانی و مالی است و هیچ تغییری بدون تأیید انسان اعمال نمی‌شود.',
    },
    {
      label: 'چت‌بات توهم‌زای مالی نیست',
      detail: 'تمام فرمول‌ها و محاسبات پولی در موتورهای قطعی خارج از LLM اجرا شده و قابلیت ممیزی ۱۰۰٪ دارند.',
    },
    {
      label: 'وعده بازگشت سرمایه خیالی نمی‌دهد',
      detail: 'سودآوری و رفع نشت پیش از اجرای پایلوت و ممیزی داده‌های واقعی مشتری، تضمین تبلیغاتی نمی‌شود.',
    },
  ]

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#15151e] via-[#0d0d14] to-[#07070b] p-6 shadow-2xl sm:p-10 lg:p-12 text-right"
      dir="rtl"
    >
      {/* Apple-style subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-accent-3/10 blur-3xl"
      />

      {/* Top Header Badge */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-6">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-xs font-semibold tracking-wider text-accent uppercase">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span>پروژه استارتاپی در حال ساخت • به زودی (Coming Soon)</span>
        </div>
        <span className="font-mono text-xs text-ink-faint">FMCG & Distribution Intelligence</span>
      </div>

      {/* Product Title & Statement */}
      <div className="relative z-10 mt-8 max-w-3xl">
        <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-display">
          RCI 7.0
        </h3>
        <p className="mt-2 text-lg font-semibold text-accent sm:text-xl font-mono">
          Commercial Decision & Margin Intelligence Platform
        </p>
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          پلتفرم مستقل تصمیم‌یار تجاری و تحلیل حاشیه سود نقدی برای هلدینگ‌ها و شرکت‌های پخش سراسری؛ متصل به داده‌های جاری، بدون اختلال در ERP و با هدف شفاف‌سازی سود واقعی بعد از هزینه‌های خواب چک، تخفیفات و بهای جایگزینی کالا.
        </p>
      </div>

      {/* Grid: What It Has vs What It Does Not Have */}
      <div className="relative z-10 mt-10 grid gap-8 lg:grid-cols-2">
        {/* Column 1: What it provides */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-4">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <Icon name="check" size={16} />
            </span>
            <h4 className="font-bold text-white text-base">
              قابلیت‌ها و ارزش‌های پیشنهادی (چی داره)
            </h4>
          </div>

          <div className="mt-5 space-y-4">
            {features.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="mt-1 text-accent shrink-0">
                  <Icon name={item.icon} size={16} />
                </span>
                <div>
                  <h5 className="text-sm font-bold text-white">{item.title}</h5>
                  <p className="mt-0.5 text-xs text-ink-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: What it is NOT (Disciplined boundaries) */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-4">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-amber-500/10 text-amber-400">
              <Icon name="warning" size={16} />
            </span>
            <h4 className="font-bold text-white text-base">
              مرزهای صریح و شفاف محصول (چی نداره و چه نیست)
            </h4>
          </div>

          <div className="mt-5 space-y-4">
            {boundaries.map((b) => (
              <div key={b.label} className="rounded-xl border border-white/5 bg-black/30 p-3.5">
                <p className="text-sm font-bold text-amber-200/90 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  {b.label}
                </p>
                <p className="mt-1 text-xs text-ink-muted leading-relaxed pr-3.5">
                  {b.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-accent/20 bg-accent/5 p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/20 text-accent">
            <Icon name="sparkles" size={18} />
          </span>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            <strong className="text-white">وضعیت فعلی:</strong> توسعه مدل‌های پایه تحلیلی و آماده‌سازی جهت اجرای پایلوت‌های آزمایشی با شرکای تجاری اولیه (Design Partners).
          </p>
        </div>
        <span className="font-mono text-xs text-accent font-semibold px-3 py-1 rounded-md border border-accent/30 bg-accent/10">
          Private Pilot Track
        </span>
      </div>
    </motion.div>
  )
}
