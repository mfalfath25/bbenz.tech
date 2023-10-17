import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { siteConfig } from '@/config/site'
import { Providers } from './providers'
import { Navbar } from '@/components/ui/Navbar'
import { Footer } from '@/components/ui/Footer'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s ⋄ ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: {
    name: siteConfig.author,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  // verification: {
  //   google: siteConfig.googleVerification,
  // },
  icons: {
    icon: '/favicon-16x16.png',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: '/assets/opengraph-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
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
        className={`${inter.className} mx-auto flex h-[100dvh] flex-col transition-all ease-linear`}
      >
        <Providers>
          <div className='flex-1 bg-graphy'>
            <Navbar />
            <main className='mx-auto min-h-[calc(100dvh-134px)] max-w-4xl overflow-auto'>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
