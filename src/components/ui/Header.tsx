'use client'

import { motion } from 'framer-motion'
import BackButton from './BackButton'

interface HeaderProps {
  title?: string
  enableBackButton?: boolean
}

export const Header = ({ title, enableBackButton }: HeaderProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
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
    </>
  )
}
