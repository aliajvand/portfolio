import icons from '../lib/icons.js'

export default function Icon({ name, size = 18, className = '', strokeWidth = 1.75, ...rest }) {
  const Cmp = icons[name] || icons.target
  return <Cmp size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" {...rest} />
}
