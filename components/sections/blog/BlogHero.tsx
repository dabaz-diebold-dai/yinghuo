export default function BlogHero() {
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
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">映火博客：分享摄影的灵感与智慧</h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            欢迎来到映火的博客！这里是我们分享摄影技巧、器材评测、行业动态以及摄影艺术的地方。我们致力于为摄影爱好者和专业人士构建一个知识共享和灵感交流的平台。无论您是初学者还是经验丰富的摄影师，这里总有一些有价值的内容等着您。
          </p>
        </div>
      </div>
    </div>
  )
}