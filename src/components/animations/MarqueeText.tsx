'use client'

import Marquee from 'react-fast-marquee'
type MarqueeProps = {
  text: string
}

export const MarqueeText = ({ text }: MarqueeProps) => {
  return (
    <Marquee
      speed={100}
      autoFill
      className='whitespace-pre'
    >
      {text}
    </Marquee>
  )
}
