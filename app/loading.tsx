import { ProductCardSkeleton } from "./ProductCardSkeleton";

export default function Loading() {
  return (
    // <div className='centre h-screen'>
    //   <div className='w-20 h-20 border-t-2 border-b-2 border-main rounded-full animate-spin'></div>
    // </div>
    <main className='container mx-auto p-4'>
      <h1 className='text-3xl mb-6 text-medium'>Home</h1>
      <p>Loading...</p>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {Array.from({length: 9}).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </main>
  )
}