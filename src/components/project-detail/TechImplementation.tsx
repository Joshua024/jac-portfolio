import { ProjectDetail } from "@/data/projectDetails";
import { CheckCircle } from "lucide-react";

interface Props {
  project: ProjectDetail;
}

export default function TechImplementation({ project }: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Technical Implementation
        </h2>

        {/* Tech categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {project.techImplementation.map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
          <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
            Performance Metrics
          </h3>
          <div className="max-w-2xl mx-auto space-y-6">
            {project.performanceMetrics.map((metric, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    {metric.label}
                  </span>
                  <span className="text-sm font-bold text-[#4F46E5]">
                    {metric.value}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-[#4F46E5] h-3 rounded-full transition-all duration-500"
                    style={{ width: `${metric.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
