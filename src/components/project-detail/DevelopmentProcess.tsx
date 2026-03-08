import { ProjectDetail } from "@/data/projectDetails";

interface Props {
  project: ProjectDetail;
}

export default function DevelopmentProcess({ project }: Props) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Development Process
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Center timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#3B82F6]/20 -translate-x-1/2" />

            <div className="space-y-16 md:space-y-24">
              {project.process.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-10 h-10 bg-[#3B82F6] rounded-full items-center justify-center text-white font-bold text-sm z-10 shadow-lg shadow-[#3B82F6]/30">
                      {index + 1}
                    </div>

                    <div
                      className={`md:grid md:grid-cols-2 md:gap-16 items-start ${
                        isLeft ? "" : "md:direction-rtl"
                      }`}
                    >
                      {/* Image placeholder */}
                      <div
                        className={`${
                          isLeft ? "md:order-1" : "md:order-2"
                        } mb-6 md:mb-0`}
                      >
                        <div
                          className={`bg-gray-100 rounded-2xl h-48 flex items-center justify-center ${
                            isLeft ? "md:mr-8" : "md:ml-8"
                          }`}
                        >
                          <span className="text-gray-400 text-sm">
                            Step {index + 1} Visual
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div
                        className={`${
                          isLeft ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8 md:text-right"
                        }`}
                      >
                        {/* Mobile step number */}
                        <div className="md:hidden flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold text-xs">
                            {index + 1}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
