import Link from 'next/link'
import { Button } from './ui/button'
import { IoBasketOutline } from 'react-icons/io5'
import { getCart } from '@/lib/actions'
import { sleep } from '@/lib/utils'

export async function CartIndicator() {
  const cart = await getCart()
  const cartSize = cart?.size ?? 0

  await sleep(3000)

  return (
    <Button
      variant='ghost'
      size='icon'
      asChild
      className='relative opacity-50'
    >
      <Link href='/cart'>
        <IoBasketOutline className='h-5 w-5' />
        {(cartSize > 0 && (
          <span className='absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-main text-xs text-light'>
            {cartSize}
          </span>
        ))}
      </Link>
    </Button>
  )
}