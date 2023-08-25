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
        className='absolute top-0 z-10 grid h-[calc(100vh-134px)] w-full place-items-center sm:place-items-start md:absolute'
      >
        <div className='ml-0 mt-0 grid gap-5 text-center sm:ml-2 sm:mt-2 sm:text-left'>
          {/* <Image
            src='/assets/photo.png'
            alt='Photo'
            priority
            width={460}
            height={460}
            className='mx-auto block w-1/2 overflow-hidden rounded-full border-2 border-gray-700 ring-2 ring-accent-light backdrop-blur-sm dark:ring-accent-dark md:hidden'
          /> */}

          <Link
            href='/about'
            className='group rounded-lg border-[1px] px-2 py-4 backdrop-blur-sm transition-colors hover:border-neutral-300 hover:bg-neutral-200/50 dark:border-neutral-500 hover:dark:border-neutral-100 hover:dark:bg-neutral-800/50 sm:px-4'
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
