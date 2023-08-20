'use client'

import { useState } from 'react'

export interface BlurringDiv {
  classes?: string
  content?: React.ReactNode
}

interface BlurringDivsHook {
  renderDivs: (divs: BlurringDiv[]) => JSX.Element[]
}

export const useBlurring = (numberOfDivs: number): BlurringDivsHook => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleHover = (index: number | null) => {
    setHoveredIndex(index)
  }

  const renderDivs = (divs: BlurringDiv[]) => {
    return divs.map((div, index) => (
      <div
        key={index}
        className={`m-2 p-6 ${
          div.classes +
          (hoveredIndex !== null && hoveredIndex !== index
            ? ' blur-lg filter'
            : '')
        }`}
        onMouseEnter={() => handleHover(index)}
        onMouseLeave={() => handleHover(null)}
      >
        {div.content}
      </div>
    ))
  }
  return { renderDivs }
}
