'use client'

import { useState, useEffect, useRef } from 'react'
import { DateTime } from 'luxon'

export const Clock = () => {
  const [currentTime, setCurrentTime] = useState<string | null>(null)
  const [currentDate, setCurrentDate] = useState<string | null>(null)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const updateTime = () => {
      const now = DateTime.now()
      setCurrentTime(now.toLocaleString(DateTime.TIME_SIMPLE))
      setCurrentDate(
        now.toLocaleString({
          weekday: 'short',
          month: 'short',
          day: '2-digit',
        })
      )
    }

    updateTime() // Initial call

    intervalRef.current = setInterval(updateTime, 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  if (!currentTime || !currentDate) {
    return (
      <div className='mx-auto flex h-full items-center justify-center'>
        <div className='shadow-accent-light dark:shadow-accent-dark flex h-24 w-32 animate-pulse flex-col items-center justify-center rounded-2xl border-4 border-double border-neutral-600 shadow-md' />
      </div>
    )
  }

  return (
    <>
      <div className='mx-auto flex h-full items-center justify-center'>
        <div className='shadow-accent-light dark:shadow-accent-dark flex h-24 w-32 flex-col items-center justify-center rounded-2xl border-4 border-double border-neutral-600 shadow-md'>
          <p className='animate-pulse-fast text-lg font-semibold'>
            {currentTime}
          </p>
          <p className='text-accent-light dark:text-accent-dark'>
            {currentDate}
          </p>
        </div>
      </div>
    </>
  )
}
