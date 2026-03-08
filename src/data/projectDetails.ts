export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  client: string;
  timeline: string;
  role: string;
  teamSize: string;
  overview: string[];
  challenges: string[];
  solutions: string[];
  process: {
    title: string;
    description: string;
  }[];
  techImplementation: {
    title: string;
    items: string[];
  }[];
  performanceMetrics: {
    label: string;
    value: number;
  }[];
  gallery: {
    caption: string;
  }[];
  results: {
    stats: { value: string; label: string; color: string }[];
    impacts: string[];
  };
  testimonial: {
    content: string;
    name: string;
    role: string;
    company: string;
  };
  relatedProjects: string[]; // slugs
  ctaTitle: string;
  ctaDescription: string;
}

export const projectDetails: Record<string, ProjectDetail> = {
  "luxe-fashion-ecommerce": {
    slug: "luxe-fashion-ecommerce",
    title: "Luxe Fashion E-Commerce",
    subtitle:
      "A premium online shopping experience with advanced filtering and personalized recommendations, designed for high-end fashion retailers.",
    category: "Web Development",
    tags: ["Web Design", "E-Commerce", "React"],
    client: "Luxe Fashion Co.",
    timeline: "3 months (Jan - Mar 2025)",
    role: "Full Stack Developer & UI Designer",
    teamSize: "4-6 members",
    overview: [
      "Luxe Fashion E-Commerce is a premium online shopping platform that redefines the digital retail experience. Built using cutting-edge technologies including React, Node.js, and AWS, the platform delivers a seamless shopping experience with personalized product recommendations and advanced filtering capabilities.",
      "The project required a comprehensive approach to e-commerce development, from creating an intuitive user interface to building a robust backend infrastructure capable of handling high-traffic loads during promotional events and seasonal sales.",
    ],
    challenges: [
      "Complex product filtering across multiple attributes and categories",
      "Real-time inventory management with stock tracking",
      "High-performance image loading with lazy loading",
      "Secure payment processing with multiple gateways",
      "Personalized recommendations using user behavior data",
      "Mobile-responsive design maintaining luxury aesthetic",
    ],
    solutions: [
      "Implemented Elasticsearch-powered faceted search with instant results",
      "Built WebSocket-based real-time inventory sync system",
      "Utilized Next.js Image component with CDN-backed delivery",
      "Integrated Stripe with PCI-DSS compliant checkout flow",
      "Developed ML-based recommendation engine using collaborative filtering",
      "Created responsive design system with Tailwind CSS breakpoints",
    ],
    process: [
      {
        title: "Discovery & Research",
        description:
          "Conducted comprehensive market analysis, user interviews, and competitive research to understand the luxury e-commerce landscape and identify key opportunities for differentiation.",
      },
      {
        title: "UI/UX Design",
        description:
          "Created detailed wireframes, user flows, and high-fidelity mockups focusing on a premium shopping experience with intuitive navigation and elegant visual design.",
      },
      {
        title: "Development",
        description:
          "Built the platform using React for the frontend, Node.js for the backend, with AWS infrastructure for scalability. Implemented advanced features including real-time search and personalized recommendations.",
      },
      {
        title: "Integration & Testing",
        description:
          "Integrated payment gateways, shipping APIs, and third-party services. Conducted thorough testing including unit, integration, performance, and security testing.",
      },
      {
        title: "Launch & Optimization",
        description:
          "Deployed the platform to AWS infrastructure, monitored performance metrics, and iteratively optimized based on user feedback and analytics data.",
      },
    ],
    techImplementation: [
      {
        title: "Front-End Architecture",
        items: [
          "React 18 with TypeScript for type-safe UI",
          "Next.js for server-side rendering & SEO",
          "Tailwind CSS for responsive styling",
          "Redux Toolkit for state management",
          "Framer Motion for animations",
        ],
      },
      {
        title: "Back-End Infrastructure",
        items: [
          "Node.js with Express framework",
          "PostgreSQL for relational data",
          "Redis for caching and sessions",
          "JWT authentication with refresh tokens",
          "RESTful API with GraphQL endpoints",
        ],
      },
      {
        title: "E-Commerce Features",
        items: [
          "Stripe payment processing",
          "Advanced product search with filters",
          "Wishlist and cart persistence",
          "Order tracking and notifications",
          "Multi-currency support",
        ],
      },
      {
        title: "Deployment & DevOps",
        items: [
          "AWS EC2 with auto-scaling groups",
          "CloudFront CDN for static assets",
          "CI/CD pipeline with GitHub Actions",
          "Docker containerization",
          "CloudWatch monitoring and alerts",
        ],
      },
    ],
    performanceMetrics: [
      { label: "Performance", value: 95 },
      { label: "Accessibility", value: 92 },
      { label: "Best Practices", value: 98 },
      { label: "SEO", value: 96 },
      { label: "PWA", value: 88 },
    ],
    gallery: [
      { caption: "Checkout Process" },
      { caption: "Mobile Experience" },
      { caption: "Admin Dashboard" },
      { caption: "Product Detail Page" },
    ],
    results: {
      stats: [
        { value: "+42%", label: "Conversion Rate", color: "text-green-600 bg-green-50" },
        { value: "-38%", label: "Cart Abandonment", color: "text-blue-600 bg-blue-50" },
        { value: "+27%", label: "Mobile Engagement", color: "text-purple-600 bg-purple-50" },
      ],
      impacts: [
        "The platform has transformed the client's digital presence and online sales. Within the first 3 months after launch, the client experienced a 42% increase in conversion rates compared to their previous platform.",
        "Cart abandonment was reduced by 38% thanks to the streamlined checkout process, persistent cart functionality, and strategic placement of trust signals throughout the purchase flow.",
        "Mobile engagement saw a significant 27% improvement, driven by the responsive design, fast loading times, and the intuitive touch-optimized interface that provided a native-like experience.",
      ],
    },
    testimonial: {
      content:
        "Working with this development team has been an incredible experience. They didn't just build us a website — they crafted a digital experience that truly represents our brand. The attention to detail in both design and functionality exceeded all our expectations. Our customers love the new platform, and we've seen remarkable improvements in our conversion rates and customer satisfaction scores. They took the time to understand our industry, our customers, and our vision, which is reflected in every pixel of the final product.",
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      company: "Luxe Fashion Co.",
    },
    relatedProjects: [
      "fittrack-mobile-app",
      "homequest-property-platform",
      "saveur-restaurant-platform",
    ],
    ctaTitle: "Ready to Transform Your E-Commerce Experience?",
    ctaDescription:
      "Let's discuss how we can create a premium digital shopping experience for your brand.",
  },
  "fittrack-mobile-app": {
    slug: "fittrack-mobile-app",
    title: "FitTrack Mobile App",
    subtitle:
      "A comprehensive fitness tracking application with personalized workout plans and nutrition guidance for health-conscious users.",
    category: "Mobile App",
    tags: ["Mobile App", "Flutter", "Firebase"],
    client: "FitTrack Health Inc.",
    timeline: "4 months (Aug - Nov 2025)",
    role: "Mobile Developer & UX Designer",
    teamSize: "3-5 members",
    overview: [
      "FitTrack is a comprehensive cross-platform fitness tracking application built with Flutter. It provides personalized workout plans, nutrition guidance, and health metrics tracking to help users achieve their fitness goals.",
      "The app integrates with Apple HealthKit and Google Fit to provide a unified health dashboard, leveraging Firebase for real-time data sync and cloud functions for workout plan generation.",
    ],
    challenges: [
      "Cross-platform health data integration (HealthKit & Google Fit)",
      "Real-time workout tracking with GPS and sensors",
      "Personalized workout plan generation algorithm",
      "Offline-first architecture with data sync",
      "Complex nutrition database with barcode scanning",
      "Social features with privacy considerations",
    ],
    solutions: [
      "Built unified health abstraction layer for both platforms",
      "Implemented background location tracking with battery optimization",
      "Developed ML-based plan generation using user fitness data",
      "Used Hive for local storage with Firebase sync queue",
      "Integrated Open Food Facts API with custom barcode scanner",
      "Implemented granular privacy controls with data encryption",
    ],
    process: [
      { title: "User Research", description: "Conducted surveys and interviews with fitness enthusiasts to understand tracking needs, pain points with existing apps, and desired features." },
      { title: "Prototype & Test", description: "Created interactive prototypes and conducted usability testing with target users to validate the workout tracking and nutrition logging flows." },
      { title: "Development", description: "Built the app using Flutter with clean architecture, implementing core fitness tracking, nutrition logging, and social features." },
      { title: "Integration & QA", description: "Integrated HealthKit, Google Fit, and third-party APIs. Performed extensive testing across multiple devices and OS versions." },
      { title: "Launch & Iterate", description: "Launched on both App Store and Google Play, monitored user analytics, and released iterative updates based on feedback." },
    ],
    techImplementation: [
      { title: "Mobile Framework", items: ["Flutter 3.x with Dart", "BLoC pattern for state management", "Custom animations and transitions", "Platform-specific health integrations", "Background task scheduling"] },
      { title: "Backend Services", items: ["Firebase Authentication", "Cloud Firestore for real-time data", "Cloud Functions for server logic", "Firebase Cloud Messaging", "Firebase Analytics"] },
      { title: "Health Features", items: ["Apple HealthKit integration", "Google Fit API integration", "GPS workout tracking", "Heart rate monitoring", "Sleep tracking analysis"] },
      { title: "DevOps & Distribution", items: ["Fastlane for automated builds", "Firebase App Distribution", "Codemagic CI/CD pipeline", "Crashlytics error reporting", "A/B testing with Remote Config"] },
    ],
    performanceMetrics: [
      { label: "App Rating", value: 96 },
      { label: "Crash-Free Rate", value: 99 },
      { label: "Performance", value: 94 },
      { label: "Accessibility", value: 90 },
      { label: "User Retention", value: 85 },
    ],
    gallery: [
      { caption: "Dashboard" },
      { caption: "Workout Tracking" },
      { caption: "Nutrition Log" },
      { caption: "Progress Analytics" },
    ],
    results: {
      stats: [
        { value: "50K+", label: "Downloads (Month 1)", color: "text-green-600 bg-green-50" },
        { value: "4.8★", label: "App Store Rating", color: "text-blue-600 bg-blue-50" },
        { value: "72%", label: "Daily Active Users", color: "text-purple-600 bg-purple-50" },
      ],
      impacts: [
        "The app achieved over 50,000 downloads within the first month of launch across both platforms, driven by positive word-of-mouth and strong app store optimization.",
        "Maintained a 4.8-star rating on both App Store and Google Play, with users particularly praising the intuitive interface and accurate tracking capabilities.",
        "Achieved an impressive 72% daily active user rate, significantly higher than the industry average of 25%, attributed to the personalized workout plans and gamification elements.",
      ],
    },
    testimonial: {
      content: "The team delivered an exceptional fitness app that exceeded our expectations. The seamless integration with health platforms, the intuitive design, and the performance optimization have made FitTrack a leader in the fitness app space. Our users love the personalized experience.",
      name: "Michael Chen",
      role: "Product Director",
      company: "FitTrack Health Inc.",
    },
    relatedProjects: ["luxe-fashion-ecommerce", "mediconnect-healthcare-platform", "melodia-music-streaming"],
    ctaTitle: "Ready to Build Your Mobile App?",
    ctaDescription: "Let's create a mobile experience that your users will love.",
  },
  "horizon-financial-rebrand": {
    slug: "horizon-financial-rebrand",
    title: "Horizon Financial Rebrand",
    subtitle: "Complete brand identity redesign for a financial services firm, including logo, guidelines and marketing materials.",
    category: "Brand Identity",
    tags: ["Branding", "Logo Design", "Identity"],
    client: "Horizon Financial Group",
    timeline: "6 weeks (Sep - Oct 2025)",
    role: "Lead Brand Designer",
    teamSize: "2-3 members",
    overview: [
      "Horizon Financial Group needed a complete brand refresh to better reflect their modern approach to financial services. The rebrand encompassed a new logo, comprehensive brand guidelines, marketing collateral, and digital assets.",
      "The project involved deep strategic thinking about brand positioning, visual identity, and messaging to create a cohesive brand that resonates with both institutional investors and retail clients.",
    ],
    challenges: [
      "Balancing trustworthiness with modern, approachable design",
      "Maintaining brand recognition during transition",
      "Creating versatile assets across digital and print",
      "Unifying visual language across multiple sub-brands",
      "Meeting strict financial industry compliance requirements",
      "Designing for diverse audience segments",
    ],
    solutions: [
      "Developed a sophisticated color palette that conveys trust and innovation",
      "Created a phased rollout strategy with transitional brand elements",
      "Designed a flexible design system adaptable to all media formats",
      "Built a modular brand architecture with cohesive visual hierarchy",
      "Worked closely with compliance team on all brand materials",
      "Created targeted visual variations for different audience personas",
    ],
    process: [
      { title: "Brand Audit", description: "Analyzed existing brand assets, market positioning, and competitor landscape to identify opportunities for differentiation and improvement." },
      { title: "Strategy Development", description: "Defined brand values, personality, positioning, and messaging framework aligned with the company's evolution and business goals." },
      { title: "Visual Identity", description: "Designed new logo, color palette, typography, and visual elements that embody the brand's modern yet trustworthy character." },
      { title: "Collateral Design", description: "Created comprehensive brand collateral including business cards, stationery, presentation templates, and marketing materials." },
      { title: "Brand Guidelines", description: "Produced detailed brand guidelines documenting usage rules, specifications, and best practices for consistent brand application." },
    ],
    techImplementation: [
      { title: "Design Tools", items: ["Adobe Illustrator for logo design", "Figma for digital assets", "Adobe InDesign for print collateral", "After Effects for brand animations", "Photoshop for photography direction"] },
      { title: "Brand Assets", items: ["Primary and secondary logos", "Icon and favicon variations", "Social media templates", "Email signature designs", "Presentation templates"] },
      { title: "Print Materials", items: ["Business card designs", "Letterhead and envelopes", "Brochure and flyer templates", "Annual report design", "Event materials and signage"] },
      { title: "Digital Assets", items: ["Website style guide", "Social media brand kit", "Digital ad templates", "Newsletter templates", "App icon and splash screens"] },
    ],
    performanceMetrics: [
      { label: "Brand Recognition", value: 89 },
      { label: "Visual Consistency", value: 95 },
      { label: "Client Satisfaction", value: 97 },
      { label: "Industry Compliance", value: 100 },
      { label: "Versatility Score", value: 92 },
    ],
    gallery: [
      { caption: "Logo Variations" },
      { caption: "Brand Color Palette" },
      { caption: "Print Collateral" },
      { caption: "Digital Applications" },
    ],
    results: {
      stats: [
        { value: "+65%", label: "Brand Recognition", color: "text-green-600 bg-green-50" },
        { value: "+40%", label: "Client Inquiries", color: "text-blue-600 bg-blue-50" },
        { value: "98%", label: "Stakeholder Approval", color: "text-purple-600 bg-purple-50" },
      ],
      impacts: [
        "Brand recognition improved by 65% within the first quarter post-rebrand, with the new visual identity creating stronger recall across all touchpoints.",
        "Client inquiries increased by 40% following the rebrand launch, attributed to the more professional and approachable brand perception.",
        "The rebrand received 98% stakeholder approval in internal surveys, with team members feeling more pride and confidence in the refreshed brand representation.",
      ],
    },
    testimonial: {
      content: "The rebrand has transformed how our clients and partners perceive us. The new identity perfectly captures our blend of financial expertise and innovative thinking. The team's strategic approach to understanding our industry made all the difference.",
      name: "James Rodriguez",
      role: "Managing Director",
      company: "Horizon Financial Group",
    },
    relatedProjects: ["luxe-fashion-ecommerce", "eduspark-learning-platform", "saveur-restaurant-platform"],
    ctaTitle: "Ready to Elevate Your Brand Identity?",
    ctaDescription: "Let's create a brand that truly represents your vision and values.",
  },
};

