import { JSX, SVGProps } from 'react'

const navigation = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      props: JSX.IntrinsicAttributes & SVGProps<SVGAElement>
    ) => <svg></svg>
  },
  {
    name: 'Insta',
    href: '#',
    icon: (
      props: JSX.IntrinsicAttributes & SVGProps<SVGAElement>
    ) => <svg></svg>
  }
]
export default function Footer() {
  return (
    <footer className='py-8'>
      <div className='container max-w-3xl'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center space-x-6 md:order-2'>
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer noopener'
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon
                  aria-hidden='true'
                  className='h-5 w-7'
                ></item.icon>
              </a>
            ))}
          </div>
        </div>
        <div className='mt-8 md:order-1 md:mt-0'>
          <p className='text-center text-xs leading-5 text-muted-foreground'>
            &copy; {new Date().getFullYear()} Todos os
            direitos Reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
