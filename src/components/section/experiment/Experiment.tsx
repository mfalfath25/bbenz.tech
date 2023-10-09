import { MarqueeText } from '@/components/animations/MarqueeText'
import { Header } from '@/components/ui/Header'
import { Doodles } from '@/components/section/experiment/blocks/Doodles'
import { QrCode } from '@/components/section/experiment/blocks/QrCode'
import { Clock } from '@/components/section/experiment/blocks/Clock'
import { Oooscillate } from '@/components/section/experiment/blocks/Oooscillate'
import { Soundcloud } from '@/components/section/experiment/blocks/Soundcloud'
import { Typographic } from '@/components/section/experiment/blocks/Typographic'
import { Blocks, BlocksProps } from './Blocks'
import { Dots } from './blocks/Dots'
import ImageGallery from './blocks/ImageGallery'

export const Experiment = () => {
  const blocks: BlocksProps[] = [
    {
      classes:
        'md:col-span-4 rounded-xl w-full h-[200px] flex items-center justify-center',
      content: <ImageGallery />,
    },
    {
      classes:
        'md:col-span-2 rounded-xl w-full h-[200px] flex items-center justify-center',
      content: <QrCode />,
    },
    {
      classes:
        'md:col-span-2 rounded-xl w-full h-[200px] flex items-center justify-center',
      content: <Dots />,
    },
    {
      classes: 'md:col-span-3 rounded-xl w-full h-[200px]',
      content: <Typographic />,
    },
    {
      classes: 'md:col-span-2 rounded-xl w-full h-[200px]',
      content: <Clock />,
    },
    {
      classes:
        'md:col-span-3 rounded-xl w-full h-[200px] flex items-center justify-center',
      content: <Soundcloud />,
    },
  ]

  return (
    <>
      <Header title='Experiment' />
      <div className='py-3'>
        <MarqueeText text='Experiment - 실험 - Experimente - 実験 - Eksperimen - 实验 - Experimentos - Эксперимент - ' />
      </div>
      <div className='grid grid-cols-1 gap-x-0 gap-y-2 xs:grid-cols-2 xs:gap-2 sm:grid-cols-3 md:grid-cols-8 md:gap-6'>
        {blocks.map((block, index) => (
          <Blocks
            key={index}
            classes={block.classes}
            content={block.content}
          />
        ))}
      </div>
    </>
  )
}
