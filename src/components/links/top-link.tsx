interface TopLinkProps {
  children: React.ReactNode
  href: string
  title: string
}
export default function TopLink({ children, href, title }: TopLinkProps) {
  return (
    <a
      className="
        w-8 h-8 rounded-lg
        flex items-center justify-center
        opacity-75 hover:opacity-100
        ring-slate-300 hover:ring-1 dark:ring-slate-600
        text-slate-400 hover:text-slate-600
        dark:text-slate-400 dark:hover:text-slate-200
        transition-all cursor-pointer"
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      title={title}
    >
      {children}
    </a>
  )
}
