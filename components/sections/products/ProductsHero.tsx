export default function ProductsHero() {
  return (
    <div className="relative isolate overflow-hidden bg-neutral-900 py-24 sm:py-32">
      <div className="absolute inset-0 -z-50 overflow-hidden">
        <img
          src="/images/about-bg.webp"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-500 to-neutral-950 mix-blend-multiply" />
      </div>
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-yellow-500 to-red-500 opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-yellow-500 to-red-500 opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">发现摄影的真谛 - 来自顶级品牌的专业器材</h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            映火文化传媒精选世界顶级品牌的摄影器材，为专业摄影师和摄影爱好者提供卓越的拍摄体验。我们提供从索尼、佳能等知名品牌的高端相机到精密镜头和配件，确保每一位摄影师都能找到满足其艺术追求的工具。
          </p>
        </div>
      </div>
    </div>
  )
}