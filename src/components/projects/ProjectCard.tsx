import Link from "next/link";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-52 bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 to-[#1D4ED8]/20 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Project Preview</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3B82F6] transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2.5 py-1 text-xs font-medium rounded-full ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
