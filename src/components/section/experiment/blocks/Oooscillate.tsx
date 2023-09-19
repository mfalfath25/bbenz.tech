'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Oooscillate = () => {
  // create a function to generate a random number between 0 and 1
  const random = () => Math.random()
  const initial = { pathLength: 0, pathSpacing: 0.1 }
  const animate = { pathLength: 0.5, pathSpacing: 0.5 }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 800 800'
    >
      <defs>
        <linearGradient
          id='oooscillate-grad'
          x1='50%'
          x2='50%'
          y1='0%'
          y2='100%'
        >
          <stop
            offset='0%'
            stopColor='hsl(206, 75%, 49%)'
          ></stop>
          <stop
            offset='100%'
            stopColor='hsl(331, 90%, 56%)'
          ></stop>
        </linearGradient>
      </defs>
      <g
        fill='none'
        stroke='url(#oooscillate-grad)'
        strokeLinecap='round'
        strokeWidth='3'
      >
        <motion.path
          strokeDasharray='26 35'
          d='M0 638Q200 95 400 400t400 238'
          opacity='1'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='73 80'
          d='M0 616Q200 95 400 400t400 216'
          opacity='0.97'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='55 31'
          d='M0 594Q200 95 400 400t400 194'
          opacity='0.93'
          initial={{ pathLength: 1, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='44 35'
          d='M0 572Q200 95 400 400t400 172'
          opacity='0.9'
          initial={{ pathLength: 1, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='56 77'
          d='M0 550Q200 95 400 400t400 150'
          opacity='0.86'
          initial={{ pathLength: 1, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='100 26'
          d='M0 528Q200 95 400 400t400 128'
          opacity='0.83'
          initial={{ pathLength: 1, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='51 77'
          d='M0 506Q200 95 400 400t400 106'
          opacity='0.8'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='35 82'
          d='M0 484q200-389 400-84t400 84'
          opacity='0.76'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='71 72'
          d='M0 462q200-367 400-62t400 62'
          opacity='0.73'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='84 75'
          d='M0 440q200-345 400-40t400 40'
          opacity='0.69'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='55 36'
          d='M0 418q200-323 400-18t400 18'
          opacity='0.66'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='32 50'
          d='M0 396q200-301 400 4t400-4'
          opacity='0.63'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='21 48'
          d='M0 374q200-279 400 26t400-26'
          opacity='0.59'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='2 98'
          d='M0 352q200-257 400 48t400-48'
          opacity='0.56'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='6 95'
          d='M0 330q200-235 400 70t400-70'
          opacity='0.53'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='79 82'
          d='M0 308q200-213 400 92t400-92'
          opacity='0.49'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='60 50'
          d='M0 286Q200 95 400 400t400-114'
          opacity='0.46'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='76 76'
          d='M0 264Q200 95 400 400t400-136'
          opacity='0.42'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='27 32'
          d='M0 242Q200 95 400 400t400-158'
          opacity='0.39'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='82 97'
          d='M0 220Q200 95 400 400t400-180'
          opacity='0.36'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='55 11'
          d='M0 198Q200 95 400 400t400-202'
          opacity='0.32'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='38 23'
          d='M0 176q200-81 400 224t400-224'
          opacity='0.29'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='6 43'
          d='M0 154q200-59 400 246t400-246'
          opacity='0.25'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='89 58'
          d='M0 132q200-37 400 268t400-268'
          opacity='0.22'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='60 39'
          d='M0 110q200-15 400 290t400-290'
          opacity='0.19'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='96 63'
          d='M0 88q200 7 400 312T800 88'
          opacity='0.15'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='37 84'
          d='M0 66q200 29 400 334T800 66'
          opacity='0.12'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
        <motion.path
          strokeDasharray='89 21'
          d='M0 44q200 51 400 356T800 44'
          opacity='0.08'
          initial={{ pathLength: 0, pathSpacing: 0.2 }}
          animate={{ pathLength: random() }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: 'mirror',
          }}
        ></motion.path>
      </g>
    </svg>
  )
}
