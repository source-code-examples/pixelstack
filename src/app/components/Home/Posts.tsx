'use client'

import { posts } from '@/data/posts'
import Link from 'next/link'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Posts = () => {
  // Create a copy of the posts array, sort by newest first, and limit to 3 items
  const sortedPosts = [...posts]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 3)

  return (
    <section className="dark:bg-dark/60 w-full bg-[#faf7f7] px-4 py-28">
      <div className=" mx-auto max-w-7xl">
        {/* Section title with fade-in animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16 text-center text-4xl font-extrabold tracking-wide"
        >
          My Recent Posts
        </motion.h2>

        {/* Posts grid layout */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {sortedPosts.map((post, index) => (
            <motion.article
              key={post.handle}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1, // stagger animation for each card
                ease: 'easeOut',
              }}
              className="dark:bg-dark/40 rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-shadow hover:shadow-xl dark:border-gray-800"
            >
              {/* Post title with hover color transition */}
              <Link href={`/posts/${post.handle}`}>
                <h3 className="mb-3 text-xl leading-snug font-semibold transition-colors hover:text-cyan-500">
                  {post.name}
                </h3>
              </Link>

              {/* Short excerpt of the post */}
              <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {post.overview}
              </p>

              {/* Post metadata: date + reading time */}
              <div className="flex items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-2 opacity-70" />
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>

                <span className="flex items-center">
                  <FaClock className="mr-2 opacity-70" />
                  {post.timeToRead}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* "More posts" button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 text-center"
        >
          <Link
            href="/posts"
            className="inline-block rounded-full border border-gray-300 px-10 py-3 text-lg font-bold transition-colors hover:border-cyan-500 hover:text-cyan-600 dark:border-dotted dark:border-gray-400/40 dark:bg-gray-700/20 dark:text-cyan-400 dark:hover:border-amber-500/80 dark:hover:text-amber-600/70"
          >
            More →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Posts
