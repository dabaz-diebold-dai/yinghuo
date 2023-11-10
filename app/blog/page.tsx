import type { Metadata } from 'next'

import BlogHero from '@/components/sections/blog/BlogHero'
import BlogPosts from '@/components/sections/blog/BlogPosts'

export const metadata: Metadata = {
  title: '博客',
  description: '欢迎来到映火的博客！这里是我们分享摄影技巧、器材评测、行业动态以及摄影艺术的地方。我们致力于为摄影爱好者和专业人士构建一个知识共享和灵感交流的平台。无论您是初学者还是经验丰富的摄影师，这里总有一些有价值的内容等着您。',

  openGraph: {
    title: '博客 - 映火',
    description: '欢迎来到映火的博客！这里是我们分享摄影技巧、器材评测、行业动态以及摄影艺术的地方。我们致力于为摄影爱好者和专业人士构建一个知识共享和灵感交流的平台。无论您是初学者还是经验丰富的摄影师，这里总有一些有价值的内容等着您。',
    url: 'https://yinghuo.dabaz.me/blog',
    siteName: '映火',
    images: [
      {
        url: 'https://yinghuo.dabaz.me/opengraph-image.jpg',
        width: 1920,
        height: 1280,
        alt: '欢迎来到映火的博客！这里是我们分享摄影技巧、器材评测、行业动态以及摄影艺术的地方。我们致力于为摄影爱好者和专业人士构建一个知识共享和灵感交流的平台。无论您是初学者还是经验丰富的摄影师，这里总有一些有价值的内容等着您。',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '博客 - 映火',
    description: '欢迎来到映火的博客！这里是我们分享摄影技巧、器材评测、行业动态以及摄影艺术的地方。我们致力于为摄影爱好者和专业人士构建一个知识共享和灵感交流的平台。无论您是初学者还是经验丰富的摄影师，这里总有一些有价值的内容等着您。',
    creator: '@dabaz_official',
    images: {
      url: 'https://yinghuo.dabaz.me/twitter-image.jpg',
      alt: '欢迎来到映火的博客！这里是我们分享摄影技巧、器材评测、行业动态以及摄影艺术的地方。我们致力于为摄影爱好者和专业人士构建一个知识共享和灵感交流的平台。无论您是初学者还是经验丰富的摄影师，这里总有一些有价值的内容等着您。',
    },
  },
}

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <BlogHero />
      <BlogPosts />
    </main>
  )
}
