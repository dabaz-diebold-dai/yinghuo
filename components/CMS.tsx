import { CameraIcon, ChartBarIcon, ChatBubbleLeftRightIcon, HandThumbUpIcon, PresentationChartLineIcon, SparklesIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export const navItems = [
  { name: '首页', href: '/' },
  { name: '关于', href: '/about' },
  { name: '产品', href: '/products' },
  { name: '博客', href: '/blog' },
  { name: '联系', href: '/contact' },
]

export const features = [
  {
    name: '创新技术',
    description:
      '我们的产品代表着摄影技术的最前沿。每一款相机和配件都蕴含着创新的技术，帮助您捕捉每一个瞬间，记录下最真实的情感和故事。',
    icon: CameraIcon,
  },
  {
    name: '卓越性能',
    description:
      '性能是摄影器材的核心。我们的每一款产品都经过严格测试，确保能在各种环境下提供稳定而强大的性能，无论是在低光环境还是动态捕捉场景。',
    icon: PresentationChartLineIcon,
  },
  {
    name: '人性化设计',
    description:
      '设计以人为本。我们理解摄影师在拍摄时对于操作便利性的需求，因此我们选择的摄影器材均具备直观的操作界面，让创作过程更加流畅自如。',
    icon: UserCircleIcon,
  },
  {
    name: '专业服务',
    description:
      '映火不仅仅提供优质产品，更有一流的客户服务。从产品咨询到售后支持，我们的专业团队都会提供个性化服务，确保您的需求得到满足。',
    icon: ChatBubbleLeftRightIcon,
  },
]

export const testimonials = [
  {
    content: '自从使用映火出售的摄影器材后，我的作品质量显著提升。每一个细节都清晰可见，色彩更加生动。这绝对是我摄影生涯中最好的投资！',
    name: '王莉',
    occupation: '自由摄影师',
  },
  {
    content: '映火的服务团队真的太棒了！他们对产品了解透彻，能迅速解答我的所有问题。购买过程简单快捷，我对我的新相机和配件感到非常满意。',
    name: 'Michael Chen',
    occupation: '婚礼摄影工作室主理人',
  },
  {
    content: '我对映火提供的专业摄影灯光系统印象深刻。它们提供了我所需要的一切，使我的摄影工作室更具专业性。客户对照片效果赞不绝口！',
    name: '李思琪',
    occupation: '摄影师、视觉艺术家',
  },
]

export const faqs = [
  {
    id: "1",
    question: '映火所售卖的摄影器材有什么特别之处？',
    answer: '我们的摄影器材经过精心挑选，只为提供业内最新、最专业的技术。不仅性能卓越，而且易于使用，满足各类摄影爱好者和专业人士的需求。',
  },
  {
    id: "2",
    question: '如果我是摄影初学者，映火能为我提供哪些帮助？',
    answer: '映火不仅为初学者提供高性价比的入门器材，还有丰富的指导服务。我们的专家团队可以帮助您选择最适合您需求的设备，并指导您如何使用它们。',
  },
  {
    id: "3",
    question: '在映火购买器材后，如果遇到技术问题，该如何获得支持？',
    answer: '我们提供全天候的技术支持服务。您可以通过电子邮件联系我们的技术支持团队，我们会尽快帮您解决问题。',
  },
  {
    id: "4",
    question: '映火是否提供摄影器材的保修服务？',
    answer: '是的，我们所有的摄影器材均提供厂家的原始保修服务。具体保修期限和服务内容，请参照产品说明书。',
  },
  {
    id: "5",
    question: '我能在映火官网上直接购买器材吗？',
    answer: '抱歉，现在映火官网的商店正处于维护之中，请耐心等待，感谢您的理解。',
  },
]

export const footerNavItems = {
  solutions: [
    { name: '产品', href: '/products' },
    { name: '个性化咨询', href: '/contact' },
  ],
  support: [
    { name: '技术支持', href: 'mailto:hello@dabaz.me' },
    { name: '常见问题', href: '/faqs' },
  ],
  company: [
    { name: '关于我们', href: '/about' },
    { name: '博客', href: '/blog' },
    { name: '产品', href: '/products' },
  ],
  legal: [
    { name: '隐私政策', href: '/privacy' },
    { name: '用户协议', href: '/terms' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: GitHub,
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: Dribbble,
    },
  ],
}

export function Facebook() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="text-neutral-400 hover:text-neutral-500 h-6 w-6 transition-colors">
      <path
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="currentColor"
      />
    </svg>
  )
}

export function Instagram() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="text-neutral-400 hover:text-neutral-500 h-6 w-6 transition-colors">
      <path
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill="currentColor"
      />
    </svg>
  )
}

