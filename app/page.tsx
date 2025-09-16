import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import NewsLetterForm from '@/components/newsletter-form'

export default function Home() {
  return (
    <section className='py-36'>
      <div className='container max-w-3xl'>
        <Intro />

        <RecentPosts />
        <RecentProjects />
        <NewsLetterForm />
      </div>
    </section>
  )
}
