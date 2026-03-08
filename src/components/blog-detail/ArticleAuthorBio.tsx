import { Twitter, Linkedin, Globe } from "lucide-react";

interface ArticleAuthorBioProps {
  tags: string[];
}

export default function ArticleAuthorBio({ tags }: ArticleAuthorBioProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-default"
          >
            #{tag.replace(/\s+/g, "")}
          </span>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mb-8" />

      {/* Author Bio Card */}
      <div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          JA
        </div>

        {/* Bio */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            Joshua Adumchimma
          </h3>
          <p className="text-sm text-[#3B82F6] font-medium mb-3">
            Creative Developer & Designer
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Passionate about creating digital experiences that combine beautiful
            design with powerful functionality. With expertise in web
            development, UI/UX design, and mobile applications, I help
            businesses transform their digital presence and achieve their goals.
          </p>
          <div className="flex gap-2">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:text-[#0077B5] hover:border-[#0077B5] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:text-[#3B82F6] hover:border-[#3B82F6] transition-colors"
              aria-label="Website"
            >
              <Globe className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Share */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <span className="text-sm text-gray-500">Share this article:</span>
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors">
          <Twitter className="w-4 h-4" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#0077B5] hover:text-white transition-colors">
          <Linkedin className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
