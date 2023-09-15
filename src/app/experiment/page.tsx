import { Experiment } from '@/components/section/experiment/Experiment'
import { Metadata } from 'next'

export const generateMetadata = (): Metadata => {
  return {
    title: `Experiment`,
  }
}

export default async function Page() {
  return (
    <section className='px-2 py-4'>
      <Experiment />
    </section>
  )
}
