import type { Metadata } from 'next'

import AboutHero from '@/components/sections/about/AboutHero'
import AboutArticle from '@/components/sections/about/AboutArticle'

export const metadata: Metadata = {
  title: '隐私政策',
  description: '欢迎您选择映火文化传媒的服务。我们非常重视您的隐私和个人信息保护。',

  openGraph: {
    title: '隐私政策 - 映火',
    description: '欢迎您选择映火文化传媒的服务。我们非常重视您的隐私和个人信息保护。',
    url: 'https://yinghuo.dabaz.me/privacy',
    siteName: '映火',
    images: [
      {
        url: 'https://yinghuo.dabaz.me/opengraph-image.jpg',
        width: 1920,
        height: 1280,
        alt: '欢迎您选择映火文化传媒的服务。我们非常重视您的隐私和个人信息保护。',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '隐私政策 - 映火',
    description: '欢迎您选择映火文化传媒的服务。我们非常重视您的隐私和个人信息保护。',
    creator: '@dabaz_official',
    images: {
      url: 'https://yinghuo.dabaz.me/twitter-image.jpg',
      alt: '欢迎您选择映火文化传媒的服务。我们非常重视您的隐私和个人信息保护。',
    },
  },
}

export default function About() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      
    </main>
  )
}