export default function Page({ children, className = '' }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1120px] px-[var(--t-space-gutter)] pb-32 pt-14 lg:px-[var(--t-space-gutterLg)] lg:pb-28 lg:pt-20 ${className}`}
    >
      {children}
    </div>
  )
}
