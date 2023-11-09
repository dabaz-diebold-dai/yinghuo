import FAQ from '@/components/sections/home/FAQ'
import Feature from '@/components/sections/home/Feature'
import Hero from '@/components/sections/home/Hero'
import Testmonial from '@/components/sections/home/Testimonial'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Hero />
      <Feature />
      <Testmonial />
      <FAQ />
    </main>
  )
}
