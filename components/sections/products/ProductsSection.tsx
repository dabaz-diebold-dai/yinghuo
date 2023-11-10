import { productItems } from '@/components/CMS'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ProductsSection() {
  return (
    <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:max-w-7xl">
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {productItems.map((product) => (
          <Dialog key={product.id}>
            <DialogTrigger asChild>
              <button className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-neutral-50 xl:aspect-h-8 xl:aspect-w-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <h3 className="mt-4 text-sm text-neutral-100">{product.name}</h3>
                <p className="mt-1 text-lg text-neutral-200">{product.price}</p>
                <h3 className="mt-1 text-sm text-neutral-400">{product.imageAlt}</h3>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-neutral-900 border border-neutral-700">
              <DialogHeader>
                <DialogTitle className="text-xl text-neutral-50">商店系统正在维护中...</DialogTitle>
                <DialogDescription className="text-mdxxxxxxx">
                  抱歉，现在映火官网的商店正处于维护之中，请耐心等待，感谢您的理解。
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}