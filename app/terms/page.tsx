import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '用户协议',
  description: '欢迎您使用映火文化传媒的服务！在您注册成为映火商城用户之前，请仔细阅读本用户协议（以下简称“本协议”），确保您充分理解本协议中各条款。',

  openGraph: {
    title: '用户协议 - 映火',
    description: '欢迎您使用映火文化传媒的服务！在您注册成为映火商城用户之前，请仔细阅读本用户协议（以下简称“本协议”），确保您充分理解本协议中各条款。',
    url: 'https://yinghuo.dabaz.me/terms',
    siteName: '映火',
    images: [
      {
        url: 'https://yinghuo.dabaz.me/opengraph-image.jpg',
        width: 1920,
        height: 1280,
        alt: '欢迎您使用映火文化传媒的服务！在您注册成为映火商城用户之前，请仔细阅读本用户协议（以下简称“本协议”），确保您充分理解本协议中各条款。',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '用户协议 - 映火',
    description: '欢迎您使用映火文化传媒的服务！在您注册成为映火商城用户之前，请仔细阅读本用户协议（以下简称“本协议”），确保您充分理解本协议中各条款。',
    creator: '@dabaz_official',
    images: {
      url: 'https://yinghuo.dabaz.me/twitter-image.jpg',
      alt: '欢迎您使用映火文化传媒的服务！在您注册成为映火商城用户之前，请仔细阅读本用户协议（以下简称“本协议”），确保您充分理解本协议中各条款。',
    },
  },
}

export default function Privacy() {
  return (
    <div className="relative py-16 bg-neutral-950 overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-neutral-50 sm:text-4xl">
              用户协议
            </span>
          </h1>
        </div>
        <div className="mt-6 prose prose-orange prose-lg text-neutral-200 prose-invert mx-auto">
          <p>
            欢迎您使用映火文化传媒的服务！在您注册成为映火用户之前，请仔细阅读本用户协议（以下简称“本协议”），确保您充分理解本协议中各条款。您通过网页点击确认或以其他方式接受本协议，即表示您同意接受本协议的所有条款的约束。
          </p>
          <h2>
            1. 服务内容
          </h2>
          <p>
            映火文化传媒主要提供以下服务：
          </p>
          <ul role="list">
            <li>摄影器材的销售；</li>
            <li>摄影相关的咨询服务；</li>
            <li>其他相关服务。</li>
          </ul>
          <h2>
            2. 用户权利和义务
          </h2>
          <p>
            a. 用户应提供真实、准确、最新和完整的个人资料；
          </p>
          <p>
            b. 用户应当妥善保管账户信息及密码安全，对通过其账户进行的所有活动和事件承担责任；
          </p>
          <p>
            c. 用户在使用映火提供的服务时，应遵守所有适用的当地法律、国家法律和国际法律标准。
          </p>
          <h2>
            3. 隐私保护
          </h2>
          <p>
            映火尊重并保护所有使用其服务用户的个人隐私权。映火将按照网站公布的隐私政策收集、使用、存储和共享用户的个人信息。
          </p>
          <h2>
            4. 知识产权
          </h2>
          <p>
            映火网站的图文内容、页面设计、编排方式等版权均属映火文化传媒所有，未经授权不得任意复制或传播。所有产品的商标、标识均为映火的财产。
          </p>
          <h2>
            5. 免责声明
          </h2>
          <p>
            映火不保证网站内容的正确性、及时性和完整性。映火对因不可抗力或映火不能控制的原因造成的服务中断或其它缺陷不承担责任。
          </p>
          <h2>
            6. 协议修改
          </h2>
          <p>
            映火有权随时修改本协议的任何条款，并将修改后的协议公布在网站上。一旦协议的内容发生变动，映火将会在相关的页面提示修改内容。
          </p>
          <h2>
            7. 法律适用和管辖
          </h2>
          <p>
            本协议的订立、执行和解释及争议的解决均应适用中国法律。如发生映火服务条款与中国法律相抵触，则这些条款将完全按法律规定重新解释，而其他合法条款则依旧保持对用户的约束力。
          </p>
          <h2>
            8. 其他
          </h2>
          <p>
            本协议中的标题仅为方便而设，不影响对条款本身的解释。本协议项下的部分条款因违反所适用的法律而无效时不影响其他条款的效力。
          </p>
          <h2>
            9. 联系我们
          </h2>
          <p>
            如果您对本协议有任何疑问或顾虑，请通过<a href="mailto:yinghuo@dabaz.me" className="hover:text-orange-600 transition-colors">yinghuo@dabaz.me</a>与我们联系。
          </p>
        </div>
      </div>
    </div>
  )
}