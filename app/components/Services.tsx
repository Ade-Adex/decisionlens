'use client'

import InfoCard from '@/app/components/InfoCard'
import SectionHeader from '@/app/components/shared/SectionHeader'
import { fadeUp, stagger } from '@/app/lib/animations' // adjust path if needed
import { motion } from 'framer-motion'
import { BarChart3, Briefcase, FileText } from 'lucide-react'

export default function Services() {
  return (
    <motion.section
      id="services"
      className="py-20 max-w-7xl mx-auto px-6"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // animate once when 30% visible
    >
      {/* Animate Section Header */}
      <motion.div variants={fadeUp}>
        <SectionHeader title="Our Services" />
      </motion.div>

      {/* Animate Info Cards with stagger */}
      <motion.div className="w-full mt-14 grid md:grid-cols-3 gap-10">
        <motion.div variants={fadeUp}>
          <InfoCard
            icon={<BarChart3 className="text-white" />}
            title="Analytics"
            text="Turn raw data into actionable insights."
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <InfoCard
            icon={<Briefcase className="text-white" />}
            title="Procurement Solutions"
            text="Streamline your sourcing and vendor management."
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <InfoCard
            icon={<FileText className="text-white" />}
            title="Contract Management"
            text="Simplify contracts, reduce risk, and ensure compliance."
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
