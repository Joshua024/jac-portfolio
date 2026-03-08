import { Search, FileText, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Discovery",
    description:
      "We begin by understanding your business goals, target audience, and project requirements through in-depth consultation.",
    color: "bg-primary text-white",
    numberColor: "bg-primary",
  },
  {
    number: 2,
    icon: FileText,
    title: "Planning",
    description:
      "We create a detailed project roadmap, including timelines, deliverables, and milestones to ensure clear expectations.",
    color: "bg-orange-500 text-white",
    numberColor: "bg-orange-500",
  },
  {
    number: 3,
    icon: Code,
    title: "Development",
    description:
      "Our team designs and develops your solution with regular updates and opportunities for feedback and revisions.",
    color: "bg-green-500 text-white",
    numberColor: "bg-green-500",
  },
  {
    number: 4,
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We deploy your project, provide training if needed, and offer ongoing support to ensure long-term success.",
    color: "bg-purple-500 text-white",
    numberColor: "bg-purple-500",
  },
];

export default function OurProcess() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
          <p className="text-gray-500 mt-3">
            We follow a structured approach to ensure your project is delivered on time,
            on budget, and exceeds expectations.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Number + Icon */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${step.color}`}
                >
                  <step.icon size={28} />
                </div>
                <div
                  className={`absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold ${step.numberColor}`}
                >
                  {step.number}
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
