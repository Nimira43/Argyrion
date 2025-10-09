import { PrismaClient, Product } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()

  const smartwatches = await prisma.category.create({
    data: {
      name: "Smartwatches",
      slug: "smartwatches",  
    }, 
  })

  const smartphones = await prisma.category.create({
    data: {
      name: "Smartphones",
      slug: "smartphones",  
    }, 
  })
  
  const tablets = await prisma.category.create({
    data: {
      name: "Tablets",
      slug: "tablets",  
    }, 
  })

  const laptops = await prisma.category.create({
    data: {
      name: "Laptops",
      slug: "laptops",  
    }, 
  })
  
  const desktops = await prisma.category.create({
    data: {
      name: "Desktops",
      slug: "desktops",  
    }, 
  })
  
  const consoles = await prisma.category.create({
    data: {
      name: "Consoles",
      slug: "consoles",  
    }, 
  })
  
  const iot = await prisma.category.create({
    data: {
      name: "IoT",
      slug: "iot",  
    }, 
  })
  
  const headphones = await prisma.category.create({
    data: {
      name: "Headphones",
      slug: "headphones",  
    }, 
  })
  
  const accessories = await prisma.category.create({
    data: {
      name: "Accessories",
      slug: "accessories",  
    }, 
  })

  const products: Product[] = [
    {
      id: '1',
      name: 'Sony Wireless Headphones',
      description:
        'Premium noise-cancelling wireless headphones with long battery life.',
      price: 199.99,
      image: '/headphones.jpg',
      categoryId: headphones.id,
      slug: 'sony-wireless-headphones'
    },
    {
      id: '2',
      name: 'Samsung Smartwatch',
      description:
        'Fitness tracker with heart rate monitoring and sleep analysis.',
      price: 149.99,
      image: '/smartwatch.jpg',
      categoryId: smartwatches.id,
      slug: 'samsung-smartwatch'
    },
    {
      id: '3',
      name: 'PlayStation 5',
      description:
        'Cutting edge gaming console.',
      price: 449.99,
      image: '/playstation5.jpg',
      categoryId: consoles.id,
      slug: 'playstation-5'
    },
    {
      id: '4',
      name: 'iPhone',
      description:
        'Latest flagship iPhone.',
      price: 1049.99,
      image: '/iphone.jpg',
      categoryId: smartphones.id,
      slug: 'iphone'
    },
    {
      id: '5',
      name: 'HP Laptop',
      description:
        'High powered gaming laptop.',
      price: 549.99,
      image: '/laptop.jpg',
      categoryId: laptops.id,
      slug: 'hp-laptop'
    },
    {
      id: '6',
      name: 'Dell Desktop',
      description:
        'High powered gaming desktop PC.',
      price: 949.99,
      image: '/desktop.jpg',
      categoryId: desktops.id,
      slug: 'dell-desktop'
    },
    {
      id: '7',
      name: 'Amazon Tablet',
      description:
        'Multi-purpose mobile tablet.',
      price: 119.99,
      image: '/tablet.jpg',
      categoryId: tablets.id,
      slug: 'amazon-tablet'
    },
    {
      id: '8',
      name: 'Microsoft Mouse',
      description:
        'Fantastic wireless mouse.',
      price: 29.99,
      image: '/mouse.jpg',
      categoryId: accessories.id,
      slug: 'microsoft-mouse'
    },
    {
      id: '9',
      name: 'Panasonic Smartbulbs',
      description:
        'Sophisticated IOT light bulbs',
      price: 79.99,
      image: '/iot-lightbulbs.jpg',
      categoryId: iot.id,
      slug: 'panasonic-smartbulbs'
    },
  ]

  for (const product of products) {
    await prisma.product.create({
      data: product,
    })
  }
}

main()
  .then(async () => {
    console.log('Seeding completed.')
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })