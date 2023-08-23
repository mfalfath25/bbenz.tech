'use client'

import { MarqueeText } from '@/components/animations/MarqueeText'
import { Header } from '@/components/ui/Header'
import Content from '@/content/about/about.mdx'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export const About = ({}: Props) => {
  return (
    <>
      <Header title='About Me' />
      <div className='pt-2'>
        <MarqueeText text='Welcome - Willkommen - 환영하다 - ようこそ - Selamat datang - 欢迎 - Bienvenidos - ' />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'circIn' }}
        className='grid grid-cols-1 md:grid-cols-2'
      >
        <div className='prose prose-sm order-2 mx-auto dark:prose-invert sm:prose-base lg:prose-lg md:order-1'>
          <Content />
        </div>
        <div className='order-1 flex flex-col items-center justify-center py-4 md:order-2'>
          <motion.div whileHover={{ rotate: -1 }}>
            <Image
              src='/assets/photorl.png'
              alt='Photo'
              priority
              width={300}
              height={300}
              className='tilt-image mx-auto rounded-lg border-2 border-gray-700 ring-2 ring-accent-light backdrop-blur-sm dark:ring-accent-dark'
            />
          </motion.div>
          <p className='pt-2 text-neutral-400 dark:text-neutral-500'>
            This suit is AI generated
          </p>
        </div>
      </motion.div>
    </>
  )
}
