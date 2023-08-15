'use client'

import { Header } from "@/components/ui/Header"
import { ProjectCard } from "./ProjectCard"
import { motion } from "framer-motion"
import { projectsData } from "@/lib/static/projectData"

export const Project = () => {
  return (
    <>
      <div className="grid gap-8">
        <Header title="Projects" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto min-h-max"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {
            projectsData.map((project, index) => (
              <ProjectCard key={index} projects={project} />
            ))
          }
        </motion.div>
      </div>
    </>
  )
}