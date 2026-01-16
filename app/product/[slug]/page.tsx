import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getProductBySlug } from '@/lib/actions'
import { formatPrice, sleep } from '@/lib/utils'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params
}: {
  params: Promise<{slug: string }>
}) {
  const { slug } = await params  
  const product = await getProductBySlug(slug)

  if (!product) {
    return {}
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
        },
      ],
    },
  }
}

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

  await sleep(5000)

  return (
    <main className='container mx-auto p-4'>
      <Card className='max-w-3xl mx-auto'>
        <CardContent className='p-6 space-y-4'>
          <h1 className='text-3xl font-medium mb-2'>
            {product.name}
          </h1>
          <div className='centre-items gap-2 mb-4'>
            <span className='font-semibold text-lg text-main'>
              {formatPrice(product.price)}
            </span>
            <Badge variant='outline'>
              {product.category?.name}
            </Badge>
          </div>
          <Separator className='my-4' />
          <div className='space-y-2'>
            <h2 className='font-medium'>
              Description
            </h2>
            <p className='text-muted-foreground'>
              {product.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}