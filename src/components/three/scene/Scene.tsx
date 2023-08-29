'use client'

import { useTheme } from 'next-themes'
import { Html, Stage, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ValorantModel } from '../model/ValorantModel'
import { LetterReveal } from '../../animations/LetterReveal'
import { XLogo } from '@/components/animations/XLogo'

export const Scene = () => {
  const { theme } = useTheme()

  return (
    <>
      <Canvas
        shadows
        dpr={[1, 1]}
        color='transparent'
        orthographic
        camera={{
          zoom: 400,
          position: [0, 0, 100],
          far: 1000,
          near: 0.1,
        }}
      >
        <Html position={[-1, -0.3, 0]}>
          <div
            className={`opacity-10 ${theme === 'dark' ? 'invert filter' : ''}`}
          >
            <XLogo />
          </div>
        </Html>

        <Html position={[0.1, 1, 0]}>
          <div className='relative'>
            <span className='absolute top-20 -z-20 select-none text-6xl opacity-10'>
              {[1, 2, 3].map((index) => (
                <LetterReveal
                  key={index}
                  text='_benzworld'
                />
              ))}
            </span>
          </div>
        </Html>

        <Text
          position={[0, 0, -1]}
          fontSize={0.5}
          receiveShadow
          font='/assets/fonts/Respira.ttf'
        >
          -BENZ-
        </Text>

        <Stage
          position={[0, 0, 0]}
          environment={theme === 'dark' ? 'sunset' : 'dawn'}
          preset={'soft'}
          intensity={2}
        >
          <ValorantModel position={[0, -1.5, 0]} />
        </Stage>
      </Canvas>
    </>
  )
}
