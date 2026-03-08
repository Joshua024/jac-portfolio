import { ProjectDetail } from "@/data/projectDetails";

interface Props {
  project: ProjectDetail;
}

export default function ProjectGallery({ project }: Props) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Project Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.gallery.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-gray-100 rounded-2xl h-56 flex items-center justify-center overflow-hidden group-hover:shadow-lg transition-shadow">
                <span className="text-gray-400 text-sm">{item.caption}</span>
              </div>
              <p className="text-sm font-medium text-gray-700 mt-3 text-center">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
