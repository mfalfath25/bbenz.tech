import Image from 'next/image'
import React from 'react'
import { useTheme } from 'next-themes'

type Props = {}

export const QrCode = (props: Props) => {
  const { theme } = useTheme()

  return (
    <>
      <div className='flex h-full items-center justify-center'>
        <Image
          priority
          quality={100}
          placeholder='blur'
          blurDataURL='/assets/graphy.png'
          src='/assets/blocks/qrcode.png'
          alt='QR'
          width={180}
          height={180}
          className={`${theme === 'dark' ? 'invert' : ''} rounded-xl`}
        />
      </div>
    </>
  )
}
