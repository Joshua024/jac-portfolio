import { ServiceData } from "@/data/services";

interface Props {
  service: ServiceData;
}

export default function ProcessSection({ service }: Props) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#4F46E5] font-semibold text-sm uppercase tracking-wider">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Our Design Process
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            A proven methodology that delivers exceptional results
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#4F46E5]/20" />

            <div className="space-y-12">
              {service.process.map((step, index) => (
                <div key={index} className="relative flex gap-6 md:gap-8">
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#4F46E5] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg shadow-[#4F46E5]/30">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1 md:pt-3 pb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
