'use client'

import { motion } from 'framer-motion'

interface LetterRevealProps {
  text?: string
}

export const LetterReveal = ({ text = 'sample' }: LetterRevealProps) => {
  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05, // Adjust this value to control the letter stagger
      },
    },
  }

  const letterItemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <motion.h1
      className='font-respira'
      variants={letterVariants}
      initial='initial'
      animate='animate'
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
