import { CameraIcon, ChatBubbleLeftRightIcon, PresentationChartLineIcon, UserCircleIcon } from '@heroicons/react/24/outline'

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
    id: 1,
    question: '映火所售卖的摄影器材有什么特别之处？',
    answer: '我们的摄影器材经过精心挑选，只为提供业内最新、最专业的技术。不仅性能卓越，而且易于使用，满足各类摄影爱好者和专业人士的需求。',
  },
  {
    id: 2,
    question: '如果我是摄影初学者，映火能为我提供哪些帮助？',
    answer: '映火不仅为初学者提供高性价比的入门器材，还有丰富的教程和指导服务。我们的专家团队可以帮助您选择最适合您需求的设备，并指导您如何使用它们。',
  },
  {
    id: 3,
    question: '在映火购买器材后，如果遇到技术问题，该如何获得支持？',
    answer: '我们提供全天候的技术支持服务。您可以通过电话、电邮或我们的在线客服平台联系我们的技术支持团队，我们会尽快帮您解决问题。',
  },
  {
    id: 4,
    question: '映火是否提供摄影器材的保修服务？',
    answer: '是的，我们所有的摄影器材均提供厂家的原始保修服务。具体保修期限和服务内容，请参照产品说明书。',
  },
  {
    id: 5,
    question: '我能在映火官网上直接购买器材吗？',
    answer: '抱歉，现在映火官网的商场正处于维护之中，请耐心等待，感谢您的理解。',
  },
]