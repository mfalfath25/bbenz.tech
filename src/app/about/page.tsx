'use client'

import { motion } from "framer-motion"
import ShuffleTextAnimation from "@/lib/animations/ShuffleTextAnimation"

export default function AboutPage() {

  return (
    <div>
      <h1>Hover over the paragraph below:</h1>
      <p>
        <ShuffleTextAnimation text="Shuffle Me!" shuffleIterations={2} />
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>Framer Motion</p>
      </motion.div>
    </div>
  )
}