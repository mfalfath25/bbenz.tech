'use client'

import GlitchedWriter from 'glitched-writer'
import { useEffect } from 'react'

interface GlitchTextProps {
  phrases: string[]
  className?: string
}

export const GlitchText = ({ phrases, className }: GlitchTextProps) => {
  // const phrases = ['Glitch', 'Words', 'Typography']

  useEffect(() => {
    const writer = new GlitchedWriter('#phrases', {
      interval: [10, 10],
      glyphs:
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-><!@#$%^&*()_+{}[]|":;?/>.<,~`',
      letterize: true,
      steps: 5,
    })
    writer.queueWrite(phrases, 2000, true)
  }, [phrases])

  return (
    <span
      id='phrases'
      className={
        className
          ? className
          : 'text-4xl font-bold text-neutral-500 dark:text-neutral-400'
      }
    ></span>
  )
}
