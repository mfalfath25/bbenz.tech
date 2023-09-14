'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import {
  Instagram,
  LucideGithub,
  LucideLinkedin,
  LucideMail,
  Twitter,
} from 'lucide-react'
import { Signature } from '../animations/Signature'
import { Tooltip } from './Tooltip'
import { FaLinkedinIn } from 'react-icons/fa'

export const Footer = () => {
  const { theme } = useTheme()

  const icons = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/mfajaralfath/',
      icon: (
        <Instagram
          strokeWidth={2}
          size={24}
        />
      ),
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/_benzwrld',
      icon: (
        <Twitter
          strokeWidth={2}
          size={24}
        />
        // <Image
        //   src='/assets/x.svg'
        //   alt='X'
        //   width={24}
        //   height={24}
        //   className={`p-[2px] ${theme === 'dark' ? 'invert filter' : ''}`}
        // />
      ),
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/mfalfath25/',
      icon: (
        <LucideLinkedin
          strokeWidth={2}
          size={24}
        />
      ),
    },
    {
      name: 'Github',
      link: 'https://github.com/mfalfath25',
      icon: (
        <LucideGithub
          strokeWidth={2}
          size={24}
        />
      ),
    },
    {
      name: 'Email',
      link: 'mailto: mfalfath25@gmail.com',
      icon: (
        <LucideMail
          strokeWidth={2}
          size={24}
        />
      ),
    },
  ]

  return (
    <footer
      className={`${
        theme === 'dark' ? 'effect-dotted-dark' : 'effect-dotted'
      } sticky bottom-0 z-20 border-t border-gray-700/30 dark:border-white/30`}
    >
      <div className='mx-auto grid h-[66px] min-h-max max-w-4xl grid-cols-2 items-center px-2 sm:grid-cols-3'>
        <div className='hidden flex-col sm:flex'>
          <span>
            <Link
              href='https://creativecommons.org/licenses/by-nc-sa/4.0/'
              className='text-sm underline opacity-60 transition-opacity hover:opacity-100'
            >
              CC BY-NC-SA 4.0
            </Link>
          </span>
          <p className='text-sm opacity-60'>2023-Present © Fajar Alfath</p>
        </div>
        <div className='flex flex-grow items-center justify-start gap-3 sm:justify-self-center'>
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className='cursor-pointer opacity-50 transition-all hover:text-accent-light hover:opacity-100 hover:dark:text-accent-dark'
            >
              <Tooltip
                text={item.name}
                key={index}
              >
                {item.icon}
              </Tooltip>
            </a>
          ))}
        </div>
        <div className='relative flex justify-end'>
          <div className={`${theme === 'dark' ? 'invert filter' : ''}`}>
            <Signature />
          </div>
        </div>
      </div>
    </footer>
  )
}
