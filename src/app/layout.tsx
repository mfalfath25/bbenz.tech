import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { siteConfig } from '@/config/site'
import { Providers } from './providers'
import { Navbar } from '@/components/ui/Navbar'
import { Footer } from '@/components/ui/Footer'
import { Suspense } from 'react'
import Loading from './loading'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  verification: {
    google: siteConfig.googleVerification,
  },
  robots: {
    index: true,
  },
  icons: {
    icon: '/favicon-16x16.png',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${inter.className} mx-auto flex h-screen flex-col transition-all ease-linear`}
      >
        <Providers>
          <div
            // className='flex-1'
            className='flex-1 bg-graphy'
          >
            <Navbar />
            <Suspense fallback={<Loading />}>
              <main className='mx-auto min-h-[calc(100vh-134px)] max-w-4xl overflow-auto'>
                {children}
              </main>
            </Suspense>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
