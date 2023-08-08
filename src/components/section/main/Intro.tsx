import Image from "next/image"
import Link from "next/link"

export const Intro = () => {
  return (
    <div>
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
      </div> */}

      <div className="grid pt-0 md:pt-2 gap-5 text-center w-full md:text-left">
        <div className="block md:hidden w-1/2 rounded-full border-2 border-gray-700 overflow-hidden mx-auto">
          <Image src="/assets/photo.png" alt="Photo" width={460} height={460} />
        </div>

        <Link
          href="/about"
          className="group rounded-lg border-transparent px-5 py-4 transition-colors hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:border-[1px] hover:border-neutral-300 backdrop-blur-sm"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Hi, I&apos;m Fajar Alfath{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`md:max-w-[40ch] text-sm opacity-70`}>
            An aspiring <span className="border-b border-gray-300">Frontend developer</span><br />
            Currently experimenting with web animations
          </p>
        </Link>
      </div>

    </div>
  )
}