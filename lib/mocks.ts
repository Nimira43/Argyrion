export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description:
      'Premium noise-cancelling wireless headphones with long battery life.',
    price: 199.99,
    image: '/headphones.jpg',
    category: 'Electronics',
  },
  {
    id: '2',
    name: 'Smart Watch',
    description:
      'Fitness tracker with heart rate monitoring and sleep analysis.',
    price: 149.99,
    image: '/smartwatch.jpg',
    category: 'Electronics',
  },
  {
    id: '3',
    name: 'PlayStation 5',
    description:
      'Cutting edge gaming console.',
    price: 449.99,
    image: '/.jpg',
    category: 'Consoles',
  },
  {
    id: '4',
    name: 'iPhone',
    description:
      'Latest flagship iPhone.',
    price: 1049.99,
    image: '/iphone.jpg',
    category: 'Phones',
  },
  {
    id: '5',
    name: 'Laptop',
    description:
      'High powered gaming laptop.',
    price: 549.99,
    image: '/laptop.jpg',
    category: 'Electronics',
  },
]
