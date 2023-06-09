import { CardLink } from '@/components/links/card-link'
import { projects, projectsList } from '@/utils/info'
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
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 mt-8 mb-2">
          {projectsList.map(({ title, link }) => (
            <CardLink href={link} key={link}>
              {title}
            </CardLink>
          ))}
        </div>
      </div>
    </section>
  )
}
