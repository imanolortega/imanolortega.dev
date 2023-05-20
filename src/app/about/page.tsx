import { aboutLinks, interest, introAbout, technologies } from '@/utils/info'
import { CardLink } from '@/components/links/card-link'
import Heading from '@/components/heading'
import Paragraph from '@/components/paragraph'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <section>
      <Heading>About Me</Heading>
      <div className="prose prose-slate dark:prose-invert text-slate-800 dark:text-slate-20">
        <Paragraph>{introAbout()}</Paragraph>
        <Paragraph>{technologies()}</Paragraph>
        <Paragraph>{interest()}</Paragraph>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2 my-8">
          {aboutLinks.map(({ title, link, icon }) => (
            <CardLink href={link} key={link}>
              {icon}
              <div className="ml-3">{title}</div>
            </CardLink>
          ))}
        </div>
      </div>
    </section>
  )
}
