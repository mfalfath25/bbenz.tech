'use client'

import { useState, useEffect } from 'react'

interface ShuffleTextProps {
  text: string
  shuffleIterations: number
}

const ShuffleTextAnimation: React.FC<ShuffleTextProps> = ({
  text,
  shuffleIterations,
}) => {
  const [shuffledText, setShuffledText] = useState(text)
  const [isHovered, setIsHovered] = useState(false)
  const [shuffleCount, setShuffleCount] = useState(0)

  const shuffleText = (text: string) => {
    let shuffledText = text

    const textArray = shuffledText.split('')

    for (let i = textArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[textArray[i], textArray[j]] = [textArray[j], textArray[i]]
    }

    shuffledText = textArray.join('')

    return shuffledText
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isHovered && shuffleCount < shuffleIterations) {
      interval = setInterval(() => {
        const shuffled = shuffleText(text)
        setShuffledText(shuffled)
        setShuffleCount((count) => count + 1)
      }, 50) // 10ms delay for each shuffle
    } else if (shuffleCount >= shuffleIterations) {
      // Revert back to the original text after completing shuffling iterations
      setShuffledText(text)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isHovered, shuffleCount, shuffleIterations, text])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTimeout(() => {
      setShuffledText(text) // Reset to original text after a brief delay
      setShuffleCount(0) // Reset shuffleCount
    }, 10) // Adjust the delay time as needed
  }

  return (
    <span
      className='shuffle-text'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {shuffledText}
    </span>
  )
}

export default ShuffleTextAnimation
