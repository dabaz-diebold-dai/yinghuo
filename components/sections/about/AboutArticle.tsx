import { values, people } from "@/components/CMS"

export default function AboutArticle() {
  return (
    <div className="bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <p className="mt-2 text-xl font-bold tracking-tight text-orange-400 sm:text-2xl">
            我们的历程
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-400">
            映火文化传媒成立于2022年12月29日，一路走来，我们始终坚持用心聆听每一位顾客的声音，精心挑选每一件产品，以确保质量与服务都能达到行业最高标准。我们不仅销售摄影器材，更是摄影艺术的传播者和倡导者。
          </p>
        </div>
        <div className="mx-auto max-w-2xl mt-12 lg:max-w-4xl">
          <p className="mt-2 text-xl font-bold tracking-tight text-orange-400 sm:text-2xl">
            我们的文化
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-400">
            在映火，我们崇尚“创意、分享、成长”的企业文化。我们相信，创意是摄影艺术的灵魂，分享是知识传承的桥梁，而成长则是我们共同的目标。我们为员工创造一个充满挑战与机遇的环境，鼓励他们持续学习，不断创新。
          </p>
        </div>
        <div className="mx-auto max-w-2xl mt-12 lg:max-w-4xl">
          <p className="mt-2 text-xl font-bold tracking-tight text-orange-400 sm:text-2xl">
            我们的价值观
          </p>
        </div>
        <div className="mx-auto max-w-2xl mt-8 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-16">
                <dt className="text-lg font-semibold leading-7 text-neutral-100">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-400">
                    <value.icon className="h-6 w-6 text-neutral-950" aria-hidden="true" />
                  </div>
                  {value.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-neutral-400">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto max-w-2xl mt-12 lg:max-w-4xl">
          <p className="mt-2 text-xl font-bold tracking-tight text-orange-400 sm:text-2xl">
            我们的团队
          </p>
          <div className="mt-12 mx-auto max-w-7xl">
            <ul role="list" className="grid gap-x-8 gap-y-8 grid-cols-4">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt={person.name} />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-neutral-100">{person.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-orange-400">{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}