import Feature from '@/components/sections/Feature'
import Hero from '@/components/sections/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Hero />
      <Feature />
    </main>
  )
}
