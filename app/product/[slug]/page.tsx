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
}