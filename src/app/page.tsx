import { Suspense } from 'react'
import { Loader } from 'lucide-react'
import { Scene } from '@/components/three/scene/Scene'
import Image from 'next/image'

export default function Page() {
  const SuspenseFallback = () => {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <div className='opacity-50'>
          <Image
            priority
            src='/assets/logo_alt.svg'
            alt='Logo'
            width={100}
            height={80}
            className='animate-ping opacity-80'
          />
          {/* <Loader
            size={20}
            className='animate-spin'
          /> */}
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
