import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import { IoBasketOutline } from 'react-icons/io5'
import MobileNav from './mobile-nav'
import SearchInput from './search-input'
import CategoriesDropdown from './categories-dropdown'
         
export default function Navbar() {
  return (
    <div className='border-b'>
      <div className='container mx-auto flex h-16 items-center justify-between'>
        <div>
          <div className='flex items-center gap-6'>
            <Link
              href='/'
              className='text-3xl logo-text hidden md:block'
            >
              Argyrion
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <CategoriesDropdown />
            </nav>

            <MobileNav />
          </div>
        </div>
        <div className='block w-full mx-4 md:mx-8'>
          <SearchInput />
        </div>
        <div className='flex items-center gap-0'>
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