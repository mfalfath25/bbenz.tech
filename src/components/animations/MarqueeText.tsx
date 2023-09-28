'use client'

import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

type MarqueeProps = {
  text: string
}

export const MarqueeText = ({ text }: MarqueeProps) => {
  const { theme } = useTheme()

  return (
    <div className='overflow-clip'>
      <motion.div
        initial={{ opacity: 0, x: '50%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <Marquee
          gradient
          gradientColor={theme === 'dark' ? [27, 27, 27] : [251, 251, 251]}
          speed={100}
          autoFill
          className='whitespace-pre'
        >
          {text}
        </Marquee>
      </motion.div>
    </div>
  )
}
