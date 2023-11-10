import type { Metadata } from 'next'

import BlogHero from '@/components/sections/blog/BlogHero'
import { posts } from '@/components/CMS'

export const metadata: Metadata = {
  title: '映火博客正式上线',
  description: '欢迎大家来到映火文化传媒的官方博客！这是我们的第一篇文章，标志着我们在摄影共享和交流道路上的新开始。在这里，我们将与您分享摄影的一切：从基础技巧到高级拍摄技巧，从最新器材评测到行业动态，我们希望这个博客能成为您获得灵感、学习新知识、提高摄影技巧的宝贵资源。',

  openGraph: {
    title: '映火博客正式上线 - 映火',
    description: '欢迎大家来到映火文化传媒的官方博客！这是我们的第一篇文章，标志着我们在摄影共享和交流道路上的新开始。在这里，我们将与您分享摄影的一切：从基础技巧到高级拍摄技巧，从最新器材评测到行业动态，我们希望这个博客能成为您获得灵感、学习新知识、提高摄影技巧的宝贵资源。',
    url: 'https://yinghuo.dabaz.me/blog/first-blog',
    siteName: '映火',
    images: [
      {
        url: 'https://yinghuo.dabaz.me/opengraph-image.jpg',
        width: 1920,
        height: 1280,
        alt: '欢迎大家来到映火文化传媒的官方博客！这是我们的第一篇文章，标志着我们在摄影共享和交流道路上的新开始。在这里，我们将与您分享摄影的一切：从基础技巧到高级拍摄技巧，从最新器材评测到行业动态，我们希望这个博客能成为您获得灵感、学习新知识、提高摄影技巧的宝贵资源。',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '映火博客正式上线 - 映火',
    description: '欢迎大家来到映火文化传媒的官方博客！这是我们的第一篇文章，标志着我们在摄影共享和交流道路上的新开始。在这里，我们将与您分享摄影的一切：从基础技巧到高级拍摄技巧，从最新器材评测到行业动态，我们希望这个博客能成为您获得灵感、学习新知识、提高摄影技巧的宝贵资源。',
    creator: '@dabaz_official',
    images: {
      url: 'https://yinghuo.dabaz.me/twitter-image.jpg',
      alt: '欢迎大家来到映火文化传媒的官方博客！这是我们的第一篇文章，标志着我们在摄影共享和交流道路上的新开始。在这里，我们将与您分享摄影的一切：从基础技巧到高级拍摄技巧，从最新器材评测到行业动态，我们希望这个博客能成为您获得灵感、学习新知识、提高摄影技巧的宝贵资源。',
    },
  },
}

export default function Blog() {
  return (
    <div className="relative py-16 bg-neutral-950 overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <a href="/blog" className="text-left text-orange-400 hover:underline hover:underline-offset-4 transition-all">
            &lt;- 返回
          </a>
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-neutral-50 sm:text-4xl">
              映火博客正式上线
            </span>
          </h1>
        </div>
        <div className="mt-6 prose prose-orange prose-lg text-neutral-200 prose-invert mx-auto">
          <p>
            欢迎大家来到映火文化传媒的官方博客！这是我们的第一篇文章，标志着我们在摄影共享和交流道路上的新开始。在这里，我们将与您分享摄影的一切：从基础技巧到高级拍摄技巧，从最新器材评测到行业动态，我们希望这个博客能成为您获得灵感、学习新知识、提高摄影技巧的宝贵资源。
          </p>
          <h2>
            为什么我们要开设博客？
          </h2>
          <p>
            摄影不仅仅是一门技术，它是一种艺术，一种表达，一种探索世界的方式。我们在映火理解到，分享知识和经验对于摄影社区的成长至关重要。我们的博客旨在建立一个摄影爱好者和专业人士之间的知识共享平台，促进学习和灵感的交流。
          </p>
          <h2>
            未来内容预告
          </h2>
          <p>
            我们计划在未来的文章中涵盖以下内容：
          </p>
          <ul role="list">
            <li><strong>摄影技巧和教程</strong>：基础到高级的摄影技巧，帮助您更好地掌握摄影艺术。</li>
            <li><strong>器材评测和推荐</strong>：最新的摄影器材评测，助您在众多产品中做出明智选择。</li>
            <li><strong>行业动态和趋势</strong>：分享摄影界的最新动态和趋势，让您始终保持领先。</li>
            <li><strong>客座专栏</strong>：邀请业内专家和资深摄影师分享他们的经验和见解。</li>
          </ul>
          <h2>
            与我们进行讨论
          </h2>
          <p>
            我们鼓励每一位读者积极参与，无论是通过评论分享您的想法，还是提出希望我们探讨的主题。映火博客是一个开放的平台，期待您的声音成为我们内容的一部分。欢迎向<a href="mailto:yinghuo@dabaz.me">yinghuo@dabaz.me</a>发送邮件投稿或讨论。
          </p>
          <h2>
            再次感谢您的访问和支持。请继续关注我们的博客，开启您的摄影学习之旅。
          </h2>
        </div>
      </div>
    </div>
  )
}