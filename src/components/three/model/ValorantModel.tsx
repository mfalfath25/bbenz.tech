'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export const ValorantModel = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>(null!)
  const meshRef = useRef<THREE.Mesh>(null!)
  const gltf = useGLTF('/assets/valorant.glb') // Model author: Casttelan2 (https://sketchfab.com/Casttelan2)

  useFrame(() => {
    // if (group.current) {
    //   group.current.rotation.y = Math.PI / 2 // Rotate by 90 degrees (π/2 radians)
    // }
    meshRef.current.rotation.y += 0.003
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
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </>
  )
}

useGLTF.preload('/assets/valorant.glb')
