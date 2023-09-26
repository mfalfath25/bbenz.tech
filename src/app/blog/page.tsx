import { PostList } from '@/components/section/blog/PostList'
import { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: `Blog`,
  }
}

export default async function Page() {
  return (
    <section className='px-2 py-4'>
      <PostList />
    </section>
  )
}
