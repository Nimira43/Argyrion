import { Product } from '@/lib/mocks'
import Image from 'next/image'

export function ProductCard({
  product
}: {
  product: Product
}) {
  return (
    <div className='border border-grey-light rounded-md p-4'>
      <Image
        src={product.image} 
        alt={product.image}
        width={400}
        height={267}
        className='object-cover'
      />
      <h2 className='text-lg font-medium'>{product.name}</h2>
      <p className='text-grey-dark'>£{product.price.toFixed(2)}</p>
      <p className='text-grey-dark'>{product.description}</p>
    </div>
  )
}