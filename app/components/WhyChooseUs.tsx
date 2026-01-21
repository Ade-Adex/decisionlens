'use client'

import InfoCard from '@/app/components/InfoCard'
import SectionHeader from '@/app/components/shared/SectionHeader'
import { fadeLeft, fadeUp, scaleUp, stagger } from '@/app/lib/animations'
import { motion } from 'framer-motion'
import { Cpu, Users } from 'lucide-react'
import Image from 'next/image'

export default function WhyChooseUs() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-white"
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
      <motion.div className="max-w-7xl mx-auto px-6 mt-14 grid md:grid-cols-3 gap-8 items-stretch">
        {/* InfoCard 1 */}
        <motion.div variants={fadeLeft}>
          <InfoCard
            icon={<Users className="w-8 h-8 text-white" />}
            title="Experienced Analysts"
            text="Deliver high transparent standards with innovative applications and industry-leading expertise."
          />
        </motion.div>

        {/* InfoCard 2 */}
        <motion.div variants={fadeUp}>
          <InfoCard
            icon={<Cpu className="w-8 h-8 text-amber-400" />}
            title="AI-Powered Tools"
            text="Powerful intelligence experts and reasoned platforms designed for modern business scale."
          />
        </motion.div>

        {/* Image block */}
        <motion.div
          variants={scaleUp}
          className="bg-slate-200 rounded-xl overflow-hidden shadow-lg h-64 md:h-auto relative group"
        >
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="Team working"
            fill
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-500"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
