const { PrismaClient } = require("@prisma/client");
const p = new PrismaClient();

const updates = [
  {
    slug: "ui-ux-design",
    pricing: JSON.stringify({ packageName: "Basic Package", price: "$1,499" }),
    highlights: JSON.stringify([
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Visual Design & UI Elements",
      "Design System & Guidelines",
    ]),
  },
  {
    slug: "web-development",
    pricing: JSON.stringify({ packageName: "Standard Package", price: "$2,499" }),
    highlights: JSON.stringify([
      "Responsive Websites for All Screens",
      "SEO Integration",
      "Custom API Testing",
      "Custom Front & Analytics",
    ]),
  },
  {
    slug: "mobile-app-development",
    pricing: JSON.stringify({ packageName: "Premium", price: "$3,999" }),
    highlights: JSON.stringify([
      "Cross-Platform App Development",
      "Full Authentication",
      "Push Notification Integration",
      "App Store Submission",
    ]),
  },
  {
    slug: "brand-identity-design",
    pricing: JSON.stringify({ packageName: "Basic Package", price: "$1,499" }),
    highlights: JSON.stringify([
      "Logo Design & Concepts",
      "Color Palette & Typography",
      "Brand Guidelines Document",
      "Brand Visual & Guidelines",
    ]),
  },
  {
    slug: "e-commerce-development",
    pricing: JSON.stringify({ packageName: "Standard", price: "$3,499" }),
    highlights: JSON.stringify([
      "Custom E-Commerce Websites for All",
      "Product Management for 100 products",
      "Payment Gateway Integration",
      "Order Management System",
    ]),
  },
  {
    slug: "digital-marketing",
    pricing: JSON.stringify({ packageName: "Monthly", price: "$1,999" }),
    highlights: JSON.stringify([
      "Monthly Analytics",
      "Social Media Management",
      "Content Strategy & SEO",
      "Monthly Performance Reports",
    ]),
  },
];

(async () => {
  for (const u of updates) {
    await p.service.update({
      where: { slug: u.slug },
      data: { pricing: u.pricing, highlights: u.highlights },
    });
    console.log("Updated:", u.slug);
  }
  await p.$disconnect();
})();
