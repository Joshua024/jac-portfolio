import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // ── Admin User ──
  const hashedPassword = await bcrypt.hash("admin123", 12);
  await prisma.user.upsert({
    where: { email: "admin@jac.dev" },
    update: {},
    create: {
      email: "admin@jac.dev",
      password: hashedPassword,
      name: "Joshua Adumchimma",
    },
  });
  console.log("✅ Admin user created (admin@jac.dev / admin123)");

  // ── Site Settings ──
  await prisma.siteSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      siteName: "JAC",
      siteTagline: "Creative Developer & Designer",
      email: "hello@creativedeveloper.com",
      supportEmail: "support@creativedeveloper.com",
      phone: "+1 (415) 555-5876",
      address: "123 Innovation Avenue",
      city: "San Francisco",
      state: "CA",
      zipCode: "94103",
      country: "United States",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  });
  console.log("✅ Site settings created");

  // ── Page Content (Hero, About, etc.) ──
  const pageContents = [
    // Home Hero
    { page: "home", section: "hero", key: "badge", value: "Available for Freelance Work" },
    { page: "home", section: "hero", key: "title", value: "Creative Developer & Designer" },
    { page: "home", section: "hero", key: "subtitle", value: "I craft beautiful, functional digital experiences that help businesses grow. Specializing in web development, UI/UX design, and brand identity." },
    { page: "home", section: "hero", key: "cta1Text", value: "View Projects" },
    { page: "home", section: "hero", key: "cta1Link", value: "/projects" },
    { page: "home", section: "hero", key: "cta2Text", value: "Download CV" },
    { page: "home", section: "hero", key: "cta2Link", value: "#" },
    { page: "home", section: "hero", key: "stat1", value: "5+" },
    { page: "home", section: "hero", key: "stat1Label", value: "Years Experience" },
    { page: "home", section: "hero", key: "stat2", value: "50+" },
    { page: "home", section: "hero", key: "stat2Label", value: "Projects Completed" },
    { page: "home", section: "hero", key: "stat3", value: "30+" },
    { page: "home", section: "hero", key: "stat3Label", value: "Happy Clients" },
    { page: "home", section: "hero", key: "tags", value: "[\"UI/UX Design\",\"Web Development\",\"Digital Marketing\",\"Content Creation\"]" },
    { page: "home", section: "hero", key: "image", value: "" },
    // Home Services
    { page: "home", section: "services", key: "label", value: "What I Do" },
    { page: "home", section: "services", key: "title", value: "Services & Expertise" },
    { page: "home", section: "services", key: "subtitle", value: "I offer a range of services to help businesses establish and grow their digital presence." },
    // Home Newsletter
    { page: "home", section: "newsletter", key: "title", value: "Let's Work Together" },
    { page: "home", section: "newsletter", key: "subtitle", value: "Have a project in mind? Let's create something amazing together. Subscribe to my newsletter for tips and updates." },
    // Home Contact
    { page: "home", section: "contact", key: "label", value: "Get In Touch" },
    { page: "home", section: "contact", key: "title", value: "Contact Me" },
    { page: "home", section: "contact", key: "subtitle", value: "Feel free to reach out for collaborations, questions, or just a friendly hello. I'd love to hear from you!" },
    // About Hero
    { page: "about", section: "hero", key: "title", value: "Hi, I'm Joshua Adumchimma" },
    { page: "about", section: "hero", key: "subtitle", value: "Creative Developer & Digital Storyteller with over 5 years of experience crafting beautiful, functional digital experiences." },
    { page: "about", section: "hero", key: "tag1", value: "UI/UX Designer" },
    { page: "about", section: "hero", key: "tag2", value: "Full Stack Developer" },
    { page: "about", section: "hero", key: "tag3", value: "Digital Strategist" },
    // About Me
    { page: "about", section: "aboutMe", key: "title", value: "About Me" },
    { page: "about", section: "aboutMe", key: "paragraph1", value: "I'm a passionate digital creator based in San Francisco with a background in both Design and development. My journey in the digital world began over 5 years ago when I discovered my passion for creating beautiful interfaces that solve real problems." },
    { page: "about", section: "aboutMe", key: "paragraph2", value: "After graduating with a degree in Computer Science from Stanford University, I spent three years at a leading tech company honing my development skills before transitioning to a design-focused approach where I learned to bridge the gap between technical functionality and aesthetic appeal." },
    { page: "about", section: "aboutMe", key: "paragraph3", value: "Today, my work is characterized by its intentional presence, taking time to think digital products that not only look great but also deliver exceptional user experiences and business results." },
    { page: "about", section: "aboutMe", key: "paragraph4", value: "When I'm not designing or coding, you'll find me hiking in the mountains, experimenting with photography, or exploring the latest advancements in technology." },
    // Services Hero
    { page: "services", section: "hero", key: "title", value: "My Services" },
    { page: "services", section: "hero", key: "subtitle", value: "Comprehensive digital solutions tailored to your needs. From concept to deployment, I deliver excellence at every stage." },
    // Contact Hero
    { page: "contact", section: "hero", key: "title", value: "Get in Touch" },
    // Blog Hero
    { page: "blog", section: "hero", key: "title", value: "Blog Articles" },
    { page: "blog", section: "hero", key: "subtitle", value: "Insights, tutorials, and thoughts on design, development, and digital strategy." },
  ];

  for (const item of pageContents) {
    await prisma.pageContent.upsert({
      where: { page_section_key: { page: item.page, section: item.section, key: item.key } },
      update: { value: item.value },
      create: { ...item, order: 0 },
    });
  }
  console.log(`✅ ${pageContents.length} page content entries created`);

  // ── Services ──
  const services = [
    {
      slug: "ui-ux-design",
      title: "UI/UX Design",
      subtitle: "Creating intuitive, user-centered designs that deliver exceptional digital experiences",
      icon: "Palette",
      description: "Transform your digital presence with thoughtfully crafted user interfaces and experiences. I combine aesthetic design with user research to create products that are beautiful, intuitive, and effective.",
      order: 0,
    },
    {
      slug: "web-development",
      title: "Web Development",
      subtitle: "Building responsive, performant websites and web applications using modern technologies",
      icon: "Code",
      description: "From simple landing pages to complex web applications, I build fast, secure, and scalable solutions using cutting-edge technologies and best practices.",
      order: 1,
    },
    {
      slug: "mobile-app-development",
      title: "Mobile App Development",
      subtitle: "Developing cross-platform mobile applications with native-like performance and feel",
      icon: "Smartphone",
      description: "Create powerful mobile experiences that work seamlessly across iOS and Android using React Native, Flutter, or native technologies.",
      order: 2,
    },
    {
      slug: "brand-identity-design",
      title: "Brand Identity Design",
      subtitle: "Crafting unique brand identities that communicate your vision and resonate with audiences",
      icon: "Layers",
      description: "Build a strong, cohesive brand identity that sets you apart from the competition and creates lasting connections with your target audience.",
      order: 3,
    },
    {
      slug: "e-commerce-development",
      title: "E-Commerce Development",
      subtitle: "Building online stores that drive sales and deliver seamless shopping experiences",
      icon: "ShoppingCart",
      description: "Launch or upgrade your online store with custom e-commerce solutions that maximize conversions and deliver exceptional shopping experiences.",
      order: 4,
    },
    {
      slug: "digital-marketing",
      title: "Digital Marketing",
      subtitle: "Strategic digital marketing campaigns that drive growth, engagement, and conversions",
      icon: "TrendingUp",
      description: "Grow your online presence with data-driven marketing strategies that increase visibility, drive traffic, and generate leads.",
      order: 5,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: service,
    });
  }
  console.log("✅ 6 services created");

  // ── Testimonials ──
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      content: "Joshua delivered an exceptional website that exceeded our expectations. His attention to detail and ability to translate our vision into a beautiful, functional product was remarkable. The project was delivered on time and the results have been outstanding.",
      rating: 5,
      page: "home",
      order: 0,
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "DesignLab",
      content: "Working with JAC was a fantastic experience. He took our complex requirements and turned them into an intuitive, elegant design. His technical expertise combined with his design sensibility made the collaboration seamless and the end product exceeded our expectations.",
      rating: 5,
      page: "home",
      order: 1,
    },
    {
      name: "Emily Davis",
      role: "Marketing Director",
      company: "GrowthCo",
      content: "The mobile app Joshua built for us has significantly improved our customer engagement. His understanding of both technical requirements and user experience resulted in a product that our users love. Highly recommended for any digital project.",
      rating: 5,
      page: "home",
      order: 2,
    },
  ];

  for (const t of testimonials) {
    await prisma.testimonial.create({ data: t });
  }
  console.log("✅ 3 testimonials created");

  // ── FAQs ──
  const faqs = [
    // Services FAQs
    { question: "How long does a typical project take to complete?", answer: "Project timelines vary based on scope and complexity. A simple website typically takes 2-4 weeks, while more complex web applications can take 6-12 weeks. I'll provide a detailed timeline during our initial consultation.", page: "services", order: 0 },
    { question: "What is your payment structure?", answer: "I typically work with a 50% upfront deposit and 50% upon completion. For larger projects, I offer milestone-based payment plans. All payment terms are clearly outlined before project kickoff.", page: "services", order: 1 },
    { question: "Do you provide ongoing support after project completion?", answer: "Yes! I offer various maintenance and support packages to keep your digital products running smoothly. This includes bug fixes, updates, performance monitoring, and feature enhancements.", page: "services", order: 2 },
    { question: "Can you work with existing designs or brand guidelines?", answer: "Absolutely! I'm experienced in working within existing brand guidelines and can seamlessly integrate with your current design system. I can also help evolve your brand while maintaining consistency.", page: "services", order: 3 },
    { question: "What technologies do you specialize in?", answer: "I specialize in React, Next.js, TypeScript, Node.js for web development; React Native and Flutter for mobile; and Figma, Adobe Creative Suite for design. I'm always learning and adapting to new technologies.", page: "services", order: 4 },
    // Contact FAQs
    { question: "What is your typical project process?", answer: "My typical project process starts with a discovery call to understand your needs, followed by a detailed proposal and timeline. Once approved, I move through design, development, testing, and launch phases. Throughout the project, you'll have regular check-ins and opportunities for feedback.", page: "contact", order: 0 },
    { question: "What are your payment terms?", answer: "I typically require a 50% deposit upfront to begin work, with the remaining 50% due upon project completion. For larger projects, I offer milestone-based payments split across key deliverables.", page: "contact", order: 1 },
    { question: "How long does a typical project take?", answer: "Project timelines vary based on scope and complexity. A simple website typically takes 2-4 weeks, while more complex web applications can take 6-12 weeks. Mobile app development usually ranges from 8-16 weeks.", page: "contact", order: 2 },
    { question: "Do you offer maintenance services?", answer: "Yes! I offer ongoing maintenance and support packages to keep your digital products running smoothly. This includes regular updates, security patches, performance optimization, content updates, and technical support.", page: "contact", order: 3 },
    { question: "Can you work with clients internationally?", answer: "Absolutely! I work with clients from around the world. Remote collaboration tools make it easy to communicate effectively regardless of location. I'm flexible with scheduling meetings across different time zones.", page: "contact", order: 4 },
  ];

  for (const faq of faqs) {
    await prisma.fAQ.create({ data: faq });
  }
  console.log("✅ 10 FAQs created");

  // ── Skills ──
  const skills = [
    { name: "React", category: "Frontend", level: 95, order: 0 },
    { name: "Next.js", category: "Frontend", level: 90, order: 1 },
    { name: "TypeScript", category: "Frontend", level: 90, order: 2 },
    { name: "Tailwind CSS", category: "Frontend", level: 95, order: 3 },
    { name: "Node.js", category: "Backend", level: 85, order: 4 },
    { name: "Python", category: "Backend", level: 75, order: 5 },
    { name: "PostgreSQL", category: "Backend", level: 80, order: 6 },
    { name: "MongoDB", category: "Backend", level: 80, order: 7 },
    { name: "Figma", category: "Design", level: 90, order: 8 },
    { name: "Adobe XD", category: "Design", level: 85, order: 9 },
    { name: "Photoshop", category: "Design", level: 80, order: 10 },
    { name: "Illustrator", category: "Design", level: 75, order: 11 },
    { name: "React Native", category: "Mobile", level: 85, order: 12 },
    { name: "Flutter", category: "Mobile", level: 70, order: 13 },
    { name: "Git", category: "Tools", level: 90, order: 14 },
    { name: "Docker", category: "Tools", level: 75, order: 15 },
  ];

  for (const skill of skills) {
    await prisma.skill.create({ data: skill });
  }
  console.log("✅ 16 skills created");

  // ── Time Slots ──
  const timeSlots = [
    { time: "9:00 AM", order: 0 },
    { time: "10:00 AM", order: 1 },
    { time: "11:00 AM", order: 2 },
    { time: "1:00 PM", order: 3 },
    { time: "2:00 PM", order: 4 },
    { time: "3:00 PM", order: 5 },
  ];

  for (const slot of timeSlots) {
    await prisma.timeSlot.create({ data: slot });
  }
  console.log("✅ 6 time slots created");

  console.log("\n🎉 Database seeded successfully!");
  console.log("Admin login: admin@jac.dev / admin123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
