'use client'

import { Canvas } from '@react-three/fiber'
import { Girl } from '../mesh/Girl'
import {
  DepthOfField,
  DotScreen,
  EffectComposer,
  Noise,
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export const PlaygroundCanvas = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 1]}
      camera={{ fov: 30 }}
      color='transparent'
    >
      <EffectComposer>
        {/* <Noise
            premultiply
            blendFunction={BlendFunction.ADD}
          /> */}
        {/* <DepthOfField
            focusDistance={0} // where to focus
            focalLength={0.02} // focal length
            bokehScale={2} // bokeh size
          /> */}
        {/* <DotScreen
            blendFunction={BlendFunction.NORMAL} // blend mode
            angle={Math.PI * 0.1} // angle of the dot pattern
            scale={1} // scale of the dot pattern
          /> */}
      </EffectComposer>
      <pointLight
        position={[0, 0, 4]}
        intensity={20}
      />
      <ambientLight intensity={0.5} />
      <Girl position={[0, -1.5, 4]} />
    </Canvas>
  )
}
