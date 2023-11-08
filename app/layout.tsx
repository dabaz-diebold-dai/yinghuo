import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://yinghuo.dabaz.me'),
  title: {
    default: '映火',
    template: '%s | 映火'
  },
  description: '与映火一同开启您的专业摄影之旅',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: '映火',
    description: '与映火一同开启您的专业摄影之旅',
    url: 'https://yinghuo.dabaz.me',
    siteName: '映火',
    images: [
      {
        url: 'https://yinghuo.dabaz.me/opengraph-image.jpg',
        width: 1920,
        height: 1280,
        alt: '与映火一同开启您的专业摄影之旅',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/icons/icon.png',
    shortcut: '/icons/shortcut-icon.png',
    apple: '/icons/apple-icon.png',
  },

  manifest: 'https://yinghuo.dabaz.me/manifest.json',

  twitter: {
    card: 'summary_large_image',
    title: 'DabAZ',
    description: '与映火一同开启您的专业摄影之旅',
    creator: '@dabaz_official',
    images: {
      url: 'https://yinghuo.dabaz.me/twitter-image.jpg',
      alt: '与映火一同开启您的专业摄影之旅',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
