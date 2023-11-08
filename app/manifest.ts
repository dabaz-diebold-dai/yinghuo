import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '映火',
    short_name: '映火',
    description: "与映火一同开启您的专业摄影之旅",
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#FAFAFA',
    icons: [
      {
        src: '/icon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}