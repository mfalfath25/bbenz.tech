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
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
          <Footer />
        </Providers>
        {/* <div className='absolute left-0 bg-repeat w-full h-full z-0 heropattern-fourpointstars-slate-500'>
        <div className='flex flex-row'>
          <div className='absolute left-0 w-1/4 h-full z-1 bg-gradient-to-l from-white dark:from-black to-transparent' />
          <div className='absolute left-1/4 w-1/4 h-full z-1 bg-white dark:bg-black' />
          <div className='absolute right-1/4 w-1/4 h-full z-1 bg-white dark:bg-black' />
          <div className='absolute right-0 w-1/4 h-full z-1 bg-gradient-to-r from-white dark:from-black to-transparent' />
        </div>
      </div> */}
      </body>
    </html>
  )
}
