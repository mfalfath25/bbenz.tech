'use client'

import { motion } from 'framer-motion'
import BackButton from './BackButton'

type HeaderProps = {
  title?: string
  enableBackButton?: boolean
  animation?: 'fade' | 'slide'
}

export const Header = ({
  title,
  enableBackButton,
  animation = 'slide',
}: HeaderProps) => {
  const initial =
    animation === 'fade' ? { opacity: 0 } : { opacity: 0, y: '100%' }
  const animate = animation === 'fade' ? { opacity: 1 } : { opacity: 1, y: 0 }
  const transition =
    animation === 'fade'
      ? { duration: 1 }
      : {
          delay: 0.5,
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
          <div className='flex-1 text-center'>
            <h2 className='font-respira text-2xl font-extrabold tracking-tight sm:text-4xl'>
              {title}
            </h2>
          </div>
        </motion.div>
      </div>
    </>
  )
}
