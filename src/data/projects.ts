export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: { label: string; color: string }[];
  category: string;
  technologies: string[];
  status: "Completed" | "In Progress" | "Upcoming";
  date: string; // ISO date string for sorting
}

const tagColors: Record<string, string> = {
  React: "bg-blue-100 text-blue-700",
  "Node.js": "bg-green-100 text-green-700",
  Stripe: "bg-purple-100 text-purple-700",
  AWS: "bg-yellow-100 text-yellow-700",
  Flutter: "bg-cyan-100 text-cyan-700",
  Firebase: "bg-orange-100 text-orange-700",
  HealthKit: "bg-red-100 text-red-700",
  "Google Fit": "bg-teal-100 text-teal-700",
  Branding: "bg-indigo-100 text-indigo-700",
  "Logo Design": "bg-pink-100 text-pink-700",
  Print: "bg-amber-100 text-amber-700",
  Digital: "bg-violet-100 text-violet-700",
  "Vue.js": "bg-emerald-100 text-emerald-700",
  Django: "bg-green-100 text-green-700",
  PostgreSQL: "bg-blue-100 text-blue-700",
  "Google Maps": "bg-red-100 text-red-700",
  Express: "bg-gray-200 text-gray-700",
  MongoDB: "bg-green-100 text-green-700",
  "AWS S3": "bg-yellow-100 text-yellow-700",
  Angular: "bg-red-100 text-red-700",
  Laravel: "bg-orange-100 text-orange-700",
  MySQL: "bg-blue-100 text-blue-700",
  GraphQL: "bg-pink-100 text-pink-700",
  OAuth: "bg-gray-200 text-gray-700",
  "Socket.io": "bg-violet-100 text-violet-700",
  WebSockets: "bg-indigo-100 text-indigo-700",
  Redis: "bg-red-100 text-red-700",
  "React Native": "bg-cyan-100 text-cyan-700",
  Elasticsearch: "bg-yellow-100 text-yellow-700",
  Python: "bg-yellow-100 text-yellow-700",
  TensorFlow: "bg-orange-100 text-orange-700",
  TypeScript: "bg-blue-100 text-blue-700",
  "Next.js": "bg-gray-200 text-gray-700",
  Tailwind: "bg-cyan-100 text-cyan-700",
  Docker: "bg-blue-100 text-blue-700",
  Kubernetes: "bg-indigo-100 text-indigo-700",
  Figma: "bg-purple-100 text-purple-700",
  Svelte: "bg-orange-100 text-orange-700",
  Prisma: "bg-teal-100 text-teal-700",
};

