import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Hero from '@/components/Hero'

function Home() {
  return (
    <div className="font-cairo bg-white">
      <Navigation />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <Features />
      </div>
      <div className=" bg-gray-50 text-slate-900 antialiased px-4 py-8">
        <div className="max-w-[1100px] mx-auto">
          <Testimonials />
          <FAQ />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
