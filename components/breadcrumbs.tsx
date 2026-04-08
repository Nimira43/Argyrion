import { Fragment } from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from './ui/breadcrumb'
import { IoHomeOutline } from 'react-icons/io5'

interface BreadcrumbsProps {
  items: {
    label: string
    href: string
    active?: boolean
  }[]
}

export function Breadcrumbs({items}: BreadcrumbsProps) {
  return (
    <Breadcrumb className='mb-6 h-8'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>
            <IoHomeOutline className='h-4 w-4' />
          </BreadcrumbLink>
        </BreadcrumbItem>

        {items.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbItem >
              <BreadcrumbLink
                href={item.href}
                className={item.active ? 'active' : ''}
              >
                {item.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}