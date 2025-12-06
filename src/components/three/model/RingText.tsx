'use client'

import React, { useRef } from 'react'
import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import { useTheme } from 'next-themes'
import { Romanize } from '@/utils'

interface RingProps {
  radius: number
  count: number
  fontSize: number
  opacity: number
  speed: number
  text: string
  color: string
  direction: number
}

const Ring = ({
  radius,
  count,
  fontSize,
  opacity,
  speed,
  text,
  color,
  direction,
}: RingProps) => {
  const groupRef = useRef<Group>(null!)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * speed * direction
    }
  })

  return (
    <group ref={groupRef}>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <Text
            key={i}
            position={[x, y, 0]}
            rotation={[0, 0, angle + Math.PI / 2]} // Align text tangent to the circle
            fontSize={fontSize}
            font='/assets/fonts/Respira.ttf'
            color={color}
            fillOpacity={opacity}
            anchorX='center'
            anchorY='middle'
          >
            {text}
          </Text>
        )
      })}
    </group>
  )
}

export const RingText = () => {
  const { theme } = useTheme()
  const color = theme === 'dark' ? 'white' : 'black'
  const currentYear = Romanize(new Date().getFullYear())
  const text = `-xxx-`

  // Configuration for the 5 layers: 2 small, 2 medium, 1 very big
  // Adjusted for camera zoom=400 (visible Y range approx +/- 1.0)
  const layers = [
    // Small
    { radius: 0.25, count: 8, fontSize: 0.04, opacity: 0.8, speed: 0.2 },
    { radius: 0.4, count: 12, fontSize: 0.05, opacity: 0.7, speed: 0.5 },
    // Medium
    // { radius: 0.55, count: 18, fontSize: 0.08, opacity: 0.5, speed: 0.1 },
    { radius: 0.75, count: 16, fontSize: 0.1, opacity: 0.4, speed: 0.08 },
    // Big
    // { radius: 1.2, count: 30, fontSize: 0.2, opacity: 0.2, speed: 0.05 },
  ]

  return (
    <group rotation={[0, 0, 0]}>
      {/* Center Heart */}
      <Text
        position={[0, 0, 0]}
        fontSize={0.15}
        font='/assets/fonts/Respira.ttf'
        color={color}
        fillOpacity={0.9}
        anchorX='center'
        anchorY='middle'
      >
        {currentYear}
      </Text>

      {/* Rings */}
      {layers.map((layer, index) => (
        <Ring
          key={index}
          {...layer}
          text={text}
          color={color}
          direction={index % 2 === 0 ? 1 : -1}
        />
      ))}
    </group>
  )
}
