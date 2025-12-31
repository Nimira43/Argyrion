import { Card, CardContent } from '@/components/ui/card'
import { getProductBySlug } from '@/lib/actions'
import { formatPrice } from '@/lib/utils'
import { notFound } from 'next/navigation'

export default async function ProductPage({
  params
}: {
  params: Promise<{ slug: string }>
  }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <main className='container mx-auto p-4'>
      <Card className='max-w-3xl mx-auto'>
        <CardContent className='p-6'>
          <h1 className='text-3xl font-medium mb-2'>
            {product.name}
          </h1>
        </CardContent>
      </Card>
      <h1 className='text-3xl font-medium mb-6'>
        {product.name}
      </h1>
      <p>{product.description}</p>
      <p>{formatPrice(product.price)}</p>
    </main>
  )
}