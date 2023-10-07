'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { useTheme } from 'next-themes'
import { GlitchText } from '@/components/animations/GlitchText'

const phrases = ['Explorative', 'Typographic', 'Experiment']

export const Typographic = () => {
  const { theme } = useTheme()

  return (
    <>
      <div className='relative flex h-full flex-col items-center justify-center gap-2 overflow-hidden text-3xl font-extrabold sm:text-2xl md:text-4xl'>
        <GlitchText
          phrases={phrases}
          queueInterval={2000}
          loop
          className='bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-light text-transparent'
        />
        {/* <Marquee
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
        </Marquee> */}
      </div>
    </>
  )
}
