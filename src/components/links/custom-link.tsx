import { CustomLinkProps } from '@/utils/interfaces'
import Link from 'next/link'

export function CustomLink({ href, children, type }: CustomLinkProps) {
  const isExternal = type === 'external'
  const Component = isExternal ? 'a' : Link

  return (
    <Component
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="flex items-center hover:text-slate-700 dark:hover:text-slate-200 transition-all"
    >
      <div className="flex items-center">{children}</div>
    </Component>
  )
}
