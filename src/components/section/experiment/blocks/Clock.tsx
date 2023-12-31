'use client'

import { useState, useEffect, useRef } from 'react'
import { DateTime } from 'luxon'

export const Clock = () => {
  const [currentTime, setCurrentTime] = useState<string>(
    DateTime.now().toLocaleString(DateTime.TIME_SIMPLE)
  )
  const [currentDate, setCurrentDate] = useState<string>(
    DateTime.now().toLocaleString({
      weekday: 'short',
      month: 'short',
      day: '2-digit',
    })
  )

  const intervalRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const now = DateTime.now()
      setCurrentTime(DateTime.now().toLocaleString(DateTime.TIME_SIMPLE))
      setCurrentDate(
        now.toLocaleString({ weekday: 'short', month: 'short', day: '2-digit' })
      )
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <>
      <div className='mx-auto flex h-full items-center justify-center'>
        <div className='flex h-24 w-32 flex-col items-center justify-center rounded-2xl border-4 border-double border-neutral-600 shadow-md shadow-accent-light dark:shadow-accent-dark'>
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
