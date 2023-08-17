'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const Intro = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='absolute top-0 z-10 grid h-[calc(100vh-67px)] w-full place-items-center md:absolute md:place-items-start'
      >
        <div className='grid gap-5 pt-0 text-center md:pt-2 md:text-left'>
          <Image
            src='/assets/photo.png'
            alt='Photo'
            priority
            width={460}
            height={460}
            className='mx-auto block w-1/2 overflow-hidden rounded-full border-2 border-gray-700 ring-2 ring-accent-light backdrop-blur-sm dark:ring-accent-dark md:hidden'
          />

          <Link
            href='/about'
            className='group rounded-lg py-4 backdrop-blur-sm transition-colors hover:border-slate-300 hover:bg-slate-100 dark:border-slate-500 hover:dark:border-slate-100 hover:dark:bg-slate-800/50 md:px-5'
          >
            <h2 className='mb-3 text-2xl font-semibold'>
              Hi, I&apos;m Fajar Alfath{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                -&gt;
              </span>
            </h2>
            <p className='mx-auto max-w-[40ch] text-sm opacity-70'>
              An aspiring{' '}
              <span className='border-b border-gray-300'>
                Frontend developer
              </span>{' '}
              based in Indonesia. Currently experimenting with micro interaction
              and web animations.
            </p>
          </Link>
        </div>
      </motion.div>
    </>
  )
}
