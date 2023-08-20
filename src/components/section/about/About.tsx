'use client'

import Content from '@/content/about.mdx'

type Props = {}

export const About = ({}: Props) => {
  return (
    <div className='prose prose-sm mx-auto sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:text-white'>
      <Content />
    </div>
  )
}
