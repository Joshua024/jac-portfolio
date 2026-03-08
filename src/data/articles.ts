export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
}

const categoryColors: Record<string, string> = {
  Development: "bg-blue-500",
  Design: "bg-purple-500",
  Mobile: "bg-green-500",
  Marketing: "bg-orange-500",
};

export function getCategoryColor(category: string): string {
  return categoryColors[category] || "bg-gray-500";
}

export const blogCategories = [
  "All Categories",
  "Development",
  "Design",
  "Mobile",
  "Marketing",
];

export const articles: Article[] = [
  {
    id: 1,
    slug: "future-of-web-development-trends-2025",
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Explore the emerging technologies and methodologies that are shaping the future of web development, from WebAssembly to AI-driven interfaces.",
    category: "Development",
    date: "June 3, 2025",
    readTime: 8,
    image: "/blog/web-dev-trends.jpg",
  },
  {
    id: 2,
    slug: "ui-ux-design-principles-conversion-rates",
    title: "10 UI/UX Design Principles That Improve Conversion Rates",
    excerpt:
      "Learn how strategic design decisions can significantly impact user engagement and conversion rates on your digital platforms.",
    category: "Design",
    date: "May 28, 2025",
    readTime: 6,
    image: "/blog/design-principles.jpg",
  },
  {
    id: 3,
    slug: "native-vs-cross-platform-mobile-development",
    title:
      "Native vs. Cross-Platform: Choosing the Right Mobile Development Approach",
    excerpt:
      "A comprehensive comparison of development approaches to help you make the best decision for your mobile app project.",
    category: "Mobile",
    date: "May 21, 2025",
    readTime: 10,
    image: "/blog/mobile-dev.jpg",
  },
  {
    id: 4,
    slug: "content-first-seo-sustainable-digital-marketing",
    title: "Content-First SEO: A Sustainable Approach to Digital Marketing",
    excerpt:
      "Discover how focusing on high-quality content creation can drive sustainable organic traffic and build brand authority.",
    category: "Marketing",
    date: "May 15, 2025",
    readTime: 7,
    image: "/blog/seo-marketing.jpg",
  },
  {
    id: 5,
    slug: "advanced-javascript-patterns-performance",
    title:
      "Advanced JavaScript Patterns for Better Performance and Maintainability",
    excerpt:
      "Learn modern JavaScript patterns and techniques that will help you write cleaner, faster, and more maintainable code.",
    category: "Development",
    date: "May 10, 2025",
    readTime: 12,
    image: "/blog/js-patterns.jpg",
  },
  {
    id: 6,
    slug: "responsive-design-2025-beyond-media-queries",
    title: "Responsive Design in 2025: Beyond Media Queries",
    excerpt:
      "Explore modern approaches to responsive design including container queries, fluid typography, and adaptive layouts.",
    category: "Design",
    date: "May 3, 2025",
    readTime: 9,
    image: "/blog/responsive-design.jpg",
  },
  {
    id: 7,
    slug: "building-ar-experiences-mobile-apps",
    title: "Building Augmented Reality Experiences for Mobile Apps",
    excerpt:
      "A practical guide to implementing AR features in your mobile applications using the latest frameworks and best practices.",
    category: "Mobile",
    date: "April 28, 2025",
    readTime: 11,
    image: "/blog/ar-mobile.jpg",
  },
  {
    id: 8,
    slug: "social-media-strategy-b2b-beyond-linkedin",
    title: "Social Media Strategy for B2B Companies: Beyond LinkedIn",
    excerpt:
      "How B2B companies can effectively leverage various social platforms to build authority, generate leads, and nurture client relationships.",
    category: "Marketing",
    date: "April 22, 2025",
    readTime: 11,
    image: "/blog/social-b2b.jpg",
  },
  {
    id: 9,
    slug: "web-accessibility-comprehensive-guide-wcag-3",
    title: "Web Accessibility: A Comprehensive Guide to WCAG 3.0",
    excerpt:
      "Understanding the latest Web Content Accessibility Guidelines and implementing them effectively in your web projects.",
    category: "Development",
    date: "April 15, 2025",
    readTime: 14,
    image: "/blog/accessibility.jpg",
  },
  {
    id: 10,
    slug: "design-systems-scaling-product-teams",
    title: "Design Systems: Scaling Design Across Product Teams",
    excerpt:
      "Learn how to build and maintain effective design systems that ensure consistency and accelerate development across large teams.",
    category: "Design",
    date: "April 8, 2025",
    readTime: 10,
    image: "/blog/design-systems.jpg",
  },
  {
    id: 11,
    slug: "flutter-vs-react-native-2025-comparison",
    title: "Flutter vs React Native in 2025: A Developer's Perspective",
    excerpt:
      "An in-depth comparison of the two leading cross-platform mobile frameworks, analyzing performance, ecosystem, and developer experience.",
    category: "Mobile",
    date: "April 1, 2025",
    readTime: 13,
    image: "/blog/flutter-rn.jpg",
  },
  {
    id: 12,
    slug: "email-marketing-automation-strategies",
    title: "Email Marketing Automation: Strategies That Convert",
    excerpt:
      "Master the art of email marketing automation with proven strategies for segmentation, personalization, and conversion optimization.",
    category: "Marketing",
    date: "March 25, 2025",
    readTime: 8,
    image: "/blog/email-marketing.jpg",
  },
  {
    id: 13,
    slug: "microservices-architecture-best-practices",
    title: "Microservices Architecture: Best Practices and Pitfalls",
    excerpt:
      "A comprehensive guide to designing, implementing, and maintaining microservices-based architectures at scale.",
    category: "Development",
    date: "March 18, 2025",
    readTime: 15,
    image: "/blog/microservices.jpg",
  },
  {
    id: 14,
    slug: "color-psychology-digital-design",
    title: "Color Psychology in Digital Design: A Practical Guide",
    excerpt:
      "Understanding how color choices affect user perception, behavior, and decision-making in digital product design.",
    category: "Design",
    date: "March 11, 2025",
    readTime: 7,
    image: "/blog/color-psychology.jpg",
  },
  {
    id: 15,
    slug: "ios-18-features-developers-need-to-know",
    title: "iOS 18 Features Every Developer Needs to Know",
    excerpt:
      "A roundup of the most impactful iOS 18 features and APIs that developers should leverage in their mobile applications.",
    category: "Mobile",
    date: "March 4, 2025",
    readTime: 9,
    image: "/blog/ios18.jpg",
  },
  {
    id: 16,
    slug: "influencer-marketing-roi-measurement",
    title: "Measuring Influencer Marketing ROI: A Data-Driven Approach",
    excerpt:
      "Learn how to effectively measure and optimize your influencer marketing campaigns using data analytics and attribution models.",
    category: "Marketing",
    date: "February 25, 2025",
    readTime: 8,
    image: "/blog/influencer.jpg",
  },
  {
    id: 17,
    slug: "serverless-architecture-when-to-use",
    title: "Serverless Architecture: When and How to Use It Effectively",
    excerpt:
      "Understanding the benefits, limitations, and best use cases for serverless computing in modern web applications.",
    category: "Development",
    date: "February 18, 2025",
    readTime: 10,
    image: "/blog/serverless.jpg",
  },
  {
    id: 18,
    slug: "motion-design-principles-web-interfaces",
    title: "Motion Design Principles for Web Interfaces",
    excerpt:
      "How to use animation and motion design effectively to enhance user experience, guide attention, and communicate state changes.",
    category: "Design",
    date: "February 11, 2025",
    readTime: 8,
    image: "/blog/motion-design.jpg",
  },
  {
    id: 19,
    slug: "kotlin-multiplatform-future-mobile-development",
    title: "Kotlin Multiplatform: The Future of Mobile Development?",
    excerpt:
      "Exploring Kotlin Multiplatform as an emerging solution for sharing code between iOS and Android applications.",
    category: "Mobile",
    date: "February 4, 2025",
    readTime: 11,
    image: "/blog/kotlin-mp.jpg",
  },
  {
    id: 20,
    slug: "video-marketing-strategy-2025",
    title: "Video Marketing Strategy for 2025: Trends and Best Practices",
    excerpt:
      "How to create a winning video marketing strategy that captures attention, drives engagement, and delivers measurable results.",
    category: "Marketing",
    date: "January 28, 2025",
    readTime: 9,
    image: "/blog/video-marketing.jpg",
  },
  {
    id: 21,
    slug: "graphql-vs-rest-api-design",
    title: "GraphQL vs REST: Choosing the Right API Design",
    excerpt:
      "An objective comparison of GraphQL and REST approaches to help you choose the best API design pattern for your project.",
    category: "Development",
    date: "January 21, 2025",
    readTime: 11,
    image: "/blog/graphql-rest.jpg",
  },
  {
    id: 22,
    slug: "typography-best-practices-web-design",
    title: "Typography Best Practices for Web Design in 2025",
    excerpt:
      "Essential typography guidelines for creating readable, accessible, and visually appealing web interfaces.",
    category: "Design",
    date: "January 14, 2025",
    readTime: 7,
    image: "/blog/typography.jpg",
  },
  {
    id: 23,
    slug: "mobile-app-security-best-practices",
    title: "Mobile App Security: Best Practices for 2025",
    excerpt:
      "Critical security practices every mobile developer should implement to protect user data and prevent common vulnerabilities.",
    category: "Mobile",
    date: "January 7, 2025",
    readTime: 12,
    image: "/blog/mobile-security.jpg",
  },
  {
    id: 24,
    slug: "ppc-advertising-optimization-guide",
    title: "PPC Advertising Optimization: A Complete Guide",
    excerpt:
      "Strategies and techniques for optimizing your pay-per-click advertising campaigns across Google Ads and social platforms.",
    category: "Marketing",
    date: "December 30, 2024",
    readTime: 10,
    image: "/blog/ppc.jpg",
  },
  {
    id: 25,
    slug: "typescript-advanced-patterns-large-codebases",
    title: "TypeScript Advanced Patterns for Large Codebases",
    excerpt:
      "Advanced TypeScript techniques including conditional types, template literals, and mapped types for enterprise applications.",
    category: "Development",
    date: "December 23, 2024",
    readTime: 14,
    image: "/blog/typescript.jpg",
  },
  {
    id: 26,
    slug: "dark-mode-design-comprehensive-guide",
    title: "Dark Mode Design: A Comprehensive Implementation Guide",
    excerpt:
      "Best practices for designing and implementing dark mode themes that are accessible, aesthetically pleasing, and user-friendly.",
    category: "Design",
    date: "December 16, 2024",
    readTime: 9,
    image: "/blog/dark-mode.jpg",
  },
  {
    id: 27,
    slug: "push-notification-strategy-mobile-apps",
    title: "Push Notification Strategy for Mobile Apps",
    excerpt:
      "How to design push notification campaigns that drive engagement without annoying users, with real-world examples.",
    category: "Mobile",
    date: "December 9, 2024",
    readTime: 8,
    image: "/blog/push-notifications.jpg",
  },
  {
    id: 28,
    slug: "customer-journey-mapping-digital-marketing",
    title: "Customer Journey Mapping for Digital Marketing Success",
    excerpt:
      "A step-by-step guide to creating customer journey maps that inform your marketing strategy and improve conversions.",
    category: "Marketing",
    date: "December 2, 2024",
    readTime: 10,
    image: "/blog/journey-mapping.jpg",
  },
  {
    id: 29,
    slug: "web-performance-optimization-core-web-vitals",
    title: "Web Performance Optimization: Mastering Core Web Vitals",
    excerpt:
      "Practical strategies for improving your website's Core Web Vitals scores and delivering faster user experiences.",
    category: "Development",
    date: "November 25, 2024",
    readTime: 12,
    image: "/blog/core-web-vitals.jpg",
  },
  {
    id: 30,
    slug: "ux-research-methods-product-teams",
    title: "UX Research Methods Every Product Team Should Know",
    excerpt:
      "An overview of essential UX research methods with practical guidance on when and how to apply each technique.",
    category: "Design",
    date: "November 18, 2024",
    readTime: 11,
    image: "/blog/ux-research.jpg",
  },
  {
    id: 31,
    slug: "wearable-app-development-guide",
    title: "Wearable App Development: A Complete Guide",
    excerpt:
      "Everything you need to know about designing and developing applications for smartwatches and wearable devices.",
    category: "Mobile",
    date: "November 11, 2024",
    readTime: 13,
    image: "/blog/wearables.jpg",
  },
  {
    id: 32,
    slug: "brand-storytelling-digital-age",
    title: "Brand Storytelling in the Digital Age",
    excerpt:
      "How to craft compelling brand narratives that resonate with your audience across digital channels and build lasting connections.",
    category: "Marketing",
    date: "November 4, 2024",
    readTime: 7,
    image: "/blog/brand-storytelling.jpg",
  },
  {
    id: 33,
    slug: "docker-kubernetes-developers-guide",
    title: "Docker and Kubernetes: A Developer's Practical Guide",
    excerpt:
      "Hands-on guide to containerization and orchestration for developers looking to modernize their deployment workflows.",
    category: "Development",
    date: "October 28, 2024",
    readTime: 15,
    image: "/blog/docker-k8s.jpg",
  },
  {
    id: 34,
    slug: "figma-advanced-techniques-designers",
    title: "Figma Advanced Techniques for Professional Designers",
    excerpt:
      "Power-user tips and advanced Figma techniques to speed up your design workflow and create more polished deliverables.",
    category: "Design",
    date: "October 21, 2024",
    readTime: 10,
    image: "/blog/figma-advanced.jpg",
  },
  {
    id: 35,
    slug: "progressive-web-apps-mobile-experience",
    title: "Progressive Web Apps: Bridging Web and Mobile",
    excerpt:
      "How PWAs are providing near-native mobile experiences through the browser, and when to consider them over native apps.",
    category: "Mobile",
    date: "October 14, 2024",
    readTime: 9,
    image: "/blog/pwa.jpg",
  },
  {
    id: 36,
    slug: "analytics-driven-marketing-decisions",
    title: "Data Analytics for Smarter Marketing Decisions",
    excerpt:
      "How to leverage analytics tools and data visualization to make informed marketing decisions and measure campaign effectiveness.",
    category: "Marketing",
    date: "October 7, 2024",
    readTime: 8,
    image: "/blog/analytics-marketing.jpg",
  },
  {
    id: 37,
    slug: "ai-powered-web-development-tools",
    title: "AI-Powered Tools Transforming Web Development",
    excerpt:
      "An overview of AI tools and assistants that are changing how developers write, test, and deploy web applications.",
    category: "Development",
    date: "September 30, 2024",
    readTime: 10,
    image: "/blog/ai-dev-tools.jpg",
  },
  {
    id: 38,
    slug: "accessible-design-inclusive-products",
    title: "Accessible Design: Building Products for Everyone",
    excerpt:
      "Practical strategies for creating inclusive digital products that work for users of all abilities and circumstances.",
    category: "Design",
    date: "September 23, 2024",
    readTime: 11,
    image: "/blog/accessible-design.jpg",
  },
  {
    id: 39,
    slug: "mobile-payment-integration-guide",
    title: "Mobile Payment Integration: A Developer's Guide",
    excerpt:
      "Step-by-step guide to integrating Apple Pay, Google Pay, and other mobile payment solutions into your applications.",
    category: "Mobile",
    date: "September 16, 2024",
    readTime: 12,
    image: "/blog/mobile-payments.jpg",
  },
  {
    id: 40,
    slug: "conversion-rate-optimization-ecommerce",
    title: "Conversion Rate Optimization for E-Commerce",
    excerpt:
      "Proven techniques for optimizing your e-commerce funnel to increase sales, reduce cart abandonment, and boost revenue.",
    category: "Marketing",
    date: "September 9, 2024",
    readTime: 9,
    image: "/blog/cro-ecommerce.jpg",
  },
  {
    id: 41,
    slug: "api-security-best-practices",
    title: "API Security Best Practices for Modern Applications",
    excerpt:
      "Essential security strategies for protecting APIs from common threats including injection, authentication bypass, and data exposure.",
    category: "Development",
    date: "September 2, 2024",
    readTime: 13,
    image: "/blog/api-security.jpg",
  },
  {
    id: 42,
    slug: "micro-interactions-ux-delight",
    title: "Micro-Interactions: The Secret to Delightful UX",
    excerpt:
      "How small, purposeful animations and interactions can dramatically improve the user experience of your digital products.",
    category: "Design",
    date: "August 26, 2024",
    readTime: 6,
    image: "/blog/micro-interactions.jpg",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}
