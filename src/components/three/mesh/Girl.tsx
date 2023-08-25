'use client'

import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export const Girl = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>(null!)
  const meshRef = useRef<any>(null!)

  // const model = useGLTF('/assets/edecan.glb')
  const { scene } = useGLTF('/assets/edecan.glb')

  // const [metalnessMap, map, displacementMap, normalMap, roughnessMap] =
  //   useTexture([
  //     '/assets/texture/gold/Metal007_1K_Metalness.jpg',
  //     '/assets/texture/gold/Metal007_1K_Color.jpg',
  //     '/assets/texture/gold/Metal007_1K_Displacement.jpg',
  //     '/assets/texture/gold/Metal007_1K_Normal.jpg',
  //     '/assets/texture/gold/Metal007_1K_Roughness.jpg',
  //   ])

  useFrame(() => {
    meshRef.current.rotation.y += 0.005
  })

  return (
    <>
      <group
        ref={group}
        {...props}
      >
        <mesh
          ref={meshRef}
          castShadow
          receiveShadow
        >
          <primitive object={scene} />
        </mesh>
        {/* <meshPhysicalMaterial
            map={map}
            metalnessMap={metalnessMap}
            displacementMap={displacementMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            displacementScale={0.1}
          /> */}
        {/* <directionalLight
          intensity={1}
          position={[0, 1, -1]}
        /> */}
      </group>
    </>
  )
}
