'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  projects: {
    title: string
    desc: string
    link: string
    thumbId: string
  }
}

export const ProjectCard = ({ projects }: ProjectCardProps) => {
  const { theme } = useTheme()

  return (
    <>
      <Link
        href={`/project/${projects.thumbId}`}
        className='flex max-w-sm flex-grow'
      >
        <div className='group flex flex-grow flex-row gap-4 rounded-lg border-[1px] p-4 transition-colors hover:border-slate-300 hover:bg-slate-100/50 dark:border-slate-500 hover:dark:border-slate-100 hover:dark:bg-slate-800/50'>
          <Image
            src={`/assets/projects/${projects.thumbId}.svg`}
            alt={`${projects.thumbId}`}
            width={60}
            height={60}
            className={`my-auto h-fit rounded-md border-neutral-300 dark:border-transparent`}
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
        </div>
      </Link>
    </>
  )
}
