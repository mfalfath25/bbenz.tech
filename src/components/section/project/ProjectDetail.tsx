'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Header } from '@/components/ui/Header'
import { projectsData } from '@/content/projects/projectData'
import { LetterReveal } from '@/components/animations/LetterReveal'
import { ProjectStack } from './ProjectStack'
import Link from 'next/link'
import Image from 'next/image'

export const ProjectDetail = () => {
  const pathname = usePathname()
  const slug = pathname.replace('/projects/', '')
  const project = projectsData.find((project) => project.slug === slug)

  if (!project) {
    return (
      <div className='flex h-[calc(100vh-134px)] flex-col items-center justify-center'>
        <p>Sorry, the requested project does not exist.</p>
        <Link
          href='/'
          className='mt-2 rounded-md border-[1px] border-neutral-300 px-2 hover:border-neutral-600 hover:bg-neutral-100 dark:border-neutral-500 dark:border-white/30 hover:dark:border-base-light hover:dark:bg-neutral-800'
        >
          Home
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className='relative'>
        <span className='absolute top-20 select-none text-5xl opacity-10'>
          {[1, 2, 3].map((index) => (
            <LetterReveal
              key={index}
              text={project?.title}
              staggerSpeed={0.1}
            />
          ))}
        </span>
      </div>

      <section className='grid gap-4 overflow-hidden sm:gap-8'>
        <Header
          title={project?.title}
          enableBackButton
          font='inter'
          animation='fade'
        />

        <motion.div
          initial={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)' }}
          animate={{ opacity: 1, clipPath: 'circle(100%)' }}
          transition={{ delay: 0.25, duration: 1, ease: 'easeInOut' }}
        >
          <Image
            // priority
            quality={100}
            // unoptimized
            // loading='lazy'
            placeholder='blur'
            blurDataURL='/assets/graphy.png'
            src={`/assets/projects/medias/media_${project?.thumbId}.png`}
            alt={`${project?.thumbId}`}
            width={450} // 688
            height={327} // 500
            className={`mx-auto rounded-xl border-[1px] border-neutral-300/50 shadow-2xl shadow-accent-light/50 dark:shadow-accent-dark/50`}
          />
        </motion.div>

        <div className='grid grid-cols-3 gap-5 overflow-hidden sm:grid-cols-4'>
          <div className='grid grid-flow-row grid-cols-1 gap-5 md:mx-auto'>
            <motion.div
              className=''
              initial={{ x: '10', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
            >
              <span className='text-sm font-light text-neutral-600 dark:text-neutral-300'>
                DATE
              </span>
              <p className='sm:text-md text-sm'>{project?.date}</p>
            </motion.div>
            <motion.div
              className=''
              initial={{ x: '10', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
            >
              <span className='text-sm font-light text-neutral-600 dark:text-neutral-300'>
                CLIENT/ORG
              </span>
              <p className='sm:text-md text-sm'>
                {project?.client ? project?.client : null}
              </p>
            </motion.div>
            <motion.div
              className=''
              initial={{ x: '10', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
            >
              <span className='text-sm font-light text-neutral-600 dark:text-neutral-300'>
                TYPE
              </span>
              <p className='sm:text-md text-sm'>
                {project?.type ? project?.type : null}
              </p>
            </motion.div>
          </div>
          <div className='col-span-2 grid grid-flow-row grid-cols-1 gap-5'>
            <motion.div
              className=''
              initial={{ x: '10', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
            >
              <span className='text-sm font-light text-neutral-600 dark:text-neutral-300'>
                DESCRIPTION
              </span>
              <p className='sm:text-md text-sm'>
                {project?.longDesc ? project?.longDesc : null}
              </p>
            </motion.div>
            <motion.div
              className=''
              initial={{ x: '10', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
            >
              <span className='text-sm font-light text-neutral-600 dark:text-neutral-300'>
                STACKS / TOOLS / LIBS
              </span>
              <div className='flex flex-row flex-wrap gap-1 pt-1'>
                {project?.stacks.map((element, idx) => (
                  <div
                    key={idx}
                    className='flex flex-row gap-1 rounded-md border border-neutral-600 bg-neutral-100 px-2 py-1 dark:border-neutral-300 dark:bg-neutral-800'
                  >
                    <ProjectStack stack={element} />
                    <div className='text-sm'>{element}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className='grid grid-flow-row grid-cols-1 gap-5 md:mx-auto'>
            <motion.div
              className=''
              initial={{ x: '10', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.9 }}
            >
              <span className='text-sm font-light text-neutral-600 dark:text-neutral-300'>
                EXTERNAL
              </span>
              {project?.source ? (
                <Link
                  href={project?.source ? project?.source : ''}
                  className='flex flex-row gap-2 transition-all hover:text-accent-light dark:hover:text-accent-dark'
                >
                  <p className='sm:text-md text-sm underline'>Source</p>
                </Link>
              ) : null}
              <Link
                href={project?.link ? project?.link : ''}
                className='flex flex-row gap-2 transition-all hover:text-accent-light dark:hover:text-accent-dark'
              >
                <p className='text-md underline'>Link</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
