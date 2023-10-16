'use client'

import { useState, useEffect } from 'react'
import { Clock, Hourglass, Pause, Play, RotateCcw, Timer } from 'lucide-react'
import { motion } from 'framer-motion'

type Mode = 'clock' | 'stopwatch' | 'timer'

const formatDate = (date: Date) => {
  const day = date.toLocaleString('en', { weekday: 'short' }) // Get the first 3 letters of the day
  const month = date.toLocaleString('en', { month: 'short' }) // Get the first 3 letters of the month
  const dateNumber = date.getDate() // Get the date as a number

  return {
    day,
    month,
    dateNumber,
  }
}

export const Watch = () => {
  // Date specific states
  const currentDate = new Date()
  const formattedDate = formatDate(currentDate)

  // Time specific states
  const [mode, setMode] = useState<Mode>('clock')
  const [clock, setClock] = useState<string>('00:00:00')
  const [timerRunning, setTimerRunning] = useState<boolean>(false)

  // Stopwatch specific states
  const [stopwatchTime, setStopwatchTime] = useState<number>(0)
  const [stopwatchRunning, setStopwatchRunning] = useState<boolean>(false)

  // Timer specific states
  const [timerDuration, setTimerDuration] = useState<number>(600) // 10 minutes in seconds
  const [timerRemaining, setTimerRemaining] = useState<number>(600)
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null)

  useEffect(() => {
    let interval: NodeJS.Timer

    if (mode === 'clock') {
      interval = setInterval(() => {
        const now = new Date()
        setClock(now.toLocaleTimeString())
      }, 1000)
    } else if (mode === 'stopwatch') {
      if (stopwatchRunning) {
        interval = setInterval(() => {
          setStopwatchTime((prevTime) => prevTime + 1)
        }, 1000)
      }
    } else if (mode === 'timer') {
      if (timerRunning && timerRemaining > 0) {
        interval = setInterval(() => {
          setTimerRemaining((prevRemaining) => prevRemaining - 1)
        }, 1000)
      } else if (timerRemaining === 0) {
        setTimerRunning(false)
        clearInterval(timerInterval!)
      }
    }

    return () => clearInterval(interval)
  }, [mode, stopwatchRunning, timerRunning, timerRemaining, timerInterval])

  const startStopTimer = () => {
    if (mode === 'stopwatch' || mode === 'timer') {
      if (mode === 'stopwatch') {
        setStopwatchRunning(!stopwatchRunning)
      }
      setTimerRunning(!timerRunning)
    }
  }

  const resetTimer = () => {
    if (mode === 'stopwatch') {
      setStopwatchRunning(false)
      setStopwatchTime(0)
    } else if (mode === 'timer') {
      // Implement timer reset logic here
      setTimerRunning(false)
      setTimerRemaining(timerDuration)
      clearInterval(timerInterval!)
    }
  }

  const changeMode = (mode: Mode) => {
    switch (mode) {
      case 'clock':
        setMode('clock')
        break
      case 'stopwatch':
        setMode('stopwatch')
        break
      case 'timer':
        setMode('timer')
        break
      default:
        break
    }

    // setMode((prevMode) =>
    //   prevMode === 'clock'
    //     ? 'stopwatch'
    //     : prevMode === 'stopwatch'
    //     ? 'timer'
    //     : 'clock'
    // )
  }

  // Format stopwatch clock in HH:MM:SS
  const formatStopwatchTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600)
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
    const seconds = timeInSeconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  // Format timer remaining clock in MM:SS
  const formatTimerRemaining = (remainingTime: number) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  }

  return (
    <>
      <section className='flex w-40 flex-col items-center justify-center'>
        <div className='grid max-w-max gap-2 p-2'>
          <div className='row-span-2 mx-auto text-xl font-semibold'>
            <h1 className='text-center text-lg'>Watch</h1>
            {mode === 'stopwatch'
              ? formatStopwatchTime(stopwatchTime)
              : mode === 'timer'
              ? formatTimerRemaining(timerRemaining)
              : clock}

            {mode === 'clock' && (
              <p className='text-center text-sm font-light'>
                {formattedDate.day}, {formattedDate.month}{' '}
                {formattedDate.dateNumber}
              </p>
            )}
          </div>

          {/* {mode !== 'clock' && (
            <div className='mx-auto grid grid-cols-2 items-center justify-center gap-6'>
              <button
                // className='mx-2 rounded-md bg-blue-500 px-4 py-2 text-white'
                onClick={startStopTimer}
              >
                {stopwatchRunning || timerRunning ? (
                  <Pause size={20} />
                ) : (
                  <Play size={20} />
                )}
              </button>
              <button
                // className='mx-2 rounded-md bg-red-500 px-4 py-2 text-white'
                onClick={resetTimer}
              >
                <RotateCcw size={20} />
              </button>
            </div>
          )} */}

          {/* <div className='mx-auto grid grid-cols-3 items-center justify-center gap-4'>
            <button
              className='aa'
              onClick={() => changeMode('clock')}
            >
              <Clock
                size={20}
                className='opacity-50 transition-all hover:text-accent-light hover:opacity-100 hover:dark:text-accent-dark'
              />
            </button>

            <button
              className='aa'
              onClick={() => changeMode('stopwatch')}
            >
              <Timer
                size={20}
                className='opacity-50 transition-all hover:text-accent-light hover:opacity-100 hover:dark:text-accent-dark'
              />
            </button>

            <button
              className='aa'
              onClick={() => changeMode('timer')}
            >
              <Hourglass
                size={20}
                className='opacity-50 transition-all hover:text-accent-light hover:opacity-100 hover:dark:text-accent-dark'
              />
            </button>
          </div> */}
        </div>
      </section>
    </>
  )
}
