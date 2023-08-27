'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

// Model author: Casttelan2 (https://sketchfab.com/Casttelan2)

export const ValorantModel = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>(null!)
  const meshRef = useRef<THREE.Mesh>(null!)
  const { scene } = useGLTF('/assets/valorant.glb')

  useFrame(() => {
    // if (group.current) {
    //   group.current.rotation.y = Math.PI / 2 // Rotate by 90 degrees (π/2 radians)
    // }
    meshRef.current.rotation.y += 0.005
  })

  return (
    <>
      <group
        ref={group}
        {...props}
        receiveShadow
        castShadow
      >
        <mesh ref={meshRef}>
          <primitive object={scene} />
        </mesh>
      </group>
    </>
  )
}
