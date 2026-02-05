'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMailStatus } from './useMailStatus'
import SuccessMessage from '../../MessagesUI/SuccessMessage'
import ErrorMessage from '../../MessagesUI/ErrorMessage'

const InfoMail = () => {
  const { status, setSubmitting, setSubmitted, setFailed, reset } =
    useMailStatus()

  /**
   * Handles form submission and performs basic email validation.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const email = (form.elements.namedItem('email') as HTMLInputElement).value

    setSubmitting()

    const isValid = /\S+@\S+\.\S+/.test(email)

    if (!isValid) {
      setFailed()
      setTimeout(() => reset(), 3000)
      return
    }

    setSubmitted()
    setTimeout(() => reset(), 3000)
  }

  return (
    <section className="dark:bg-dark/30 w-full border-t border-black/5 bg-[#f2f2f2] px-4 py-28 dark:border-white/5">
      <div className="mx-auto max-w-3xl text-center">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-6 text-4xl font-semibold tracking-tight"
        >
          Stay in the Loop
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mb-10 text-lg leading-relaxed text-gray-600 dark:text-gray-300"
        >
          Get updates on new articles, insights and exclusive content.
        </motion.p>

        {/* Email subscription form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <input
            name="email"
            type="email"
            placeholder="Your email address"
            className="w-full rounded-xl border border-gray-300 bg-white px-6 py-3 text-gray-800 placeholder-gray-500 transition-all focus:ring-2 focus:ring-cyan-700 focus:outline-none sm:w-auto dark:border-gray-700 dark:bg-[#1a1a1a] dark:text-gray-200 dark:placeholder-gray-400"
          />

          <button
            type="submit"
            disabled={status.state === 'submitting'}
            className="group text-md relative cursor-pointer overflow-hidden rounded-xl border border-white/30 bg-cyan-500 px-10 py-2.75 text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all hover:bg-amber-600/90 disabled:cursor-not-allowed disabled:bg-cyan-400/50 dark:border-white/20 dark:bg-amber-600/90 dark:hover:bg-cyan-600"
          >
            <span className="absolute inset-0 translate-x-[-150%] rotate-12 bg-linear-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-1500 ease-out group-hover:translate-x-[150%] group-hover:opacity-100" />
            {status.state === 'submitting' ? 'Submitting...' : 'Subscribe'}
          </button>
        </motion.form>

        {/* Animated success/error messages */}
        <AnimatePresence mode="wait">
          <motion.div
            layout
            transition={{ layout: { duration: 0.45, ease: 'easeOut' } }}
            className="mt-8 min-h-[3.5rem]"
            aria-live="polite"
          >
            {status.state === 'submitted' && (
              <SuccessMessage message="Successfully subscribed!" />
            )}

            {status.state === 'failed' && (
              <ErrorMessage message="Please enter a valid email address." />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default InfoMail

// -------------------------------------

// 'use client'

// import React, { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// /**
//  * Union type representing all possible states of the subscription form.
//  */
// type MailStatus =
//   | { state: 'pristine' } // untouched initial state
//   | { state: 'submitting' } // user clicked submit
//   | { state: 'submitted' } // success
//   | { state: 'failed' } // invalid email or error

// const InfoMail = () => {
//   /**
//    * Tracks the current state of the subscription form.
//    */
//   const [status, setStatus] = useState<MailStatus>({ state: 'pristine' })

//   /**
//    * Handles form submission and performs basic email validation.
//    */
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()

//     const form = e.target as HTMLFormElement
//     const email = (form.elements.namedItem('email') as HTMLInputElement).value

//     // Set state to submitting
//     setStatus({ state: 'submitting' })

//     // Simple regex to validate email format
//     const isValid = /\S+@\S+\.\S+/.test(email)

//     if (!isValid) {
//       // Transition to failed state
//       setStatus({ state: 'failed' })

//       // Hide error after 3 seconds
//       setTimeout(() => setStatus({ state: 'pristine' }), 3000)
//       return
//     }

//     // Transition to submitted state
//     setStatus({ state: 'submitted' })

//     // Hide success message after 3 seconds
//     setTimeout(() => setStatus({ state: 'pristine' }), 3000)
//   }

//   return (
//     <section className="dark:bg-dark/30 w-full border-t border-black/5 bg-[#f2f2f2] px-4 py-28 dark:border-white/5">
//       <div className="mx-auto max-w-3xl text-center">
//         {/* Section title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           className="mb-6 text-4xl font-semibold tracking-tight"
//         >
//           Stay in the Loop
//         </motion.h2>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
//           className="mb-10 text-lg leading-relaxed text-gray-600 dark:text-gray-300"
//         >
//           Get updates on new articles, insights and exclusive content.
//         </motion.p>

//         {/* Email subscription form */}
//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
//           className="flex flex-col items-center justify-center gap-4 sm:flex-row"
//         >
//           {/* Email input */}
//           <input
//             name="email"
//             type="email"
//             placeholder="Your email address"
//             className="w-full rounded-xl border border-gray-300 bg-white px-6 py-3 text-gray-800 placeholder-gray-500 transition-all focus:ring-2 focus:ring-cyan-700 focus:outline-none sm:w-auto dark:border-gray-700 dark:bg-[#1a1a1a] dark:text-gray-200 dark:placeholder-gray-400"
//           />

//           {/* Submit button */}
//           <button
//             type="submit"
//             disabled={status.state === 'submitting'}
//             className="group text-md relative cursor-pointer overflow-hidden rounded-xl border border-white/30 bg-cyan-500 px-10 py-2.75 text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all hover:bg-amber-600/90 disabled:cursor-not-allowed disabled:bg-cyan-400/50 dark:border-white/20 dark:bg-amber-600/90 dark:hover:bg-cyan-600"
//           >
//             <span className="absolute inset-0 translate-x-[-150%] rotate-12 bg-linear-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-1500 ease-out group-hover:translate-x-[150%] group-hover:opacity-100" />
//             {status.state === 'submitting' ? 'Submitting...' : 'Subscribe'}
//           </button>
//         </motion.form>

//         {/* Animated success/error messages */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             layout
//             transition={{ layout: { duration: 0.45, ease: 'easeOut' } }}
//             className="mt-8 min-h-[3.5rem]"
//             aria-live="polite"
//           >
//             {/* Success message */}
//             {status.state === 'submitted' && (
//               <motion.div
//                 layout
//                 initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                 transition={{ duration: 0.4, ease: 'easeOut' }}
//                 className="inline-flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-6 py-3 text-green-700 backdrop-blur-sm dark:text-green-300"
//               >
//                 <span className="text-xl">✓</span>
//                 Successfully subscribed!
//               </motion.div>
//             )}

//             {/* Error message */}
//             {status.state === 'failed' && (
//               <motion.div
//                 layout
//                 initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   scale: 1,
//                   x: [0, -8, 8, -6, 6, -3, 3, 0], // shake animation
//                 }}
//                 exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                 transition={{ duration: 0.6, ease: 'easeOut' }}
//                 className="inline-flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-6 py-3 text-orange-700 backdrop-blur-sm dark:text-red-300"
//               >
//                 <span className="text-xl">⚠️</span>
//                 Please enter a valid email address.
//               </motion.div>
//             )}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   )
// }

// export default InfoMail
