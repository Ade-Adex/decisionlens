import { Users, Cpu } from 'lucide-react'
import SectionHeader from '@/app/components/SectionHeader'
import InfoCard from '@/app/components/InfoCard'

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Why Choose DecisionLens?"
          subtitle="Driving better decisions through innovation and expertise."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-8 items-stretch">
          <InfoCard
            icon={<Users className="w-8 h-8 text-white" />}
            title="Experienced Analysts"
            text="Deliver high transparent standards with innovative applications and industry-leading expertise."
          />

          <InfoCard
            icon={<Cpu className="w-8 h-8 text-amber-400" />}
            title="AI-Powered Tools"
            text="Powerful intelligence experts and reasoned platforms designed for modern business scale."
          />

          {/* Image block stays unique */}
          <div className="bg-slate-200 rounded-xl overflow-hidden shadow-lg h-64 md:h-auto relative group">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team working"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
