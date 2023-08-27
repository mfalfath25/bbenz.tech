'use client'

import { MarqueeText } from '@/components/animations/MarqueeText'
import { Header } from '@/components/ui/Header'
import Content from '@/content/about/about.mdx'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
        transition={{ duration: 1, ease: 'easeInOut' }}
        className='grid grid-cols-1 gap-2'
      >
        <div className='flex flex-col items-center justify-center pt-2'>
          <Image
            priority
            placeholder='blur'
            blurDataURL='/assets/graphy.png'
            src='/assets/photo.png'
            alt='Photo'
            width={250}
            height={250}
            className='mx-auto max-w-[50%] rounded-full border-2 border-gray-700 ring-2 ring-accent-light backdrop-blur-sm dark:ring-accent-dark sm:max-w-full'
          />
          <p className='pt-2 text-center text-neutral-400 dark:text-neutral-500'>
            AI generated photo of me
          </p>
        </div>

        <div className='prose prose-sm mx-auto dark:prose-invert sm:prose-base lg:prose-lg'>
          <Content />
        </div>
      </motion.div>
    </>
  )
}
