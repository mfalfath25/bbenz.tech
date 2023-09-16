'use client'

import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

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

const MobileMenu: React.FC<{
  navMenuRef: React.RefObject<HTMLDivElement>
  menuOpen: boolean
  closeMenu: () => void
}> = ({ navMenuRef, menuOpen, closeMenu }) => {
  const initialAnimation = { x: -10, opacity: 0 }
  const animateAnimation = {
    x: 0,
    opacity: 1,
    transition: { duration: 0.25, ease: 'easeIn' },
  }
  const closeAnimation = {
    x: -10,
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeOut' },
  }

  return (
    <div className={`top-17 fixed left-0 z-20 w-full sm:hidden`}>
      <motion.div
        initial={initialAnimation}
        animate={menuOpen ? animateAnimation : closeAnimation}
        ref={navMenuRef}
        className={`absolute top-0 z-20 h-screen w-[200px] border-r-[1px] border-gray-700/30 bg-base-light backdrop-blur-lg dark:border-white/30 dark:bg-base-dark`}
      >
        <ul className='flex flex-col'>
          {NavMenu.map((item, index) => (
            <li
              key={index}
              className='border-b-[1px] border-gray-700/30 text-start opacity-60 transition-opacity hover:font-bold hover:text-accent-light hover:opacity-100 dark:border-white/30 hover:dark:text-accent-dark'
            >
              <Link
                href={item.link}
                onClick={closeMenu}
                className='flex w-full justify-between px-4 py-2'
              >
                <span>{item.name}</span>
                <span>-&gt;</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export const Navbar = () => {
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

  const closeMenu = () => {
    setMenuOpen(false)
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
          <div className='flex items-center gap-0 sm:gap-5'>
            <Link href='/'>
              <Image
                priority
                src='/assets/logo.svg'
                alt='Logo'
                width={0}
                height={0}
                className={`${
                  theme === 'dark' ? 'invert filter' : ''
                } hidden h-[34px] w-full cursor-pointer hover:opacity-90 sm:block`}
              />
            </Link>
            <div className='cursor-pointer opacity-60 hover:opacity-100 sm:hidden'>
              {menuOpen ? (
                <X
                  size={24}
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              ) : (
                <Menu
                  size={24}
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              )}
            </div>
            <ul className={`hidden gap-5 sm:flex`}>
              {NavMenu.map((item, index) => (
                <li
                  key={index}
                  className={`transition-all hover:opacity-100 ${
                    pathname.includes(item.link)
                      ? 'font-semibold opacity-100'
                      : 'opacity-60'
                  }`}
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
              } block h-[34px] w-full cursor-pointer hover:opacity-80 sm:hidden`}
            />
          </Link>

          <div className='order-2 opacity-60 transition-all hover:opacity-100'>
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

      {menuOpen && (
        <MobileMenu
          navMenuRef={navMenuRef}
          menuOpen={menuOpen}
          closeMenu={closeMenu}
        />
      )}
    </>
  )
}
