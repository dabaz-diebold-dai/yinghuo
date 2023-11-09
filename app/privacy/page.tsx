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
    <div className="relative py-16 bg-neutral-950 overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-neutral-50 sm:text-4xl">
              隐私政策
            </span>
          </h1>
        </div>
        <div className="mt-6 prose prose-orange prose-lg text-neutral-200 prose-invert mx-auto">
          <p>
            欢迎您选择映火文化传媒（以下简称“映火”）的服务。我们非常重视您的隐私和个人信息保护。在您使用映火的服务前，请仔细阅读《隐私政策》（以下简称“本政策”），我们将说明如何收集、使用、存储和分享这些信息，并告知您如何访问、更新、控制和保护这些信息。
          </p>
          <h2>
            1. 信息收集
          </h2>
          <p>
            a. 我们收集的信息包括但不限于：
          </p>
          <ul role="list">
            <li>您在注册账户或使用服务时提供的个人信息（如身份证明、联系方式、电子邮件地址等）；</li>
            <li>您在使用服务时产生的交易记录；</li>
            <li>您通过我们的客服或参与市场活动时提供的信息；</li>
            <li>从关联公司、业务合作伙伴处获得的有关您使用服务的相关信息。</li>
          </ul>
          <p>
            b. Cookies和同类技术：
          </p>
          <ul role="list">
            <li>我们可能使用cookies、web beacon等技术收集和存储您访问服务时的信息，以提供更个性化的用户体验和服务。</li>
          </ul>
          <h2>
            2. 信息使用
          </h2>
          <p>
            我们可能将收集的信息用于：
          </p>
          <ul role="list">
            <li>提供服务；</li>
            <li>帮助我们设计新服务，改善我们现有服务；</li>
            <li>使我们更能了解您如何接入和使用我们的服务，从而有针对性地回应您的个性化需求；</li>
            <li>评估我们市场活动的效果，以及其他内部管理和分析需求。</li>
          </ul>
          <h2>
            3. 信息共享
          </h2>
          <p>
            我们不会将您的个人信息出售给第三方，但在以下情况下，我们可能会共享您的信息：
          </p>
          <ul role="list">
            <li>获取您的明确同意或授权；</li>
            <li>按照法律法规的要求或应政府部门的要求；</li>
            <li>为完成合并、分立、收购或资产转让而转移；</li>
            <li>在法律允许的范围内，为了保护映火、我们的用户或公众的权益、财产或安全免受损害。</li>
          </ul>
          <h2>
            4. 信息安全
          </h2>
          <p>
            我们非常重视信息安全。我们采用各种合理的物理、管理和技术措施来保护您的个人信息，防止个人信息的泄露、破坏或丢失。例如，我们将使用加密技术保护某些敏感信息。然而，请您理解，由于技术的限制以及可能存在的各种恶意手段，在互联网环境下，即使竭尽所能加强安全措施，也无法始终保证信息百分之百的安全。
          </p>
          <h2>
            5. 信息访问和控制
          </h2>
          <ul role="list">
            <li>您有权查看您的个人信息，并可要求我们更新、更正或删除该等信息。</li>
            <li>在某些情况下，您有权要求限制或反对我们使用您的个人信息。</li>
            <li>如果您认为我们处理个人信息的方式违反了法律法规，您有权向数据保护机构投诉。</li>
          </ul>
          <h2>6. 政策更新</h2>
          <p>
            我们可能不时更新本政策。对本政策的任何更改，我们会发布更新版本在我们的网站上，并在适当情况下通过其他途径通知您。
          </p>
          <h2>7. 联系你们</h2>
          <p>
            如果您对本政策有任何疑问或顾虑，请通过<a href="mailto:yinghuo@dabaz.me" className="hover:text-orange-600 transition-colors">yinghuo@dabaz.me</a>与我们联系。
          </p>
        </div>
      </div>
    </div>
  )
}