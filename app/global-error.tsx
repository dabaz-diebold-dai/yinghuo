"use client";
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <main className="grid min-h-full place-items-center bg-neutral-950 px-6 py-32 sm:py-56 lg:px-8">
      <div className="text-center">
        <h1 className="mt-12 text-3xl font-bold tracking-tight text-neutral-100 sm:text-5xl">出现错误了</h1>
        <p className="mt-6 text-base leading-7 text-neutral-400">抱歉，我们遇到了一些错误。</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors"
          >
            返回主页
          </a>
        </div>
      </div>
    </main>
  )
}