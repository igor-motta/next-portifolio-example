import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'

export default async function ProjectPage() {
  const projects = await getProjects()

  return (
    <section className='pt-40 pb-24'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projects</h1>
        <Projects projects={projects} />
      </div>
    </section>
  )
}
