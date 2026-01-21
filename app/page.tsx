import React from 'react'
import Navbar from '@/app/components/navbar/Navbar'
import Hero from '@/app/components/Hero'
import Services from '@/app/components/Services'
import HowItWorks from '@/app/components/HowItWorks'
import WhyChooseUs from '@/app/components/WhyChooseUs'
import Testimonials from '@/app/components/Testimonials'
import Footer from '@/app/components/footer/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}
