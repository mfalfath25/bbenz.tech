'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const images = [
  {
    src: '/assets/blocks/gallery/ai-1.jpg',
    alt: 'ai-1',
  },
  {
    src: '/assets/blocks/gallery/ai-2.jpg',
    alt: 'ai-2',
  },
  {
    src: '/assets/blocks/gallery/ai-3.jpg',
    alt: 'ai-3',
  },
  {
    src: '/assets/blocks/gallery/ai-4.jpg',
    alt: 'ai-4',
  },
  {
    src: '/assets/blocks/gallery/ai-5.jpg',
    alt: 'ai-5',
  },
]

export const Gallery = () => {
  return (
    <div className='relative'>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 1,
            clipPath: '',
          }}
          animate={{
            opacity: 1,
            // clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%))',
          }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='absolute '
        >
          <Image
            unoptimized
            priority
            src={image.src}
            alt={image.alt}
            width={300}
            height={400}
            className=''
          />
        </motion.div>
      ))}
    </div>
  )
}
