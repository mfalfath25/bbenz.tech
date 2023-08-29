import { Header } from '@/components/ui/Header'
import getFormattedDate from '@/lib/getFormattedDate'
import { getPostsMeta, getPostByName } from '@/lib/mdx/posts'
import { notFound } from 'next/navigation'
import 'highlight.js/styles/github-dark.css'

export const revalidate = 1

type Props = {
  params: {
    postId: string
  }
}

export async function generateStaticParams() {
  const posts = await getPostsMeta()

  if (!posts) return []

  return posts.map((post) => ({
    postId: post.id,
  }))
}

export async function generateMetadata({ params: { postId } }: Props) {
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

export const PostContent = async ({ params: { postId } }: Props) => {
  const post = await getPostByName(`${postId}.mdx`)

  if (!post) notFound()

  const { meta, content } = post

  const pubDate = getFormattedDate(meta.date)

  return (
    <>
      <Header
        title={meta.title}
        enableBackButton
      />

      <section className='flex flex-col flex-wrap items-center justify-center gap-2 py-3'>
        <div className='flex flex-row items-center justify-center gap-2'>
          <p className='mt-0 text-sm opacity-50'>{pubDate} - </p>
          {meta.tags.map((tag, i) => (
            <div
              key={i}
              className='dark:border-white-main flex flex-row gap-1 rounded-md border border-black/50 px-1 py-[1px] text-sm opacity-50 dark:border-neutral-200/50'
            >
              <span key={i}>{tag}</span>
            </div>
          ))}
        </div>
      </section>

      <article className='prose mx-auto no-underline dark:prose-invert'>
        {content}
      </article>
    </>
  )
}
