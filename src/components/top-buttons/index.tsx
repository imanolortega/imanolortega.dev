import { DarkModeProps } from '@/utils/interfaces'
import { EmailIcon, GitHubIcon, LinkedinIcon } from '@/components/icons'
import ToggleTheme from '@/components/toggle-theme'
import TopLink from '@/components/links/top-link'
import { email, githubUrl, linkedinUrl } from '@/utils/info'

export default function TopButtons({
  darkMode,
  handleDarkModeToggle,
}: DarkModeProps) {
  return (
    <nav>
      <ul className="hidden justify-end gap-2 md:flex mb-2">
        <li>
          <TopLink href={linkedinUrl} title="LinkedIn">
            <LinkedinIcon />
          </TopLink>
        </li>
        <li>
          <TopLink href={`mailto:${email}`} title="Email">
            <EmailIcon />
          </TopLink>
        </li>
        <li>
          <TopLink href={githubUrl} title="Github">
            <GitHubIcon />
          </TopLink>
        </li>
        <li className="cursor-pointer">
          <ToggleTheme
            darkMode={darkMode}
            handleDarkModeToggle={handleDarkModeToggle}
          />
        </li>
      </ul>
    </nav>
  )
}
