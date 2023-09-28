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
        href={`/project/${projects.slug}`}
        className='flex max-w-sm flex-grow'
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 1, ease: 'easeInOut' }}
          className='group flex flex-grow flex-row gap-4 rounded-lg border-[1px] border-neutral-300 p-4 transition-all hover:border-neutral-600 hover:bg-neutral-100 dark:border-neutral-500 dark:border-white/30 hover:dark:border-base-light hover:dark:bg-neutral-800'
        >
          <Image
            src={`/assets/projects/logos/${projects.thumbId}.svg`}
            alt={`${projects.thumbId}`}
            width={60}
            height={60}
            className={`my-auto h-fit rounded-md border-[1px] border-neutral-300 dark:border-transparent`}
          />
          <div className='col-span-3 my-auto'>
            <h2 className='text-left text-2xl font-semibold'>
              {projects.title}{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                -&gt;
              </span>
            </h2>
            <p className='text-left text-sm opacity-70'>{projects.desc}</p>
          </div>
        </motion.div>
      </Link>
    </>
  )
}
