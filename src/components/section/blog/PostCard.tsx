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
      className='mb-4 mt-2 text-xl opacity-80 transition-all hover:text-accent-light hover:opacity-100 dark:hover:text-accent-dark'
    >
      <Link href={`/blog/${id}`}>
        <h1 className='text-sm sm:text-xl'>{title}</h1>
        <p className='mt-1 text-sm opacity-50'>{formattedDate}</p>
      </Link>
    </motion.li>
  )
}
