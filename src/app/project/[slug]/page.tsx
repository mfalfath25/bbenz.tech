import { ProjectDetail } from '@/components/section/project/ProjectDetail'
import { projectsData } from '@/content/projects/projectData'
import { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  const dynamicTitle = projectsData.find(
    (project) => project.thumbId === params.slug
  )

  return {
    title: `${dynamicTitle?.title}`,
  }
}

export default function Page() {
  return (
    <section className='px-2 py-4'>
      <ProjectDetail />
    </section>
  )
}
