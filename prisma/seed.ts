import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()

  
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