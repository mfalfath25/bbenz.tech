'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/components/ui/Header'
import { projectsData } from '@/lib/static/projectData'

export const ProjectDetail = () => {
  const pathname = usePathname()
  const currentProject = projectsData.find(
    (project) => project.thumbId === pathname.split('/').pop()
  )

  console.log(currentProject)
  return (
    <>
      <Header
        title={currentProject?.title}
        enableBackButton
      />
      <div>{currentProject?.desc}</div>
    </>
  )
}
