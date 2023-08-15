'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const Intro = () => {
  return (
    <div>
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
      </div> */}

      <div className='grid gap-5 pt-0 text-center md:pt-2 md:text-left'>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='mx-auto block w-1/2 overflow-hidden rounded-full border-2 border-gray-700 ring-2 ring-accent-light dark:ring-accent-dark md:hidden'
        >
          <Image
            src='/assets/photo.png'
            alt='Photo'
            priority
            width={460}
            height={460}
          />
        </motion.div>

        <Link
          href='/about'
          className='group rounded-lg border-transparent py-4 backdrop-blur-sm transition-colors hover:border-[1px] hover:border-neutral-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 md:px-5'
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            Hi, I&apos;m Fajar Alfath{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className='mx-auto max-w-[40ch] text-sm opacity-70'>
            An aspiring{' '}
            <span className='border-b border-gray-300'>Frontend developer</span>{' '}
            based in Indonesia. Currently experimenting with micro interaction
            and web animations.
          </p>
        </Link>
      </div>
    </div>
  )
}
