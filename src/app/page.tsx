import { Suspense } from "react"
import { Intro } from "@/components/section/main/Intro"
import { MainCanvas } from "@/components/three/canvas/MainCanvas"
import { Footer } from "@/components/ui/Footer"

export default function Page() {

  const SuspenseFallback = () => {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-white"></div>
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
      <Suspense fallback={<SuspenseFallback />}>
        <MainCanvas />
      </Suspense>
      {/* <div className="relative">
        <div className="absolute bottom-0 left-0 w-full">
          <Footer />
        </div>
      </div> */}
    </div>
  )
}
