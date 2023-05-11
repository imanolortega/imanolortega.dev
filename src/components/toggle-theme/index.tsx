'use client'

import { useEffect, useState } from 'react'
import { LigthIcon, NigthIcon } from '@/components/icons'
import { useSystemColorMode } from '@/hooks/useSystemColorMode'

export default function ToggleTheme() {
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
    <button
      className="top-button"
      onClick={handleDarkModeToggle}
      title={darkMode ? 'Light mode' : 'Dark mode'}
    >
      {darkMode ? <LigthIcon /> : <NigthIcon />}
    </button>
  )
}
