const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.trustedCompany.createMany({
    data: [
      { name: 'Google', icon: 'Globe', order: 1 },
      { name: 'Amazon', icon: 'ShoppingBag', order: 2 },
      { name: 'Netflix', icon: 'Film', order: 3 },
      { name: 'Spotify', icon: 'Music', order: 4 },
    ]
  });
  const count = await prisma.trustedCompany.count();
  console.log('Trusted companies seeded:', count);
  await prisma.$disconnect();
}

main();
