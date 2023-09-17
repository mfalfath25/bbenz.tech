'use client'

import { MarqueeText } from '@/components/animations/MarqueeText'
import { BlurElement, useBlurring } from '@/components/animations/useBlurring'
import { Header } from '@/components/ui/Header'
import { Clock } from './blocks/Clock'
import { Oooscillate } from './blocks/Oooscillate'

export const Experiment = () => {
  // Interactive blur
  const { renderDivs } = useBlurring()
  const divs: BlurElement[] = [
    {
      element: {
        classes: 'md:col-span-4 rounded-2xl bg-neutral-500 w-full h-[200px]',
      },
    },
    {
      element: {
        classes:
          'md:col-span-2 rounded-2xl border-[1px] border-gray-700/30 backdrop-blur-sm dark:border-white/30 w-full h-[200px] overflow-clip',
        content: <Oooscillate />,
      },
    },
    {
      element: {
        classes:
          'md:col-span-2 rounded-2xl flex h-full items-center justify-center bg-transparent border-[1px] h-[200px] border-gray-700/30 backdrop-blur-sm dark:border-white/30',
        content: <Clock />,
      },
    },
    {
      element: {
        classes: 'md:col-span-3 rounded-2xl bg-slate-500 w-full h-[200px]',
      },
    },
    {
      element: {
        classes: 'md:col-span-2 rounded-2xl bg-neutral-500 w-full h-[200px]',
      },
    },
    {
      element: {
        classes: 'md:col-span-3 rounded-2xl bg-slate-500 w-full h-[200px]',
      },
    },
  ]

  return (
    <>
      <Header title='Experiment' />
      <div className='py-3'>
        <MarqueeText text='Experiment - 실험 - Experimente - 実験 - Eksperimen - 实验 - Experimentos - Эксперимент - ' />
      </div>

      <div className='grid grid-cols-1 gap-x-0 gap-y-4 xs:grid-cols-2 xs:gap-4 sm:grid-cols-3 md:grid-cols-8'>
        {renderDivs(divs)}
      </div>
    </>
  )
}
