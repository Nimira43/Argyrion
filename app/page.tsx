import { mockProducts } from '@/lib/mocks'

export default function HomePage() {
  return (
    <main className='container mx-auto p-4'>
      <h1 className='logo-text text-3xl mb-6'>Argyrion</h1>
      <p>Showing {mockProducts.length} products</p>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <p>Products placed here.</p>
      </div>
    </main>
  )
}