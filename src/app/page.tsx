import { ArrowIcon } from '@/components/icons/icons'
import { name, about, bio } from '@/lib/info'
import Paragraph from '@/components/paragraph/paragraph'
import Title from '@/components/heading/heading'

export default async function HomePage() {
  return (
    <section>
      <Title>{name}</Title>
      <div>
        <Paragraph>{about()}</Paragraph>
        <Paragraph>{bio()}</Paragraph>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-slate-500 dark:text-slate-400 mb-8">
          <li>
            <a
              className="flex items-center hover:text-slate-700 dark:hover:text-slate-200 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/imanol-rtega/"
            >
              <ArrowIcon />
              <p className="h-7">add me on linkedin</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-slate-700 dark:hover:text-slate-200 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:imanolrtega@gmail.com"
            >
              <ArrowIcon />
              <p className="h-7">send me an email</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
