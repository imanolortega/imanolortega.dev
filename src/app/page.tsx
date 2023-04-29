import { ArrowIcon } from '@/components/icons'
import { CustomLink } from '@/components/links/custom-link'
import { name, about, bio, homeLinks } from '@/lib/info'
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
          {homeLinks.map(({ link, text, type }) => (
            <li key={link}>
              <CustomLink href={link} type={type}>
                <ArrowIcon />
                <p className="h-7">{text}</p>
              </CustomLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
