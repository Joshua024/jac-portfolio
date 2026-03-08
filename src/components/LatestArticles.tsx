import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import ArticleNewsletter from "./ArticleNewsletter";

interface ArticleItem {
  id: string | number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  image?: string;
}

interface Props {
  articles?: ArticleItem[];
  newsletterHeading?: string;
  newsletterText?: string;
}

const categoryColors: Record<string, string> = {
  Freelancing: "bg-green-50 text-green-600",
  "UI/UX": "bg-purple-50 text-purple-600",
  "Web Dev": "bg-blue-50 text-blue-600",
  Development: "bg-blue-50 text-blue-600",
  Design: "bg-purple-50 text-purple-600",
  Marketing: "bg-orange-50 text-orange-600",
  Mobile: "bg-cyan-50 text-cyan-600",
  SEO: "bg-emerald-50 text-emerald-600",
  Branding: "bg-pink-50 text-pink-600",
  Technology: "bg-indigo-50 text-indigo-600",
};

const defaultArticles: ArticleItem[] = [
  {
    id: 1,
    slug: "future-of-web-development-trends-2025",
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Explore emerging technologies and methodologies that are reshaping the web development landscape.",
    category: "Freelancing",
    date: "Mar 5, 2026",
    readTime: 8,
    image: "/articles/article1.jpg",
  },
  {
    id: 2,
    slug: "ui-ux-design-principles-conversion-rates",
    title: "10 UI/UX Design Principles That Improve Conversion Rates",
    excerpt:
      "Learn essential UX principles to create user-centric designs that boost engagement and drive results.",
    category: "UI/UX",
    date: "Feb 28, 2026",
    readTime: 5,
    image: "/articles/article2.jpg",
  },
  {
    id: 3,
    slug: "native-vs-cross-platform-mobile-development",
    title: "Native vs. Cross-Platform: Choosing the Right Mobile Development Approach",
    excerpt:
      "A comprehensive comparison of development approaches to help you make informed decisions.",
    category: "Web Dev",
    date: "Feb 20, 2026",
    readTime: 6,
    image: "/articles/article3.jpg",
  },
  {
    id: 4,
    slug: "content-first-seo-sustainable-approach",
    title: "Content-First SEO: A Sustainable Approach to Digital Marketing",
    excerpt:
      "Learn how to create SEO-focused content that builds authority, drives organic traffic, and converts.",
    category: "Marketing",
    date: "Feb 15, 2026",
    readTime: 7,
    image: "/articles/article4.jpg",
  },
];

export default function LatestArticles({ articles = defaultArticles, newsletterHeading = "Subscribe to My Newsletter", newsletterText = "Get the latest articles, tutorials, and insights delivered directly to your inbox. No spam, just valuable content to help you grow." }: Props) {
  const featured = articles[0];
  const rest = articles.slice(1, 4);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Latest Articles
          </h2>
          <p className="text-gray-500 mt-3">
            Insights, tutorials, and thoughts on design, development, and digital strategy.
          </p>
        </div>

        {/* Row 1: Featured Article — full width, image left + content right */}
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row mb-10"
          >
            <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
              {featured.image && featured.image.startsWith("http") && (
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
              )}
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[featured.category] || "bg-gray-100 text-gray-600"}`}>
                  {featured.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-gray-400"><Calendar size={12} />{featured.date}</span>
                <span className="text-xs text-gray-400">{featured.readTime} min read</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3">
                {featured.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                Read More
                <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        )}

        {/* Row 2: 3 Article Cards — image top, content below */}
        <div className="grid md:grid-cols-3 gap-8">
          {rest.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                {article.image && article.image.startsWith("http") && (
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColors[article.category] || "bg-gray-100 text-gray-600"}`}>
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-400"><Calendar size={12} />{article.date}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1 mb-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{article.readTime} min read</span>
                  <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold">
                    Read More
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <ArticleNewsletter heading={newsletterHeading} description={newsletterText} />

        {/* View All Articles */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-transparent text-gray-700 border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors"
          >
            View All Articles
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
