import { getProductBySlug } from '@/lib/actions'

export async function ProductPage({
  params
}: {
  params: { slug: string }
}) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    return (
      <p>Product Not Found.</p>
    )
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-medium mb-6'>
        {product.name}
      </h1>
    </div>
  )
}