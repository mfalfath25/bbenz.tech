'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { useTheme } from 'next-themes'
import { GlitchText } from '@/components/animations/GlitchText'

const phrases = ['Explorative', 'Typographic', 'Experiment']

export const Typographic = () => {
  const { theme } = useTheme()
  // const n = 10
  // const p = 3
  // const q = n * p

  return (
    // <div className='bars'>
    //   {[...Array(q)].map((_, index) => (
    //     <hr
    //       key={index}
    //       className='hr'
    //       style={{
    //         gridArea: `calc(${(index % n) + 1}) / 1`,
    //         height: '3px', // Set the desired height here
    //         // background: `hsl(${(index % n) * (360 / n)}, 100%, 50%)`,
    //         animationName: 'blur-animation',
    //         animationDuration: '0.25s',
    //         animationTimingFunction: 'ease-out',
    //         animationIterationCount: 'infinite',
    //         animationDirection: 'alternate',
    //         animationDelay: `calc(${Math.floor(index / n) / n - 1} * 4s)`,
    //       }}
    //     />
    //   ))}
    // </div>
    <>
      <div className='relative flex h-full flex-col items-center justify-center gap-2 overflow-hidden text-2xl font-extrabold md:text-3xl'>
        <div>
          <GlitchText
            phrases={phrases}
            queueInterval={1000}
            loop
            className='bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'
          />
        </div>
        <Marquee
          gradient={true}
          gradientColor={theme === 'dark' ? [27, 27, 27] : [251, 251, 251]}
          gradientWidth={100}
          speed={50}
          autoFill
          pauseOnHover
        >
          <Image
            priority
            quality={100}
            src='/assets/blocks/memoji.png'
            alt='Memoji'
            width={300}
            height={300}
            className='h-auto w-auto'
          />
        </Marquee>
      </div>
    </>
  )
}
