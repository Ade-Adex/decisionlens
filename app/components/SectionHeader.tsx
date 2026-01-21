import React from 'react'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeader({
  title,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      {/* Title with side lines */}
      <div className="flex items-center justify-center gap-4">
        <span className="hidden sm:block flex-1 h-px bg-slate-300" />

        <div className="inline-block">
          <h2 className="text-2xl md:text-3xl font-bold text-[#050265de] whitespace-nowrap">
            {title}
          </h2>

          {/* Yellow underline */}
          <div className="mt-1 h-0.5 w-[80%] mx-auto bg-amber-400 rounded" />
        </div>

        <span className="hidden sm:block flex-1 h-px bg-slate-300" />
      </div>

      {subtitle && (
        <p className="mt-3 font-semibold text-slate-500 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
