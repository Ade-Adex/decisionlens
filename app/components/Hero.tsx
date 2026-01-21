'use client'

import Image from 'next/image'
import BarChatImage from '@/public/Images/barchatImage.jpeg'
import { motion } from 'framer-motion'
import {
  fadeUp,
  fadeLeft,
  scaleUp,
  stagger,
} from '@/app/lib/animations'

export default function Hero() {
  return (
    <motion.header
      id="home"
      className="relative overflow-hidden text-white pt-28 pb-36"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* ===== Gradient Background ===== */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0b1f4d] via-[#0e2b6f] to-[#091a3a]" />

      {/* ===== Glow Ellipses ===== */}
      <div className="absolute -bottom-32 -left-32 w-130 h-130 bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/2 -right-48 w-155 h-155 bg-blue-400/50 rounded-full blur-[150px]" />

      {/* ===== Dotted Pattern ===== */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)',
          backgroundSize: '22px 22px',
          maskImage:
            'linear-gradient(to bottom right, black 45%, transparent 90%)',
          WebkitMaskImage:
            'linear-gradient(to bottom right, black 45%, transparent 90%)',
        }}
      />

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left Text */}
        <motion.div className="space-y-6" variants={fadeLeft}>
          <motion.h1
            className="text-5xl lg:text-6xl font-extrabold leading-tight"
            variants={fadeUp}
          >
            Better Decisions.
          </motion.h1>

          <motion.p
            className="max-w-md text-slate-300 text-lg"
            variants={fadeUp}
          >
            Empowering businesses with advanced analytics, procurement
            solutions, and contract management tools.
          </motion.p>

          <motion.div className="flex gap-4 mt-8" variants={stagger}>
            {/* Learn More */}
            <motion.a
              href="https://wa.me/2348140877018?text=Hello%20I%20want%20to%20learn%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-md border border-white/40 hover:bg-white hover:text-[#0f2348] transition"
              variants={fadeUp}
            >
              Learn More
            </motion.a>

            {/* Get Started */}
            <motion.a
              href="https://wa.me/2348140877018?text=Hello%20I%20am%20ready%20to%20get%20started"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-md bg-[#00a6c6] hover:bg-[#008ba6] shadow-xl shadow-cyan-900/40 transition"
              variants={fadeUp}
            >
              Get Started
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div variants={scaleUp}>
          <Image
            src={BarChatImage}
            alt="Dashboard Preview"
            className="rounded-xl shadow-2xl border border-white/10"
            priority
          />
        </motion.div>
      </div>

      {/* ===== Curved Bottom Shape ===== */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="block w-full h-30 rotate-180"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,120 480,120 720,70 960,20 1200,20 1440,60 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>
    </motion.header>
  )
}
