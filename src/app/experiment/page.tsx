import { Experiment } from '@/components/section/experiment/Experiment'
import { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: `Experiment`,
    description: `Random stuff I'm playing around with.`,
  }
}

export default async function Page() {
  return (
    <section className='px-2 py-4'>
      <Experiment />
    </section>
  )
}
