'use client'

import { Suspense } from 'react'
import { Intro } from '@/components/section/main/Intro'
import { MainCanvas } from '@/components/three/canvas/MainCanvas'
import { Loader } from 'lucide-react'
import { motion } from 'framer-motion'

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='relative h-[calc(100vh-134px)] w-full'
      >
        <Suspense fallback={<SuspenseFallback />}>
          <MainCanvas />
        </Suspense>
        <Intro />
      </motion.div>
    </>
  )
}
