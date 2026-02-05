import React from 'react'

interface EducationCardProps {
  title: string
  icon: React.ComponentType // React component passed as an icon (e.g., from react-icons)
  org: string
  time: string
  points: string[] // bullet points describing the experience
}

export default function EducationCard({
  title,
  icon: Icon,
  org,
  time,
  points,
}: EducationCardProps) {
  return (
    // Outer card container with styling and hover animation
    <div className="dark:bg-dark/50 bg-light rounded-lg py-8 pr-12 pl-10 shadow-md transition-transform duration-300 hover:-translate-y-3 hover:rotate-1 hover:shadow-xl hover:shadow-cyan-500/20">
      {/* Header section: title + icon */}
      <div className="flex gap-4">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>

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
