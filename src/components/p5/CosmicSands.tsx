'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import type p5Types from 'p5'
import { useTheme } from 'next-themes'

// Dynamically import Sketch with no SSR to avoid window/document issues
const Sketch = dynamic(() => import('react-p5'), {
  ssr: false,
})

const num = 2222
const noiseScale = 100
const noiseStrength = 1

class Particle {
  loc: p5Types.Vector
  dir: p5Types.Vector
  speed: number
  p: p5Types

  constructor(
    p: p5Types,
    _loc: p5Types.Vector,
    _dir: p5Types.Vector,
    _speed: number
  ) {
    this.p = p
    this.loc = _loc
    this.dir = _dir
    this.speed = _speed
  }

  run() {
    this.move()
    this.checkEdges()
  }

  move() {
    const p = this.p
    let angle =
      p.noise(
        this.loc.x / noiseScale,
        this.loc.y / noiseScale,
        p.frameCount / noiseScale
      ) *
      p.TWO_PI *
      noiseStrength
    this.dir.x = p.sin(angle)
    this.dir.y = p.tan(angle)
    const vel = this.dir.copy()
    const d = 22
    vel.mult(this.speed * d)
    this.loc.add(vel)
  }

  checkEdges() {
    const p = this.p
    if (
      this.loc.x < 0 ||
      this.loc.x > p.width ||
      this.loc.y < 0 ||
      this.loc.y > p.height
    ) {
      this.loc.x = p.random(p.width * 10)
      this.loc.y = p.random(p.height)
    }
  }

  update(isDark: boolean) {
    const p = this.p
    if (isDark) {
      // Dark mode: purple/pink particles
      p.fill(255, 200, 255)
    } else {
      // Light mode: darker particles for visibility
      p.fill(150, 100, 200)
    }
    p.ellipse(this.loc.x, this.loc.y, this.loc.z)
  }
}

export const CosmicSands: React.FC = () => {
  const { theme } = useTheme()
  const particlesRef = React.useRef<Particle[]>([])

  const setup = (p: p5Types, canvasParentRef: Element) => {
    p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
    p.noStroke()

    for (let i = 0; i < num; i++) {
      const loc = p.createVector(p.random(p.width * 1.2), p.random(p.height), 2)
      const angle = 0
      const dir = p.createVector(p.cos(angle), p.sin(angle))
      const speed = p.random(5, p.map(p.mouseX, 0, p.width, 5, 20))
      particlesRef.current[i] = new Particle(p, loc, dir, speed)
    }
  }

  const draw = (p: p5Types) => {
    const isDark = theme === 'dark'

    // Theme-aware background fade
    if (isDark) {
      p.fill(0, 10) // Dark background
    } else {
      p.fill(255, 10) // Light background
    }
    p.rect(0, 0, p.width, p.height)

    for (let i = 0; i < particlesRef.current.length; i++) {
      particlesRef.current[i].run()
      particlesRef.current[i].update(isDark)
    }
  }

  const windowResized = (p: p5Types) => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  return (
    <Sketch
      setup={setup}
      draw={draw}
      windowResized={windowResized}
    />
  )
}
