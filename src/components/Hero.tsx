import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Available for Freelance Work
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Creative{" "}
              <span className="text-primary">Developer</span>{" "}
              &amp;{" "}
              <span className="text-primary">Designer</span>
            </h1>

            <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
              I craft beautiful, functional digital experiences that help
              businesses grow. Specializing in web development, UI/UX design,
              and brand identity.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-500 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-500 mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">30+</div>
                <div className="text-sm text-gray-500 mt-1">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main image placeholder */}
              <div className="w-80 h-96 lg:w-[420px] lg:h-[500px] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent flex items-end justify-center">
                  <div className="w-64 h-80 lg:w-80 lg:h-96 bg-gray-200 rounded-t-2xl" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -left-8 top-1/3 bg-white shadow-xl rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">✦</span>
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">Best Quality</div>
                  <div className="text-xs text-gray-500">Design & Code</div>
                </div>
              </div>

              {/* Floating badge bottom */}
              <div className="absolute -right-4 bottom-16 bg-white shadow-xl rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">Project Done!</div>
                  <div className="text-xs text-gray-500">Web Application</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
