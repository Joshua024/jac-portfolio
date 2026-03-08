import { Briefcase, CheckCircle } from "lucide-react";

const experiences = [
  {
    title: "Innovate Digital Studios",
    role: "Lead Developer",
    period: "2023 - Present",
    color: "bg-primary",
    achievements: [
      "Leading cross-functional teams in the design and development of digital products for enterprise clients",
      "Responsible for the entire product lifecycle from concept to deployment",
      "Led the redesign of a SaaS platform resulting in a 47% increase in user engagement",
      "Mentored junior designers and developers, creating a skill-sharing program",
    ],
  },
  {
    title: "UI/UX Lead Developer",
    role: "",
    period: "2022 - 2023",
    color: "bg-primary",
    achievements: [
      "Managed a team of designers and front-end developers, bridging the gap between design and development to create cohesive digital experiences for clients in fintech and healthcare.",
      "Developed a standardized design system, reducing dev time by 35% across projects",
      "Implemented accessibility standards across all client projects",
      "Managed significant improvements to development workflow by 40% through improved processes",
    ],
  },
  {
    title: "Front-End Developer",
    subtitle: "Creativebridge Studios",
    period: "2019 - 2021",
    color: "bg-primary",
    achievements: [
      "Specialized in building e-commerce design concepts into responsive web experiences, Collaborated closely with UX teams to ensure pixel-perfect implementation.",
      "Built 20+ responsive websites for clients across various industries",
      "Developed a reusable component library reducing development time by 30%",
      "Collaborated with UX designers to ensure accessibility standards for 508 compliance clients",
      "Introduced modern front-end frameworks to the agency's tech stack",
    ],
  },
  {
    title: "Junior Software Engineer",
    role: "",
    period: "2018 - 2019",
    color: "bg-gray-400",
    achievements: [
      "Started my professional journey as part of a large development team, working on enterprise-level web applications and learning industry best practices.",
      "Code-trusted in a major CRM platform used by Fortune 500 companies",
      "Developed internal tools that improved team productivity",
      'Received "Rookie of the Year" award for exceptional contributions',
    ],
  },
];

export default function ProfessionalJourney() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Professional Journey
            </h2>
            <p className="text-gray-500 mt-3">
              A timeline of my career experiences and achievements
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-white border-4 border-primary z-10" />

                  {/* Icon */}
                  <div className="absolute left-[18px] top-0 w-7 h-7 bg-primary rounded-full flex items-center justify-center z-10">
                    <Briefcase size={14} className="text-white" />
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {exp.title}
                        </h3>
                        {exp.subtitle && (
                          <p className="text-sm text-primary font-medium">
                            {exp.subtitle}
                          </p>
                        )}
                      </div>
                      <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle
                            size={16}
                            className="text-primary mt-0.5 shrink-0"
                          />
                          <span className="text-sm text-gray-500 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
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
