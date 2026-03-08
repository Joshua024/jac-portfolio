import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    institution: "Stanford University",
    period: "2017 - 2019",
    degree: "B.S. in Computer Science",
    description:
      "Specialized in Human-Computer Interaction with a minor in Design. Graduated with honors.",
  },
  {
    institution: "UC Berkeley Extension",
    period: "2017",
    degree: "UX/UI Certification Program",
    description:
      "Intensive program focused on user research, information architecture, and interaction design practices.",
  },
];

const certifications = [
  {
    name: "AWS Certified Developer",
    year: "2023",
    issuer: "Amazon Web Services",
    description:
      "Expertise in developing, deploying, and debugging cloud-based applications using AWS.",
  },
  {
    name: "Professional Scrum Master I",
    year: "2022",
    issuer: "Scrum.org",
    description:
      "Certified Scrum methodologies and agile project management best practices.",
  },
  {
    name: "Google UX Design Professional Certificate",
    year: "2022",
    issuer: "Google",
    description:
      "Comprehensive mastery of user experience/UI/UX methods, wireframing, prototyping, and testing.",
  },
];

export default function EducationCertifications() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Education &amp; Certifications
          </h2>
          <p className="text-gray-500 mt-3">
            Academic background and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap size={22} className="text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                >
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h4 className="font-bold text-gray-900">
                      {edu.institution}
                    </h4>
                    <span className="text-sm text-primary font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-2">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Award size={22} className="text-primary" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                >
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h4 className="font-bold text-gray-900">{cert.name}</h4>
                    <span className="text-sm text-primary font-medium">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
