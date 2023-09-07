import { Loader } from 'lucide-react'

export default function Loading() {
  return (
    <div className='h-[calc(100vh-134px)]'>
      <div className='flex h-full w-full items-center justify-center'>
        <Loader
          strokeWidth={1}
          size={24}
          className='animate-spin'
        />
      </div>
    </div>
  )
}
