import { ProjectDetail } from "@/data/projectDetails";
import { Star, Quote } from "lucide-react";

interface Props {
  project: ProjectDetail;
}

export default function ProjectTestimonial({ project }: Props) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Client Testimonial
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 relative shadow-sm">
            <Quote className="w-10 h-10 text-[#4F46E5]/15 absolute top-8 right-8 md:top-12 md:right-12" />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[#4F46E5] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {project.testimonial.name.charAt(0)}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  &ldquo;{project.testimonial.content}&rdquo;
                </p>

                <div>
                  <p className="font-bold text-gray-900">
                    {project.testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {project.testimonial.role}, {project.testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
