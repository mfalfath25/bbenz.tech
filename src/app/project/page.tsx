import { Projects } from '@/components/section/project/Projects'
import { Metadata } from 'next'

export const generateMetadata = (): Metadata => {
  return {
    title: `Projects`,
  }
}

export default function Page() {
  return (
    <section className='px-2 py-4'>
      <Projects />
    </section>
  )
}
