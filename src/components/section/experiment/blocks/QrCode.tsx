'use client'

import Image from 'next/image'
import React from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export const QrCode = () => {
  const { theme } = useTheme()

  return (
    <>
      <motion.div
        className='flex h-full items-center justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Image
          priority
          quality={100}
          placeholder='blur'
          blurDataURL='/assets/graphy.png'
          src='/assets/blocks/qrcode.png'
          alt='QR'
          width={180}
          height={180}
          className={`${theme === 'dark' ? 'invert' : ''} rounded-xl`}
        />
      </motion.div>
    </>
  )
}
