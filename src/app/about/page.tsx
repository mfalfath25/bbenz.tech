import { About } from '@/components/section/about/About'
import { Metadata } from 'next'

export const generateMetadata = (): Metadata => {
  return {
    title: `About`,
  }
}

export default async function Page() {
  return (
    <section className='px-2 py-4'>
      <About />
    </section>
  )
}
