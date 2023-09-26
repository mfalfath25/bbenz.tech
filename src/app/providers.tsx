'use client'

import { useState, useEffect, use } from 'react'
import { ThemeProvider } from 'next-themes'

export type ProvidersProps = {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
    >
      {mounted && children}
    </ThemeProvider>
  )
}
