import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js",
    excerpt:
      "Learn how to build performant and scalable web applications using Next.js, React, and modern best practices.",
    category: "Development",
    date: "Mar 5, 2026",
    readTime: "5 min read",
    author: "Joshua",
  },
  {
    id: 2,
    title: "The Future of UI/UX Design in 2026",
    excerpt:
      "Exploring the latest trends in UI/UX design and what designers need to know to stay ahead of the curve.",
    category: "Design",
    date: "Feb 28, 2026",
    readTime: "4 min read",
    author: "Joshua",
  },
  {
    id: 3,
    title: "Mastering TypeScript for Better Code Quality",
    excerpt:
      "A comprehensive guide to using TypeScript effectively to write safer, more maintainable code.",
    category: "Development",
    date: "Feb 20, 2026",
    readTime: "6 min read",
    author: "Joshua",
  },
];

export default function LatestArticles() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Blog
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Latest Articles
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg">
              Insights, tutorials, and thoughts on design, development, and technology.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline shrink-0"
          >
            View All Articles
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5" />

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
