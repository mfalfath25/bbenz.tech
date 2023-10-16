'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      type='button'
      onClick={() => router.back()}
    >
      <ArrowLeft
        size={24}
        className='opacity-60 transition-opacity hover:opacity-100'
      />
      <span className='sr-only'>Back</span>
    </button>
  )
}