// Fallback for projects without detailed data
function generateDefaultDetail(slug: string, title: string, category: string): ProjectDetail {
  return {
    slug,
    title,
    subtitle: `A professional ${category.toLowerCase()} project showcasing modern design and development practices.`,
    category,
    tags: [category],
    client: "Confidential Client",
    timeline: "2-4 months",
    role: "Full Stack Developer",
    teamSize: "3-5 members",
    overview: [
      `${title} is a comprehensive ${category.toLowerCase()} project that demonstrates expertise in modern design and development practices. The project was built using industry-leading technologies and best practices.`,
      "The solution was designed to be scalable, performant, and user-friendly, with a focus on delivering exceptional user experiences across all devices and platforms.",
    ],
    challenges: [
      "Complex feature requirements with tight deadlines",
      "Ensuring high performance across all devices",
      "Implementing secure authentication and data handling",
      "Creating an intuitive user interface for diverse users",
      "Integrating multiple third-party services seamlessly",
    ],
    solutions: [
      "Adopted agile methodology for iterative development",
      "Implemented performance monitoring and optimization",
      "Used industry-standard security protocols and encryption",
      "Conducted user research and iterative usability testing",
      "Built modular integration layer with robust error handling",
    ],
    process: [
      { title: "Discovery & Research", description: "Conducted thorough research to understand project requirements, target audience, and competitive landscape." },
      { title: "Design & Prototyping", description: "Created wireframes, mockups, and interactive prototypes to visualize the solution and gather early feedback." },
      { title: "Development", description: "Built the solution using modern technologies with a focus on code quality, performance, and maintainability." },
      { title: "Testing & QA", description: "Performed comprehensive testing including unit, integration, and end-to-end tests to ensure quality and reliability." },
      { title: "Launch & Support", description: "Deployed the solution to production, monitored performance, and provided ongoing support and optimization." },
    ],
    techImplementation: [
      { title: "Frontend", items: ["Modern JavaScript framework", "Responsive CSS framework", "State management solution", "API integration layer", "Performance optimization"] },
      { title: "Backend", items: ["Server-side framework", "Database management", "Authentication & authorization", "API design & documentation", "Error handling & logging"] },
      { title: "Infrastructure", items: ["Cloud hosting platform", "CDN for static assets", "CI/CD pipeline", "Monitoring & alerting", "Automated backups"] },
      { title: "Quality Assurance", items: ["Unit testing framework", "Integration testing", "Performance testing", "Security auditing", "Accessibility compliance"] },
    ],
    performanceMetrics: [
      { label: "Performance", value: 92 },
      { label: "Accessibility", value: 88 },
      { label: "Best Practices", value: 95 },
      { label: "SEO", value: 90 },
    ],
    gallery: [
      { caption: "Main Interface" },
      { caption: "Mobile View" },
      { caption: "Dashboard" },
      { caption: "Key Feature" },
    ],
    results: {
      stats: [
        { value: "+35%", label: "User Engagement", color: "text-green-600 bg-green-50" },
        { value: "+28%", label: "Performance Gain", color: "text-blue-600 bg-blue-50" },
        { value: "95%", label: "Client Satisfaction", color: "text-purple-600 bg-purple-50" },
      ],
      impacts: [
        "The project delivered measurable improvements in user engagement and satisfaction, exceeding initial targets by a significant margin.",
        "Performance optimizations resulted in faster load times and smoother interactions, contributing to improved user retention.",
        "The client reported high satisfaction with both the development process and the final deliverable, leading to an ongoing partnership.",
      ],
    },
    testimonial: {
      content: "The team delivered an outstanding project that exceeded our expectations. Their attention to detail, technical expertise, and commitment to quality made the entire process smooth and enjoyable. The final product perfectly aligned with our vision.",
      name: "Project Stakeholder",
      role: "Project Manager",
      company: "Client Company",
    },
    relatedProjects: [],
    ctaTitle: "Ready to Start Your Project?",
    ctaDescription: "Let's discuss how we can bring your vision to life.",
  };
}

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  if (projectDetails[slug]) return projectDetails[slug];

  // Try to generate from base project data
  // Import dynamically to avoid circular deps
  const { projects } = require("./projects");
  const project = projects.find((p: { slug: string }) => p.slug === slug);
  if (project) {
    return generateDefaultDetail(slug, project.title, project.category);
  }

  return undefined;
}
