'use client'

import Link from 'next/link'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { categories } from '@/constants/constants'

export default function CategoriesDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='text-sm font-medium'
        >
          Categories
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align='start'
        className='w-48'
      >
        {categories.map((category) => (
          <DropdownMenuItem
            key={category.id}
            asChild
          >
            <Link
              href={category.href}
              className='w-full'
            >
              {category.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
