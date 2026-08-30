import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const components = {
  a: ({ href = '', children, ...props }) => {
    const external = /^https?:/.test(href)
    return (
      <a href={href} {...props} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    )
  },
  img: ({ src = '', alt = '', ...props }) => (
    <img src={src} alt={alt} loading="lazy" decoding="async" {...props} />
  ),
}

export default function Markdown({ children, className = '' }) {
  return (
    <div className={`md ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {children || ''}
      </ReactMarkdown>
    </div>
  )
}
