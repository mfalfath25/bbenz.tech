import { MarqueeText } from '@/components/animations/MarqueeText'
import { Header } from '@/components/ui/Header'
import { getPostsMeta } from '@/lib/mdx/posts'
import { PostCard } from './PostCard'

export const revalidate = 1

export const PostList = async () => {
  const posts = await getPostsMeta()

  if (!posts) {
    return <p className='text-center'>No posts</p>
  }

  return (
    <section>
      <Header title='Blog' />
      <div className='py-3'>
        <MarqueeText text='Blog - 블로그 - ブログ - 博客 - Блог - ' />
      </div>

      <div className='flex flex-col items-center'>
        <ul>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
