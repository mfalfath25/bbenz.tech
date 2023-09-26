'use client'

import { Canvas } from '@react-three/fiber'
import { Particles } from '../model/Particles'
import { useTheme } from 'next-themes'
import { Stars } from '../model/Stars'
import {
  ArcballControls,
  AsciiRenderer,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
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
import { BlendFunction, Resizer, KernelSize } from 'postprocessing'
import * as THREE from 'three'
import { ValorantModel } from '../model/ValorantModel'

export const AltScene = () => {
  const { theme } = useTheme()
  return (
    <>
      <Canvas
        shadows
        dpr={[2, 2]}
        color='transparent'
      >
        {/* <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={true}
          panSpeed={0.5}
          mouseButtons={{ LEFT: 2, MIDDLE: 0, RIGHT: 0 }}
        /> */}
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 5]}
        />
        <ambientLight intensity={0.5} />
        <pointLight
          position={[1.5, 1, 0]}
          intensity={20}
          color={'white'}
          castShadow
        />
        <pointLight
          position={[-1.5, -1, 0]}
          intensity={20}
          color={'white'}
          castShadow
        />

        {theme === 'dark' ? (
          <>
            {/* <AsciiRenderer
              fgColor='white'
              bgColor='transparent'
            />
            <color
              attach='background'
              args={['black']}
            /> */}
          </>
        ) : (
          <>{null}</>
        )}

        <Stars position={[0, 0, 3]} />
        <Icosahedron
          castShadow
          position={[0, 0, 0]}
        />

        {/* <ValorantModel /> */}

        {/* <EffectComposer>
          <Noise
            premultiply // enables or disables noise premultiplication
            blendFunction={
              BlendFunction.ADD // blend mode, defaults to ADD. see BlendFunction for alternatives
            } // blend mode
          />
          <Bloom
            mipmapBlur
            luminanceThreshold={1}
            dithering
          />
        </EffectComposer> */}
      </Canvas>
      {/* // <Canvas camera={{ position: [0, 0, 5] }}>
    //   <pointLight
    //     position={[2, 2, 2]}
    //     intensity={1}
    //   />
    //   <ambientLight intensity={0.5} />
    //   <Particles />
    // </Canvas> */}
    </>
  )
}
