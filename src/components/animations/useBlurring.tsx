'use client'

import { useState } from 'react'

export interface BlurElement {
  element?: {
    classes?: string
    content?: React.ReactNode
  }
}

export const useBlurring = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleHover = (index: number | null) => {
    setHoveredIndex(index)
  }

  const renderDivs = (divs: BlurElement[]) => {
    return divs.map((div, index) => (
      <div
        key={index}
        className={`overflow-hidden border-[1px] border-gray-700/30 opacity-80 shadow-lg backdrop-blur-sm transition-all hover:border-accent-light hover:opacity-100 hover:shadow-lg dark:border-white/30 dark:shadow-slate-100/10 dark:hover:border-accent-dark
        ${
          div.element?.classes +
          (hoveredIndex !== null && hoveredIndex !== index
            ? ' opacity-80 blur-sm filter'
            : '')
        }`}
        onMouseEnter={() => handleHover(index)}
        onMouseLeave={() => handleHover(null)}
      >
        {div.element?.content}
      </div>
    ))
  }
  return { renderDivs }
}
