import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2348012345678" // 👈 replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        flex items-center justify-center
        rounded-full
        bg-green-500
        text-white
        shadow-lg
        hover:bg-green-600
        hover:scale-110
        transition-all duration-300
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
