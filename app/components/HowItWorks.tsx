'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/app/components/shared/SectionHeader'
import { fadeUp, stagger } from '@/app/lib/animations'

interface StepProps {
  n: string
  title: string
  description: string
  bg: string
  last?: boolean
}


function Step({ n, title, description, bg, last = false }: StepProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={`${bg} flex-1 py-6 px-6 text-white relative`}
    >
      <div className="flex items-start gap-4">
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-[#0f2348] flex items-center justify-center font-bold text-sm md:text-base shrink-0">
          {n}
        </div>

        <div>
          <h3 className="font-semibold text-base md:text-lg">{title}</h3>
          <p className="mt-1 text-sm text-white/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

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
        <Step
          n="1"
          title="Analyze Needs"
          description="Understand your business challenges, workflows, and strategic goals."
          bg="bg-[#0f2348]"
        />

        <Step
          n="2"
          title="Build Solutions"
          description="Design data-driven, scalable systems tailored to your operations."
          bg="bg-[#007f9c]"
        />

        <Step
          n="3"
          title="Optimize & Manage"
          description="Continuously improve performance while ensuring compliance and control."
          bg="bg-[#005a70]"
          last
        />
      </motion.div>
    </motion.section>
  )
}
