import { ProductCard } from './ProductCard'
import { prisma } from '@/lib/prisma'

type SearchParams = Promise<{
  [key: string]: string | string[] | undefined
}>

export default async function HomePage(
  props : { searchParams: SearchParams}
) {
  const products = await prisma.product.findMany()

  await new Promise((resolve) => setTimeout(resolve, 3000))

  return (
    <main className='container mx-auto p-4'>
      <h1 className='text-3xl mb-6 text-medium'>Home</h1>
      <p>Showing {products.length} products</p>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  )
}