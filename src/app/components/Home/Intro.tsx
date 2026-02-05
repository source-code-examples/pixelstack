'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background gradient + blurred glow effect */}
      <div className="from-primary/20 before:bg-primary/40 pointer-events-none absolute inset-0 bg-gradient-to-b to-transparent before:absolute before:top-10 before:left-1/2 before:h-[900px] before:w-[900px] before:-translate-x-1/2 before:rounded-full before:opacity-20 before:blur-[120px] before:content-['']" />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        {/* Avatar with fade-in + scale animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 flex justify-center"
        >
          <Image
            src="/avatars/profile-avatar.png"
            alt="profile picture"
            width={130}
            height={130}
            loading="eager"
            priority
            className="rounded-full object-cover shadow-xl ring-4 ring-white dark:ring-gray-800"
          />
        </motion.div>

        {/* Main headline with slide-in animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20, x: 120 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl leading-tight font-bold tracking-tight md:text-5xl"
        >
          Crafting Digital Experiences
          <span className="block text-cyan-500">with Precision & Style</span>
        </motion.h1>

        {/* Subheadline with opposite slide-in direction */}
        <motion.p
          initial={{ opacity: 0, y: 20, x: -120 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.4 }}
          className="mx-auto mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-300"
        >
          Full Stack Developer & Designer — building elegant, fast and modern
          web applications.
        </motion.p>

        {/* Call-to-action buttons with upward fade animation */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
          className="mt-10 flex justify-center gap-4"
        >
          {/* Portfolio button */}
          <Link
            href="/portfolio"
            className="rounded-lg bg-amber-600 px-8 py-3 font-bold text-white transition-colors hover:bg-cyan-600"
          >
            View Portfolio
          </Link>

          {/* Contact button */}
          <Link
            href="/connect"
            className="rounded-lg border-2 border-gray-300 px-10 py-3 font-bold transition-colors hover:border-2 hover:border-amber-500 hover:text-amber-600 dark:border-gray-700 dark:hover:text-amber-400"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Intro
