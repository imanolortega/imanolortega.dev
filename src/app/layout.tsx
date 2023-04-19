import Aside from '@/components/aside/aside'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'

import { Inter } from 'next/font/google'
import { siteUrl } from '@/lib/info'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Imanol Ortega | Front-end Developer',
    template: '%s | Imanol Ortega',
  },
  description: 'Developer, writer, and designer.',
  openGraph: {
    title: 'Imanol Ortega - Front-end Developer',
    description: 'Front-end Developer and designer.',
    url: siteUrl,
    siteName: 'Imanol Ortega',
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
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Aside />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  )
}
