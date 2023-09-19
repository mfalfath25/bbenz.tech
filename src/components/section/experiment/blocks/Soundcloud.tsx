import React, { Suspense } from 'react'
import SoundCloudPlayer from 'react-player/soundcloud'

export const Soundcloud = () => {
  const Loader = () => {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <div className='h-10 w-10 animate-spin rounded-full border-2 border-gray-500'></div>
      </div>
    )
  }

  return (
    <Suspense fallback={<Loader />}>
      <SoundCloudPlayer
        url={'https://soundcloud.com/84b0a129d737/ty2fly-2am-spedup'}
        width='100%'
        height='200px'
      />
    </Suspense>
  )
}
