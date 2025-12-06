'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import type p5Types from 'p5'
import { useTheme } from 'next-themes'

// Dynamically import Sketch with no SSR to avoid window/document issues
const Sketch = dynamic(() => import('react-p5'), {
  ssr: false,
})

// Noise tends to look smoother with coordinates that are very close together
// These values will be multiplied by the x and y coordinates to make the
// resulting values very close together
const xScale = 0.015
const yScale = 0.02

export const PerlinNoise: React.FC = () => {
  const { theme } = useTheme()

  const setup = (p: p5Types, canvasParentRef: Element) => {
    p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
    p.noStroke()
  }

  const draw = (p: p5Types) => {
    const isDark = theme === 'dark'

    // Theme-aware background (transparency 50)
    p.background(isDark ? 0 : 255)
    p.fill(isDark ? 255 : 0)

    // Fixed gap for consistent grid
    const gap = 15
    // Animate the offset using frameCount for slow, organic movement
    const offset = p.frameCount * 0.8

    // Proximity effect settings
    const minSize = 5 // Minimum dot size
    const maxSize = 15 // Maximum dot size when cursor is near
    const proximityRadius = 150 // Distance at which dots start expanding

    // Loop through x and y coordinates, at increments set by gap
    for (let x = gap / 2; x < p.width; x += gap) {
      for (let y = gap / 2; y < p.height; y += gap) {
        // Calculate noise value using scaled and offset coordinates
        const noiseValue = p.noise((x + offset) * xScale, (y + offset) * yScale)

        // Calculate distance from mouse to this dot
        const distance = p.dist(p.mouseX, p.mouseY, x, y)

        // Calculate size based on proximity to mouse
        let size = minSize
        if (distance < proximityRadius) {
          // Map distance to size (closer = bigger)
          // When distance is 0, size is maxSize
          // When distance is proximityRadius, size is minSize
          size = p.map(distance, 0, proximityRadius, maxSize, minSize)
        }

        // Apply noise value to the size for variation
        const diameter = size * noiseValue

        p.circle(x, y, diameter)
      }
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
