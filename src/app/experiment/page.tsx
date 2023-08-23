'use client'

import { MarqueeText } from '@/components/animations/MarqueeText'
import { BlurringDiv, useBlurring } from '@/components/animations/useBlurring'

export default function Page() {
  const numberOfDivs = 3 // Change this to the desired number of divs

  const divs: BlurringDiv[] = [
    { classes: 'bg-red-300 w-40' },
    { classes: 'bg-blue-300 w-60' },
    { classes: 'bg-green-300 w-80' },
  ]

  const { renderDivs } = useBlurring(numberOfDivs)

  return (
    <>
      <div className='px-2 py-4'>
        {/* <MarqueeText text='Welcome - Willkommen - 환영하다 - ようこそ - Selamat datang - 欢迎 - Bienvenidos - ' /> */}
        {/* {renderDivs(divs)} */}
        {/* <iframe
          className='scale-50 border-2 border-black'
          width='400px'
          height='600px'
          src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FW8sk5jZeS6J78p8NvezMUZ%2FSIASAT---Interaction-UI%3Ftype%3Ddesign%26node-id%3D137-2290%26t%3DH9RU1P64XA2XGc99-1%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26starting-point-node-id%3D228%253A896%26mode%3Ddesign'
        ></iframe> */}

        {/* <iframe
          className='scale-50 border-2 border-black'
          width='400px'
          height='600px'
          src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJ3FQHEmHQEH55dteDUK7z4%2FStudy.Live%3Ftype%3Ddesign%26node-id%3D1-213%26t%3Dl8lxREZZbNPwi8BZ-1%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26mode%3Ddesign'
        ></iframe> */}
      </div>
    </>
  )
}
