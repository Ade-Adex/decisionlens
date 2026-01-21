'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/app/components/shared/SectionHeader'
import { fadeUp, stagger } from '@/app/lib/animations'

interface StepProps {
  n: string
  label: string
  bg: string
  last?: boolean
}

function Step({ n, label, bg, last = false }: StepProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={`${bg} flex-1 py-5 px-6 flex items-center gap-4 text-white relative`}
    >
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white text-[#0f2348] flex items-center justify-center font-bold text-sm md:text-base">
        {n}
      </div>

      <span className="text-sm md:text-base font-medium">{label}</span>

      {/* Connector — desktop only */}
      {!last && (
        <div className="hidden md:block absolute right-0 top-0 h-full w-6 translate-x-1/2">
          <div className="h-full w-full bg-inherit skew-x-[-20deg]" />
        </div>
      )}
    </motion.div>
  )
}

export default function HowItWorks() {
  return (
    <motion.section
      id="process"
      className="bg-slate-50 py-16"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div variants={fadeUp}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="How It Works" />
        </div>
      </motion.div>

      <motion.div
        className="
          mt-8
          flex flex-col
          md:flex-row
          rounded-lg
          shadow
          overflow-visible
          md:overflow-hidden
          max-w-7xl mx-auto
        "
      >
        <Step n="1" label="Collect & Analyze Data" bg="bg-[#0f2348]" />
        <Step n="2" label="Optimize Procurement" bg="bg-[#007f9c]" />
        <Step
          n="3"
          label="Manage Contracts Efficiently"
          bg="bg-[#005a70]"
          last
        />
      </motion.div>
    </motion.section>
  )
}
