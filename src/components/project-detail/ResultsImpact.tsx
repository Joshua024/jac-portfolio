import { ProjectDetail } from "@/data/projectDetails";
import { TrendingUp } from "lucide-react";

interface Props {
  project: ProjectDetail;
}

export default function ResultsImpact({ project }: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Results & Impact
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {project.results.stats.map((stat, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 text-center ${stat.color}`}
            >
              <p className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </p>
              <p className="font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Key Business Impacts */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Key Business Impacts
          </h3>
          <div className="space-y-5">
            {project.results.impacts.map((impact, index) => (
              <p key={index} className="text-gray-600 leading-relaxed">
                {impact}
              </p>
            ))}
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
            Monthly Visits Performance
          </h3>
          <div className="h-48 flex items-end justify-between gap-3 px-4">
            {[35, 42, 50, 58, 65, 72, 68, 78, 85, 88, 92, 95].map(
              (value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-[#4F46E5]/80 rounded-t-md transition-all hover:bg-[#4F46E5]"
                    style={{ height: `${(value / 100) * 160}px` }}
                  />
                  <span className="text-xs text-gray-400">
                    {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][index]}
                  </span>
                </div>
              )
            )}
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-500">
              Consistent growth over 12 months
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
