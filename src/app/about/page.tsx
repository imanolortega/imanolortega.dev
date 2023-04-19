import type { Metadata } from 'next'
import {
  GitHubIcon,
  ArrowIcon,
  EmailIcon,
  LinkedinIcon,
} from '@/components/icons/icons'
import { interest, technologies } from '@/lib/info'
import Paragraph from '@/components/paragraph/paragraph'
import Title from '@/components/heading/heading'

export const metadata: Metadata = {
  title: 'About',
}

interface ButtonProps {
  href: string
  children: React.ReactNode
}

function Button({ href, children }: ButtonProps) {
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

export default function AboutPage() {
  return (
    <section>
      <Title>About Me</Title>
      <div className="prose prose-slate dark:prose-invert text-slate-800 dark:text-slate-20">
        <Paragraph>{technologies()}</Paragraph>
        <Paragraph>{interest()}</Paragraph>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2 my-8">
          <Button href="mailto:imanolrtega@gmail.com">
            <EmailIcon />
            <div className="ml-3">Email</div>
          </Button>
          <Button href="https://github.com/imanolrtega">
            <GitHubIcon />
            <div className="ml-3">GitHub</div>
          </Button>
          <Button href="https://www.linkedin.com/in/imanol-rtega/">
            <LinkedinIcon />
            <div className="ml-3">LinkedIn</div>
          </Button>
        </div>
      </div>
    </section>
  )
}
