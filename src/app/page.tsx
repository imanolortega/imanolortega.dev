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
    </section>
  )
}
