// 'use client'

// import { useFrame } from '@react-three/fiber'
// import { useRef } from 'react'
// import * as THREE from 'three'

// interface DiceProps {
//   position: [number, number, number]
// }

// export const Dice = ({ position }: DiceProps) => {
//   const meshRef = useRef<THREE.Mesh>(null!)

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x += 0.01
//       meshRef.current.rotation.y += 0.01
//     }
//   })

//     const diceMaterials = [
//       new THREE.MeshStandardMaterial({
//         map: new THREE.TextureLoader().load('/assets/dice/1.png'),
//      }),
//     new THREE.MeshStandardMaterial({ map: /* Image for side 2 */ }),
//     new THREE.MeshStandardMaterial({ map: /* Image for side 3 */ }),
//     new THREE.MeshStandardMaterial({ map: /* Image for side 4 */ }),
//     new THREE.MeshStandardMaterial({ map: /* Image for side 5 */ }),
//     new THREE.MeshStandardMaterial({ map: /* Image for side 6 */ }),
//   ];

//   return (
//     <mesh ref={meshRef} position={position}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshBasicMaterial map={} />
//     </mesh>
//   )
// }
