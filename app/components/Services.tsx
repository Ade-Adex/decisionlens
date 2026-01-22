'use client'

import InfoCard from '@/app/components/InfoCard'
import SectionHeader from '@/app/components/shared/SectionHeader'
import { fadeUp, stagger } from '@/app/lib/animations' // adjust path if needed
import { motion } from 'framer-motion'
import {
  BarChart3,
  Briefcase,
  ShoppingBag,
  PenTool,
} from 'lucide-react'

export default function Services() {
  return (
    <motion.section
      id="services"
      className="py-10 max-w-7xl mx-auto px-6"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // animate once when 30% visible
    >
      {/* Animate Section Header */}
      <motion.div variants={fadeUp}>
        <SectionHeader title="Our Services" />
      </motion.div>

      {/* Services Grid */}
      <motion.div className="w-full mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Analytics */}
        <motion.div variants={fadeUp}>
          <InfoCard
            icon={<BarChart3 className="w-8 h-8 text-white" />}
            title="Analytics"
            text="Turn raw data into actionable insights that drive smarter decisions."
          />
        </motion.div>

        {/* Procurement */}
        <motion.div variants={fadeUp}>
          <InfoCard
            icon={<Briefcase className="w-8 h-8 text-white" />}
            title="Procurement & Contract Management"
            text="Streamline sourcing, manage vendors, ensure compliance, and reduce risk."
          />
        </motion.div>

        {/* Shopify */}
        <motion.div variants={fadeUp}>
          <InfoCard
            icon={<ShoppingBag className="w-8 h-8 text-white" />}
            title="Shopify Expert"
            text="Build, optimize, and scale high-converting Shopify e-commerce stores."
          />
        </motion.div>

        {/* Product Design */}
        <motion.div variants={fadeUp}>
          <InfoCard
            icon={<PenTool className="w-8 h-8 text-white" />}
            title="Product Design"
            text="Design intuitive, user-focused digital products and experiences."
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
