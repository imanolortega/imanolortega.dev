import { Space_Grotesk } from 'next/font/google'
const space = Space_Grotesk({ subsets: ['latin'] })

export default function Heading({ children }: { children: React.ReactNode }) {
  return <h1 className={`${space.className} font-bold text-3xl`}>{children}</h1>
}
