import Markdown from './markdown.mdx'

export default function YoPage() {
  return (
    <>
      <div className='prose prose-sm mx-auto sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:text-white'>
        <Markdown />
      </div>
    </>
  )
}
