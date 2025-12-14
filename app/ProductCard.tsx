'use client'

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { getProductBySlug } from '@/lib/actions'
import { formatPrice } from '@/lib/utils'
import { Product } from '@prisma/client'
import Image from 'next/image'

export function ProductCard({
  product
}: {
  product: Product
}) {
  return (
    <Card
      className='mt-6 pt-0 overflow-hidden'
      onClick={async () => await getProductBySlug(product.slug)}
    >
      <div className='relative aspect-video'>
        {product.image && (
          <Image
            src={product.image} 
            alt={`Image of ${product.name}`}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            fill
            className='object-cover'
          />
        )}
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <p>{formatPrice(product.price)}</p>
      </CardFooter>
    </Card>
  )
}