'use client'

import { useTheme } from "next-themes"
import Image from "next/image"

export default function Signature() {
  const { theme } = useTheme()

  return (
    <div className="relative">
      <Image
        priority
        src="/assets/signature.svg"
        alt="Signature"
        width={100}
        height={100}
        className={`${theme === "dark" ? "filter invert" : ""} absolute bottom-0 h-[50px] mx-auto w-full`}
      />
    </div>
  )
}
