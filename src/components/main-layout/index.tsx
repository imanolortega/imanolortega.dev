'use client'

import { useSystemColorMode } from '@/hooks/useSystemColorMode'
import { useEffect, useState } from 'react'
import Aside from '@/components/aside'
import TopButtons from '@/components/top-buttons'
import { Analytics } from '@vercel/analytics/react'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [darkMode, setDarkMode] = useState(false)
  const systemColorMode = useSystemColorMode()

  useEffect(() => {
    const storedValue = localStorage.getItem('darkMode')
    if (storedValue !== null) {
      setDarkMode(storedValue === 'true')
    } else {
      setDarkMode(
        typeof systemColorMode === 'boolean' ? systemColorMode : false,
      )
    }
  }, [systemColorMode])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString())
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <Aside darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} />
      <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
        <TopButtons
          darkMode={darkMode}
          handleDarkModeToggle={handleDarkModeToggle}
        />
        {children}
        <Analytics />
      </main>
    </>
  )
}
