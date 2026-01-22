'use client'

import InfoCard from '@/app/components/InfoCard'
import SectionHeader from '@/app/components/shared/SectionHeader'
import { fadeLeft, fadeUp, scaleUp, stagger } from '@/app/lib/animations'
import { motion } from 'framer-motion'
import { Cpu, Users, BarChart3, Layers, ShieldCheck } from 'lucide-react'
// import Image from 'next/image'

export default function WhyChooseUs() {
  return (
    <motion.section
      id="about"
      className="py-10 bg-white"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Section Header */}
      <motion.div variants={fadeUp}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Why Choose DecisionLens?"
            subtitle="Driving better decisions through innovation and expertise."
          />
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div className="max-w-7xl mx-auto px-6 mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {/* Card 1 */}
        <motion.div variants={fadeLeft}>
          <InfoCard
            icon={<Users className="w-8 h-8 text-amber-400" />}
            title="Experienced Team"
            text="Skilled professionals with proven expertise."
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={fadeUp}>
          <InfoCard
            icon={<BarChart3 className="w-8 h-8 text-amber-400" />}
            title="Data-Driven Approach"
            text="Insights that guide smarter decisions."
          />
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={scaleUp}>
          <InfoCard
            icon={<Layers className="w-8 h-8 text-amber-400" />}
            title="Integrated Solutions"
            text="Everything you need in one place."
          />
        </motion.div>

        {/* Card 4 */}
        <motion.div variants={scaleUp}>
          <InfoCard
            icon={<ShieldCheck className="w-8 h-8 text-amber-400" />}
            title="Trusted Results"
            text="Focused on impact, efficiency, and growth."
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
