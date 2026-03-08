import { ProjectDetail } from "@/data/projectDetails";
import { AlertCircle, CheckCircle } from "lucide-react";

interface Props {
  project: ProjectDetail;
}

export default function ChallengesSolutions({ project }: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Challenges */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              The Challenge
            </h2>
            <ul className="space-y-5">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 leading-relaxed">
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              The Solution
            </h2>
            <ul className="space-y-5">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 leading-relaxed">
                    {solution}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
