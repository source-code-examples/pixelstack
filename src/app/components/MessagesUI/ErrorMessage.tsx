import { motion } from 'framer-motion'

interface Props {
  message: string
}

const ErrorMessage = ({ message }: Props) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        x: [0, -8, 8, -6, 6, -3, 3, 0], // shake animation
      }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="inline-flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-6 py-3 text-orange-700 backdrop-blur-sm dark:text-red-300"
    >
      <span className="text-xl">⚠️</span>
      {message}
    </motion.div>
  )
}

export default ErrorMessage
