import { PostContent } from '@/components/section/blog/PostContent'

type Props = {
  params: {
    postId: string
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
