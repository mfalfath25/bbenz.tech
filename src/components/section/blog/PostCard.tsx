import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'

interface PostCardProps {
  post: Meta
}

export const PostCard = ({ post }: PostCardProps) => {
  const { id, title, date } = post
  const formattedDate = getFormattedDate(date)

  return (
    <li className='mb-4 mt-2 text-xl opacity-80 hover:text-accent-light hover:opacity-100 dark:hover:text-accent-dark'>
      <Link href={`/blog/${id}`}>
        {title}
        <br />
        <p className='mt-1 text-sm opacity-50'>{formattedDate}</p>
      </Link>
    </li>
  )
}
