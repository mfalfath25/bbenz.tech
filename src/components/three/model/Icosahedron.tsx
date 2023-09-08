'use client'

import { Edges, Wireframe } from '@react-three/drei'
import { ThreeElements, useFrame } from '@react-three/fiber'
import { useTheme } from 'next-themes'
import { useRef } from 'react'
import { Mesh } from 'three'

export const Icosahedron = (props: ThreeElements['mesh']) => {
  const { theme } = useTheme()
  const meshRef = useRef<Mesh>(null!)

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta
    // meshRef.current.rotation.y += delta
    meshRef.current.rotation.z += delta
  })

  return (
    <mesh
      {...props}
      castShadow
      receiveShadow
      ref={meshRef}
    >
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        roughness={10}
        // emissive='black'
        // emissiveIntensity={2}
        // toneMapped={false}
        color={theme === 'dark' ? '#ffffff' : `#000000`}
      />

      {/* <meshStandardMaterial emissive="black" emissiveIntensity={1} toneMapped={false} /> */}
      <Edges
        // scale={1.5}
        color={theme === 'dark' ? '#000000' : `#ffffff`}
      />
    </mesh>
  )
}
