'use client'

import { Header } from '@/components/ui/Header'
import { ProjectCard } from './ProjectCard'
import { motion } from 'framer-motion'
import { projectsData } from '@/lib/static/projectData'

export const Project = () => {
  return (
    <>
      <div className='grid gap-8'>
        <Header title='Projects' />
        <motion.div
          className='mx-auto grid min-h-max grid-cols-1 gap-4 md:grid-cols-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.25 }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              projects={project}
            />
          ))}
        </motion.div>
      </div>
    </>
  )
}
