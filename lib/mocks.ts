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
    name: 'Sony Wireless Headphones',
    description:
      'Premium noise-cancelling wireless headphones with long battery life.',
    price: 199.99,
    image: '/headphones.jpg',
    category: 'Headphones',
  },
  {
    id: '2',
    name: 'Samsung Smartwatch',
    description:
      'Fitness tracker with heart rate monitoring and sleep analysis.',
    price: 149.99,
    image: '/smartwatch.jpg',
    category: 'Smartwatches',
  },
  {
    id: '3',
    name: 'PlayStation 5',
    description:
      'Cutting edge gaming console.',
    price: 449.99,
    image: '/playstation5.jpg',
    category: 'Consoles',
  },
  {
    id: '4',
    name: 'iPhone',
    description:
      'Latest flagship iPhone.',
    price: 1049.99,
    image: '/iphone.jpg',
    category: 'Smartphones',
  },
  {
    id: '5',
    name: 'HP Laptop',
    description:
      'High powered gaming laptop.',
    price: 549.99,
    image: '/laptop.jpg',
    category: 'Laptops',
  },
]
