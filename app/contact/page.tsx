import ContactForm from '@/components/sections/contact/ContactForm'
import ContactHero from '@/components/sections/contact/ContactHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '联系我们',
  description: '欢迎您访问映火文化传媒的“联系我们”页面。无论您有任何疑问、建议或合作意向，我们都非常欢迎您的反馈和联系。',

  openGraph: {
    title: '联系我们 - 映火',
    description: '欢迎您访问映火文化传媒的“联系我们”页面。无论您有任何疑问、建议或合作意向，我们都非常欢迎您的反馈和联系。',
    url: 'https://yinghuo.dabaz.me/contact',
    siteName: '映火',
    images: [
      {
        url: 'https://yinghuo.dabaz.me/opengraph-image.jpg',
        width: 1920,
        height: 1280,
        alt: '欢迎您访问映火文化传媒的“联系我们”页面。无论您有任何疑问、建议或合作意向，我们都非常欢迎您的反馈和联系。',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '联系我们 - 映火',
    description: '欢迎您访问映火文化传媒的“联系我们”页面。无论您有任何疑问、建议或合作意向，我们都非常欢迎您的反馈和联系。',
    creator: '@dabaz_official',
    images: {
      url: 'https://yinghuo.dabaz.me/twitter-image.jpg',
      alt: '欢迎您访问映火文化传媒的“联系我们”页面。无论您有任何疑问、建议或合作意向，我们都非常欢迎您的反馈和联系。',
    },
  },
}

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <ContactHero />
      <ContactForm />
    </main>
  )
}