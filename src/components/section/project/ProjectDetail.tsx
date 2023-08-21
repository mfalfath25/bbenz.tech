'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Header } from '@/components/ui/Header'
import { projectsData } from '@/lib/static/projectData'
import { LetterReveal } from '@/components/animations/LetterReveal'
import Link from 'next/link'
import { ProjectStack } from './ProjectStack'
import Image from 'next/image'

export const ProjectDetail = () => {
  const pathname = usePathname()
  const project = projectsData.find(
    (project) => project.thumbId === pathname.split('/').pop()
  )

  return (
    <>
      <div className='grid gap-8 overflow-hidden'>
        <Header
          title={project?.title}
          enableBackButton
        />

        <div className='relative'>
          <span className='absolute top-0 text-4xl opacity-10'>
            {[1, 2, 3].map((index) => (
              <LetterReveal
                key={index}
                text={project?.title}
              />
            ))}
          </span>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0 }} // Start from the right and fully transparent
            animate={{ opacity: 1 }} // Move to the left and fully opaque
            transition={{ duration: 0.25, ease: 'easeIn', delay: 0.4 }} // Use the easeInOut easing function
            className='text-center text-sm font-light text-neutral-600 dark:text-neutral-300'
          >
            MEDIA
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ opacity: 1, clipPath: 'circle(100%)' }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Image
              priority
              src={`/assets/projects/medias/media_${project?.thumbId}.jpg`}
              alt={`${project?.thumbId}`}
              width={500}
              height={500}
              className={`mx-auto rounded-xl border-[1px] border-slate-300 shadow-2xl shadow-accent-light/50 dark:shadow-accent-dark/50 `}
            />
          </motion.div>
        </div>

        <div className='grid grid-cols-3 gap-5 overflow-hidden sm:grid-cols-4'>
          <div className='grid grid-flow-row grid-cols-1 gap-5 md:mx-auto'>
            <motion.div
              className=''
              initial={{ x: '10', opacity: 0 }} // Start from the right and fully transparent
              animate={{ x: 0, opacity: 1 }} // Move to the left and fully opaque
              transition={{ duration: 0.25, ease: 'easeIn', delay: 1.2 }} // Use the easeInOut easing function
            >
              <h2 className='text-sm font-light text-neutral-600 dark:text-neutral-300'>
                DATE
              </h2>
              <p className='text-md'>{project?.date}</p>
            </motion.div>
            <motion.div
              className=''
              initial={{ x: '10', opacity: 0 }} // Start from the right and fully transparent
              animate={{ x: 0, opacity: 1 }} // Move to the left and fully opaque
              transition={{ duration: 0.25, ease: 'easeIn', delay: 1.2 }} // Use the easeInOut easing function
            >
              <h2 className='text-sm font-light text-neutral-600 dark:text-neutral-300'>
                CLIENT/ORG
              </h2>
              <p className='text-md'>
                {project?.client ? project?.client : null}
              </p>
            </motion.div>
            <motion.div
              className=''
              initial={{ x: '10', opacity: 0 }} // Start from the right and fully transparent
              animate={{ x: 0, opacity: 1 }} // Move to the left and fully opaque
              transition={{ duration: 0.25, ease: 'easeIn', delay: 1.2 }} // Use the easeInOut easing function
            >
              <h2 className='text-sm font-light text-neutral-600 dark:text-neutral-300'>
                TYPE
              </h2>
              <p className='text-md'>{project?.type ? project?.type : null}</p>
            </motion.div>
          </div>
          <div className='col-span-2 grid grid-flow-row grid-cols-1 gap-5'>
            <motion.div
              className=''
              initial={{ x: '10', opacity: 0 }} // Start from the right and fully transparent
              animate={{ x: 0, opacity: 1 }} // Move to the left and fully opaque
              transition={{ duration: 0.25, ease: 'easeIn', delay: 1.4 }} // Use the easeInOut easing function
            >
              <h2 className='text-sm font-light text-neutral-600 dark:text-neutral-300'>
                DESCRIPTION
              </h2>
              <p className='text-md'>
                {project?.longDesc ? project?.longDesc : null}
              </p>
            </motion.div>
            <motion.div
              className=''
              initial={{ x: '10', opacity: 0 }} // Start from the right and fully transparent
              animate={{ x: 0, opacity: 1 }} // Move to the left and fully opaque
              transition={{ duration: 0.25, ease: 'easeIn', delay: 1.4 }} // Use the easeInOut easing function
            >
              <h2 className='text-sm font-light text-neutral-600 dark:text-neutral-300'>
                STACKS
              </h2>
              <div className='flex flex-row flex-wrap gap-1'>
                {project?.stacks.map((element, idx) => (
                  <div
                    key={idx}
                    className='border-black-main dark:border-white-main flex flex-row gap-1 rounded-md border px-2 py-1'
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
              initial={{ x: '10', opacity: 0 }} // Start from the right and fully transparent
              animate={{ x: 0, opacity: 1 }} // Move to the left and fully opaque
              transition={{ duration: 0.25, ease: 'easeIn', delay: 1.6 }} // Use the easeInOut easing function
            >
              <h2 className='text-sm font-light text-neutral-600 dark:text-neutral-300'>
                EXTERNAL
              </h2>
              {project?.source ? (
                <Link
                  href={project?.source ? project?.source : ''}
                  className='flex flex-row gap-2 opacity-60 ease-out hover:opacity-100'
                >
                  <p className='text-md underline'>Source</p>
                </Link>
              ) : null}
              <Link
                href={project?.link ? project?.link : ''}
                className='flex flex-row gap-2 opacity-60 ease-out hover:opacity-100'
              >
                <p className='text-md underline'>Link</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
