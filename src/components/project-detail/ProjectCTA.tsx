import { ProjectDetail } from "@/data/projectDetails";

interface Props {
  project: ProjectDetail;
}

export default function ProjectCTA({ project }: Props) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {project.ctaTitle}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            {project.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#3B82F6] font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Start a Project
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
