import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export function ProductCardSkeleton() {
  return (
    <Card className='pt-0 overflow-hidden'>
      <div className='relative aspect-video'>
        
      </div>
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardFooter>
        <p>Paragraph</p>
      </CardFooter>
    </Card>
  )
}