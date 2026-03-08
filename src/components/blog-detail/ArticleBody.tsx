import { ArticleSection } from "@/data/articleDetails";

interface ArticleBodyProps {
  content: ArticleSection[];
}

function CodeBlock({
  code,
  language,
}: {
  code: string;
  language?: string;
}) {
  return (
    <div className="my-8 rounded-xl overflow-hidden">
      <div className="bg-[#1e1e2e] px-4 py-2 flex items-center justify-between">
        <span className="text-xs text-gray-400 font-mono">
          {language || "code"}
        </span>
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
      </div>
      <pre className="bg-[#1e1e2e] p-5 overflow-x-auto">
        <code className="text-sm text-gray-300 font-mono leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}

export default function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <article className="prose prose-lg max-w-none">
        {content.map((section, index) => {
          switch (section.type) {
            case "heading":
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold text-gray-900 mt-10 mb-4"
                >
                  {section.content}
                </h2>
              );
            case "paragraph":
              return (
                <p
                  key={index}
                  className="text-gray-700 leading-relaxed mb-4"
                >
                  {section.content}
                </p>
              );
            case "code":
              return (
                <CodeBlock
                  key={index}
                  code={section.content || ""}
                  language={section.language}
                />
              );
            case "image":
              return (
                <div
                  key={index}
                  className="my-8 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-64 flex items-center justify-center"
                >
                  <span className="text-gray-400 text-sm">
                    {section.alt || "Article Image"}
                  </span>
                </div>
              );
            case "list":
              return (
                <ul
                  key={index}
                  className="my-4 space-y-2 list-disc list-inside text-gray-700"
                >
                  {section.items?.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            case "quote":
              return (
                <blockquote
                  key={index}
                  className="my-6 pl-5 border-l-4 border-[#4F46E5] italic text-gray-600"
                >
                  {section.content}
                </blockquote>
              );
            default:
              return null;
          }
        })}
      </article>
    </div>
  );
}
