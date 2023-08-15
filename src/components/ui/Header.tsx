'use client'

import { motion } from "framer-motion"
import BackButton from "./BackButton"

interface HeaderProps {
  title?: string
  enableBackButton?: boolean
}

export const Header = ({ title, enableBackButton }: HeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 2 }}
      transition={{ duration: 0.75 }}
    // transition={{ type: "inertia", velocity: 20 }}
    >
      {
        enableBackButton ?
          <div className="absolute top-0">
            <BackButton />
          </div>
          : null
      }
      <h2 className="text-2xl text-center font-extrabold tracking-tight">{title}</h2>
    </motion.div>
  )
}