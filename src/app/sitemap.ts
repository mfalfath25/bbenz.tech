import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://benzworld.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://benzworld.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://benzworld.vercel.app/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://benzworld.vercel.app/project',
      lastModified: new Date(),
    },
  ]
}
