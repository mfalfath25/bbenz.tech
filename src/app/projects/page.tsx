import { Projects } from '@/components/section/project/Projects'
import { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: `Projects`,
    description: `A collection of my previous works.`,
  }
}

export default function Page() {
  return (
    <section className='px-2 py-4'>
      <Projects />
    </section>
  )
}
