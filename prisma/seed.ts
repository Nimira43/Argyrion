import { PrismaClient } from '@prisma/client'

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