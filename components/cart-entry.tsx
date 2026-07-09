'use client'

import { CartItemWithProduct, setProductQuantity } from '@/lib/actions'
import { formatPrice } from '@/lib/utils'
import Image from 'next/image'
import { Button } from './ui/button'
import { PiPlus, PiMinus } from 'react-icons/pi'
import { LiaTimesSolid } from 'react-icons/lia'
import { useState } from 'react'

interface CartEntryProps {
  cartItem: CartItemWithProduct
}

export default function CartEntry({
  cartItem
}: CartEntryProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSetProductQuantity = async (quantity: number) => {
    setIsLoading(true)   
    try {
      await setProductQuantity(cartItem.product.id, quantity)
    } catch (error) {
      console.error('Error changing quantity of an item.', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <li className='border-b border-muted flex py-4 justify-between'>
      <div className='flex space-x-4'>
        <div className='absolute z-10 -ml-1 -mt-2'>
          <Button
            variant='ghost'
            size='icon'
            disabled={isLoading}
            className='w-7 h-7 rounded-full '
            onClick={() => handleSetProductQuantity(0)}                   
          >
            <LiaTimesSolid className='w-4 h-4' />
          </Button>
        </div>
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
            onClick={() => handleSetProductQuantity(cartItem.quantity - 1)}
            disabled={isLoading}
          >
            <PiMinus className='h-4 w-4' />
          </Button>
          <p className='w-6 text-center'>
            {cartItem.quantity}
          </p>
          <Button
            variant='ghost'
            className='rounded-r'
            onClick={() => handleSetProductQuantity(cartItem.quantity + 1)}
            disabled={isLoading}
          >
            <PiPlus className='h-4 w-4' />
          </Button>
        </div>
      </div>
    </li>
  )
}