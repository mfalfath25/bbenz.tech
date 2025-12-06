'use client'

import { useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { Points, PointMaterial, Point } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { random, misc, buffer } from 'maath'
import { Mesh, Quaternion, Vector3, Points as Pts } from 'three'

const rotationAxis = new Vector3(0, 1, 0).normalize()
const q = new Quaternion()

export const Stars = (props: any) => {
  const { theme } = useTheme()
  const starsRef = useRef<Pts>(null!)
  const [spheres] = useState(() =>
    random.inSphere(new Float32Array(201), { radius: 2 })
  )

  // const [{ box, sphere, final }] = useState(() => {
  //   const box = random.inBox(new Float32Array(10_000), { sides: [1, 2, 1] })
  //   const sphere = random.inSphere(new Float32Array(1000), { radius: 1.5 })
  //   const final = box.slice(0) // final buffer that will be used for the points mesh

  //   return { box, sphere, final }
  // })

  // useFrame((state, delta) => {
  //   if (starsRef.current) {
  //     starsRef.current.rotation.x -= delta / 5
  //     starsRef.current.rotation.y -= delta / 10
  //   }
  // })

  // useFrame(({ clock }) => {
  //   const et = clock.getElapsedTime()
  //   const t = misc.remap(Math.sin(et), [-1, 1], [0, 1])
  //   const t2 = misc.remap(Math.cos(et * 3), [-1, 1], [0, 1])

  //   buffer.rotate(box, {
  //     q: q.setFromAxisAngle(rotationAxis, t2 * 0.1),
  //   })

  //   buffer.lerp(box, sphere, final, t)
  // })

  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x += delta / 5
      starsRef.current.rotation.y -= delta / 10
    }

    // for (let i = 0; i < spheres.length; i++) {
    //   const i3 = i * 3
    //   const moveX = (Math.random() - 0.5) * 0.05 // Random X movement
    //   const moveY = (Math.random() - 0.5) * 0.5 // Random Y movement
    //   // const moveZ = (Math.random() - 0.5) * 0.05 // Random Z movement

    //   spheres[i3] += moveX
    //   spheres[i3 + 1] += moveY
    //   // spheres[i3 + 2] += moveZ
    // }

    // // Update the buffer attribute with new positions
    // starsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        positions={spheres}
        stride={3}
        ref={starsRef}
        {...props}
      >
        <pointsMaterial
          size={0.1}
          sizeAttenuation={true}
          color={theme === 'dark' ? '#ffffff' : `#000000`}
          toneMapped={false}
        />
      </Points>
    </group>
  )
}
