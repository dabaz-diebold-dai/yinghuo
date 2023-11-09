import { testimonials } from "@/components/CMS";

export default function Testmonial() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl text-left md:text-center">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl">
          用户评价
        </h2>
        {testimonials.map((testimonial) => (
          <figure className="mt-10">
            <blockquote className="text-left md:text-center text-xl font-semibold leading-8 text-neutral-100 sm:text-2xl sm:leading-9">
              <p>
                “{testimonial.content}”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-neutral-100">{testimonial.name}</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-neutral-100">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-neutral-400">{testimonial.occupation}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}