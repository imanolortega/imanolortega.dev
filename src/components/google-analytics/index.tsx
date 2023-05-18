'use client'
import { useEffect, useState } from 'react'

export default function GoogleAnalytics() {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }
  return (
    <head>
      <script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        defer
      />
      <script id="google-analytics" defer>
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());

          gtag("config", ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
      </script>
    </head>
  )
}
