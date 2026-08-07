import React from 'react'
import { AiOutlineSync } from 'react-icons/ai'

interface EducationCardProps {
  title: string
  icon: React.ComponentType // React component passed as an icon (e.g., from react-icons)
  org: string
  time: string
  points: string[] // bullet points describing the experience
  inProgress?: boolean // shows a tilted "in progress" ribbon badge on the card
}

export default function EducationCard({
  title,
  icon: Icon,
  org,
  time,
  points,
  inProgress,
}: EducationCardProps) {
  return (
    // Outer card container with styling and hover animation
    <div className="dark:bg-dark/50 bg-light relative mx-5 rounded-lg py-8 pr-10 pl-7 text-[15px] shadow-md transition-transform duration-300 hover:-translate-y-3 hover:rotate-1 hover:shadow-xl hover:shadow-cyan-500/20 sm:mx-10 sm:py-14 sm:text-[16px] md:mx-0">
      {/* "In progress" ribbon badge*/}
      {inProgress && (
        <div className="pointer-events-none absolute top-0 right-0 z-20 h-20 w-20 origin-center transform-gpu overflow-hidden rounded-tr-lg font-extrabold sm:h-24 sm:w-24">
          <div className="absolute top-[18px] right-[-30px] flex w-32 rotate-45 transform-gpu items-center justify-center gap-1 bg-gradient-to-r from-cyan-600 to-cyan-700 py-[3px] text-[9px] font-semibold tracking-wide text-white uppercase shadow-sm sm:top-[24px] sm:right-[-30px] sm:w-36 sm:py-1 sm:text-[10px]">
            <AiOutlineSync className="shrink-0 text-[10px] sm:text-sm" />
            In proress
          </div>
        </div>
      )}

      {/* Header section: title + icon */}
      <div className="flex gap-4">
        <h3 className="mb-2 text-lg font-semibold sm:text-xl">{title}</h3>

        {/* Render the passed icon component */}
        <div className="-mt-2 flex items-center text-3xl text-cyan-500">
          <Icon />
        </div>
      </div>

      {/* Organization and time period */}
      <p className="mb-2 text-cyan-600 dark:text-cyan-500">
        {org} • {time}
      </p>

      {/* Bullet points list */}
      <ul className="list-inside list-disc space-y-1 dark:text-gray-300">
        {points.map((p, i) => (
          <li key={i} className="li-indent">
            {p}
          </li>
        ))}
      </ul>
    </div>
  )
}
