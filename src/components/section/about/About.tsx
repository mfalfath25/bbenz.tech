'use client'

import { motion } from 'framer-motion'
import { MarqueeText } from '@/components/animations/MarqueeText'
import { Header } from '@/components/ui/Header'
import Image from 'next/image'
import Content from '@/content/about/about.mdx'

export const About = () => {
  return (
    <>
      <Header title='About Me' />
      <div className='py-3'>
        <MarqueeText text='Welcome - 환영하다 - Willkommen - ようこそ - Selamat datang - 欢迎 - Bienvenidos - добро пожаловать - ' />
      </div>

      <motion.div
        initial={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)' }}
        animate={{ opacity: 1, clipPath: 'circle(100%)' }}
        transition={{ delay: 0.25, duration: 0.75, ease: 'easeInOut' }}
        className='grid grid-cols-1 gap-1 pt-3'
      >
        <Image
          priority
          src='/assets/photo.png'
          alt='Fajar Alfath Photo'
          width={200}
          height={200}
          className='mx-auto max-w-[50%] rounded-full border-2 border-gray-700 shadow-glow-sm shadow-accent-light ring-2 ring-accent-light drop-shadow-2xl backdrop-blur-sm dark:shadow-accent-dark dark:ring-accent-dark sm:max-w-full'
        />

        <div className='prose prose-sm mx-auto dark:prose-invert sm:prose-base'>
          <Content />
        </div>

        <div className='text-center'>
          <a
            href='mailto:mfalfath25@gmail.com'
            className='rounded-md border-[1px] border-gray-700/30 p-1 px-2 text-center transition-colors hover:bg-base-light hover:text-accent-light dark:border-white/30 dark:hover:bg-base-dark dark:hover:text-accent-dark'
          >
            Contact 📩
          </a>
        </div>
      </motion.div>
    </>
  )
}
