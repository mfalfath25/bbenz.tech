'use client'

import { useTheme } from "next-themes"
import { Github, Instagram, Linkedin, Mails, Mouse } from "lucide-react"
import Image from "next/image"

export const Footer = () => {
  const { theme } = useTheme()
  return (
    <div className="fixed bottom-0 md:relative flex flex-row justify-between items-center w-full p-2 backdrop-blur-sm border-t border-opacity-20 border-gray-700">
      <p className="text-sm opacity-50 border-1 rounded-md border-gray-300 items-center hidden md:flex">
        <span className="mr-2"><Mouse size={24} /></span>
        Hold right click to pan
      </p>
      <div className="flex gap-4">
        <a href="https://www.instagram.com/mfajaralfath/">
          <Instagram strokeWidth={1} className="cursor-pointer hover:opacity-80 ease-out" />
        </a>
        <a href="https://www.linkedin.com/in/mfalfath25/">
          <Linkedin strokeWidth={1} className="cursor-pointer hover:opacity-80 ease-out" />
        </a>
        <a href="https://github.com/mfalfath25">
          <Github strokeWidth={1} className="cursor-pointer hover:opacity-80 ease-out" />
        </a>
        <a href="mailto: mfalfath25@gmail.com">
          <Mails strokeWidth={1} className="cursor-pointer hover:opacity-80 ease-out" />
        </a>
      </div>
      <div className="relative order-2 md:order-3 mb-3 md:mb-0">
        <Image
          priority
          src="/assets/signature.svg"
          alt="Signature"
          width={120}
          height={50}
          className={`${theme === "dark" ? "filter invert" : ""} h-[50px] mx-auto w-full`}
        />
      </div>
    </div>
  )
}