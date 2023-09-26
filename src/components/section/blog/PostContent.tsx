import { Header } from '@/components/ui/Header'
import getFormattedDate from '@/lib/getFormattedDate'
import { getPostByName } from '@/lib/mdx/posts'
import { notFound } from 'next/navigation'
import 'highlight.js/styles/github-dark.css'

export const revalidate = 10

type Props = {
  params: {
    postId: string
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
              className='dark:border-white-main flex flex-row gap-1 rounded-md border-[1px] border-black/50 px-1 py-[1px] text-sm opacity-50 dark:border-neutral-200/50'
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
