import ProductsSkeleton from './ProductsSkeleton'

export default function Loading() {
  return (
    <main className='container mx-auto p-4'>
      <h1 className='text-3xl mb-6 text-medium'>Home</h1>
      <p>Loading...</p>
      <ProductsSkeleton />
    </main>
  )
}