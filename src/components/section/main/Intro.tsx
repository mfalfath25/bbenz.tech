'use client'

import { CosmicSands } from '@/components/p5/CosmicSands'
import { PerlinNoise } from '@/components/p5/PerlinNoise'

export const Intro = () => {
  return (
    <>
      <div className='fixed inset-0 z-0'>
        {/* <CosmicSands /> */}
        <PerlinNoise />
      </div>
    </>
  )
}
