import { PostContent } from '@/components/section/blog/PostContent'
import { getPostByName } from '@/lib/mdx/posts'
import { Metadata } from 'next'

type Props = {
  params: {
    postId: string
  }
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props
  const product = await getPostByName(`${params.postId}.mdx`)
  return {
    title: `${product?.meta.title}`,
  }
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
