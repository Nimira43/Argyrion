import { Card, CardHeader } from '@/components/ui/card'
import { formatPrice } from '@/lib/utils'
import { Product } from '@prisma/client'
import Image from 'next/image'

export function ProductCard({
  product
}: {
  product: Product
}) {
  return (
    <Card>
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
        
      </CardHeader>

      <h2 className='text-lg font-medium'>{product.name}</h2>
      <p className='text-grey-dark'>{formatPrice(product.price)}</p>
      <p className='text-grey-dark'>{product.description}</p>
    </Card>
  )
}