'use client'

import { Edges } from "@react-three/drei"
import { ThreeElements, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"

export const Icosahedron = (props: ThreeElements['mesh']) => {
  const meshRef = useRef<Mesh>(null!)

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta
    meshRef.current.rotation.y += delta
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
        emissive="black" emissiveIntensity={2} toneMapped={false}
        color={'#262626'}
      />

      {/* <meshStandardMaterial emissive="black" emissiveIntensity={1} toneMapped={false} /> */}
      <Edges
        scale={1.3}
        color="#555770"
      />
    </mesh>
  )
}