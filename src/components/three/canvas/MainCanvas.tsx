'use client'

import { Canvas } from '@react-three/fiber'
import { AsciiRenderer, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Stars } from '../mesh/Stars'
import { Icosahedron } from '../mesh/Icosahedron'
import { useTheme } from 'next-themes'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

export const MainCanvas = () => {
  const { theme } = useTheme()

  return (
    <div className='h-[calc(100vh-66px)] hidden md:block'>
      <Canvas shadows dpr={[1, 2]} color='transparent'>
        <OrbitControls enableRotate={false} enableZoom={false}
          enablePan={true} panSpeed={0.5} mouseButtons={{ LEFT: 2, MIDDLE: 0, RIGHT: 0 }}
        />
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.25} />
        <pointLight position={[1, 1, 0]} intensity={10} color={'white'} castShadow />
        <pointLight position={[-1, -1, 0]} intensity={10} color={'white'} castShadow />

        {
          theme === "dark" ? (
            <>
              <AsciiRenderer fgColor="white" bgColor="transparent" />
              <color attach="background" args={["black"]} />
            </>
          ) : (
            <>
              {null}
            </>
          )
        }

        <Stars position={[0, 0, 3]} />
        <Icosahedron castShadow position={[0, 0, -1]} />

        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} dithering />
        </EffectComposer>
      </Canvas>
    </div>
  )
}