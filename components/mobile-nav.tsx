import Link from 'next/link'
import { Button } from './ui/button'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { IoMdMenu } from 'react-icons/io'
import { categories } from './Navbar'

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className='md:hidden'
      >
        <Button
          variant='ghost'
          size='icon'
        >
          <IoMdMenu className='h-5 w-5'/>          
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>
            <span className='text-2xl logo-text px-4'>
              Argyrion
            </span>
          </SheetTitle>
        </SheetHeader>
        <nav className='flex flex-col gap-4 p-4'>
          <SheetClose asChild>
            <Link
              href='/'
              className='hover:text-main hover-transition'
            >
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href='/products'
              className='hover:text-main hover-transition'
            >
              Products
            </Link>
          </SheetClose>
          <div>
            <h3 className='text-xs font-medium mb-2 text-muted-foreground'>Categories</h3>
            {categories.map((category) => (
              <SheetClose 
                asChild
                key={category.id}
              >
                <Link
                  href={category.href}
                  className='block  py-2 hover:text-main hover-transition'
                >
                  {category.name}
                </Link>  
              </SheetClose>  
            ))}
          </div>

        </nav>
      </SheetContent>
    </Sheet>
  )
}