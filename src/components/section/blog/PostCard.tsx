'use client'

import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'
import { motion } from 'framer-motion'

type PostCardProps = {
  post: Meta
}

export const PostCard = ({ post }: PostCardProps) => {
  const { id, title, date } = post
  const formattedDate = getFormattedDate(date)

  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.25, ease: 'easeInOut' }}
      className='group text-xl transition-all hover:text-accent-light hover:opacity-100 dark:hover:text-accent-dark'
    >
      <Link href={`/blog/${id}`}>
        <h2 className='inline text-base sm:text-lg md:text-xl'>{title} </h2>
        <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
          -&gt;
        </span>
        <p className='text-sm text-neutral-600 group-hover:text-black dark:text-neutral-300 dark:group-hover:text-white'>
          {formattedDate}
        </p>
      </Link>
    </motion.li>
  )
}
