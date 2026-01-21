import SectionHeader from '@/app/components/SectionHeader'
import React from 'react'

interface StepProps {
  n: string
  label: string
  bg: string
  last?: boolean
}

function Step({ n, label, bg, last = false }: StepProps) {
  return (
    <div
      className={`${bg} flex-1 py-5 px-6 flex items-center gap-4 text-white relative`}
    >
      <div className="w-8 h-8 rounded-full bg-white text-[#0f2348] flex items-center justify-center font-bold">
        {n}
      </div>
      <span className="font-medium">{label}</span>

      {!last && (
        <div className="absolute right-0 top-0 h-full w-6 translate-x-1/2">
          <div className="h-full w-full bg-inherit skew-x-[-20deg]" />
        </div>
      )}
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="process" className="bg-slate-50 py-16">
      <div className='max-w-7xl mx-auto px-6'>
      <SectionHeader title="How It Works" />

      <div className="w-full flex overflow-hidden rounded-lg shadow mt-8">
        <Step n="1" label="Collect & Analyze Data" bg="bg-[#0f2348]" />
        <Step n="2" label="Optimize Procurement" bg="bg-[#007f9c]" />
        <Step
          n="3"
          label="Manage Contracts Efficiently"
          bg="bg-[#005a70]"
          last
        />
      </div>

      </div>
    </section>
  )
}
