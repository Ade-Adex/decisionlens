import SectionHeader from '@/app/components/SectionHeader'
import InfoCard from '@/app/components/InfoCard'
import { BarChart3, Briefcase, FileText } from 'lucide-react'

export default function Services() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <SectionHeader title="Our Services" />

      <div className="w-full mt-14 grid md:grid-cols-3 gap-10">
        <InfoCard
          icon={<BarChart3 className="text-white" />}
          title="Analytics"
          text="Turn raw data into actionable insights."
        />
        <InfoCard
          icon={<Briefcase className="text-white" />}
          title="Procurement Solutions"
          text="Streamline your sourcing and vendor management."
        />
        <InfoCard
          icon={<FileText className="text-white" />}
          title="Contract Management"
          text="Simplify contracts, reduce risk, and ensure compliance."
        />
      </div>
    </section>
  )
}
