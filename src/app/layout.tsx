import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { siteConfig } from '@/config/site'
import { Providers } from './providers'
import Navbar from '@/components/ui/Navbar'
import { Footer } from '@/components/ui/Footer'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Providers>
          <Navbar />
          <main className='mx-auto h-[calc(100vh-134px)] w-full max-w-4xl'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
