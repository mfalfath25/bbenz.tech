/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   mdxRs: true,
  // },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  turbopack: {},
}

import withMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

const mdxOptions = {
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
}

export default withMDX(mdxOptions)(nextConfig)
