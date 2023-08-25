import { Suspense } from 'react'
import { Intro } from '@/components/section/main/Intro'
import { Loader } from 'lucide-react'
import { PlaygroundCanvas } from '@/components/three/canvas/PlaygroundCanvas'

export default function Page() {
  const SuspenseFallback = () => {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <div className='animate-spin'>
          <Loader size={30} />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='relative h-[calc(100vh-134px)] w-full'>
        <Intro />
        <Suspense fallback={<SuspenseFallback />}>
          <PlaygroundCanvas />
        </Suspense>
      </div>
    </>
  )
}
