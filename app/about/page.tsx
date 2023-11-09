import type { Metadata } from 'next'

import AboutHero from '@/components/sections/about/AboutHero'
import AboutArticle from '@/components/sections/about/AboutArticle'

export const metadata: Metadata = {
  title: '关于我们',
  description: '映火文化传媒，源于2022年的创新思潮，我们将深厚的摄影器材知识与现代科技结合，致力于提供专业级的摄影设备及解决方案。',

  openGraph: {
    title: '关于我们 - 映火',
    description: '映火文化传媒，源于2022年的创新思潮，我们将深厚的摄影器材知识与现代科技结合，致力于提供专业级的摄影设备及解决方案。',
    url: 'https://yinghuo.dabaz.me',
    siteName: '映火',
    images: [
      {
        url: 'https://yinghuo.dabaz.me/opengraph-image.jpg',
        width: 1920,
        height: 1280,
        alt: '映火文化传媒，源于2022年的创新思潮，我们将深厚的摄影器材知识与现代科技结合，致力于提供专业级的摄影设备及解决方案。',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '关于我们 - 映火',
    description: '映火文化传媒，源于2022年的创新思潮，我们将深厚的摄影器材知识与现代科技结合，致力于提供专业级的摄影设备及解决方案。',
    creator: '@dabaz_official',
    images: {
      url: 'https://yinghuo.dabaz.me/twitter-image.jpg',
      alt: '映火文化传媒，源于2022年的创新思潮，我们将深厚的摄影器材知识与现代科技结合，致力于提供专业级的摄影设备及解决方案。',
    },
  },
}

export default function About() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <AboutHero />
      <AboutArticle />
    </main>
  )
}
