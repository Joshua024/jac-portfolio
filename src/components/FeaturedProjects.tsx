import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-featured online shopping experience with modern UI and seamless checkout flow.",
    image: "/projects/project1.jpg",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "UI/UX Design",
    description: "Complete brand identity redesign for a tech startup including logo, colors, and guidelines.",
    image: "/projects/project2.jpg",
    tags: ["Figma", "Branding", "Design"],
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Mobile App",
    description: "A secure and intuitive mobile banking application with biometric authentication.",
    image: "/projects/project3.jpg",
    tags: ["React Native", "Firebase", "UI/UX"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Featured Projects
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg">
              A selection of my recent work across web development, design, and mobile applications.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline shrink-0"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
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
                <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
