'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '@/app/lib/animations'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  center?: boolean
  titleColor?: string
}

export default function SectionHeader({
  title,
  subtitle,
  center = true,
  titleColor = 'text-[#050265de]',
}: SectionHeaderProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      {/* Title with side lines */}
      <motion.div
        className="flex items-center justify-center gap-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <span className="hidden sm:block flex-1 h-px bg-slate-300" />

        <div className="inline-block">
          <motion.h2
            className={`text-2xl md:text-3xl font-bold md:whitespace-nowrap ${titleColor}`}
            variants={fadeUp}
          >
            {title}
          </motion.h2>

          {/* Underline */}
          <motion.div
            className="mt-1 h-0.5 w-[80%] mx-auto bg-amber-400 rounded"
            variants={fadeUp}
          />
        </div>

        <span className="hidden sm:block flex-1 h-px bg-slate-300" />
      </motion.div>

      {subtitle && (
        <motion.p
          className="mt-3 font-semibold text-slate-500 max-w-xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
