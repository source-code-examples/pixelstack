'use client'

import { motion } from 'framer-motion'
import SkillSection from '../components/Profile/SkillSection'
import EducationCard from '../components/Profile/EducationCard'
import { frontendSkills, backendSkills } from '@/data/skillsData'
import { education } from '@/data/educationData'
import { FiMonitor } from 'react-icons/fi'
import { HiOutlineServer } from 'react-icons/hi'

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: 'easeIn' }}
      className="mx-auto my-15 max-w-7xl"
    >
      <h1 className="mb-5 text-center text-4xl font-bold">Hey,</h1>

      <section className="mb-15">
        <p className="mx-auto max-w-4xl text-center text-lg dark:text-gray-300">
          I&apos;m a Full Stack Web Developer with a passion for creating
          user-friendly and visually stunning websites.
        </p>
      </section>

      <section>
        <h2 className="section-title">My Technical Skillset</h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <SkillSection
            title="Frontend Engineering"
            icon={<FiMonitor />}
            skills={frontendSkills}
          />

          <SkillSection
            title="Backend Engineering"
            icon={<HiOutlineServer />}
            skills={backendSkills}
          />
        </div>
      </section>

      <section className="mb-20">
        <h2 className="section-title mt-16">My Education & Experience</h2>

        <div className="mx-auto max-w-2xl space-y-10">
          {education.map((item, i) => (
            <EducationCard key={i} {...item} />
          ))}
        </div>
      </section>
    </motion.div>
  )
}
