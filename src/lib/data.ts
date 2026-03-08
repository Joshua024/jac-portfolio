import { prisma } from "./prisma";

// Testimonials
export async function getTestimonials(page?: string) {
  return prisma.testimonial.findMany({
    where: {
      published: true,
      ...(page ? { page } : {}),
    },
    orderBy: { order: "asc" },
  });
}

// FAQs
export async function getFAQs(page?: string) {
  return prisma.fAQ.findMany({
    where: {
      published: true,
      ...(page ? { page } : {}),
    },
    orderBy: { order: "asc" },
  });
}

// Skills
export async function getSkills() {
  return prisma.skill.findMany({ orderBy: { order: "asc" } });
}

// Time Slots
export async function getTimeSlots() {
  return prisma.timeSlot.findMany({
    where: { available: true },
    orderBy: { order: "asc" },
  });
}

// Site Settings
export async function getSiteSettings() {
  return prisma.siteSettings.findFirst();
}

// Page Content
export async function getPageContent(page: string, section?: string) {
  return prisma.pageContent.findMany({
    where: {
      page,
      ...(section ? { section } : {}),
    },
    orderBy: { order: "asc" },
  });
}

// Services from DB
export async function getServices() {
  return prisma.service.findMany({
    where: { published: true },
    orderBy: { order: "asc" },
  });
}

// Projects from DB
export async function getProjects() {
  return prisma.project.findMany({
    where: { published: true },
    orderBy: { order: "asc" },
  });
}

// Articles from DB
export async function getArticles() {
  return prisma.article.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
}
