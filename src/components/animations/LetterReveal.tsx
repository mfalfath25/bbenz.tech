'use client'

import { motion } from 'framer-motion'

type LetterRevealProps = {
  text?: string
  staggerSpeed?: number
  delay?: number
  repeat?: number | typeof Infinity
  props?: any
}

export const LetterReveal = ({
  text = 'sample',
  staggerSpeed = 0.05,
  delay = 0,
  repeat = 0,
  props,
}: LetterRevealProps) => {
  const letterVariants = {
    initial: { opacity: 0, y: 0 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerSpeed, // Adjust this value to control the letter stagger (0 - 1)
        // repeat: repeat,
        // repeatDelay: 3,
      },
    },
  }

  const letterItemVariants = {
    initial: { opacity: 0, y: 0 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerSpeed, // Adjust this value to control the letter stagger (0 - 1)
        repeat: repeat,
        repeatDelay: 3,
      },
    },
  }

  return (
    <motion.h1
      className='font-respira'
      variants={letterVariants}
      initial='initial'
      animate='animate'
      {...props}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterItemVariants}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  )
}
