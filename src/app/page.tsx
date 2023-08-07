import { MainCanvas } from "@/components/three/canvas/MainCanvas"
import Signature from "@/components/ui/Signature"

export default function Home() {

  return (
    <div className="max-w-4xl mx-auto w-full h-[calc(100vh-66px)]">
      <div></div>
      <MainCanvas />
      <Signature />
    </div>
  )
}
