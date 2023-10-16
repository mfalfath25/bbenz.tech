'use client'

import { useEffect, useMemo, useRef } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'
import { motion, useSpring } from 'framer-motion'

const BIG_SIZE = 20
const SMALL_SIZE = 1
const PER_PX = 0.3

type DotProps = { mousePos: { x: number; y: number } }

const Dot = ({ mousePos }: DotProps) => {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const size = useSpring(SMALL_SIZE, {
    stiffness: 500,
    damping: 50,
  })

  const distance = useMemo(() => {
    if (!dotRef.current) return 0
    const { x, y } = dotRef.current.getBoundingClientRect()
    return Math.hypot(x - mousePos.x, y - mousePos.y)
  }, [mousePos, dotRef])

  useEffect(() => {
    if (mousePos) {
      distance
      size.set(Math.max(BIG_SIZE - PER_PX * distance, SMALL_SIZE))
    }

    return () => {
      size.set(SMALL_SIZE)
    }
  }, [mousePos, distance, size])

  return (
    <div
      ref={dotRef}
      className='relative bg-red-500'
    >
      <motion.div
        className='absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-light dark:bg-accent-dark'
        style={{ width: size, height: size }}
      />
    </div>
  )
}

export const Dots = () => {
  const mousePos = useMousePosition()

  return (
    <div className='grid grid-cols-7 items-center justify-center gap-6'>
      {Array.from({ length: 49 }, (_, i) => (
        <Dot
          key={i}
          mousePos={mousePos}
        />
      ))}
    </div>
  )
}
