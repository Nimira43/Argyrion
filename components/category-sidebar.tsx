import { prisma } from '@/lib/prisma'
import { sleep } from '@/lib/utils'
import Link from 'next/link'

export async function CategorySidebar({
  activeCategory
}: {
  activeCategory?: string
}) {
  const categories = await prisma.category.findMany({
    select: {
      name: true,
      slug: true,
    },
    orderBy: {
      name: 'asc',
    }
  })

  await sleep(2000)

  return (
    <div className='w-[125px] flex-none'>
      <h3 className='text-sm mb-2'>
        Collections
      </h3>
      <ul>
        {categories.map((category) => (
          <li key={category.slug}>
            <Link
              href={`/search/${category.slug}`}
              className={
                `text-xs text-muted-foreground hover:text-main cursor-pointer transitioning ${
                  activeCategory === category.slug
                    ? 'text-primary'
                    : ''
                }`
              }
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
}