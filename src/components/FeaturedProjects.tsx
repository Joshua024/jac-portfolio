"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const tagColors: Record<string, string> = {
  React: "bg-blue-50 text-blue-600",
  "Node.js": "bg-green-50 text-green-600",
  MongoDB: "bg-emerald-50 text-emerald-600",
  Figma: "bg-purple-50 text-purple-600",
  Branding: "bg-pink-50 text-pink-600",
  Design: "bg-rose-50 text-rose-600",
  "React Native": "bg-cyan-50 text-cyan-600",
  Firebase: "bg-amber-50 text-amber-600",
  "UI/UX": "bg-indigo-50 text-indigo-600",
  Next: "bg-gray-100 text-gray-700",
  "Next.js": "bg-gray-100 text-gray-700",
  TypeScript: "bg-blue-50 text-blue-700",
  PostgreSQL: "bg-sky-50 text-sky-600",
  Tailwind: "bg-teal-50 text-teal-600",
  Swift: "bg-orange-50 text-orange-600",
  Vue: "bg-emerald-50 text-emerald-600",
  Python: "bg-yellow-50 text-yellow-700",
  AWS: "bg-orange-50 text-orange-700",
  Docker: "bg-blue-50 text-blue-600",
  Stripe: "bg-violet-50 text-violet-600",
  Redux: "bg-purple-50 text-purple-700",
  GraphQL: "bg-pink-50 text-pink-700",
  Sass: "bg-rose-50 text-rose-600",
  WordPress: "bg-sky-50 text-sky-700",
};

interface ProjectItem {
  id: string | number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

interface Props {
  projects?: ProjectItem[];
}

const defaultProjects: ProjectItem[] = [
  {
    id: 1,
    title: "Luxe Fashion E-Commerce",
    category: "E-Commerce",
    description: "A premium online shopping experience with advanced filters and personalization.",
    image: "/projects/project1.jpg",
    tags: ["React", "Node.js", "Stripe"],
    slug: "luxe-fashion-ecommerce",
  },
  {
    id: 2,
    title: "FitTrack Mobile App",
    category: "Mobile Apps",
    description: "A full-service new fitness tracking application with AI-powered workout recommendations and progress analytics.",
    image: "/projects/project2.jpg",
    tags: ["React Native", "Firebase", "UI/UX"],
    slug: "fittrack-mobile-app",
  },
  {
    id: 3,
    title: "Horizon Financial Rebrand",
    category: "Branding",
    description: "Complete brand identity redesign for a fintech startup including logo, colors, and guidelines.",
    image: "/projects/project3.jpg",
    tags: ["Figma", "Branding", "Design"],
    slug: "horizon-financial-rebrand",
  },
  {
    id: 4,
    title: "HomeQuest Property Platform",
    category: "Web Design",
    description: "A modern real estate marketplace with an interactive map search, 3D tours, and smart matching.",
    image: "/projects/project4.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    slug: "homequest-property-platform",
  },
  {
    id: 5,
    title: "EduSpark Learning Platform",
    category: "Web Design",
    description: "An interactive online learning platform with live classes, course tracking, and certifications.",
    image: "/projects/project5.jpg",
    tags: ["React", "Python", "AWS"],
    slug: "eduspark-learning-platform",
  },
  {
    id: 6,
    title: "Saveur Restaurant Platform",
    category: "E-Commerce",
    description: "A comprehensive restaurant management platform with online ordering, reservations, and analytics.",
    image: "/projects/project6.jpg",
    tags: ["Vue", "Node.js", "MongoDB"],
    slug: "saveur-restaurant-platform",
  },
];

export default function FeaturedProjects({ projects = defaultProjects }: Props) {
  const [activeTab, setActiveTab] = useState("All Projects");

  const allCategories = ["All Projects", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filtered =
    activeTab === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Explore my latest work and creative solutions for clients across various industries.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === cat
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    <ExternalLink size={16} className="text-gray-700" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        tagColors[tag] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
