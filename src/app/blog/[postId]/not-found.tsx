import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex min-h-[calc(100vh-134px)] flex-col items-center justify-center px-2 py-4'>
      <p>Sorry, the requested post does not exist.</p>
      <Link
        href='/'
        className='mt-2 rounded-md border-[1px] border-neutral-300 px-2 hover:border-neutral-600 hover:bg-neutral-100 dark:border-neutral-500 dark:border-white/30 hover:dark:border-base-light hover:dark:bg-neutral-800'
      >
        Home
      </Link>
    </div>
  )
}
