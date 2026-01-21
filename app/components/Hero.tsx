import Image from 'next/image'
import BarChatImage from '@/public/Images/barchatImage.jpeg'

export default function Hero() {
  return (
    <header id="home" className="relative overflow-hidden text-white pt-28 pb-36">
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
        <div>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Better Decisions.
          </h1>

          <p className="mt-6 max-w-md text-slate-300 text-lg">
            Empowering businesses with advanced analytics, procurement
            solutions, and contract management tools.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-7 py-3 rounded-md border border-white/40 hover:bg-white hover:text-[#0f2348] transition">
              Learn More
            </button>
            <button className="px-7 py-3 rounded-md bg-[#00a6c6] hover:bg-[#008ba6] shadow-xl shadow-cyan-900/40 transition">
              Get Started
            </button>
          </div>
        </div>

        <Image
          src={BarChatImage}
          alt="Dashboard Preview"
          className="rounded-xl shadow-2xl border border-white/10"
          priority
        />
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
    </header>
  )
}
