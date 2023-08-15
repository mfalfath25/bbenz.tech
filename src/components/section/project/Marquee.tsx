'use client'

import { motion } from 'framer-motion'

interface MarqueeProps {
  text: string
}

export const Marquee = ({
  text = 'Your Marquee Text Goes Here',
}: MarqueeProps) => {
  return (
    <div className='marquee-viewport overflow-hidden'>
      <motion.div
        className='marquee-text flex whitespace-nowrap'
        animate={{ x: '-100%' }}
        initial={{ x: '100%' }} // Adjust this value based on your container width
        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
      >
        {text}
      </motion.div>
    </div>
  )
}
