import ProductsHero from '@/components/sections/products/ProductsHero'
import ProductsSection from '@/components/sections/products/ProductsSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '产品',
  description: '映火文化传媒精选世界顶级品牌的摄影器材，为专业摄影师和摄影爱好者提供卓越的拍摄体验。',

  openGraph: {
    title: '产品 - 映火',
    description: '映火文化传媒精选世界顶级品牌的摄影器材，为专业摄影师和摄影爱好者提供卓越的拍摄体验。',
    url: 'https://yinghuo.dabaz.me/products',
    siteName: '映火',
    images: [
      {
        url: 'https://yinghuo.dabaz.me/opengraph-image.jpg',
        width: 1920,
        height: 1280,
        alt: '映火文化传媒精选世界顶级品牌的摄影器材，为专业摄影师和摄影爱好者提供卓越的拍摄体验。',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '产品 - 映火',
    description: '映火文化传媒精选世界顶级品牌的摄影器材，为专业摄影师和摄影爱好者提供卓越的拍摄体验。',
    creator: '@dabaz_official',
    images: {
      url: 'https://yinghuo.dabaz.me/twitter-image.jpg',
      alt: '欢迎您使用映火文化传媒的服务！在您注册成为映火商城用户之前，请仔细阅读本用户协议（以下简称“本协议”），确保您充分理解本协议中各条款。',
    },
  },
}

export default function Products() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <ProductsHero />
      <ProductsSection />
    </main>
  )
}