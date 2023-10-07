import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

type Filetree = {
  tree: [
    {
      path: string
    },
  ]
}

export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  const timestamp = new Date().getTime()

  const res = await fetch(
    `https://raw.githubusercontent.com/mfalfath25/benz-blog-mdx/main/${fileName}?timestamp=${timestamp}`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  )

  if (!res.ok) return undefined

  const rawMDX = await res.text()

  if (rawMDX === '404: Not Found') return undefined

  const { frontmatter, content } = await compileMDX<{
    title: string
    date: string
    tags: string[]
  }>({
    source: rawMDX,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight],
      },
    },
  })

  const id = fileName.replace(/\.mdx$/, '')

  const blogPostObj: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
    },
    content,
  }

  return blogPostObj
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  const timestamp = new Date().getTime()

  const res = await fetch(
    `https://api.github.com/repos/mfalfath25/benz-blog-mdx/git/trees/main?recursive=1&timestamp=${timestamp}`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  )

  if (!res.ok) return undefined

  const repoFiletree: Filetree = await res.json()

  const filesArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith('.mdx'))

  const posts: Meta[] = []

  for (const file of filesArray) {
    const post = await getPostByName(file)
    if (post) {
      const { meta } = post
      posts.push(meta)
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}
