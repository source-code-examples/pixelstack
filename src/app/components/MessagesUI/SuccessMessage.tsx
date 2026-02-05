import { motion } from 'framer-motion'

interface Props {
  message: string
}

const SuccessMessage = ({ message }: Props) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="inline-flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-6 py-3 text-green-700 backdrop-blur-sm dark:text-green-300"
    >
      <span className="text-xl">✓</span>
      {message}
    </motion.div>
  )
}

export default SuccessMessage
