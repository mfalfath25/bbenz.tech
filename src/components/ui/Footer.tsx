'use client'

import { useTheme } from 'next-themes'
import { Github, Instagram, Linkedin, Mails, Mouse } from 'lucide-react'
import Image from 'next/image'
import { Signature } from '../animations/Signature'
import Link from 'next/link'

export const Footer = () => {
  const icons = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/mfajaralfath/',
      icon: <Instagram strokeWidth={2} />,
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/mfalfath25/',
      icon: <Linkedin strokeWidth={2} />,
    },
    {
      name: 'Github',
      link: 'https://github.com/mfalfath25',
      icon: <Github strokeWidth={2} />,
    },
    {
      name: 'Email',
      link: 'mailto: mfalfath25@gmail.com',
      icon: <Mails strokeWidth={2} />,
    },
  ]

  const { theme } = useTheme()
  return (
    <footer
      className={`${
        theme === 'dark' ? 'effect-dotted-dark' : 'effect-dotted'
      } sticky bottom-0 border-t border-gray-700/30 dark:border-white/30`}
    >
      <div className='mx-auto grid h-[66px] min-h-max max-w-4xl grid-cols-2 items-center px-2 sm:grid-cols-3'>
        <div className='hidden flex-col sm:flex'>
          <Link href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>
            <p className='text-sm underline opacity-60 ease-out hover:opacity-100'>
              CC BY-NC-SA 4.0
            </p>
          </Link>
          <p className='text-sm opacity-60'>2023-Present © Fajar Alfath</p>
        </div>
        <div className='flex flex-grow items-center justify-start gap-4 sm:justify-self-center'>
          {icons.map((item, index) => (
            <a
              key={item.name}
              href={item.link}
              className='cursor-pointer opacity-50 ease-out hover:text-accent-light hover:opacity-100 hover:dark:text-accent-dark'
            >
              {item.icon}
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
