'use client'

import { motion } from 'framer-motion'
import BackButton from './BackButton'

type HeaderProps = {
  title?: string
  enableBackButton?: boolean
  animation?: 'fade' | 'slide'
  font?: 'respira' | 'inter'
}

export const Header = ({
  title,
  enableBackButton,
  animation = 'slide',
  font = 'respira',
}: HeaderProps) => {
  const initial =
    animation === 'fade' ? { opacity: 0 } : { opacity: 0, y: '100%' }
  const animate = animation === 'fade' ? { opacity: 1 } : { opacity: 1, y: 0 }
  const transition =
    animation === 'fade'
      ? { duration: 1 }
      : {
          delay: 0.25,
          duration: 0.5,
          ease: 'anticipate',
        }

  return (
    <>
      <div className='overflow-clip'>
        <motion.div
          initial={initial}
          animate={animate}
          transition={transition}
          className='flex items-center'
        >
          {enableBackButton && (
            <div className='relative h-[40px]'>
              <div className='absolute inset-0 left-3 flex items-center justify-center'>
                <BackButton />
              </div>
            </div>
          )}
          <div className='flex-1 px-6 text-center'>
            <h1
              className={`${
                font === 'respira'
                  ? 'font-respira text-3xl'
                  : 'font-inter text-2xl xs:text-3xl'
              } px-2 font-semibold tracking-tight sm:text-4xl`}
            >
              {title}
            </h1>
          </div>
        </motion.div>
      </div>
    </>
  )
}
