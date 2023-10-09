import Image from 'next/image'
import React from 'react'

export const QrCode = () => {
  return (
    <>
      <div className='flex h-full items-center justify-center transition-all dark:invert'>
        <Image
          priority
          quality={100}
          src='/assets/blocks/qrcode.png'
          alt='QR'
          width={180}
          height={180}
        />
      </div>
    </>
  )
}
