import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Pillars from '@/components/Pillars'
import Services from '@/components/Services'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Certification from '@/components/Certification'
import Conservation from '@/components/Conservation'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-navy min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Pillars />
      <Services />
      <About />
      <Gallery />
      <Certification />
      <Conservation />
      <CTASection />
      <Footer />
    </main>
  )
}
