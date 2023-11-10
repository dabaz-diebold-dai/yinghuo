import type { Metadata } from 'next'

import AboutHero from '@/components/sections/about/AboutHero'
import AboutArticle from '@/components/sections/about/AboutArticle'
import BlogHero from '@/components/sections/blog/BlogHero'

export const metadata: Metadata = {
  title: '博客',
  description: '映火文化传媒，源于2022年的创新思潮，我们将深厚的摄影器材知识与现代科技结合，致力于提供专业级的摄影设备及解决方案。',

  openGraph: {
    title: '博客 - 映火',
    description: '映火文化传媒，源于2022年的创新思潮，我们将深厚的摄影器材知识与现代科技结合，致力于提供专业级的摄影设备及解决方案。',
    url: 'https://yinghuo.dabaz.me/blog',
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
    title: '博客 - 映火',
    description: '映火文化传媒，源于2022年的创新思潮，我们将深厚的摄影器材知识与现代科技结合，致力于提供专业级的摄影设备及解决方案。',
    creator: '@dabaz_official',
    images: {
      url: 'https://yinghuo.dabaz.me/twitter-image.jpg',
      alt: '映火文化传媒，源于2022年的创新思潮，我们将深厚的摄影器材知识与现代科技结合，致力于提供专业级的摄影设备及解决方案。',
    },
  },
}

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <BlogHero />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
