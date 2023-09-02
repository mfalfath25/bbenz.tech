'use client'

import { Header } from '@/components/ui/Header'
import { ProjectCard } from './ProjectCard'
import { motion } from 'framer-motion'
import { projectsData } from '@/content/projects/projectData'
import { MarqueeText } from '@/components/animations/MarqueeText'

export const Projects = () => {
  return (
    <section>
      <Header title='Projects' />
      <div className='py-3'>
        <MarqueeText text='Project - 프로젝트 - Projekt - プロジェクト - Proyek - 项目 - Proyecto - Проект - ' />
      </div>
      <div className='grid gap-8'>
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
    </section>
  )
}
