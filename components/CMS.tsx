import { CameraIcon, ChatBubbleLeftRightIcon, PresentationChartLineIcon, UserCircleIcon } from '@heroicons/react/24/outline'

export const features = [
  {
    name: '创新技术',
    description:
      '们的产品代表着摄影技术的最前沿。每一款相机和配件都蕴含着创新的技术，帮助您捕捉每一个瞬间，记录下最真实的情感和故事。',
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

export const navItems = [
  { name: '首页', href: '/' },
  { name: '关于', href: '/about' },
  { name: '产品', href: '/products' },
  { name: '博客', href: '/blog' },
  { name: '联系', href: '/contact' },
]