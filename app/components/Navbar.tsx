'use client'
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Change background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f2348] shadow-lg py-5 md:py-3'
          : ' bg-[#0f2348] md:bg-transparent py-5'
      }`}
    >
      <div
        className={` max-w-7xl mx-auto px-6 flex justify-between items-center`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-tight cursor-pointer">
          DecisionLens
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-200 hover:text-[#00a6c6] font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#00a6c6] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#008ba6] transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#0f2348] border-t border-slate-700 absolute w-full h-screen top-17.5 left-0 p-6 space-y-6 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-200 text-lg font-medium hover:text-[#00a6c6]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block bg-[#00a6c6] text-white text-center py-3 rounded-md font-bold"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
