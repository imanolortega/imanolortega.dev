import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { description, siteUrl, title } from '@/lib/info'
import { Metadata } from 'next'
import Aside from '@/components/aside'
import Script from 'next/script'
import TopButtons from '@/components/top-buttons'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: title,
    template: '%s | Imanol Ortega',
  },
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: siteUrl,
    siteName: title,
    images: [
      {
        url: `${siteUrl}/og.jpg`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'es-ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="g-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });;
      `}
      </Script>
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Aside />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          <TopButtons />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  )
}
