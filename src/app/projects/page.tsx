import { CardLink } from '@/components/links/card-link'
import { projects, projectsList } from '@/lib/info'
import Heading from '@/components/heading'
import Paragraph from '@/components/paragraph'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function ProjectsPage() {
  return (
    <section>
      <Heading>Projects</Heading>
      <div className=" text-slate-800 dark:text-slate-20">
        <Paragraph>{projects()}</Paragraph>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2 my-8">
          {projectsList.map(({ title, link }) => (
            <CardLink href={link} key={title}>
              {title}
            </CardLink>
          ))}
        </div>
      </div>
    </section>
  )
}
