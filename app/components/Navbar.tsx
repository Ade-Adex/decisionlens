'use client'
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  {name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section observer
  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0.1,
      },
    )

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f2348] shadow-lg py-4'
          : 'bg-[#0f2348] md:bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white cursor-pointer">
          DecisionLens
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)

            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all
                  ${
                    isActive
                      ? 'bg-[#008ba6] text-white'
                      : 'text-slate-200 hover:text-[#00a6c6]'
                  }
                `}
              >
                {link.name}
              </a>
            )
          })}

          <a
            href="#contact"
            className="ml-3 bg-transparent border border-[#00a6c6] hover:text-[#00a6c6] hover:border-white text-white px-5 py-2 rounded-md font-semibold transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f2348] absolute w-full h-screen top-full left-0 p-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-lg font-medium transition
                  ${
                    isActive
                      ? 'bg-[#008ba6] text-white'
                      : 'text-slate-200 hover:text-[#00a6c6]'
                  }
                `}
              >
                {link.name}
              </a>
            )
          })}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block bg-transparent border border-[#00a6c6] hover:text-[#00a6c6] hover:border-white text-white text-center py-3 rounded-md font-bold"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
