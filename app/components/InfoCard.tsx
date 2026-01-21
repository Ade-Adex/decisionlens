import { ReactNode } from 'react'

interface InfoCardProps {
  icon: ReactNode
  title: string
  text: string
}

export default function InfoCard({ icon, title, text }: InfoCardProps) {
  return (
    <div className="bg-white md:h-80 rounded-xl p-8 text-center shadow-lg border border-slate-100 hover:shadow-xl transition flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-[#0f2348] flex items-center justify-center mb-6">
        {icon}
      </div>

      <h3 className="font-bold text-lg md:text-xl text-[#0f2348] mb-2">{title}</h3>
      <div className="w-full h-0.5 bg-gray-200 rounded mb-4" />

      <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed">
        {text}
      </p>
    </div>
  )
}
