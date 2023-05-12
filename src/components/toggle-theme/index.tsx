import { DarkModeProps } from '@/lib/interfaces'
import { LigthIcon, NigthIcon } from '@/components/icons'

export default function ToggleTheme({
  darkMode,
  handleDarkModeToggle,
}: DarkModeProps) {
  return (
    <button
      className="top-button"
      onClick={handleDarkModeToggle}
      title={darkMode ? 'Light mode' : 'Dark mode'}
    >
      {darkMode ? <LigthIcon /> : <NigthIcon />}
    </button>
  )
}
