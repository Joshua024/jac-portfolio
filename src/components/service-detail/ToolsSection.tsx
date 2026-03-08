import { ServiceData } from "@/data/services";
import { CheckCircle } from "lucide-react";

interface Props {
  service: ServiceData;
}

export default function ToolsSection({ service }: Props) {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#3B82F6] font-semibold text-sm uppercase tracking-wider">
            Our Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Tools & Technologies
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
          {service.tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#3B82F6]/10 rounded-xl mb-3">
                  <Icon className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">
                  {tool.name}
                </p>
              </div>
            );
          })}
        </div>

        {/* Methodologies & Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Methodologies */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Methodologies
            </h3>
            <ul className="space-y-4">
              {service.methodologies.map((method, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#3B82F6] flex-shrink-0" />
                  <span className="text-gray-700">{method}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Principles */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Principles
            </h3>
            <ul className="space-y-4">
              {service.principles.map((principle, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#3B82F6] flex-shrink-0" />
                  <span className="text-gray-700">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
