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
        transition={{ duration: 0.5 }}
      >
        {enableBackButton ? (
          <div className='relative mx-auto max-w-4xl'>
            <BackButton />
          </div>
        ) : null}
        <h1 className='text-center text-2xl font-extrabold tracking-tight'>
          {title}
        </h1>
      </motion.div>
    </>
  )
}
