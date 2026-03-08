import Link from "next/link";
import { Check } from "lucide-react";

interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  packageName: string;
  price: string;
  features: string[];
}

interface Props {
  services?: ServiceItem[];
}

const defaultServices: ServiceItem[] = [
  {
    id: "1",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Creating intuitive, user-centered designs and experiences that delight users and drive business growth.",
    packageName: "Basic Package",
    price: "$1,499",
    features: ["User Research & Personas", "Wireframing & Prototyping", "Visual Design & UI Elements", "Design System & Guidelines"],
  },
  {
    id: "2",
    slug: "web-development",
    title: "Web Development",
    description: "Full-stack development, fast and secure websites and web applications using modern frameworks and best practices.",
    packageName: "Standard Package",
    price: "$2,499",
    features: ["Responsive Websites for All Screens", "SEO Integration", "Custom API Testing", "Custom Front & Analytics"],
  },
  {
    id: "3",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "Building high-performance cross-platform mobile applications that provide seamless user experiences.",
    packageName: "Premium",
    price: "$3,999",
    features: ["Cross-Platform App Development", "Full Authentication", "Push Notification Integration", "App Store Submission"],
  },
  {
    id: "4",
    slug: "brand-identity-design",
    title: "Brand Identity Design",
    description: "Crafting distinctive brand identities including logos, color schemes, typography, and brand guidelines.",
    packageName: "Basic Package",
    price: "$1,499",
    features: ["Logo Design & Concepts", "Color Palette & Typography", "Brand Guidelines Document", "Brand Visual & Guidelines"],
  },
  {
    id: "5",
    slug: "e-commerce-development",
    title: "E-Commerce Development",
    description: "Building complete e-commerce solutions with payment processing, inventory management, and customer engagement.",
    packageName: "Standard",
    price: "$3,499",
    features: ["Custom E-Commerce Websites for All", "Product Management for 100 products", "Payment Gateway Integration", "Order Management System"],
  },
  {
    id: "6",
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns to drive growth, increase visibility, traffic, and conversions through data-driven strategies.",
    packageName: "Monthly",
    price: "$1,999",
    features: ["Monthly Analytics", "Social Media Management", "Content Strategy & SEO", "Monthly Performance Reports"],
  },
];

export default function Services({ services = defaultServices }: Props) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Services &amp; Expertise
          </h2>
          <p className="text-gray-500 mt-3">
            I offer a range of digital services to help businesses establish their online
            presence and achieve their goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Pricing */}
              <div className="mb-6">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  {service.packageName}
                </span>
                <div className="text-2xl font-bold text-gray-900 mt-1">
                  {service.price}
                </div>
              </div>

              {/* Features Checklist */}
              <ul className="space-y-3 mb-8 flex-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Request Service Button */}
              <Link
                href={`/services/${service.slug}`}
                className="w-full inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors text-sm"
              >
                Request Service
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
