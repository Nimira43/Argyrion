import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import { IoSearchSharp, IoBasketOutline } from 'react-icons/io5'

const categories = [
  { id: 1, name: 'Electronics', href: '/category/electronics' },
  { id: 2, name: 'Fashion', href: '/category/fashion' },
  { id: 3, name: 'Home', href: '/category/home' },
]

export default function Navbar() {
  return (
    <div className='border-b'>
      <div className='container mx-auto flex h-16 items-center justify-between'>
        <div>
          <div className='flex items-center gap-6'>
            <Link
              href='/'
              className='text-3xl logo-text'
            >
              Argyrion
            </Link>
            <nav className='hidden md:flex items-center gap-6'>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className='text-sm font-medium text-foreground-muted hover:text-main hover-transition'
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Button variant='ghost' size='icon' asChild>
            <Link href='/search'>
              <IoSearchSharp />
            </Link>
          </Button>
          <Button variant='ghost' size='icon' asChild>
            <Link href='/cart'>
              <IoBasketOutline />
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}