import React from 'react'

type Props = {
  label: string // Name of the skill (e.g., "React")
  level: number // Skill level as a percentage (0–100)
  delay?: number // Optional animation delay in seconds
}

export default function SkillBar({ label, level, delay }: Props) {
  return (
    <div>
      {/* Skill label displayed above the bar */}
      <p className="mb-1 text-[15px] font-medium">{label}</p>

      {/* Background bar container */}
      <div className="h-2.5 w-full overflow-hidden rounded bg-gray-300 dark:bg-gray-700">
        {/* Animated fill bar */}
        <div
          className="animate-fill h-full w-[0%] rounded bg-gradient-to-r from-cyan-500 to-cyan-300"
          style={
            {
              // Final width for the animation (CSS variable used in keyframes)
              '--final-width': `${level}%`,

              // Optional delay before the animation starts
              animationDelay: delay ? `${delay}s` : undefined,
            } as React.CSSProperties
          }
        ></div>
      </div>
    </div>
  )
}
