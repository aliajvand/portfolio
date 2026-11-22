import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

const styles = {
  primary:
    'bg-[#2997ff] text-white hover:bg-[#0077ed] shadow-lg shadow-[#2997ff]/25 font-semibold border border-[#2997ff]/40',
  secondary:
    'border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-md font-medium',
  ghost:
    'border border-white/10 text-ink-muted hover:text-white hover:bg-white/5 hover:border-white/20 font-medium',
}

export default function Button({
  to,
  href,
  children,
  variant = 'secondary',
  icon,
  download,
  size = 'md',
  ...rest
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
    size === 'sm' ? 'px-4 py-2 text-xs' : 'px-5 py-2.5 text-sm sm:text-[15px]'
  } ${styles[variant]}`

  const content = (
    <>
      {icon && <Icon name={icon} size={16} />}
      <span>{children}</span>
    </>
  )

  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>
  return (
    <a
      href={href}
      className={cls}
      {...(download ? { download: true } : {})}
      {...(href && /^https?:/.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {content}
    </a>
  )
}
