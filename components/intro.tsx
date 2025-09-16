import Image from 'next/image'
import authorImage from '@/public/images/authors/igro.jpg'

export default function Intro() {
  return (
    <section className='flex items-center gap-x-10 gap-y-4 pb-4'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>
          Hey, I&#39;m Igor.
        </h1>
        <p className='mt-3 font-light text-muted-foreground'>
          Eu sou um desenvolvedor frontend em São Carlos,
          Brasil. Eu sou apaixonado por jogos e pintura.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 h-80 object-cover rounded-lg grayscale'
          src={authorImage}
          alt='Igor Motta'
          width={275}
          height={200}
          priority
        />
      </div>
    </section>
  )
}
