import { ServiceData } from "@/data/services";

interface Props {
  service: ServiceData;
}

export default function DeliverablesSection({ service }: Props) {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#3B82F6] font-semibold text-sm uppercase tracking-wider">
            Deliverables
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            What You&apos;ll Receive
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Comprehensive deliverables tailored to your project needs
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {service.deliverables.map((deliverable, index) => {
            const Icon = deliverable.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#3B82F6]/10 rounded-xl mb-4 group-hover:bg-[#3B82F6]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                  {deliverable.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
