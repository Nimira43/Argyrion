'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

export function SortingControls() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentSort = searchParams.get('sort')

  const createSortUrl = (sortValue: string | null): string => {
    const params = new URLSearchParams(searchParams.toString())

    if (sortValue) {
      params.set('sort' , sortValue)
    } else {
      params.delete('sort')
    }

    const queryString = params.toString()

    return `${pathname}${queryString ? `?${queryString}` : ''}`
  }

  return (
    <>
      <h3 className='text-sm mb-2'>
        Sort By
      </h3>
      <ul>
        <li>
          <Link
            href={createSortUrl(null)}
            className={
              cn(
                'text-xs text-muted-foreground hover:text-main cursor-pointer transitioning',
                !currentSort ? 'text-primary' : ''
              )
            }
          >
            Latest
          </Link>
        </li>
        <li>
          <Link
            href={createSortUrl('price-asc')}
            className={
              cn(
                'text-xs text-muted-foreground hover:text-main cursor-pointer transitioning',
                currentSort === 'price-asc' ? 'text-primary' : ''
              )
            }
          >
            Price: Low to High
          </Link>
        </li>
        <li>
          <Link
            href={createSortUrl('price-desc')}
            className={
              cn(
                'text-xs text-muted-foreground hover:text-main cursor-pointer transitioning',
                currentSort === 'price-desc' ? 'text-primary' : ''
              )
            }
          >
            Price: High to Low
          </Link>
        </li>
      </ul>
    </>
  )
}