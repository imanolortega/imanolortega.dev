interface TopLinkProps {
  children: React.ReactNode
  href: string
  title: string
}
export default function TopLink({ children, href, title }: TopLinkProps) {
  return (
    <a
      className="top-button ring-slate-300 hover:ring-1 dark:ring-slate-600"
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      title={title}
    >
      {children}
    </a>
  )
}
