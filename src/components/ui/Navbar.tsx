'use client'

import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'

import Link from 'next/link'

import { Menu, Moon, Sun, X } from 'lucide-react'
import Image from 'next/image'
import ShuffleTextAnimation from '@/components/animations/ShuffleTextAnimation'

const NavMenu = [
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Project',
    link: '/project',
  },
  {
    name: 'Experiment',
    link: '/experiment',
  },
]

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navMenuRef = useRef<HTMLDivElement | null>(null)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const handleNavMenuClick = (event: MouseEvent) => {
    const target = event.target as Node

    if (navMenuRef.current && !navMenuRef.current.contains(target)) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('click', handleNavMenuClick)
    } else {
      document.removeEventListener('click', handleNavMenuClick)
    }

    return () => {
      document.removeEventListener('click', handleNavMenuClick)
    }
  }, [menuOpen])

  useEffect(() => {
    setMounted(true)
    return () => setMenuOpen(false)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <header
        className={`${
          theme === 'dark' ? 'effect-dotted-dark' : 'effect-dotted'
        } sticky top-0 z-20 border-b border-gray-700/30 backdrop-blur-sm dark:border-white/30`}
      >
        <div className='mx-auto flex max-w-4xl items-center justify-between p-2 py-4'>
          <div className='flex items-center gap-0 md:gap-5'>
            <Link href='/'>
              <Image
                priority
                src='/assets/logo.svg'
                alt='Logo'
                width={0}
                height={0}
                className={`${
                  theme === 'dark' ? 'invert filter' : ''
                } hidden h-[34px] w-full cursor-pointer ease-out hover:opacity-80 sm:block`}
              />
            </Link>
            <div className='cursor-pointer opacity-80 hover:opacity-100 sm:hidden'>
              {menuOpen ? (
                <X
                  size={25}
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              ) : (
                <Menu
                  size={25}
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              )}
            </div>
            <ul className={`hidden gap-5 sm:flex`}>
              {NavMenu.map((item, index) => (
                <li
                  key={index}
                  className={`hover:opacity-100 ${
                    pathname.includes(item.link)
                      ? 'font-bold opacity-100'
                      : 'opacity-80'
                  } hover:animate-shuffle-text ease-out`}
                >
                  <Link href={item.link}>
                    <ShuffleTextAnimation
                      text={item.name}
                      shuffleIterations={5}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href='/'>
            <Image
              priority
              src='/assets/logo.svg'
              alt='Logo'
              width={0}
              height={0}
              className={`${
                theme === 'dark' ? 'invert filter' : ''
              } block h-[34px] w-full cursor-pointer ease-out hover:opacity-80 sm:hidden`}
            />
          </Link>

          <div className='order-2 opacity-60 ease-out hover:opacity-100'>
            {theme === 'dark' ? (
              <Sun
                size={24}
                cursor='pointer'
                onClick={() => setTheme('light')}
              />
            ) : (
              <Moon
                size={24}
                cursor='pointer'
                onClick={() => setTheme('dark')}
              />
            )}
          </div>
        </div>
      </header>

      {/* NavMenu When Mobile */}
      <div className='relative sm:hidden'>
        <div
          ref={navMenuRef}
          className={`transition-max-height absolute left-0 z-20 h-[calc(100vh-67px)] w-full overflow-hidden backdrop-blur-lg duration-300 ease-in-out ${
            menuOpen ? '' : 'hidden'
          }`}
        >
          <ul className='flex flex-col'>
            {NavMenu.map((item, index) => (
              <li
                key={index}
                className='border-b border-gray-700 border-opacity-20 text-center opacity-80 transition-opacity ease-out hover:font-bold hover:opacity-100'
              >
                <Link
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className='block px-4 py-2'
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
