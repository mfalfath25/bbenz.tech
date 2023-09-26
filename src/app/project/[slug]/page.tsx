import { ProjectDetail } from '@/components/section/project/ProjectDetail'
import { projectsData } from '@/content/projects/projectData'
import { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const project = projectsData.find((project) => project.slug === slug)
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }
  return {
    title: project.title,
  }
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    params: { slug: project.slug },
  }))
}

export default function Page() {
  return (
    <section className='px-2 py-4'>
      <ProjectDetail />
    </section>
  )
}
