import { features } from "@/components/CMS"

export default function Feature() {
  return (
    <div className="bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl">
            精选器材，专业选择
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-400">
            我们在映火精心挑选每一件摄影器材，不仅仅是销售产品，更是提供一站式的摄影解决方案。从最新技术的相机到专业的照明系统，每一项产品都是为了让您的摄影作品更上一层楼。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-lg font-semibold leading-7 text-neutral-100">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-400">
                    <feature.icon className="h-6 w-6 text-neutral-950" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-neutral-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}