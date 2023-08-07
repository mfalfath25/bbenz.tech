'use client'

import { Canvas } from '@react-three/fiber'
import { AsciiRenderer, Html, OrbitControls, PerspectiveCamera, Text } from "@react-three/drei"
import Stars from '../mesh/Stars'
import Box from '../mesh/Box'
import { useTheme } from 'next-themes'

export const MainCanvas = () => {
  const { theme } = useTheme()

  return (
    <Canvas shadows dpr={[1, 2]} color='transparent'>
      <OrbitControls enableRotate={false} enableZoom={false} />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[2, 0, 2]} intensity={3} color={'#ffffff'} castShadow />

      <Text fontSize={0.5} position={[-0.25, 1.25, 0]} color={'#ffffff'}>
        <Html>
          <h2 id="phrases" className="dark:text-white text-slate-900">
            _benzworld
          </h2>
        </Html>
      </Text>

      {
        theme === "dark" ? (
          <>
            <AsciiRenderer fgColor="white" bgColor="transparent" characters=" .,:;+xi10$%@" />
            <color attach="background" args={["black"]} />
          </>
        ) : (
          <>
            <color attach="background" args={["white"]} />
          </>
        )
      }

      <Stars position={[0, 0, 3]} />
      <Box castShadow position={[0, 0, 0]} />
    </Canvas>
  )
}