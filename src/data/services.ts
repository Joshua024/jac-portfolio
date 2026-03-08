import {
  Palette,
  Code,
  Smartphone,
  PenTool,
  ShoppingCart,
  Megaphone,
  Users,
  Target,
  Search,
  FileText,
  Layers,
  Eye,
  CheckCircle,
  Monitor,
  TestTube,
  Package,
  Figma,
  PaintBucket,
  Compass,
  BarChart,
  Globe,
  Mail,
  TrendingUp,
  Shield,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface ServiceDeliverable {
  icon: LucideIcon;
  title: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string[];
  highlights: { icon: LucideIcon; title: string; description: string }[];
  deliverables: ServiceDeliverable[];
  process: ProcessStep[];
  tools: { name: string; icon: LucideIcon }[];
  methodologies: string[];
  principles: string[];
  testimonial: {
    content: string;
    name: string;
    role: string;
  };
  pricing: PricingTier[];
  ctaTitle: string;
  ctaDescription: string;
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; slug: string; icon: LucideIcon }[];
}

export const servicesData: Record<string, ServiceData> = {
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design Service",
    subtitle:
      "Creating intuitive, user-centered digital experiences that engage, convert, and delight. We combine research-driven strategy with creative design thinking.",
    icon: Palette,
    description: [
      "UI/UX Design is a comprehensive design discipline that focuses on creating meaningful and relevant experiences for users. It encompasses the entire process of acquiring, integrating, and delivering a product, including aspects of branding, design, usability, and function.",
      "Our UI/UX design service goes beyond just making things look pretty. We take a holistic approach that combines deep user research, strategic thinking, and creative visual design to create digital experiences that truly resonate with your target audience.",
      "Whether you're building a new product from scratch or improving an existing one, our design process ensures that every decision is backed by data and user insights, resulting in interfaces that are not only beautiful but also highly functional and conversion-optimized.",
    ],
    highlights: [
      {
        icon: Users,
        title: "User Centered",
        description:
          "Every design decision is backed by user research and validated through testing.",
      },
      {
        icon: Target,
        title: "Goal Oriented",
        description:
          "Designs are strategically aligned with your business objectives and KPIs.",
      },
      {
        icon: Search,
        title: "Research Driven",
        description:
          "Data-informed approach using analytics, surveys, and user interviews.",
      },
    ],
    deliverables: [
      { icon: FileText, title: "User Research Report" },
      { icon: Users, title: "User Personas" },
      { icon: Layers, title: "Information Architecture" },
      { icon: Monitor, title: "Wireframes" },
      { icon: Eye, title: "Interactive Prototypes" },
      { icon: Palette, title: "UI Style Guide" },
      { icon: Monitor, title: "High Fidelity Mockups" },
      { icon: TestTube, title: "Usability Testing Results" },
      { icon: Package, title: "Design System" },
      { icon: Code, title: "Developer Handoff Package" },
    ],
    process: [
      {
        number: 1,
        title: "Discovery & Research",
        description:
          "We start by understanding your business goals, target audience, and competitive landscape through comprehensive research and stakeholder interviews.",
      },
      {
        number: 2,
        title: "Strategy & Planning",
        description:
          "Based on our research findings, we develop a design strategy, create user personas, and map out the information architecture and user flows.",
      },
      {
        number: 3,
        title: "Wireframing & Prototyping",
        description:
          "We create low-fidelity wireframes and interactive prototypes to test and validate the user experience before moving to visual design.",
      },
      {
        number: 4,
        title: "Visual Design",
        description:
          "Our designers create high-fidelity mockups that bring the wireframes to life with your brand's visual identity, typography, and color scheme.",
      },
      {
        number: 5,
        title: "Testing & Refinement",
        description:
          "We conduct usability testing with real users to identify pain points and opportunities for improvement, then refine the design accordingly.",
      },
      {
        number: 6,
        title: "Developer Handoff",
        description:
          "We prepare detailed design specifications, assets, and documentation to ensure a smooth handoff to the development team.",
      },
    ],
    tools: [
      { name: "Figma", icon: Figma },
      { name: "Adobe XD", icon: PaintBucket },
      { name: "Sketch", icon: PenTool },
      { name: "InVision", icon: Eye },
      { name: "Miro", icon: Compass },
      { name: "UserTesting", icon: Users },
      { name: "Zeplin", icon: Layers },
      { name: "Canva", icon: Palette },
    ],
    methodologies: [
      "Design Thinking",
      "Agile UX",
      "Lean UX",
      "Human-Centered Design",
      "Double Diamond",
    ],
    principles: [
      "Accessibility (WCAG 2.1)",
      "Responsive Design",
      "Mobile-First Approach",
      "Consistent Design Language",
      "Performance Optimization",
    ],
    testimonial: {
      content:
        "Working with this team for UI/UX has been an absolute game-changer. Our product's user experience has improved dramatically, and we've seen a significant increase in user satisfaction and retention. The attention to detail and user-centric approach was impressive.",
      name: "David Thompson",
      role: "CTO, InnovateTech Solutions",
    },
    pricing: [
      {
        name: "Essential",
        price: "$1,200",
        description: "Perfect for small projects and startups",
        features: [
          "User Research (Basic)",
          "Up to 5 Page Designs",
          "Wireframes",
          "1 Round of Revisions",
          "Basic Style Guide",
          "2-Week Delivery",
        ],
      },
      {
        name: "Professional",
        price: "$3,500",
        description: "Ideal for growing businesses",
        features: [
          "Comprehensive User Research",
          "Up to 15 Page Designs",
          "Wireframes & Prototypes",
          "3 Rounds of Revisions",
          "Complete Design System",
          "Usability Testing",
          "4-Week Delivery",
        ],
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "$7,500",
        description: "For large-scale enterprise projects",
        features: [
          "Full UX Research Suite",
          "Unlimited Page Designs",
          "Advanced Prototyping",
          "Unlimited Revisions",
          "Complete Design System",
          "Usability Testing & Reports",
          "Developer Handoff",
          "8-Week Delivery",
        ],
      },
    ],
    ctaTitle: "Ready to Transform Your User Experience?",
    ctaDescription:
      "Let us help you create digital experiences that delight and convert. Our UX Design service brings the new tools and methodologies in UI/UX Design and User Experience.",
    faqs: [
      {
        question: "How long does a typical UI/UX design project last?",
        answer:
          "Depending on the project scope, our design projects typically range from 2 to 8 weeks. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
      },
      {
        question: "What information do you need to get started?",
        answer:
          "We'll need information about your business goals, target audience, existing brand guidelines (if any), competitors, and any specific features or functionality you envision. We'll gather all of this during our discovery phase.",
      },
      {
        question: "How do you handle revisions and feedback?",
        answer:
          "Each pricing tier includes a specific number of revision rounds. We use collaborative tools like Figma for real-time feedback and ensure every iteration is aligned with your vision.",
      },
      {
        question: "Do you provide development services as well?",
        answer:
          "Yes! We offer full-stack development services that seamlessly integrate with our design work. This ensures pixel-perfect implementation of the designs we create together.",
      },
    ],
    relatedServices: [
      { title: "Web Development", slug: "web-development", icon: Code },
      {
        title: "Mobile App Development",
        slug: "mobile-app-development",
        icon: Smartphone,
      },
      {
        title: "Brand Identity Design",
        slug: "brand-identity-design",
        icon: PenTool,
      },
    ],
  },
  "web-development": {
    slug: "web-development",
    title: "Web Development Service",
    subtitle:
      "Building responsive, fast, and secure websites and web applications using modern technologies and best practices.",
    icon: Code,
    description: [
      "Our web development service delivers high-performance, scalable websites and web applications that drive business results. We use cutting-edge technologies and modern frameworks to build solutions that are fast, secure, and future-proof.",
      "From simple landing pages to complex web applications, we handle the entire development lifecycle — from planning and architecture to deployment and maintenance.",
      "Every project is built with clean, maintainable code, following industry best practices for performance optimization, SEO, and accessibility.",
    ],
    highlights: [
      { icon: Zap, title: "Performance First", description: "Blazing fast load times with optimized code and modern build tools." },
      { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security with best practices baked in from day one." },
      { icon: TrendingUp, title: "SEO Optimized", description: "Built with search engines in mind for maximum organic visibility." },
    ],
    deliverables: [
      { icon: FileText, title: "Technical Architecture" },
      { icon: Code, title: "Frontend Development" },
      { icon: Code, title: "Backend Development" },
      { icon: Layers, title: "Database Design" },
      { icon: Globe, title: "API Development" },
      { icon: Shield, title: "Security Implementation" },
      { icon: Monitor, title: "Responsive Design" },
      { icon: TestTube, title: "Testing & QA" },
      { icon: Package, title: "Deployment Setup" },
      { icon: FileText, title: "Documentation" },
    ],
    process: [
      { number: 1, title: "Requirements Analysis", description: "We gather and analyze your technical requirements, business goals, and user needs." },
      { number: 2, title: "Architecture & Planning", description: "We design the technical architecture, select the tech stack, and create a development roadmap." },
      { number: 3, title: "Development", description: "Our engineers build your application with clean, tested code and regular progress updates." },
      { number: 4, title: "Testing & QA", description: "Comprehensive testing including unit, integration, and end-to-end tests to ensure quality." },
      { number: 5, title: "Deployment", description: "We deploy your application to production with CI/CD pipelines and monitoring." },
      { number: 6, title: "Maintenance & Support", description: "Ongoing support, updates, and performance monitoring to keep your app running smoothly." },
    ],
    tools: [
      { name: "React", icon: Code },
      { name: "Next.js", icon: Globe },
      { name: "Node.js", icon: Code },
      { name: "TypeScript", icon: Code },
      { name: "PostgreSQL", icon: Layers },
      { name: "MongoDB", icon: Layers },
      { name: "AWS", icon: Globe },
      { name: "Docker", icon: Package },
    ],
    methodologies: ["Agile Development", "CI/CD", "Test-Driven Development", "Code Reviews", "DevOps"],
    principles: ["Clean Code", "SOLID Principles", "Performance Optimization", "Accessibility", "Security Best Practices"],
    testimonial: { content: "The web application they built for us exceeded all expectations. It's fast, reliable, and our users love it. The team's technical expertise is outstanding.", name: "Sarah Mitchell", role: "VP of Engineering, DataFlow Inc." },
    pricing: [
      { name: "Essential", price: "$3,500", description: "Perfect for small websites and landing pages", features: ["Up to 5 Pages", "Responsive Design", "Basic SEO", "Contact Form", "1 Round of Revisions", "3-Week Delivery"] },
      { name: "Professional", price: "$8,000", description: "Ideal for business websites and web apps", features: ["Up to 15 Pages", "Custom Design", "Advanced SEO", "CMS Integration", "API Integration", "3 Rounds of Revisions", "6-Week Delivery"], highlighted: true },
      { name: "Enterprise", price: "$15,000+", description: "For complex web applications", features: ["Unlimited Pages", "Custom Architecture", "Full-Stack Development", "Database Design", "API Development", "Unlimited Revisions", "CI/CD Setup", "12-Week Delivery"] },
    ],
    ctaTitle: "Ready to Build Your Web Application?",
    ctaDescription: "Let us help you build a fast, secure, and scalable web presence that drives results for your business.",
    faqs: [
      { question: "What technologies do you use?", answer: "We primarily use React, Next.js, Node.js, and TypeScript. We choose the best tech stack based on your project requirements." },
      { question: "Do you provide hosting?", answer: "We can set up and deploy to various cloud platforms including AWS, Vercel, and DigitalOcean, and provide ongoing hosting management." },
      { question: "How do you handle project changes?", answer: "We use agile methodology with regular sprints, allowing flexibility to adapt to changing requirements while maintaining project timelines." },
      { question: "Do you offer maintenance plans?", answer: "Yes, we offer monthly maintenance plans that include updates, security patches, performance monitoring, and feature enhancements." },
    ],
    relatedServices: [
      { title: "UI/UX Design", slug: "ui-ux-design", icon: Palette },
      { title: "Mobile App Development", slug: "mobile-app-development", icon: Smartphone },
      { title: "E-Commerce Development", slug: "e-commerce-development", icon: ShoppingCart },
    ],
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development Service",
    subtitle: "Creating native and cross-platform mobile applications that provide seamless experiences across devices.",
    icon: Smartphone,
    description: [
      "We build high-quality mobile applications for iOS and Android that deliver exceptional user experiences. Our team leverages modern cross-platform frameworks to optimize development time without sacrificing quality.",
      "From concept to App Store submission, we handle every aspect of mobile app development including design, development, testing, and post-launch support.",
    ],
    highlights: [
      { icon: Smartphone, title: "Cross-Platform", description: "One codebase, multiple platforms — iOS and Android." },
      { icon: Zap, title: "Native Performance", description: "Apps that feel native with smooth animations and fast load times." },
      { icon: Shield, title: "App Store Ready", description: "Full support through the submission and approval process." },
    ],
    deliverables: [
      { icon: FileText, title: "App Architecture" },
      { icon: Monitor, title: "UI/UX Design" },
      { icon: Code, title: "App Development" },
      { icon: Layers, title: "API Integration" },
      { icon: TestTube, title: "Testing & QA" },
      { icon: Package, title: "App Store Submission" },
    ],
    process: [
      { number: 1, title: "Discovery", description: "Understanding your app idea, target users, and business objectives." },
      { number: 2, title: "Design", description: "Creating wireframes, prototypes, and high-fidelity designs for your app." },
      { number: 3, title: "Development", description: "Building the app with clean code, regular builds, and progress updates." },
      { number: 4, title: "Testing", description: "Comprehensive testing across devices and OS versions." },
      { number: 5, title: "Launch", description: "App Store and Google Play submission with optimized listings." },
      { number: 6, title: "Support", description: "Ongoing maintenance, updates, and feature enhancements." },
    ],
    tools: [
      { name: "React Native", icon: Smartphone },
      { name: "Flutter", icon: Code },
      { name: "Swift", icon: Code },
      { name: "Kotlin", icon: Code },
      { name: "Firebase", icon: Globe },
      { name: "Xcode", icon: Monitor },
      { name: "Android Studio", icon: Monitor },
      { name: "TestFlight", icon: TestTube },
    ],
    methodologies: ["Agile Development", "Sprint Planning", "Continuous Integration", "User Testing"],
    principles: ["Platform Guidelines", "Offline-First", "Performance", "Security", "Accessibility"],
    testimonial: { content: "The mobile app they delivered exceeded our expectations. Downloads are up 200% and user reviews are consistently 4.5+ stars.", name: "Rachel Kim", role: "Product Lead, HealthTrack" },
    pricing: [
      { name: "Essential", price: "$8,000", description: "Simple mobile app", features: ["Up to 5 Screens", "Basic Features", "1 Platform", "1 Round of Revisions", "4-Week Delivery"] },
      { name: "Professional", price: "$18,000", description: "Full-featured app", features: ["Up to 15 Screens", "Advanced Features", "iOS & Android", "API Integration", "3 Rounds of Revisions", "8-Week Delivery"], highlighted: true },
      { name: "Enterprise", price: "$35,000+", description: "Complex enterprise app", features: ["Unlimited Screens", "Custom Backend", "Advanced Integrations", "Admin Dashboard", "Unlimited Revisions", "16-Week Delivery"] },
    ],
    ctaTitle: "Ready to Build Your Mobile App?",
    ctaDescription: "Transform your idea into a powerful mobile application that users love.",
    faqs: [
      { question: "Should I build for iOS, Android, or both?", answer: "We recommend building for both using cross-platform frameworks like React Native, which saves time and cost while delivering native-quality experiences." },
      { question: "How long does it take to build a mobile app?", answer: "A simple app takes 4-8 weeks, while complex apps can take 3-6 months. We'll provide a detailed timeline during our discovery phase." },
      { question: "Do you handle App Store submissions?", answer: "Yes, we manage the entire submission process for both Apple App Store and Google Play Store." },
      { question: "What about post-launch support?", answer: "We offer ongoing maintenance packages including bug fixes, updates, and feature enhancements." },
    ],
    relatedServices: [
      { title: "UI/UX Design", slug: "ui-ux-design", icon: Palette },
      { title: "Web Development", slug: "web-development", icon: Code },
      { title: "Digital Marketing", slug: "digital-marketing", icon: Megaphone },
    ],
  },
  "brand-identity-design": {
    slug: "brand-identity-design",
    title: "Brand Identity Design Service",
    subtitle: "Developing cohesive brand identities that communicate your vision and resonate with your audience.",
    icon: PenTool,
    description: [
      "Your brand identity is the visual representation of your business. We create comprehensive brand systems that tell your story, differentiate you from competitors, and build lasting connections with your audience.",
      "From logo design to complete brand guidelines, we ensure every touchpoint reflects your unique value proposition.",
    ],
    highlights: [
      { icon: Target, title: "Strategic", description: "Brand strategy aligned with your business goals and market position." },
      { icon: Eye, title: "Distinctive", description: "Unique visual identity that sets you apart from competitors." },
      { icon: Layers, title: "Consistent", description: "Comprehensive guidelines ensuring brand consistency across all channels." },
    ],
    deliverables: [
      { icon: PenTool, title: "Logo Design" },
      { icon: Palette, title: "Color Palette" },
      { icon: FileText, title: "Typography System" },
      { icon: Layers, title: "Brand Guidelines" },
      { icon: Monitor, title: "Business Cards" },
      { icon: Mail, title: "Stationery Design" },
    ],
    process: [
      { number: 1, title: "Brand Discovery", description: "Research into your market, competitors, and target audience." },
      { number: 2, title: "Strategy Development", description: "Defining brand positioning, messaging, and personality." },
      { number: 3, title: "Concept Design", description: "Creating initial design concepts for your review and feedback." },
      { number: 4, title: "Refinement", description: "Iterating on the chosen direction based on your feedback." },
      { number: 5, title: "Brand System", description: "Developing the complete brand system and guidelines." },
      { number: 6, title: "Delivery", description: "Final delivery of all brand assets and documentation." },
    ],
    tools: [
      { name: "Illustrator", icon: PenTool },
      { name: "Photoshop", icon: PaintBucket },
      { name: "Figma", icon: Figma },
      { name: "InDesign", icon: FileText },
      { name: "After Effects", icon: Eye },
      { name: "Procreate", icon: Palette },
    ],
    methodologies: ["Brand Strategy", "Visual Storytelling", "Market Research", "Competitive Analysis"],
    principles: ["Simplicity", "Memorability", "Versatility", "Timelessness", "Appropriateness"],
    testimonial: { content: "Our new brand identity has completely transformed how customers perceive us. The team captured our essence perfectly.", name: "James Wilson", role: "Founder, GreenLeaf Co." },
    pricing: [
      { name: "Essential", price: "$1,800", description: "Logo and basic brand elements", features: ["Logo Design (3 Concepts)", "Color Palette", "Typography Selection", "Basic Brand Guide", "1 Round of Revisions", "2-Week Delivery"] },
      { name: "Professional", price: "$4,500", description: "Complete brand identity", features: ["Logo Design (5 Concepts)", "Full Color System", "Typography System", "Brand Guidelines", "Stationery Design", "3 Rounds of Revisions", "4-Week Delivery"], highlighted: true },
      { name: "Enterprise", price: "$10,000+", description: "Full brand ecosystem", features: ["Logo Design (Unlimited)", "Complete Brand System", "Marketing Collateral", "Social Media Kit", "Brand Animation", "Unlimited Revisions", "8-Week Delivery"] },
    ],
    ctaTitle: "Ready to Build Your Brand?",
    ctaDescription: "Let us create a brand identity that tells your story and connects with your audience.",
    faqs: [
      { question: "How many logo concepts will I receive?", answer: "Depending on your package, you'll receive 3-5+ initial concepts. We'll refine your chosen direction through multiple iterations." },
      { question: "Can I trademark the logo?", answer: "Absolutely! All designs we create are fully original and you receive complete ownership and usage rights upon project completion." },
      { question: "What file formats will I receive?", answer: "You'll receive your logo in all standard formats: AI, EPS, SVG, PNG, JPG, and PDF. We also provide web-optimized versions." },
      { question: "Do you create brand guidelines?", answer: "Yes, all packages include brand guidelines. The depth and detail increase with higher-tier packages." },
    ],
    relatedServices: [
      { title: "UI/UX Design", slug: "ui-ux-design", icon: Palette },
      { title: "Web Development", slug: "web-development", icon: Code },
      { title: "Digital Marketing", slug: "digital-marketing", icon: Megaphone },
    ],
  },
  "e-commerce-development": {
    slug: "e-commerce-development",
    title: "E-Commerce Development Service",
    subtitle: "Building robust online stores with secure payment processing, inventory management, and customer accounts.",
    icon: ShoppingCart,
    description: [
      "We build powerful e-commerce platforms that drive sales and deliver exceptional shopping experiences. From custom storefronts to complex marketplace solutions, we handle every aspect of online commerce.",
      "Our e-commerce solutions are optimized for conversions, with fast load times, intuitive navigation, and secure checkout flows.",
    ],
    highlights: [
      { icon: ShoppingCart, title: "Conversion Optimized", description: "Checkout flows designed to maximize conversions and reduce cart abandonment." },
      { icon: Shield, title: "Secure Payments", description: "PCI-compliant payment processing with multiple gateway support." },
      { icon: BarChart, title: "Analytics Built-In", description: "Comprehensive analytics to track sales, customers, and performance." },
    ],
    deliverables: [
      { icon: Monitor, title: "Custom Storefront" },
      { icon: ShoppingCart, title: "Shopping Cart" },
      { icon: Shield, title: "Payment Integration" },
      { icon: Package, title: "Inventory System" },
      { icon: Users, title: "Customer Accounts" },
      { icon: BarChart, title: "Analytics Dashboard" },
    ],
    process: [
      { number: 1, title: "Requirements Gathering", description: "Understanding your products, market, and business model." },
      { number: 2, title: "Platform Selection", description: "Choosing the right e-commerce platform for your needs." },
      { number: 3, title: "Design & Development", description: "Building your custom storefront with optimal UX." },
      { number: 4, title: "Payment & Shipping", description: "Integrating payment gateways and shipping providers." },
      { number: 5, title: "Testing", description: "End-to-end testing of the complete shopping experience." },
      { number: 6, title: "Launch & Optimization", description: "Going live with ongoing performance optimization." },
    ],
    tools: [
      { name: "Shopify", icon: ShoppingCart },
      { name: "WooCommerce", icon: ShoppingCart },
      { name: "Stripe", icon: Shield },
      { name: "Next.js", icon: Code },
      { name: "Node.js", icon: Code },
      { name: "PostgreSQL", icon: Layers },
    ],
    methodologies: ["Agile Development", "A/B Testing", "Conversion Optimization", "User Testing"],
    principles: ["Mobile-First", "Fast Checkout", "Security", "Accessibility", "SEO"],
    testimonial: { content: "Our new e-commerce platform has increased sales by 150%. The checkout experience is seamless and customers love it.", name: "Lisa Park", role: "CEO, StyleHouse" },
    pricing: [
      { name: "Essential", price: "$5,000", description: "Basic online store", features: ["Up to 50 Products", "Basic Theme", "Payment Integration", "Basic SEO", "3-Week Delivery"] },
      { name: "Professional", price: "$12,000", description: "Full-featured store", features: ["Up to 500 Products", "Custom Design", "Multiple Payment Options", "Inventory Management", "Customer Accounts", "6-Week Delivery"], highlighted: true },
      { name: "Enterprise", price: "$25,000+", description: "Custom marketplace", features: ["Unlimited Products", "Custom Platform", "Multi-vendor Support", "Advanced Analytics", "API Integrations", "12-Week Delivery"] },
    ],
    ctaTitle: "Ready to Launch Your Online Store?",
    ctaDescription: "Let us build an e-commerce platform that drives sales and delights your customers.",
    faqs: [
      { question: "Which e-commerce platform should I use?", answer: "We'll recommend the best platform based on your needs. Options include Shopify, WooCommerce, or custom solutions." },
      { question: "How do you handle payments?", answer: "We integrate secure payment gateways like Stripe, PayPal, and others based on your requirements." },
      { question: "Can you migrate my existing store?", answer: "Yes, we handle complete store migrations including products, customers, and order history." },
      { question: "Do you provide ongoing support?", answer: "We offer maintenance plans that include updates, security patches, and performance optimization." },
    ],
    relatedServices: [
      { title: "Web Development", slug: "web-development", icon: Code },
      { title: "UI/UX Design", slug: "ui-ux-design", icon: Palette },
      { title: "Digital Marketing", slug: "digital-marketing", icon: Megaphone },
    ],
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing Service",
    subtitle: "Implementing strategic digital marketing campaigns to increase visibility, traffic, and conversions.",
    icon: Megaphone,
    description: [
      "Our digital marketing services help businesses grow their online presence, attract qualified leads, and convert them into loyal customers through data-driven strategies.",
      "We combine creative content, technical SEO, paid advertising, and social media management to deliver measurable results.",
    ],
    highlights: [
      { icon: TrendingUp, title: "Growth Focused", description: "Strategies designed to drive measurable business growth." },
      { icon: BarChart, title: "Data Driven", description: "Every decision backed by analytics and performance data." },
      { icon: Target, title: "Targeted", description: "Campaigns precisely targeted to reach your ideal customers." },
    ],
    deliverables: [
      { icon: FileText, title: "Marketing Strategy" },
      { icon: Search, title: "SEO Audit & Plan" },
      { icon: FileText, title: "Content Calendar" },
      { icon: Globe, title: "Social Media Management" },
      { icon: Mail, title: "Email Campaigns" },
      { icon: BarChart, title: "Monthly Reports" },
    ],
    process: [
      { number: 1, title: "Audit & Analysis", description: "Comprehensive audit of your current digital presence and competitive landscape." },
      { number: 2, title: "Strategy Development", description: "Creating a customized marketing strategy aligned with your goals." },
      { number: 3, title: "Implementation", description: "Executing campaigns across chosen channels and platforms." },
      { number: 4, title: "Content Creation", description: "Producing engaging content that resonates with your audience." },
      { number: 5, title: "Optimization", description: "Continuous optimization based on performance data." },
      { number: 6, title: "Reporting", description: "Regular reporting with insights and recommendations." },
    ],
    tools: [
      { name: "Google Analytics", icon: BarChart },
      { name: "SEMrush", icon: Search },
      { name: "Google Ads", icon: Globe },
      { name: "Meta Ads", icon: Globe },
      { name: "Mailchimp", icon: Mail },
      { name: "Hootsuite", icon: Globe },
    ],
    methodologies: ["Inbound Marketing", "Content Marketing", "Growth Hacking", "Conversion Optimization"],
    principles: ["Data-Driven Decisions", "Customer Journey Mapping", "A/B Testing", "ROI Focus"],
    testimonial: { content: "Our organic traffic increased by 300% in 6 months. The team's strategic approach to SEO and content marketing has been transformative.", name: "Tom Anderson", role: "Marketing VP, ScaleUp" },
    pricing: [
      { name: "Essential", price: "$1,500/mo", description: "Basic marketing package", features: ["SEO Optimization", "Social Media (2 platforms)", "Monthly Blog Post", "Basic Analytics", "Monthly Report"] },
      { name: "Professional", price: "$3,500/mo", description: "Comprehensive marketing", features: ["Advanced SEO", "Social Media (4 platforms)", "Weekly Content", "PPC Management", "Email Marketing", "Bi-weekly Reports"], highlighted: true },
      { name: "Enterprise", price: "$7,500/mo", description: "Full-service marketing", features: ["Full SEO Suite", "All Social Platforms", "Daily Content", "Full PPC Management", "Marketing Automation", "Weekly Reports", "Dedicated Manager"] },
    ],
    ctaTitle: "Ready to Grow Your Business?",
    ctaDescription: "Let us create a marketing strategy that drives traffic, leads, and revenue for your business.",
    faqs: [
      { question: "How soon will I see results?", answer: "SEO typically takes 3-6 months for significant results, while paid advertising can drive traffic immediately. We set realistic expectations and provide regular progress updates." },
      { question: "What platforms do you manage?", answer: "We manage all major platforms including Google, Facebook, Instagram, LinkedIn, Twitter, and more based on where your audience is." },
      { question: "Do you create content?", answer: "Yes, content creation is included in all packages. This includes blog posts, social media content, email campaigns, and more." },
      { question: "How do you measure success?", answer: "We track KPIs aligned with your business goals including traffic, leads, conversions, ROI, and more with detailed monthly reports." },
    ],
    relatedServices: [
      { title: "Web Development", slug: "web-development", icon: Code },
      { title: "Brand Identity Design", slug: "brand-identity-design", icon: PenTool },
      { title: "E-Commerce Development", slug: "e-commerce-development", icon: ShoppingCart },
    ],
  },
};

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesData);
}
