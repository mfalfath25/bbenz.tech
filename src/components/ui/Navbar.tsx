"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
// import { usePathname } from 'next/navigation'

import Link from "next/link"

import { Menu, Moon, Sun } from "lucide-react"
import Image from "next/image"
import ShuffleTextAnimation from "@/lib/animations/ShuffleTextAnimation"

const NavMenu = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Project",
    link: "/project",
  },
  {
    name: "Experiment",
    link: "/experiment",
  },
]

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  // const pathname = usePathname()


  useEffect(() => {
    setMounted(true)
    return () => setMenuOpen(false)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <div className="max-w-4xl mx-auto sticky top-0 z-10 p-2 py-4 backdrop-blur-sm border-b border-opacity-20 border-gray-700">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-0 md:gap-5">
            <Link href="/">
              <Image
                priority
                src="/assets/logo.svg"
                alt="Logo"
                width={0}
                height={0}
                className={`${theme === "dark" ? "filter invert" : ""} cursor-pointer h-[34px] w-full hover:opacity-80 ease-out hidden md:block`}
              />
            </Link>
            <div className="md:hidden cursor-pointer opacity-80 hover:opacity-100">
              <Menu size={25} onClick={() => setMenuOpen(!menuOpen)} />
            </div>
            <ul className={`gap-5 hidden md:flex`}>
              {NavMenu.map((item, index) => (
                <li key={index} className="opacity-80 hover:opacity-100 ease-out hover:animate-shuffle-text">
                  <Link href={item.link}><ShuffleTextAnimation text={item.name} shuffleIterations={5} /></Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/">
            <Image
              priority
              src="/assets/logo.svg"
              alt="Logo"
              width={0}
              height={0}
              className={`${theme === "dark" ? "filter invert" : ""} cursor-pointer h-[34px] w-full hover:opacity-80 ease-out block md:hidden`}
            />
          </Link>

          <div className="opacity-80 hover:opacity-100 ease-out order-2">
            {theme === "dark" ? (
              <Sun size={25} cursor="pointer" onClick={() => setTheme("light")} />
            ) : (
              <Moon size={25} cursor="pointer" onClick={() => setTheme("dark")} />
            )}
          </div>
        </div>

        <div className="md:hidden">
          <ul className={`${menuOpen ? 'flex flex-col gap-1 pt-2' : 'hidden'}`}>
            {NavMenu.map((item, index) => (
              <li key={index} className="opacity-80 hover:opacity-100 ease-out backdrop-blur-sm border-t border-opacity-20 border-gray-700">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
