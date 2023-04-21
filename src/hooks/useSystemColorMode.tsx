import { useState, useEffect } from 'react'

export function useSystemColorMode() {
  const [systemColorMode, setSystemColorMode] = useState(getSystemColorMode())

  useEffect(() => {
    const handler = () => setSystemColorMode(getSystemColorMode())

    if (typeof window !== 'undefined') {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', handler)

      return () =>
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .removeEventListener('change', handler)
    }
  }, [])

  return systemColorMode
}

function getSystemColorMode() {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return false
}
