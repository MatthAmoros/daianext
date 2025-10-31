import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Values from '@/components/sections/Values'
import Products from '@/components/sections/Products'
import Clients from '@/components/sections/Clients'
import CTA from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Clients />
      <CTA />
    </>
  )
}
