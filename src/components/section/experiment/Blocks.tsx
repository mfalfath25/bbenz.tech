'use client'

import { motion } from 'framer-motion'

export type BlocksProps = {
  classes?: string
  content?: React.ReactNode
}

export const Blocks = ({ classes, content }: BlocksProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ delay: 0.25, duration: 1, ease: 'easeInOut' }}
      className={`overflow-clip border-[1px] border-gray-700/30 opacity-80 shadow-lg backdrop-blur-sm transition-all hover:border-accent-light hover:opacity-100 hover:shadow-lg dark:border-white/30 dark:shadow-slate-100/10 dark:hover:border-accent-dark
        ${classes}`}
    >
      {content}
    </motion.div>
  )
}
