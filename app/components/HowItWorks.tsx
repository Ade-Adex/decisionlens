'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/app/components/shared/SectionHeader'
import { fadeUp, stagger } from '@/app/lib/animations'

interface StepProps {
  n: string
  title: string
  description: string
  bg: string
  isFirst?: boolean
}

function Step({ n, title, description, bg, isFirst = false }: StepProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={`
        ${bg} flex-1 py-6 px-6 text-white relative items-center flex
        step-container ${isFirst ? 'first-step' : ''} ${bg === '#005a70' ? 'last-step' : ''}
      `}
    >
      <div className="flex items-center gap-4 w-full relative z-10">
        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold shrink-0">
          {n}
        </div>

        <div className="pr-6">
          <h3 className="font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap">
            {title}
          </h3>
          {description && (
            <p className="hidden lg:block mt-0.5 text-[10px] text-white/70 leading-tight">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}


export default function HowItWorks() {
  return (
    <motion.section
      id="process"
      className="py-16"
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
          md:h-20
          max-w-7xl mx-auto
          md:overflow-visible
        "
      >
        <Step
          n="1"
          title="Collect & Analyze Data"
          description="Analyze business goals."
          bg="bg-[#0f2348]"
          isFirst
        />

        <Step
          n="2"
          title="Optimize Procurement"
          description="Scalable data systems."
          bg="bg-[#007f9c]"
        />

        <Step
          n="3"
          title="Manage Contracts Efficiently"
          description="Ensure compliance & speed."
          bg="bg-[#005a70]"
        />
      </motion.div>
    </motion.section>
  )
}
