import { Product } from '@/lib/mocks'
import Image from 'next/image'

export function ProductCard({
  product
}: {
  product: Product
}) {
  return (
    <div className='border border-grey-light rounded-md p-4'>
      <div className='relative aspect-video'>
        <Image
          src={product.image} 
          alt={`Image of ${product.name}`}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          fill
          className='object-cover'
        />
      </div>
      <h2 className='text-lg font-medium'>{product.name}</h2>
      <p className='text-grey-dark'>£{product.price.toFixed(2)}</p>
      <p className='text-grey-dark'>{product.description}</p>
    </div>
  )
}