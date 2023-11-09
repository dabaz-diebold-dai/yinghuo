export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-400 ring-1 ring-neutral-100/10 hover:ring-neutral-100/20">
            我们现在已开启官网的博客。{' '}
            <a href="#" className="font-semibold text-neutral-50">
              <span className="absolute inset-0" aria-hidden="true" />
              深入了解 -&gt;
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-6xl">
            与<span className="bg-gradient-to-r bg-clip-text text-transparent from-yellow-500 to-red-500">映火</span>探索影像的无限可能
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-400">
            我们相信，好的器材是艺术创作的伙伴，也是记录生活的工具。我们精心挑选每一件产品，确保每一位顾客都能在映火找到满足他们需求的摄影设备。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/products"
              className="rounded-md bg-neutral-50 px-3.5 py-2.5 text-sm font-semibold text-neutral-950 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
            >
              发现映火的产品
            </a>
            <a href="/about" className="text-sm font-semibold leading-6 text-neutral-100 hover:text-neutral-200 transition-colors">
              了解映火
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}