'use client'

import { CosmicSands } from '@/components/p5/CosmicSands'
import { PerlinNoise } from '@/components/p5/PerlinNoise'
import { Scene } from '@/components/three/scene/Scene'

export const Intro = () => {
  return (
    <>
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 z-0'>
          {/* <CosmicSands /> */}
          {/* <PerlinNoise /> */}
        </div>
        <div className='absolute inset-0 z-10'>
          <Scene />
        </div>
      </div>
    </>
  )
}
