'use client'

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { useTheme } from 'next-themes'
import { Stars } from '../model/Stars'
import { Html, PerspectiveCamera, Text } from '@react-three/drei'
import { Icosahedron } from '../model/Icosahedron'
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Grid,
  LensFlare,
  Noise,
  Outline,
} from '@react-three/postprocessing'
import { BlendFunction, KernelSize, Resolution } from 'postprocessing'
import { LetterReveal } from '@/components/animations/LetterReveal'
import { XLogo } from '@/components/animations/XLogo'

const phrases = ["benz's", 'digital', 'space']

export const AltScene = () => {
  const { theme } = useTheme()
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
        className='h-full'
      >
        <Canvas
          shadows
          dpr={[1, 1]}
          color='transparent'
        >
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 5]}
          />
          <ambientLight intensity={0.1} />
          <pointLight
            position={[2, 1.5, 1]}
            intensity={20}
            color={'white'}
            castShadow
          />
          <pointLight
            position={[-2, -1.5, 1]}
            intensity={20}
            color={'white'}
            castShadow
          />
          {/* {theme === 'dark' ? (
          <>
            <AsciiRenderer
              fgColor='white'
              bgColor='transparent'
            />
            <color
              attach='background'
              args={['black']}
            />
          </>
        ) : (
          <>{null}</>
        )} */}
          <Html position={[-2.25, 0.25, 0]}>
            <div
              className={`opacity-5 ${theme === 'dark' ? 'invert filter' : ''}`}
            >
              <XLogo duration={2} />
            </div>
          </Html>
          <Html position={[1, 0.5, 0]}>
            <div className='relative'>
              <span className='absolute top-20 -z-20 select-none text-6xl opacity-5'>
                {phrases.map((phrase, index) => (
                  <LetterReveal
                    key={index}
                    text={phrase}
                    staggerSpeed={0.1}
                    delay={0.5}
                    repeat={Infinity}
                  />
                ))}
              </span>
            </div>
          </Html>
          <Text
            position={[0, 1.5, 0]}
            fontSize={0.5}
            receiveShadow
            font='/assets/fonts/Respira.ttf'
            color={theme === 'dark' ? 'white' : 'black'}
          >
            -BENZ-
          </Text>
          <Stars position={[0, 0, 3]} />
          <Icosahedron position={[0, 0, 0]} />

          <EffectComposer>
            <Noise
              premultiply // enables or disables noise premultiplication
              blendFunction={
                BlendFunction.ADD // blend mode, defaults to ADD. see BlendFunction for alternatives
              } // blend mode
            />
            <Bloom
              intensity={0.2}
              // mipmapBlur
              kernelSize={KernelSize.MEDIUM}
              luminanceThreshold={0.25}
              luminanceSmoothing={0.025}
              resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
              resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
            />
          </EffectComposer>
        </Canvas>
      </motion.div>
    </>
  )
}
