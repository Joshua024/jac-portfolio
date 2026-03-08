import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHero from "@/components/blog-detail/ArticleHero";
import ArticleAuthor from "@/components/blog-detail/ArticleAuthor";
import ArticleBody from "@/components/blog-detail/ArticleBody";
import ArticleAuthorBio from "@/components/blog-detail/ArticleAuthorBio";
import RelatedArticles from "@/components/blog-detail/RelatedArticles";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import ArticleComments from "@/components/blog-detail/ArticleComments";
import { articles, getArticleBySlug, getAllArticleSlugs } from "@/data/articles";
import { getArticleDetail } from "@/data/articleDetails";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found | JAC" };
  return {
    title: `${article.title} | JAC Blog`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const detail = getArticleDetail(slug, article.title, article.category);

  // Get related articles (same category, excluding current)
  const related = articles
    .filter((a) => a.category === article.category && a.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <ArticleHero
        title={article.title}
        category={article.category}
        date={article.date}
        readTime={article.readTime}
      />
      <ArticleAuthor />
      <ArticleBody content={detail.content} />
      <ArticleAuthorBio tags={detail.tags} />
      <BlogNewsletter />
      <RelatedArticles articles={related} />
      <ArticleComments comments={detail.comments} />
      <Footer />
    </>
  );
}
