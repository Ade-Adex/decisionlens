// import React from 'react';

// export default function Footer() {
//   return (
//     <footer id="contact" className="bg-[#0f2348] text-white py-16 relative overflow-hidden">
//       <div className="absolute top-0 left-0 w-full leading-none rotate-180">
//          <svg className="block w-full h-12 lg:h-16" viewBox="0 0 1440 320" preserveAspectRatio="none">
//            <path fill="#f8fafc" fillOpacity="1" d="M0,224L1440,96L1440,320L0,320Z"></path>
//          </svg>
//       </div>

//       <div className="max-w-2xl mx-auto px-6 relative z-10 pt-10">
//         <h2 className="text-3xl font-bold text-center mb-8">Ready to transform your business?</h2>
        
//         <form className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <input type="text" placeholder="Name" className="w-full p-3 rounded bg-slate-800/50 border border-slate-600 focus:border-[#00a6c6] outline-none transition placeholder-slate-400" />
//             <input type="email" placeholder="Email" className="w-full p-3 rounded bg-slate-800/50 border border-slate-600 focus:border-[#00a6c6] outline-none transition placeholder-slate-400" />
//           </div>
//           <input type="text" placeholder="Company" className="w-full p-3 rounded bg-slate-800/50 border border-slate-600 focus:border-[#00a6c6] outline-none transition placeholder-slate-400" />
//           <textarea placeholder="Message" rows={4} className="w-full p-3 rounded bg-slate-800/50 border border-slate-600 focus:border-[#00a6c6] outline-none transition placeholder-slate-400 resize-none"></textarea>
          
//           <div className="text-center pt-4">
//              <button type="submit" className="px-8 py-3 bg-amber-500 rounded font-bold text-[#0f2348] hover:bg-amber-400 transition shadow-lg">
//                Get Started
//              </button>
//           </div>
//         </form>
        
//         <div className="mt-20 pt-8 border-t border-slate-700/50 text-center text-slate-400 text-sm">
//           © {new Date().getFullYear()} DecisionLens. All rights reserved.
//         </div>
//       </div>

//       {/* Background Orbs */}
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
//     </footer>
//   );
// }









export default function Footer() {
  return (
    <footer className="relative bg-[#0f2348] text-white pt-24 pb-16 overflow-hidden">
      {/* Top wave */}
      <svg
        className="absolute top-0 w-full h-20 rotate-180"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path fill="#f8fafc" d="M0,224L1440,96L1440,320L0,320Z" />
      </svg>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Ready to transform your business?
        </h2>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input className="input" placeholder="Name" />
            <input className="input" placeholder="Email" />
          </div>
          <input className="input w-full" placeholder="Company" />
          <textarea
            className="input w-full h-28 resize-none"
            placeholder="Message"
          />

          <button className="mt-6 px-8 py-3 bg-amber-500 text-[#0f2348] font-bold rounded shadow hover:bg-amber-400">
            Get Started
          </button>
        </form>

        <p className="mt-20 text-slate-400 text-sm">
          © {new Date().getFullYear()} DecisionLens. All rights reserved.
        </p>
      </div>

      {/* Orbs */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-600/10 blur-3xl rounded-full" />
    </footer>
  )
}
