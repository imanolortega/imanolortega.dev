export interface ButtonProps {
  href: string
  children: React.ReactNode
}

export interface CustomLinkProps {
  children: React.ReactNode
  href: string
  type: string
}

export interface DarkModeProps {
  darkMode: boolean
  handleDarkModeToggle: () => void
}

export interface MainLayoutProps {
  children: React.ReactNode
}

export interface TopLinkProps {
  children: React.ReactNode
  href: string
  title: string
}
