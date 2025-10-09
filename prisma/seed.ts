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