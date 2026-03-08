import Link from "next/link";
import { Clock } from "lucide-react";
import { Article, getCategoryColor } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  viewMode: "grid" | "list";
}

export default function ArticleCard({ article, viewMode }: ArticleCardProps) {
  const categoryColor = getCategoryColor(article.category);

  if (viewMode === "list") {
    return (
      <Link
        href={`/blog/${article.slug}`}
        className="group flex gap-6 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
      >
        {/* Image */}
        <div className="w-64 min-h-[160px] bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Article Image</span>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center py-5 pr-6 flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColor}`}
            >
              {article.category}
            </span>
            <span className="text-sm text-gray-500">{article.date}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3B82F6] transition-colors line-clamp-1">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-gray-500 text-sm">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </div>
            <span className="text-[#3B82F6] text-sm font-semibold group-hover:underline">
              Read More
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
    >
      {/* Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <span className="text-gray-400 text-sm">Article Image</span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColor}`}
          >
            {article.category}
          </span>
          <span className="text-sm text-gray-500">{article.date}</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3B82F6] transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            {article.readTime}
          </div>
          <span className="text-[#3B82F6] text-sm font-semibold group-hover:underline">
            Read More
          </span>
        </div>
      </div>
    </Link>
  );
}
