import { Suspense } from 'react'
import { Loader } from 'lucide-react'
import { Scene } from '@/components/three/scene/Scene'

export default function Page() {
  const SuspenseFallback = () => {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <div className='opacity-50'>
          <Loader
            size={20}
            className='animate-spin'
          />
        </div>
      </div>
    )
  }

  return (
    <>
      <section className='h-[calc(100vh-134px)]'>
        <Suspense fallback={<SuspenseFallback />}>
          <Scene />
        </Suspense>
      </section>
    </>
  )
}
