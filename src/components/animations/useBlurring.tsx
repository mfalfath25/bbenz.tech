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
        className={`transition-all ${
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
