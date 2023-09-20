'use client'

import GlitchedWriter, { presets } from 'glitched-writer'
import { useEffect } from 'react'

interface GlitchTextProps {
  phrases: string[]
  queueInterval?: number
  loop?: boolean
  className?: string
}

export const GlitchText = ({
  phrases,
  queueInterval,
  loop,
  className,
}: GlitchTextProps) => {
  // const phrases = ['Glitch', 'Words', 'Typography']

  useEffect(() => {
    // const writer = new GlitchedWriter('#phrases', {
    //   interval: [10, 100],
    //   mode: 'normal',
    //   glyphs:
    //     'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-><!@#$%^&*()_+{}[]|":;?/>.<,~`',
    //   letterize: true,
    //   steps: 5,
    // })

    const writer = new GlitchedWriter('#phrases')
    writer.queueWrite(phrases, queueInterval, loop)
  }, [phrases, queueInterval, loop])

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
