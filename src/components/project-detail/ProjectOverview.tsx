import { ProjectDetail } from "@/data/projectDetails";

interface Props {
  project: ProjectDetail;
}

export default function ProjectOverview({ project }: Props) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Project Overview
          </h2>
          <div className="space-y-6">
            {project.overview.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-600 text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
