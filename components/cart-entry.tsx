import { CartItemWithProduct } from '@/lib/actions'
import { formatPrice } from '@/lib/utils'
import Image from 'next/image'
import { Button } from './ui/button'
import { PiPlus, PiMinus } from 'react-icons/pi'

interface CartEntryProps {
  cartItem: CartItemWithProduct
}

export default function CartEntry({
  cartItem
}: CartEntryProps) {
  return (
    <li className='border-b border-muted flex py-4 justify-between'>
      <div className='flex space-x-4'>
        <div className='overflow-hidden rounded border border-muted h-16 w-16'>
          <Image
            className='h-full w-full object-cover'
            width={128}
            height={128}
            src={cartItem.product.image}
            alt={cartItem.product.name}
          />
        </div>
        <div className='flex flex-col'>
          <div className='font-medium'>
            {cartItem.product.name}
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between'>
        <p className='font-medium text-center'>
          {formatPrice(cartItem.product.price)}
        </p>
        <div className='flex items-center border border-muted rounded'>
          <Button
            variant='ghost'
            className='rounded-l'
          >
            <PiMinus className='h-4 w-4' />
          </Button>
          <p className='w-6 text-center'>
            {cartItem.quantity}
          </p>
          <Button
            variant='ghost'
            className='rounded-r'
          >
            <PiPlus className='h-4 w-4' />
          </Button>
        </div>
      </div>
    </li>
  )
}