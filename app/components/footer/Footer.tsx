'use client'

import SectionHeader from '@/app/components/shared/SectionHeader'
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[#0f2348] text-white pt-28 pb-16 overflow-hidden"
    >
      {/* ===== Curved Top Shape ===== */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 140"
          className="block w-full h-35"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C240,40 480,40 720,70 960,100 1200,100 1440,60 L1440,0 L0,0 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* ===== Ellipse Glows ===== */}
      <div className="absolute -bottom-32 -left-40 w-105 h-105 bg-blue-500/20 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 -right-32 w-130 h-130 bg-cyan-500/20 rounded-full blur-[160px]" />

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <SectionHeader
          title="Ready to transform your business?"
          titleColor="text-white"
        />

        {/* ===== Contact Form ===== */}
        <form className="space-y-4 mt-12 max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <input
              className="w-full px-4 py-2 rounded-md bg-transparent text-white border border-slate-300 placeholder-slate-500 focus:outline-none"
              placeholder="Name"
            />
            <input
              className="w-full px-4 py-2 rounded-md bg-transparent text-white border border-slate-300 placeholder-slate-500 focus:outline-none"
              placeholder="Email"
            />
          </div>

          <input
            className="w-full px-4 py-2 rounded-md bg-transparent text-white border border-slate-300 placeholder-slate-500 focus:outline-none"
            placeholder="Company"
          />

          <textarea
            className="w-full h-28 px-4 py-2 rounded-md bg-transparent text-white border border-slate-300 placeholder-slate-500 resize-none focus:outline-none"
            placeholder="Message"
          />

          <button className="mt-2 px-8 py-3 bg-[#D29D48] text-[#0f2348] font-bold rounded-md shadow hover:bg-[#c08a3a] transition">
            Get Started
          </button>
        </form>

        {/* ===== Social Media Icons ===== */}
        <div className="mt-14 flex justify-center gap-6">
          <SocialIcon href="#" label="Facebook">
            <FaFacebookF />
          </SocialIcon>

          <SocialIcon href="#" label="WhatsApp">
            <FaWhatsapp />
          </SocialIcon>

          <SocialIcon href="#" label="LinkedIn">
            <FaLinkedinIn />
          </SocialIcon>

          <SocialIcon href="#" label="Instagram">
            <FaInstagram />
          </SocialIcon>

          <SocialIcon href="#" label="Twitter / X">
            <FaXTwitter />
          </SocialIcon>
        </div>

        <p className="mt-16 text-slate-400 text-sm">
          © {new Date().getFullYear()} DecisionLens. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

/* ===== Reusable Social Icon ===== */
function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-11 h-11
        rounded-full
        border border-white/30
        flex items-center justify-center
        text-lg
        text-white
        transition-all duration-300
        hover:bg-[#D29D48]
        hover:text-[#0f2348]
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {children}
    </a>
  )
}
