'use client'

import { EmailIcon, GitHubIcon, LinkedinIcon } from '@/components/icons'
import TopLink from '@/components/links/top-link'
import ToggleTheme from '@/components/toggle-theme'
import useMobile from '@/hooks/useMobile'

export default function TopButtons() {
  const isMobile = useMobile()
  return (
    <nav>
      <ul className="hidden justify-end gap-2 md:flex mb-2">
        <li>
          <TopLink
            href="https://www.linkedin.com/in/imanol-rtega"
            title="Email"
          >
            <LinkedinIcon />
          </TopLink>
        </li>
        <li>
          <TopLink href="mailto:imanolrtega@gmail.com" title="Email">
            <EmailIcon />
          </TopLink>
        </li>
        <li>
          <TopLink href="https://github.com/imanolrtega" title="Github">
            <GitHubIcon />
          </TopLink>
        </li>
        {!isMobile && (
          <li className="cursor-pointer">
            <ToggleTheme />
          </li>
        )}
      </ul>
    </nav>
  )
}
