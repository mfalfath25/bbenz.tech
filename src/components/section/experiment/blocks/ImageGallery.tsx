'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`

const images = [
  {
    src: '/assets/blocks/gallery/ai-1.jpg',
    alt: 'ai-1',
    codename: 'Sky',
    color: '#63C5DA',
  },
  {
    src: '/assets/blocks/gallery/ai-2.jpg',
    alt: 'ai-2',
    codename: 'Veronica',
    color: '#A020F0',
  },
  {
    src: '/assets/blocks/gallery/ai-3.jpg',
    alt: 'ai-3',
    codename: 'Xanthic',
    color: '#EEED09',
  },
  {
    src: '/assets/blocks/gallery/ai-4.jpg',
    alt: 'ai-4',
    codename: 'Chartreuse',
    color: '#B0FC38',
  },
  {
    src: '/assets/blocks/gallery/ai-5.jpg',
    alt: 'ai-5',
    codename: 'Vermilion',
    color: '#7E191B',
  },
]

type galleryItemProps = {
  imageData: {
    src: string
    alt: string
    codename: string
    color: string
  }
}

const GalleryItem = ({ imageData }: galleryItemProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <motion.div
      className='gallery-item'
      initial={{
        opacity: 0,
        // WebkitMaskImage: hiddenMask,
        // maskImage: hiddenMask,
        WebkitClipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
        clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
      }}
      animate={{
        opacity: 1,
        // WebkitMaskImage: visibleMask,
        // maskImage: visibleMask,
        WebkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      }}
      transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        priority
        quality={100}
        src={imageData.src}
        alt={imageData.alt}
        width={300}
        height={400}
        className='h-full w-full object-cover saturate-50 transition-all hover:saturate-100'
      ></Image>
      {isHovered && (
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={`pointer-events-none absolute bottom-0 left-1/2 z-50 mx-auto -translate-x-1/2 select-none rounded-md p-1 text-center font-respira text-2xl font-light text-black drop-shadow-glow-accent-light`}
        >
          {imageData.codename}
        </motion.span>
      )}
    </motion.div>
  )
}

const ImageGallery = () => {
  return (
    <motion.div className='gallery-container'>
      <AnimatePresence>
        {images.map((item, index) => (
          <GalleryItem
            key={index}
            imageData={item}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

export default ImageGallery
