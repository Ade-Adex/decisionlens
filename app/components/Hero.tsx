// import React from 'react'
// import { BarChart3 } from 'lucide-react'

// export default function Hero() {
//   return (
//     <header
//       id="home"
//       className="relative bg-[#0f2348] text-white overflow-hidden pb-20 pt-24 md:pt-32"
//     >
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#163060] to-transparent opacity-50 z-0"></div>
//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
//         <div className="space-y-6">
//           <h1 className="text-5xl font-extrabold leading-tight">
//             Better Decisions.
//           </h1>
//           <p className="text-lg text-slate-300 max-w-md">
//             Empowering businesses with advanced analytics, procurement
//             solutions, and contract management tools.
//           </p>
//           <div className="flex gap-4 pt-4">
//             <button className="px-6 py-3 border border-slate-400 rounded-md font-medium hover:bg-white hover:text-[#0f2348] transition">
//               Learn More
//             </button>
//             <button className="px-6 py-3 bg-[#00a6c6] rounded-md font-medium hover:bg-[#008ba6] transition shadow-lg shadow-cyan-900/50">
//               Get Started
//             </button>
//           </div>
//         </div>
//         <div className="relative">
//           <div className="bg-white rounded-lg shadow-2xl p-2 border border-slate-700 transform rotate-1 hover:rotate-0 transition duration-500">
//             <div className="bg-slate-100 rounded overflow-hidden aspect-video relative flex items-center justify-center text-center p-8">
//               <BarChart3 className="w-16 h-16 text-[#0f2348] mx-auto mb-4" />
//               <span className="text-slate-400 font-medium">
//                 Dashboard Preview
//               </span>
//               <div className="absolute top-4 left-4 right-4 h-4 bg-white rounded shadow-sm"></div>
//               <div className="absolute top-10 left-4 w-1/3 h-24 bg-blue-100 rounded shadow-sm"></div>
//               <div className="absolute top-10 right-4 w-1/2 h-24 bg-white rounded shadow-sm flex items-center justify-center">
//                 <div className="w-10 h-10 rounded-full bg-orange-400"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute bottom-0 left-0 w-full leading-none">
//         <svg
//           className="block w-full h-12 lg:h-24"
//           viewBox="0 0 1440 320"
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#ffffff"
//             fillOpacity="1"
//             d="M0,224L1440,96L1440,320L0,320Z"
//           ></path>
//         </svg>
//       </div>
//     </header>
//   )
// }









import { BarChart3 } from 'lucide-react'

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-[linear-gradient(135deg,#0f2348,#163060)] text-white pt-28 pb-28">
      {/* Decorative gradients */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1e3a8a]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Text */}
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

        {/* Dashboard Mock */}
        <div className="relative">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-3 rotate-1 hover:rotate-0 transition duration-500">
            <div className="relative bg-slate-100 rounded-lg aspect-video overflow-hidden">
              {/* Top bar */}
              <div className="absolute top-2 left-2 right-2 h-4 bg-white rounded shadow" />

              {/* Charts */}
              <div className="absolute left-4 top-10 w-1/3 h-28 bg-blue-100 rounded shadow" />
              <div className="absolute right-4 top-10 w-1/2 h-28 bg-white rounded shadow flex items-center justify-center">
                <div className="w-12 h-12 bg-amber-400 rounded-full" />
              </div>

              <div className="absolute bottom-6 left-6 text-center">
                <BarChart3 className="w-12 h-12 text-[#0f2348] mx-auto" />
                <p className="text-xs text-slate-400 mt-1">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <svg
        className="absolute bottom-0 w-full h-24"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path fill="#ffffff" d="M0,224L1440,96L1440,320L0,320Z" />
      </svg>
    </header>
  )
}
