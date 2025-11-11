import { ProductCard } from './ProductCard'
import { prisma } from '@/lib/prisma'

export default async function HomePage() {
  const products = await prisma.product.findMany()

  return (
    <main className='container mx-auto p-4'>
      <h1 className='logo-text text-3xl mb-6 text-main'>Argyrion</h1>
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