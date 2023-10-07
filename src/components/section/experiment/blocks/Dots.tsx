'use client'
import { motion, useSpring } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

const BIG_SIZE = 20
const SMALL_SIZE = 1
const PER_PX = 0.4

// Get mouse position hook
function useMousePosition() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePos({ x: clientX, y: clientY })
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return mousePos
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

type DotProps = { mousePos: { x: number; y: number } }

const Dot = ({ mousePos }: DotProps) => {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const size = useSpring(SMALL_SIZE, {
    stiffness: 400,
    damping: 40,
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
  }, [mousePos, distance, size])

  // useEffect(() => {
  //   if (!dotRef.current) return
  //   const { x, y } = dotRef.current.getBoundingClientRect()
  //   const distance = Math.hypot(x - mousePos.x, y - mousePos.y)
  //   size.set(Math.max(BIG_SIZE - PER_PX * distance, SMALL_SIZE))
  // }, [mousePos, size])

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