function getTags(names: string[]): { label: string; color: string }[] {
  return names.map((name) => ({
    label: name,
    color: tagColors[name] || "bg-gray-100 text-gray-700",
  }));
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "luxe-fashion-ecommerce",
    title: "Luxe Fashion E-Commerce",
    description:
      "A premium online shopping experience with advanced filtering and personalized recommendations.",
    image: "/projects/luxe-fashion.jpg",
    tags: getTags(["React", "Node.js", "Stripe", "AWS"]),
    category: "Web Development",
    technologies: ["React", "Node.js", "Stripe", "AWS"],
    status: "Completed",
    date: "2025-12-15",
  },
  {
    id: 2,
    slug: "fittrack-mobile-app",
    title: "FitTrack Mobile App",
    description:
      "A comprehensive fitness tracking application with personalized workout plans and nutrition guidance.",
    image: "/projects/fittrack.jpg",
    tags: getTags(["Flutter", "Firebase", "HealthKit", "Google Fit"]),
    category: "Mobile App",
    technologies: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
    status: "Completed",
    date: "2025-11-20",
  },
  {
    id: 3,
    slug: "horizon-financial-rebrand",
    title: "Horizon Financial Rebrand",
    description:
      "Complete brand identity redesign for a financial services firm, including logo, guidelines and marketing materials.",
    image: "/projects/horizon.jpg",
    tags: getTags(["Branding", "Logo Design", "Print", "Digital"]),
    category: "Brand Identity",
    technologies: ["Branding", "Logo Design", "Print", "Digital"],
    status: "Completed",
    date: "2025-10-05",
  },
  {
    id: 4,
    slug: "homequest-property-platform",
    title: "HomeQuest Property Platform",
    description:
      "A modern real estate marketplace with advanced search, virtual tours, and agent connection features.",
    image: "/projects/homequest.jpg",
    tags: getTags(["Vue.js", "Django", "PostgreSQL", "Google Maps"]),
    category: "Web Development",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Google Maps"],
    status: "Completed",
    date: "2025-09-18",
  },
  {
    id: 5,
    slug: "eduspark-learning-platform",
    title: "EduSpark Learning Platform",
    description:
      "An interactive online learning platform with course management, video lessons, and progress tracking.",
    image: "/projects/eduspark.jpg",
    tags: getTags(["React", "Express", "MongoDB", "AWS S3"]),
    category: "Web Development",
    technologies: ["React", "Express", "MongoDB", "AWS S3"],
    status: "Completed",
    date: "2025-08-22",
  },
  {
    id: 6,
    slug: "saveur-restaurant-platform",
    title: "Saveur Restaurant Platform",
    description:
      "A comprehensive restaurant management system with reservations, online ordering, and loyalty program.",
    image: "/projects/saveur.jpg",
    tags: getTags(["Angular", "Laravel", "MySQL", "Stripe"]),
    category: "Web Development",
    technologies: ["Angular", "Laravel", "MySQL", "Stripe"],
    status: "Completed",
    date: "2025-07-10",
  },
  {
    id: 7,
    slug: "wanderlust-travel-platform",
    title: "Wanderlust Travel Platform",
    description:
      "An all-in-one travel booking platform with flight, hotel, and experience reservations with personalized recommendations.",
    image: "/projects/wanderlust.jpg",
    tags: getTags(["React", "GraphQL", "PostgreSQL", "AWS"]),
    category: "Web Development",
    technologies: ["React", "GraphQL", "PostgreSQL", "AWS"],
    status: "Completed",
    date: "2025-06-14",
  },
  {
    id: 8,
    slug: "mediconnect-healthcare-platform",
    title: "MediConnect Healthcare Platform",
    description:
      "A secure healthcare application for patient-doctor communication, appointment scheduling, and medical record management.",
    image: "/projects/mediconnect.jpg",
    tags: getTags(["Angular", "Node.js", "MongoDB", "OAuth"]),
    category: "Web Development",
    technologies: ["Angular", "Node.js", "MongoDB", "OAuth"],
    status: "Completed",
    date: "2025-05-30",
  },
  {
    id: 9,
    slug: "taskflow-project-management",
    title: "TaskFlow Project Management",
    description:
      "A comprehensive project management tool with task tracking, team collaboration, and resource allocation features.",
    image: "/projects/taskflow.jpg",
    tags: getTags(["Vue.js", "Express", "PostgreSQL", "Socket.io"]),
    category: "Web Development",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    status: "Completed",
    date: "2025-04-20",
  },
  {
    id: 10,
    slug: "cryptotrader-exchange-platform",
    title: "CryptoTrader Exchange Platform",
    description:
      "A secure cryptocurrency trading platform with real-time price tracking, portfolio management, and automated trading.",
    image: "/projects/cryptotrader.jpg",
    tags: getTags(["React", "Node.js", "WebSockets", "Redis"]),
    category: "Web Development",
    technologies: ["React", "Node.js", "WebSockets", "Redis"],
    status: "Completed",
    date: "2025-03-15",
  },
  {
    id: 11,
    slug: "melodia-music-streaming",
    title: "Melodia Music Streaming",
    description:
      "A feature-rich music streaming platform with personalized recommendations, playlist creation, and artist discovery.",
    image: "/projects/melodia.jpg",
    tags: getTags(["React Native", "GraphQL", "AWS", "Elasticsearch"]),
    category: "Mobile App",
    technologies: ["React Native", "GraphQL", "AWS", "Elasticsearch"],
    status: "Completed",
    date: "2025-02-28",
  },
  {
    id: 12,
    slug: "socialpulse-analytics-platform",
    title: "SocialPulse Analytics Platform",
    description:
      "A comprehensive social media management tool with content scheduling, analytics, and audience engagement tracking.",
    image: "/projects/socialpulse.jpg",
    tags: getTags(["Vue.js", "Python", "Django", "TensorFlow"]),
    category: "Web Development",
    technologies: ["Vue.js", "Python", "Django", "TensorFlow"],
    status: "Completed",
    date: "2025-01-18",
  },
  {
    id: 13,
    slug: "artisan-marketplace",
    title: "Artisan Marketplace",
    description:
      "A handcrafted goods marketplace connecting artisans with buyers, featuring secure payments and shipping integration.",
    image: "/projects/artisan.jpg",
    tags: getTags(["Next.js", "Stripe", "PostgreSQL", "AWS"]),
    category: "E-Commerce",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
    status: "Completed",
    date: "2024-12-10",
  },
  {
    id: 14,
    slug: "greenlife-sustainability-app",
    title: "GreenLife Sustainability App",
    description:
      "A mobile app helping users track and reduce their carbon footprint with personalized tips and community challenges.",
    image: "/projects/greenlife.jpg",
    tags: getTags(["Flutter", "Firebase", "Node.js", "MongoDB"]),
    category: "Mobile App",
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    status: "Completed",
    date: "2024-11-25",
  },
  {
    id: 15,
    slug: "nova-design-studio-brand",
    title: "Nova Design Studio Brand",
    description:
      "Complete brand identity design for a creative design studio including logo, stationery, and brand guidelines.",
    image: "/projects/nova.jpg",
    tags: getTags(["Branding", "Logo Design", "Print", "Digital"]),
    category: "Brand Identity",
    technologies: ["Branding", "Logo Design", "Print", "Digital"],
    status: "Completed",
    date: "2024-10-08",
  },
  {
    id: 16,
    slug: "petpal-veterinary-platform",
    title: "PetPal Veterinary Platform",
    description:
      "An online platform connecting pet owners with veterinarians for appointments, health records, and telemedicine.",
    image: "/projects/petpal.jpg",
    tags: getTags(["React", "Express", "PostgreSQL", "AWS"]),
    category: "Web Development",
    technologies: ["React", "Express", "PostgreSQL", "AWS"],
    status: "Completed",
    date: "2024-09-15",
  },
  {
    id: 17,
    slug: "zenith-hr-management",
    title: "Zenith HR Management",
    description:
      "A comprehensive HR management system with employee onboarding, payroll, performance reviews, and analytics.",
    image: "/projects/zenith.jpg",
    tags: getTags(["Angular", "Node.js", "MySQL", "Docker"]),
    category: "Web Development",
    technologies: ["Angular", "Node.js", "MySQL", "Docker"],
    status: "In Progress",
    date: "2025-12-20",
  },
  {
    id: 18,
    slug: "quickbite-food-delivery",
    title: "QuickBite Food Delivery",
    description:
      "A food delivery platform with real-time order tracking, restaurant management, and driver assignment system.",
    image: "/projects/quickbite.jpg",
    tags: getTags(["React Native", "Node.js", "MongoDB", "Redis"]),
    category: "Mobile App",
    technologies: ["React Native", "Node.js", "MongoDB", "Redis"],
    status: "In Progress",
    date: "2025-12-18",
  },
  {
    id: 19,
    slug: "cloudvault-storage",
    title: "CloudVault Storage Platform",
    description:
      "A secure cloud storage solution with file sharing, collaboration features, and end-to-end encryption.",
    image: "/projects/cloudvault.jpg",
    tags: getTags(["Next.js", "AWS", "PostgreSQL", "Redis"]),
    category: "Web Development",
    technologies: ["Next.js", "AWS", "PostgreSQL", "Redis"],
    status: "In Progress",
    date: "2026-01-05",
  },
  {
    id: 20,
    slug: "lingua-language-learning",
    title: "Lingua Language Learning",
    description:
      "An AI-powered language learning app with speech recognition, interactive lessons, and progress tracking.",
    image: "/projects/lingua.jpg",
    tags: getTags(["Flutter", "Python", "TensorFlow", "Firebase"]),
    category: "Mobile App",
    technologies: ["Flutter", "Python", "TensorFlow", "Firebase"],
    status: "In Progress",
    date: "2026-01-10",
  },
  {
    id: 21,
    slug: "bloom-flower-shop",
    title: "Bloom Flower Shop Brand",
    description:
      "Elegant brand identity for a luxury flower shop including logo design, packaging, and digital presence.",
    image: "/projects/bloom.jpg",
    tags: getTags(["Branding", "Logo Design", "Print", "Figma"]),
    category: "Brand Identity",
    technologies: ["Branding", "Logo Design", "Print", "Figma"],
    status: "Completed",
    date: "2024-08-20",
  },
  {
    id: 22,
    slug: "codeforge-developer-tools",
    title: "CodeForge Developer Tools",
    description:
      "A suite of developer tools including code editor, version control integration, and automated testing pipeline.",
    image: "/projects/codeforge.jpg",
    tags: getTags(["TypeScript", "Svelte", "PostgreSQL", "Docker"]),
    category: "Web Development",
    technologies: ["TypeScript", "Svelte", "PostgreSQL", "Docker"],
    status: "Upcoming",
    date: "2026-03-01",
  },
  {
    id: 23,
    slug: "vitality-wellness-platform",
    title: "Vitality Wellness Platform",
    description:
      "A holistic wellness platform combining fitness, nutrition, and mental health tracking with expert guidance.",
    image: "/projects/vitality.jpg",
    tags: getTags(["React", "Node.js", "MongoDB", "AWS"]),
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    status: "Upcoming",
    date: "2026-04-01",
  },
  {
    id: 24,
    slug: "nexus-event-management",
    title: "Nexus Event Management",
    description:
      "A full-featured event management platform with ticketing, scheduling, attendee engagement, and analytics.",
    image: "/projects/nexus.jpg",
    tags: getTags(["Next.js", "Prisma", "PostgreSQL", "Stripe"]),
    category: "Web Development",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    status: "Upcoming",
    date: "2026-05-01",
  },
];

export const projectCategories = [
  "All",
  "Web Development",
  "Mobile App",
  "Brand Identity",
  "E-Commerce",
  "UI/UX Design",
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();

export const projectStatuses = ["Completed", "In Progress", "Upcoming"];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
