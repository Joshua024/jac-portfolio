import Link from "next/link";

interface HeroProps {
  heading: string;
  subtext: string;
  tags: string[];
  cta1Text: string;
  cta1Link: string;
  cta2Text: string;
  cta2Link: string;
  image: string;
}

export default function Hero({
  heading,
  subtext,
  tags,
  cta1Text,
  cta1Link,
  cta2Text,
  cta2Link,
  image,
}: HeroProps) {
  return (
    <section className="relative pt-20 min-h-[600px] lg:min-h-[540px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: image
            ? `url(${image})`
            : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent dark:from-gray-900/90 dark:via-gray-900/70" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            {heading}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
            {subtext}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 border border-primary/30 text-primary rounded-full text-sm font-medium bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href={cta1Link}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              {cta1Text}
            </Link>
            <Link
              href={cta2Link}
              className="inline-flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 px-8 py-3.5 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors backdrop-blur-sm"
            >
              {cta2Text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
