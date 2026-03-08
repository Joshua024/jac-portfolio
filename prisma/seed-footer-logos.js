const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  const logos = [
    { name: 'Stripe', icon: 'CreditCard', order: 0 },
    { name: 'Figma', icon: 'Figma', order: 1 },
    { name: 'PayPal', icon: 'BadgeDollarSign', order: 2 },
    { name: 'Apple Pay', icon: 'Apple', order: 3 },
    { name: 'Google Pay', icon: 'Chrome', order: 4 },
  ];
  for (const logo of logos) {
    await prisma.footerLogo.create({ data: logo });
  }
  console.log('Seeded', logos.length, 'footer logos');
}
main().finally(() => prisma.$disconnect());
