'use client'

import { Product } from '@prisma/client'
import { Button } from './ui/button'
import { BsCart3 } from 'react-icons/bs'
import { useState } from 'react'
import { addToCart } from '@/lib/actions'

export function AddToCartButton({ product }: { product: Product }) {
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    try {
      setIsAdding(true)
     await addToCart(product.id, 1)
    } catch (error) {
      console.error('Error adding to cart', error)
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={product.inventory === 0 || isAdding}
      className='w-full'
    >
      <BsCart3 className='mr-1 w-4 h-4' />
      {product.inventory > 0
        ? 'Add to Cart'
        : 'Out of Stock'
      }
    </Button>
  )
}