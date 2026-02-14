import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { BsCart3 } from 'react-icons/bs'
import { getProductBySlug } from '@/lib/actions'
import { formatPrice, sleep } from '@/lib/utils'
import Image from 'next/image'
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
        <CardContent className='p-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='relative rounded-sm overflow-hidden h-[200px] md:h-[400px]'>
            {product.image && (
              <Image
                src={product.image}
                alt={product.name}
                fill 
                priority
                sizes='(max-width: 768px) 100vw, 50vw'
                className='object-cover'
              />
            )}  
          </div>
          <div>
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
            <Separator className='my-4' />
            <div className='space-y-2'>
              <h2 className='font-medium'>
                Availability
              </h2>
              <div className='flex items-center gap-2'>
                {product.inventory > 0
                  ? (
                    <Badge className='bg-green-600 uppercase'>
                      In Stock
                    </Badge>
                  )
                  : (
                    <Badge className='bg-red-600 uppercase'>
                      Out of Stock
                    </Badge>
                  )
                }
                {product.inventory > 0 && (
                  <span className="text-xs text-muted-foreground">
                    {product.inventory} items in stock
                  </span>
                )}
              </div>
            </div>
            <Separator className='my-4' />
            <div className=''>
              <Button
                disabled={product.inventory === 0}
                className='w-full'
              >
                <BsCart3 className='mr-1 w-4 h-4' />
                {product.inventory > 0
                  ? 'Add to Cart'
                  : 'Out of Stock'
                }
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}