'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

interface Props {
  message: string
  onDismiss?: () => void
  autoDismissDelay?: number
}

// Checkmark that draws itself in via animated pathLength: right after success
const AnimatedCheckmark = () => (
  <motion.svg
    viewBox="0 0 52 52"
    className="h-6 w-6 shrink-0"
    initial="hidden"
    animate="visible"
  >
    <motion.circle
      cx="26"
      cy="26"
      r="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
          pathLength: 1,
          opacity: 1,
          transition: { duration: 0.5, ease: 'easeOut' },
        },
      }}
    />
    <motion.path
      d="M14 27l7 7 16-16"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
          pathLength: 1,
          opacity: 1,
          transition: { duration: 0.35, ease: 'easeOut', delay: 0.45 },
        },
      }}
    />
  </motion.svg>
)

const SuccessMessage = ({
  message,
  onDismiss,
  autoDismissDelay = 5000,
}: Props) => {
  // auto-dismiss after delay if onDismiss is provided
  useEffect(() => {
    if (onDismiss && autoDismissDelay > 0) {
      const timer = setTimeout(() => {
        onDismiss()
      }, autoDismissDelay)

      return () => clearTimeout(timer)
    }
  }, [onDismiss, autoDismissDelay])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-md bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-200"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center gap-3">
          <AnimatedCheckmark />
          <p className="flex-1">{message}</p>
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="ml-4 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
            aria-label="Dismiss message"
          >
            <span className="text-xl font-bold">×</span>
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default SuccessMessage
