'use client'

import { MarqueeText } from '@/components/animations/MarqueeText'
import { Header } from '@/components/ui/Header'
import {
  Clock,
  Doodles,
  Oooscillate,
  QrCode,
  Soundcloud,
  Typographic,
} from './blocks'

type BlocksProps = {
  classes?: string
  content?: React.ReactNode
}

const Blocks = ({ classes, content }: BlocksProps) => {
  return (
    <div
      className={`overflow-clip border-[1px] border-gray-700/30 opacity-80 shadow-lg backdrop-blur-sm transition-all hover:border-accent-light hover:opacity-100 hover:shadow-lg dark:border-white/30 dark:shadow-slate-100/10 dark:hover:border-accent-dark
        ${classes}`}
    >
      {content}
    </div>
  )
}

export const Experiment = () => {
  const blocks: BlocksProps[] = [
    {
      classes:
        'md:col-span-4 rounded-2xl w-full h-[200px] flex items-center justify-center',
      content: <Doodles />,
    },
    {
      classes: 'md:col-span-2 rounded-2xl w-full h-[200px]',
      content: <Oooscillate />,
    },
    {
      classes:
        'md:col-span-2 rounded-2xl border-[1px] h-[200px] border-gray-700/30 backdrop-blur-sm dark:border-white/30',
      content: <QrCode />,
    },
    {
      classes: 'md:col-span-3 rounded-2xl w-full h-[200px]',
      content: <Typographic />,
    },
    {
      classes: 'md:col-span-2 rounded-2xl w-full h-[200px]',
      content: <Clock />,
    },
    {
      classes: 'md:col-span-3 rounded-2xl bg-slate-500 w-full h-[200px]',
      content: <Soundcloud />,
    },
  ]

  // const { renderDivs } = useBlurring()
  // const divs: BlurElement[] = [
  //   {
  //     element: {
  //       classes:
  //         'md:col-span-4 rounded-2xl w-full h-[200px] flex items-center justify-center',
  //       content: <Doodles />,
  //     },
  //   },
  //   {
  //     element: {
  //       classes: 'md:col-span-2 rounded-2xl w-full h-[200px]',
  //       content: <Oooscillate />,
  //     },
  //   },
  //   {
  //     element: {
  //       classes:
  //         'md:col-span-2 rounded-2xl border-[1px] h-[200px] border-gray-700/30 backdrop-blur-sm dark:border-white/30',
  //       content: <QrCode />,
  //     },
  //   },
  //   {
  //     element: {
  //       classes: 'md:col-span-3 rounded-2xl w-full h-[200px]',
  //       content: <Exp1 />,
  //     },
  //   },
  //   {
  //     element: {
  //       classes: 'md:col-span-2 rounded-2xl w-full h-[200px]',
  //       content: <Clock />,
  //     },
  //   },
  //   {
  //     element: {
  //       classes: 'md:col-span-3 rounded-2xl bg-slate-500 w-full h-[200px]',
  //       content: <Soundcloud />,
  //     },
  //   },
  // ]

  return (
    <>
      <Header title='Experiment' />
      <div className='py-3'>
        <MarqueeText text='Experiment - 실험 - Experimente - 実験 - Eksperimen - 实验 - Experimentos - Эксперимент - ' />
      </div>

      <div className='grid grid-cols-1 gap-x-0 gap-y-4 xs:grid-cols-2 xs:gap-6 sm:grid-cols-3 md:grid-cols-8'>
        {blocks.map((block, index) => (
          <Blocks
            key={index}
            classes={block.classes}
            content={block.content}
          />
        ))}
      </div>

      {/* <Soundcloud /> */}
    </>
  )
}
