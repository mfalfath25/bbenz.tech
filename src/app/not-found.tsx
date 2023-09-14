import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='h-[calc(100vh-134px)]'>
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <h1>Page not found</h1>
        <Link
          href='/'
          className='mt-2 rounded-md border-[1px] border-neutral-300 px-2 hover:border-neutral-600 hover:bg-neutral-100 dark:border-neutral-500 dark:border-white/30 hover:dark:border-base-light hover:dark:bg-neutral-800'
        >
          Home
        </Link>
      </div>
    </div>
  )
}
