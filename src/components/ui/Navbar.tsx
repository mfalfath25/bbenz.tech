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
    <div className="max-w-4xl mx-auto w-full flex justify-between items-center py-2 px-2 sm:px-0">
      <div className="flex gap-5 items-center">
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
  )
}

export default Navbar
