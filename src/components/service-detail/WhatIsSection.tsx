import { ServiceData } from "@/data/services";

interface Props {
  service: ServiceData;
}

export default function WhatIsSection({ service }: Props) {
  return (
    <section id="what-is" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#4F46E5] font-semibold text-sm uppercase tracking-wider">
            About This Service
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            What is {service.title.replace(" Service", "")}?
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-16">
          {service.description.map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-600 text-lg leading-relaxed mb-6 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#4F46E5]/10 rounded-xl mb-5">
                  <Icon className="w-7 h-7 text-[#4F46E5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
