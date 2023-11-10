import { productItems } from '@/components/CMS'

export default function ProductsSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {productItems.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className="aspect-h-1 aspect-w-1 h-full overflow-hidden rounded-lg bg-neutral-800 xl:aspect-h-8 xl:aspect-w-8">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
              />
            </div>
            <h3 className="mt-4 text-sm text-neutral-300">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-neutral-100">{product.price}</p>
          </a>
        ))}
      </div>
    </div>
  )
}