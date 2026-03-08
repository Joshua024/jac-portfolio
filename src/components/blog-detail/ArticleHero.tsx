import { getCategoryColor } from "@/data/articles";

interface ArticleHeroProps {
  title: string;
  category: string;
  date: string;
  readTime: number;
}

export default function ArticleHero({
  title,
  category,
  date,
  readTime,
}: ArticleHeroProps) {
  const categoryColor = getCategoryColor(category);

  return (
    <section className="pt-28 pb-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium text-white ${categoryColor}`}
          >
            {category}
          </span>
          <span className="text-gray-500">{date}</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-500">{readTime} min read</span>
        </div>
      </div>
    </section>
  );
}
