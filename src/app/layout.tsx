import './globals.css'
import { description, siteUrl, title } from '@/lib/info'
import { Metadata } from 'next'
import GoogleAnalytics from '@/components/google-analytics'
import MainLayout from '@/components/main-layout'

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
      <head>
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
      </head>
      <GoogleAnalytics />
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
