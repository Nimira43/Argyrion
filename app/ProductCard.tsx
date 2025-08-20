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
        className='w-full h-48 object-cover object-center mb-4' 
      />
      <h2 className='text-lg font-medium'>{product.name}</h2>
      <p className='text-grey-dark'>£{product.price}</p>
      <p className='text-grey-dark'>{product.description}</p>
    </div>
  )
}