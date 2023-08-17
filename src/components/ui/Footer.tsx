'use client'

import { useTheme } from 'next-themes'
import { Github, Instagram, Linkedin, Mails, Mouse } from 'lucide-react'
import Image from 'next/image'
import { Signature } from './Signature'

export const Footer = () => {
  const icons = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/mfajaralfath/',
      icon: <Instagram strokeWidth={1} />,
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/mfalfath25/',
      icon: <Linkedin strokeWidth={1} />,
    },
    {
      name: 'Github',
      link: 'https://github.com/mfalfath25',
      icon: <Github strokeWidth={1} />,
    },
    {
      name: 'Email',
      link: 'mailto: mfalfath25@gmail.com',
      icon: <Mails strokeWidth={1} />,
    },
  ]

  const { theme } = useTheme()
  return (
    <footer className='sticky bottom-0 border-t border-gray-700/30 bg-transparent backdrop-blur-sm dark:border-white/30'>
      <div className='mx-auto flex w-full max-w-4xl flex-row items-center justify-between p-2'>
        {/* <p className='border-1 hidden items-center rounded-md border-gray-300 text-sm opacity-50 md:flex'>
        <span className='mr-2'>
          <Mouse size={24} />
        </span>
        Hold left click to pan
      </p> */}
        <div className='flex gap-4'>
          {icons.map((item, index) => (
            <a
              key={item.name}
              href={item.link}
              className='cursor-pointer opacity-80 ease-out hover:opacity-100'
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className='relative order-2 md:order-3'>
          <div className={`${theme === 'dark' ? 'invert filter' : ''}`}>
            <Signature />
          </div>
        </div>
      </div>
    </footer>
  )
}
