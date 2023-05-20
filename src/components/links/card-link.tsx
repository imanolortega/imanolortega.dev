import { ArrowIcon } from '@/components/icons'
import { ButtonProps } from '@/utils/interfaces'

export function CardLink({ href, children }: ButtonProps) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      className="flex w-full border border-slate-200 dark:border-slate-800 rounded-lg p-4 no-underline items-center text-slate-800 dark:text-slate-200 hover:dark:bg-slate-900 hover:bg-slate-100 transition-all justify-between"
    >
      <div className="flex items-center">{children}</div>
      <ArrowIcon />
    </a>
  )
}
