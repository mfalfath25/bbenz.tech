'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex min-h-[calc(100vh-134px)] items-center justify-center px-2 py-4'>
      <p>Something went wrong 😔</p>
    </div>
  )
}
