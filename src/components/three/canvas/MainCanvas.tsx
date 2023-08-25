'use client'

import { Canvas } from '@react-three/fiber'
import {
  AsciiRenderer,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from '@react-three/drei'
import { Stars } from '../mesh/Stars'
import { Icosahedron } from '../mesh/Icosahedron'
import { useTheme } from 'next-themes'
import { Graces } from '../mesh/Graces'
import { Girl } from '../mesh/Girl'

export const MainCanvas = () => {
  const { theme } = useTheme()

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      color='transparent'
    >
      {/* <OrbitControls
        enableRotate={true}
        enableZoom={false}
        enablePan={false}
        panSpeed={0.75}
        mouseButtons={{ LEFT: 0 }}
      /> */}

      <ambientLight intensity={0.1} />
      <fog
        attach='fog'
        args={['black', 0, 20]}
      />
      <pointLight
        position={[3, 0.5, 4.5]}
        intensity={10}
      />
      <pointLight
        position={[-3, 0.5, 4.5]}
        intensity={10}
      />
      {/* <pointLight
        position={[1, 1, 0]}
        intensity={10}
        color={'white'}
        castShadow
      />
      <pointLight
        position={[-1, -1, 0]}
        intensity={10}
        color={'white'}
        castShadow
      /> */}

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

      {/* models */}
      <Girl position={[0, -1.5, 3.5]} />
      {/* <Graces position={[0, 3, 0]} /> */}
      {/* <Stars position={[0, 0, 3]} /> */}
      {/* <Icosahedron
        castShadow
        position={[0, 0, -1]}
      /> */}
    </Canvas>
  )
}
