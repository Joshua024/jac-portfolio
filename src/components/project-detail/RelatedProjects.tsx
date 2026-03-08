import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectDetail } from "@/data/projectDetails";
import { projects } from "@/data/projects";

interface Props {
  project: ProjectDetail;
}

export default function RelatedProjects({ project }: Props) {
  const relatedSlugs = project.relatedProjects;
  const relatedItems = relatedSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  if (relatedItems.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Explore Related Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedItems.map((proj) => (
            <Link
              key={proj!.id}
              href={`/projects/${proj!.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Project Preview</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#4F46E5] transition-colors">
                  {proj!.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {proj!.description}
                </p>
                <div className="flex items-center gap-2 text-[#4F46E5] font-semibold text-sm group-hover:gap-3 transition-all">
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
