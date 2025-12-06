'use client'

import { useTheme } from 'next-themes'
import { Canvas } from '@react-three/fiber'
import { RingText } from '../model/RingText'

export const SceneMain = () => {
  const { theme } = useTheme()

  return (
    <>
      <Canvas
        shadows
        dpr={[1, 2]}
        color='transparent'
        orthographic
        camera={{
          zoom: 400,
          position: [0, 0, 100],
          far: 1000,
          near: 0.1,
        }}
      >
        <RingText />
      </Canvas>
    </>
  )
}
