'use client'

import { Suspense } from "react"
import { Intro } from "@/components/section/main/Intro"
import { MainCanvas } from "@/components/three/canvas/MainCanvas"
import { Footer } from "@/components/ui/Footer"
import { Loader } from "lucide-react"
import { motion } from "framer-motion"

export default function Page() {

  const SuspenseFallback = () => {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="animate-spin">
          <Loader size={30} />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-[calc(100vh-134px)]">
      <div className="relative">
        <div className="md:absolute z-10 grid h-[calc(100vh-67px)] place-items-center md:place-items-start">
          <Intro />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Suspense fallback={<SuspenseFallback />}>
          <MainCanvas />
        </Suspense>
      </motion.div>
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  )
}
