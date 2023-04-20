import { ArrowIcon } from '@/components/icons'
import { CustomLink } from '@/components/links/custom-link'
import { name, about, bio } from '@/lib/info'
import Heading from '@/components/heading'
import Paragraph from '@/components/paragraph'

export default async function HomePage() {
  return (
    <section>
      <Heading>{name}</Heading>
      <div>
        <Paragraph>{about()}</Paragraph>
        <Paragraph>{bio()}</Paragraph>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-slate-500 dark:text-slate-400 mb-8">
          <li>
            <CustomLink href="mailto:imanolrtega@gmail.com" type="external">
              <ArrowIcon />
              <p className="h-7">send me an email</p>
            </CustomLink>
          </li>
          <li>
            <CustomLink href="/projects">
              <ArrowIcon />
              <p className="h-7">check my projects</p>
            </CustomLink>
          </li>
          <li>
            <CustomLink href="/about">
              <ArrowIcon />
              <p className="h-7">more about me</p>
            </CustomLink>
          </li>
        </ul>
      </div>
    </section>
  )
}
