import Link from 'next/link'
import { Button } from './ui/button'
import { IoBasketOutline } from 'react-icons/io5'

export async function CartIndicatorSkeleton() {

  return (
    <Button
      variant='ghost'
      size='icon'
      asChild
      className='relative'
      disabled
    >
      <Link href='/cart'>
        <IoBasketOutline className='h-5 w-5' />       
      </Link>
    </Button>
  )
}