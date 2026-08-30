import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

const styles = {
  primary: 'bg-accent text-on-accent hover:brightness-110',
  secondary: 'border border-line bg-card text-ink hover:border-ink-faint hover:bg-raised',
  ghost: 'text-ink-muted hover:text-accent-2',
}

export default function Button({ to, href, children, variant = 'secondary', icon, download, size = 'md', ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-md font-medium transition-[background-color,border-color,color,transform,filter] duration-200 hover:-translate-y-0.5 ${
    size === 'sm' ? 'px-3.5 py-2 text-[13px]' : 'px-4.5 py-3 text-[15px]'
  } ${styles[variant]}`
  const content = (
    <>
      {icon && <Icon name={icon} size={16} />}
      {children}
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
