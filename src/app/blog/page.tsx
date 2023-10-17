import { PostList } from '@/components/section/blog/PostList'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Blog`,
    description: `My writings about thoughts, ideas, and experiences.`,
  }
}

export default async function Page() {
  return (
    <section className='px-2 py-4'>
      <PostList />
    </section>
  )
}
