"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
// import { usePathname } from 'next/navigation'

import Link from "next/link"

import { Moon, Sun } from "lucide-react"
import Image from "next/image"

const NavMenu = [
  {
    name: "Blog",
    link: "/blogs",
  },
  {
    name: "Experiment",
    link: "/exp",
  },
]

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  // const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="max-w-4xl mx-auto sticky top-0 z-10 p-2 md:px-0 backdrop-blur-sm border-b border-opacity-20 border-gray-700">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Link href="/">
            <Image
              priority
              src="/assets/logo.svg"
              alt="Logo"
              width={50}
              height={50}
              className={`${theme === "dark" ? "filter invert" : ""} cursor-pointer hover:opacity-80 ease-out`}
            />
          </Link>
          <ul className="flex gap-5">
            {NavMenu.map((item, index) => (
              <li key={index} className="opacity-80 hover:opacity-100 ease-out">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hover:opacity-80 ease-out">
          {theme === "dark" ? (
            <Sun size={25} cursor="pointer" onClick={() => setTheme("light")} />
          ) : (
            <Moon size={25} cursor="pointer" onClick={() => setTheme("dark")} />
          )}
        </div>
      </div>
    </div>

  )
}

export default Navbar
