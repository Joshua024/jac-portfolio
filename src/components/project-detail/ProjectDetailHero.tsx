import Link from "next/link";
import { ArrowLeft, Calendar, User, Users, Briefcase } from "lucide-react";
import { ProjectDetail } from "@/data/projectDetails";

interface Props {
  project: ProjectDetail;
}

export default function ProjectDetailHero({ project }: Props) {
  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[#4F46E5] font-medium mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div>
            {/* Category badge */}
            <span className="inline-block px-3 py-1 bg-[#4F46E5]/10 text-[#4F46E5] text-sm font-medium rounded-full mb-4">
              {project.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {project.subtitle}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-[#4F46E5]/10 text-[#4F46E5] text-sm font-medium rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Meta info */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-[#4F46E5] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Client</p>
                  <p className="text-gray-900 font-medium text-sm">{project.client}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#4F46E5] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Timeline</p>
                  <p className="text-gray-900 font-medium text-sm">{project.timeline}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-[#4F46E5] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Role</p>
                  <p className="text-gray-900 font-medium text-sm">{project.role}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#4F46E5] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Team Size</p>
                  <p className="text-gray-900 font-medium text-sm">{project.teamSize}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Hero images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-2xl h-48 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Preview 1</span>
            </div>
            <div className="bg-gray-100 rounded-2xl h-48 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Preview 2</span>
            </div>
            <div className="bg-gray-100 rounded-2xl h-48 flex items-center justify-center col-span-2">
              <span className="text-gray-400 text-sm">Preview 3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
