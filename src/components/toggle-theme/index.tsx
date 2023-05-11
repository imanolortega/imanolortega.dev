import { LigthIcon, NigthIcon } from '@/components/icons'
interface ToggleThemeProps {
  darkMode: boolean
  handleDarkModeToggle: () => void
}

export default function ToggleTheme({
  darkMode,
  handleDarkModeToggle,
}: ToggleThemeProps) {
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
