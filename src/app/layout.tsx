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
      <body className={`${inter.className} mx-auto flex h-screen flex-col`}>
        <Providers>
          <div className='bg-graphy flex-1'>
            <Navbar />
            <main className='mx-auto min-h-[calc(100vh-134px)] max-w-4xl overflow-auto'>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
