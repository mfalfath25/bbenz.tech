import { PostContent } from '@/components/section/blog/PostContent'
import { getPostByName, getPostsMeta } from '@/lib/mdx/posts'
import { Metadata } from 'next'

type Props = {
  params: {
    postId: string
  }
}

export async function generateMetadata({
  params: { postId },
}: Props): Promise<Metadata> {
  const post = await getPostByName(`${postId}.mdx`)
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  return {
    title: post.meta.title,
  }
}

export async function generateStaticParams() {
  const posts = await getPostsMeta()
  if (!posts) return []
  return posts.map((post) => ({
    params: { postId: post.id },
  }))
}

export default async function Page({ params: { postId } }: Props) {
  return (
    <>
      <div className='px-2 py-4'>
        <PostContent params={{ postId }} />
      </div>
    </>
  )
}
