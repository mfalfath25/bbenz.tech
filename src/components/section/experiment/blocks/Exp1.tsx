'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const Exp1 = () => {
  const n = 10
  const p = 3
  const q = n * p

  return (
    <div className='bars'>
      {[...Array(q)].map((_, index) => (
        <hr
          key={index}
          className='hr'
          style={{
            gridArea: `calc(${(index % n) + 1}) / 1`,
            height: '3px', // Set the desired height here
            // background: `hsl(${(index % n) * (360 / n)}, 100%, 50%)`,
            animationName: 'blur-animation',
            animationDuration: '0.25s',
            animationTimingFunction: 'ease-out',
            animationIterationCount: 'infinite',
            animationDirection: 'alternate',
            animationDelay: `calc(${Math.floor(index / n) / n - 1} * 4s)`,
          }}
        />
      ))}
    </div>
  )
}
