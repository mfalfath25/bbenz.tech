'use client'

import { motion } from 'framer-motion'

type XLogoProps = {
  duration?: number
}

export const XLogo = ({ duration }: XLogoProps) => {
  return (
    <svg
      width='300'
      height='250'
      viewBox='0 0 256 206'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        d='M114.582 3H3L39.7232 64.8705H142.831L121.644 99.4029H65.1469L3 203H65.1469L94.8079 154.079H103.282L137.181 203H247.35L213.452 145.446H103.282L128.706 105.158H188.028L253 3H188.028L154.13 56.2374H148.48L114.582 3Z'
        stroke='black'
        strokeWidth='4'
        strokeLinejoin='round'
        strokeLinecap='round'
        initial={{ pathLength: 0, pathSpacing: 0.5 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: duration,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 2,
          repeatType: 'mirror',
        }}
      />
      <defs>
        <linearGradient
          id='paint0_linear_1710_146'
          x1='128'
          y1='3'
          x2='128'
          y2='203'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop
            offset='0.0001'
            stopColor='#5834E8'
          />
          <stop offset='1' />
        </linearGradient>
      </defs>
    </svg>
  )
}
