import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function MyMission() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Mission</h2>

          <blockquote className="text-gray-500 text-lg leading-relaxed italic mb-10">
            &ldquo;I believe that technology should serve people, not the other way around. My mission
            is to create digital experiences that are not only visually stunning but also intuitive,
            accessible, and genuinely useful. Through thoughtful design and clean code, I aim to
            bridge the gap between human needs and technological possibilities.&rdquo;
          </blockquote>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Looking Forward
            </h3>
            <p className="text-gray-500 leading-relaxed">
              As I continue my professional journey, I&apos;m particularly excited about exploring emerging technologies like AI/ML,
              interfaces, AI-driven design tools, and creating more inclusive digital experiences. I&apos;m always open to new
              challenges and collaborative opportunities that push the boundaries of what&apos;s possible in digital design and
              development.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              Work With Me
              <ArrowRight size={18} />
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-7 py-3 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
