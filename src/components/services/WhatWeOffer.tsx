import Link from "next/link";
import {
  Palette,
  Code,
  Smartphone,
  PenTool,
  ShoppingCart,
  Megaphone,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive, engaging user interfaces and experiences that delight users and achieve business goals.",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
      "Interactive Prototypes",
    ],
    price: "$1,200",
    priceNote: "Price varies based on project complexity and scope",
    slug: "ui-ux-design",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive, fast, and secure websites and web applications using modern technologies and best practices.",
    features: [
      "Responsive Website Design",
      "CMS Integration",
      "E-commerce Solutions",
      "Performance Optimization",
      "SEO Implementation",
    ],
    price: "$3,500",
    priceNote: "Price varies based on project complexity and scope",
    slug: "web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Creating native and cross-platform mobile applications that provide seamless experiences across devices.",
    features: [
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "API Integrations",
      "App Store Submission",
      "Maintenance & Updates",
    ],
    price: "$8,000",
    priceNote: "Price varies based on project complexity and scope",
    slug: "mobile-app-development",
  },
  {
    icon: PenTool,
    title: "Brand Identity Design",
    description:
      "Developing cohesive brand identities including logos, color schemes, typography, and brand guidelines.",
    features: [
      "Logo Design",
      "Brand Strategy",
      "Visual Identity System",
      "Brand Guidelines",
      "Marketing Collateral",
    ],
    price: "$1,800",
    priceNote: "Price varies based on project complexity and scope",
    slug: "brand-identity-design",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description:
      "Building robust online stores with secure payment processing, inventory management, and customer accounts.",
    features: [
      "Custom E-Commerce Websites",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing System",
      "Customer Account Management",
    ],
    price: "$5,000",
    priceNote: "Price varies based on project complexity and scope",
    slug: "e-commerce-development",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Implementing strategic digital marketing campaigns to increase visibility, traffic, and conversions.",
    features: [
      "SEO Optimization",
      "Content Marketing",
      "Social Media Management",
      "PPC Advertising",
      "Analytics & Reporting",
    ],
    price: "$1,500/mo",
    priceNote: "Price varies based on campaign complexity and duration",
    slug: "digital-marketing",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
          <p className="text-gray-500 mt-3">
            Explore our range of professional services designed to elevate your digital
            presence and drive business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="p-7 flex-1 flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <service.icon size={24} className="text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-primary shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-5">
                  <span className="text-xs text-gray-400">Starting at</span>
                  <div className="text-2xl font-bold text-primary">
                    {service.price}
                  </div>
                  <span className="text-xs text-gray-400">{service.priceNote}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="px-7 pb-7">
                <Link
                  href={`/services/${service.slug}`}
                  className="block text-center bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
