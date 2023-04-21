import { useState, useEffect } from 'react'

export function useSystemColorMode() {
  const [systemColorMode, setSystemColorMode] = useState(getSystemColorMode())

  useEffect(() => {
    const handler = () => setSystemColorMode(getSystemColorMode())
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handler)
    return () =>
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handler)
  }, [])

  return systemColorMode
}

function getSystemColorMode(): boolean {
  return (
    window?.matchMedia &&
    window?.matchMedia('(prefers-color-scheme: dark)').matches
  )
}