export function Twitter() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="text-neutral-400 hover:text-neutral-500 h-6 w-6 transition-colors">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" fill="currentColor" />
    </svg>
  )
}

export function GitHub() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="text-neutral-400 hover:text-neutral-500 h-6 w-6 transition-colors">
      <path
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill="currentColor"
      />
    </svg>
  )
}

export function Dribbble() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="text-neutral-400 hover:text-neutral-500 h-6 w-6 transition-colors">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" fill="currentColor"
      />
    </svg>
  )
}

export const values = [
  {
    name: '品质至上',
    description:
      '我们坚信，优质的产品是企业的生命线，我们对每一件出售的器材负责，确保它们能够满足最严苛的品质要求。',
    icon: HandThumbUpIcon,
  },
  {
    name: '顾客为先',
    description:
      '顾客的满意是我们不懈追求的目标。我们倾听每一位顾客的反馈，持续优化我们的服务，以期超越顾客的期待。',
    icon: UserGroupIcon,
  },
  {
    name: '创新驱动',
    description:
      '在快速发展的市场中，创新是我们不断前进的动力。我们探索前沿技术，不断更新产品线，为顾客带来更多选择和可能。',
    icon: SparklesIcon,
  },
  {
    name: '共同成长',
    description:
      '我们相信，与顾客、合作伙伴以及员工的共同成长能够带动企业的持续进步。我们投资于人才和技术，以确保能够与所有利益相关者共享成功。',
    icon: ChartBarIcon,
  },
]

export const people = [
  {
    name: '赵腾飞',
    role: 'CEO 首席执行官',
    imageUrl:
      '/images/zhaotengfei.jpg',
  },
  {
    name: '夏艺珂',
    role: 'CFO 首席财务官',
    imageUrl:
      '/images/xiayike.jpg',
  },
  {
    name: '戴博',
    role: 'CTO 首席技术官',
    imageUrl:
      '/images/dabaz.jpg',
  },
]

export const productItems = [
  {
    id: 1,
    name: '索尼 Alpha 7R IV 35mm full-frame camera',
    price: '￥18498',
    imageSrc: '/images/products/sony-alpha-a7r-iv.webp',
    imageAlt: '这款全画幅无反相机以其6100万像素的高分辨率和快速自动对焦系统，为专业摄影提供了新的可能。',
  },
  {
    id: 2,
    name: '佳能 EOS 5D Mark IV',
    price: '￥16088',
    imageSrc: '/images/products/canon-eos-5d-mark-iv.webp',
    imageAlt: '一款多功能的全画幅数码单反相机，适合各种拍摄场景，从风光到人像，都能捕捉惊人的细节和色彩。',
  },
  {
    id: 3,
    name: '佳能 EF 24-70mm f/2.8L II USM',
    price: '￥13299',
    imageSrc: '/images/products/canon-ef.webp',
    imageAlt: '这款多功能变焦镜头以其出色的成像质量和大光圈成为专业摄影师的首选。',
  },
  {
    id: 4,
    name: '索尼 FE 70-200mm f/2.8 GM OSS',
    price: '￥18780',
    imageSrc: '/images/products/sony-fe.webp',
    imageAlt: '一款适用于索尼E卡口全画幅相机的远摄变焦镜头，无论是体育还是野生动物摄影，都能提供卓越性能。',
  },
  {
    id: 5,
    name: '曼富图Befree Advanced三脚架',
    price: '￥3178',
    imageSrc: '/images/products/manfrotto-bh.webp',
    imageAlt: '适合旅行摄影师的轻便三脚架，结合了便携性与稳定性。',
  },
  {
    id: 6,
    name: '神牛V1闪光灯',
    price: '￥3220',
    imageSrc: '/images/products/godox-v1c-canon.webp',
    imageAlt: '一款适用于多种相机品牌的便携式高性能闪光灯，为摄影师提供强大的光线支持。',
  },
]

export const posts = [
  {
    id: 1,
    title: '映火博客正式上线',
    href: '/blog/first-blog',
    description:
      '欢迎大家来到映火文化传媒的官方博客！这是我们的第一篇文章，标志着我们在摄影共享和交流道路上的新开始。在这里，我们将与您分享摄影的一切：从基础技巧到高级拍摄技巧，从最新器材评测到行业动态，我们希望这个博客能成为您获得灵感、学习新知识、提高摄影技巧的宝贵资源。',
    date: 'Oct 16, 2023',
    datetime: '2023-10-16',
    author: {
      name: '戴博',
      role: 'CTO 首席技术官',
      imageUrl:
        '/images/dabaz.jpg',
      imageAlt: '戴博',
    },
  },
]