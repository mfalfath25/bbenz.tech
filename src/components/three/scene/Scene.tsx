'use client'

import { useTheme } from 'next-themes'
import { Html, Stage, Text, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ValorantModel } from '../model/ValorantModel'
import { useState, useEffect } from 'react'
import { LetterReveal } from '../../animations/LetterReveal'
import { XLogo } from '@/components/animations/XLogo'
import { Bloom, EffectComposer, Noise } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { Stars } from '../model/Stars'

export const Scene = () => {
  const { theme } = useTheme()
  const [scale, setScale] = useState(0.8)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale(0.5)
      } else {
        setScale(0.8)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
        <Html position={[-1, -0.3, 0]}>
          <div
            className={`opacity-10 ${theme === 'dark' ? 'invert filter' : ''}`}
          >
            <XLogo duration={1.5} />
          </div>
        </Html>

        <Html position={[0.1, 1, 0]}>
          <div className='relative'>
            <span className='absolute top-20 -z-20 text-6xl opacity-10 select-none'>
              {[1, 2, 3].map((index) => (
                <LetterReveal
                  key={index}
                  text='_benzworld'
                />
              ))}
            </span>
          </div>
        </Html>

        {/* <Text
          position={[0, 0, -1]}
          fontSize={0.5}
          receiveShadow
          font='/assets/fonts/Respira.ttf'
        >
          -BENZ-
        </Text> */}

        <Environment preset={theme === 'dark' ? 'apartment' : 'warehouse'} />
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
        />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
        />

        <ValorantModel
          position={[0, -0.9, 0]}
          scale={scale}
        />
        <Stars />

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.5}
            luminanceSmoothing={0.9}
            height={200}
          />
          <Noise
            premultiply
            blendFunction={BlendFunction.ADD}
          />
        </EffectComposer>
      </Canvas>
    </>
  )
}
