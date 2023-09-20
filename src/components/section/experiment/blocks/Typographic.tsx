import Marquee from 'react-fast-marquee'
import { GlitchText } from '@/components/animations/GlitchText'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export const Typographic = () => {
  const { theme } = useTheme()
  // const n = 10
  // const p = 3
  // const q = n * p

  const phrases = ['Explorative', 'Typographic', 'Experiment']

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
        <GlitchText
          phrases={phrases}
          queueInterval={500}
          loop
          className='bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'
        />
        <Marquee
          gradient={true}
          gradientColor={theme === 'dark' ? [18, 18, 18] : [255, 255, 255]}
          gradientWidth={100}
          speed={50}
          autoFill
          pauseOnHover
        >
          <Image
            priority
            quality={100}
            src='/assets/blocks/memoji.png'
            alt='QR'
            width={200}
            height={200}
          />
        </Marquee>
      </div>
    </>
  )
}
