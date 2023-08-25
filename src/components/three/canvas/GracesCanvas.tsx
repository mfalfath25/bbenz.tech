import React, { useRef } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import {
  useGLTF,
  SoftShadows,
  Html,
  CameraControls,
  Clone,
} from '@react-three/drei'
import { easing, geometry } from 'maath'

extend(geometry)

export const GracesCanvas = () => {
  return (
    <Canvas
      shadows='basic'
      // eventSource={document.getElementById('root') as HTMLElement}
      // eventPrefix='client'
      camera={{ position: [0, 1.5, 10] }}
    >
      <fog
        attach='fog'
        args={['black', 0, 20]}
      />
      <pointLight
        position={[0, 5, 5]}
        intensity={10}
      />
      <pointLight
        position={[-10, -10, -20]}
        intensity={10}
      />
      <Model
        position={[0, 3, 5]}
        rotation={[0, 0, 0]}
      />
      <SoftShadows samples={3} />
      {/* <CameraControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
      /> */}
    </Canvas>
  )
}

function Model(props: JSX.IntrinsicElements['group']) {
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
    easing.damp3(
      light.current!.position,
      [state.pointer.x * 12, 0, 8 + state.pointer.y * 4],
      0.2,
      delta
    )
  })

  return (
    <group
      ref={group}
      {...props}
    >
      <mesh
      // castShadow
      // receiveShadow
      // geometry={nodes.Node_3.geometry}
      // rotation={[-Math.PI / 2, 0, 0]}
      // scale={0.2}
      // dispose={null}
      >
        <Clone
          object={scene}
          {...props}
        />
        {/* <primitive object={gltf.scene} /> */}z
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
          args={[-10, 10, -10, 10, 0.1, 50]}
        />
      </spotLight>
    </group>
  )
}

// function Annotation({ children, ...props }: { children: React.ReactNode }) {
//   return (
//     <Html
//       {...props}
//       transform
//       occlude='blending'
//       geometry={
//         /** The geometry is optional, it allows you to use any shape.
//          *  By default, it would be a plane. We need round edges here ...
//          */
//         <roundedPlaneGeometry args={[1.66, 0.47, 0.24]} />
//       }
//     >
//       <div className='annotation'>{children}</div>
//     </Html>
//   )
// }

// export default function App() {
//   return <ThreeGracesScene />
// }
