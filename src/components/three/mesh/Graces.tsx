'use client'

import { Clone, Edges, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useRef } from 'react'
import { Mesh } from 'three'

export const Graces = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>(null!)
  const light = useRef<THREE.SpotLight>(null!)
  // const gltf = useGLTF('/assets/graces-draco.glb')
  const { scene } = useGLTF('/assets/graces-draco.glb')

  useFrame((state, delta) => {
    // easing.dampE(
    //   group.current!.rotation,
    //   [0, -state.pointer.x * (Math.PI / 10), 0],
    //   1.5,
    //   delta
    // )
    easing.damp3(
      group.current!.position,
      [0, -5.5, 1 - Math.abs(state.pointer.x)],
      1,
      delta
    )
    // easing.damp3(
    //   light.current!.position,
    //   [state.pointer.x * 12, 0, 8 + state.pointer.y * 4],
    //   0.2,
    //   delta
    // )
  })

  return (
    <group
      ref={group}
      {...props}
    >
      <mesh
        castShadow
        receiveShadow
        // geometry={nodes.Node_3.geometry}
        // rotation={[-Math.PI / 2, 0, 0]}
        // scale={0.2}
        // dispose={null}
      >
        <Clone
          object={scene}
          {...props}
        />
        {/* <primitive object={gltf.scene} /> */}
        <meshLambertMaterial color='#404044' />
      </mesh>
      <spotLight
        angle={0.5}
        penumbra={0.5}
        ref={light}
        castShadow
        intensity={10}
        shadow-mapSize={1024}
        shadow-bias={-0.001}
      >
        <orthographicCamera
          attach='shadow-camera'
          args={[0, 0, 0, 0, 0.1, 50]}
        />
      </spotLight>
    </group>
  )
}
