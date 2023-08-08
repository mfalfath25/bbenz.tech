'use client'

import { Edges } from "@react-three/drei"
import { ThreeElements, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"

const Box = (props: ThreeElements['mesh']) => {
  const meshRef = useRef<Mesh>(null!)

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta
    meshRef.current.rotation.y += delta
  })

  return (
    <mesh
      {...props}
      castShadow
      ref={meshRef}
    >
      <boxGeometry args={[1, 1, 1]} />

      <meshStandardMaterial
        color={'#8F90A6'}
        depthWrite={true}
      />

      <Edges
        scale={1.25}
        color="#555770"
      />
    </mesh>
  )
}

export default Box