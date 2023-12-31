'use client'

import { ReactNode, useState } from 'react'

type TooltipProps = {
  text: string
  children: ReactNode
}

export const Tooltip = ({ text, children }: TooltipProps) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false)

  const handleMouseEnter = () => {
    setTooltipVisible(true)
  }

  const handleMouseLeave = () => {
    setTooltipVisible(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {
        <div
          className={`absolute -top-1/4 z-50 hidden -translate-x-1/3 transform rounded border-[1px] border-gray-700/30 bg-neutral-100/80 px-2 py-1 text-xs text-accent-light backdrop-blur-lg transition-opacity duration-300 dark:border-white/30 dark:bg-neutral-700/80 dark:text-accent-dark sm:block ${
            isTooltipVisible ? 'group-hover:opacity-100' : 'opacity-0'
          } `}
        >
          {text}
        </div>
      }
    </div>
  )
}
