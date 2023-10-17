'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type ProjectCardProps = {
  projects: {
    slug: string
    title: string
    desc: string
    link: string
    thumbId: string
  }
}

export const ProjectCard = ({ projects }: ProjectCardProps) => {
  return (
    <>
      <Link
        href={`/projects/${projects.slug}`}
        className='group flex max-w-sm flex-grow'
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.25, ease: 'easeInOut' }}
          className='group flex flex-grow flex-row gap-2 rounded-lg border-[1px] border-neutral-300 bg-neutral-100 p-2 transition-all hover:border-neutral-600 hover:bg-neutral-200 hover:text-accent-light dark:border-neutral-500 dark:border-white/30 dark:bg-neutral-800 hover:dark:border-base-light hover:dark:bg-neutral-900 dark:hover:text-accent-dark sm:gap-4 sm:p-4'
        >
          <Image
            priority
            quality={100}
            placeholder='blur'
            blurDataURL='/assets/graphy.png'
            src={`/assets/projects/logos/${projects.thumbId}.png`}
            alt={`${projects.thumbId}`}
            width={60}
            height={60}
            className={`my-auto scale-90 rounded-md border-[1px] border-neutral-300 dark:border-transparent sm:scale-100`}
          />
          <div className='col-span-3 my-auto'>
            <h2 className='text-left text-lg font-semibold sm:text-xl md:text-2xl'>
              {projects.title}{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                -&gt;
              </span>
            </h2>
            <p className='text-left text-sm text-neutral-600 transition-colors group-hover:text-black dark:text-neutral-300 dark:group-hover:text-white'>
              {projects.desc}
            </p>
          </div>
        </motion.div>
      </Link>
    </>
  )
}
