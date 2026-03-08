export interface ArticleSection {
  type: "paragraph" | "heading" | "code" | "image" | "list" | "quote";
  content?: string;
  language?: string;
  items?: string[];
  alt?: string;
}

export interface ArticleComment {
  id: number;
  author: string;
  avatar: string;
  date: string;
  content: string;
  replies?: ArticleComment[];
}

export interface ArticleDetail {
  slug: string;
  content: ArticleSection[];
  tags: string[];
  comments: ArticleComment[];
}

const articleDetailsMap: Record<string, ArticleDetail> = {
  "future-of-web-development-trends-2025": {
    slug: "future-of-web-development-trends-2025",
    content: [
      {
        type: "paragraph",
        content:
          "As we approach 2025, the landscape of web development continues to evolve at a breathtaking pace. New technologies, frameworks, and methodologies are emerging that promise to fundamentally change how we build and interact with web applications. In this comprehensive guide, we'll explore the most significant trends that every developer should be watching.",
      },
      { type: "heading", content: "1. WebAssembly Is Changing the Game" },
      {
        type: "paragraph",
        content:
          "WebAssembly (Wasm) has matured significantly, moving beyond its initial use case of porting C/C++ code to the browser. In 2025, we're seeing Wasm being used for computationally intensive tasks like video editing, 3D rendering, and machine learning — all running directly in the browser at near-native speeds.",
      },
      {
        type: "paragraph",
        content:
          "The WebAssembly System Interface (WASI) is extending Wasm's reach beyond the browser, enabling it to run in serverless environments, IoT devices, and edge computing platforms. This convergence means developers can write high-performance code once and run it virtually anywhere.",
      },
      {
        type: "code",
        language: "rust",
        content: `// Example: A simple Wasm module in Rust
#[no_mangle]
pub extern "C" fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}`,
      },
      {
        type: "heading",
        content: "2. AI-Driven Development Is Not Replacement",
      },
      {
        type: "paragraph",
        content:
          "AI coding assistants have become indispensable tools in every developer's workflow. However, the narrative has shifted from \"AI will replace developers\" to \"AI amplifies developer productivity.\" The most successful teams are those that have learned to effectively collaborate with AI tools, using them for boilerplate generation, code review, testing, and documentation.",
      },
      {
        type: "list",
        items: [
          "AI-powered code completion reduces development time by up to 40%",
          "Automated code review catches bugs before they reach production",
          "Natural language to code generation accelerates prototyping",
          "AI-driven testing generates comprehensive test suites automatically",
        ],
      },
      { type: "heading", content: "3. The Rise of Edge Computing" },
      {
        type: "paragraph",
        content:
          "Edge computing is reshaping how we think about web application architecture. By processing data closer to the user, edge computing reduces latency, improves performance, and enables new use cases that weren't previously possible with traditional cloud architectures.",
      },
      {
        type: "paragraph",
        content:
          "Frameworks like Next.js, Remix, and Astro are embracing edge-first architectures, allowing developers to deploy server-side logic to edge locations around the world. This means your server-rendered pages can be generated within milliseconds of the user's request, regardless of their geographic location.",
      },
      {
        type: "image",
        content: "/blog/edge-computing-diagram.jpg",
        alt: "Edge Computing Architecture Diagram",
      },
      { type: "heading", content: "4. JavaScript Framework Evolution" },
      {
        type: "paragraph",
        content:
          "The JavaScript framework landscape continues to evolve, with a clear trend toward server-first rendering and improved developer experience. React Server Components have matured, Vue 4 has introduced its own take on server components, and Svelte 5's runes system has redefined reactive programming.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// React Server Component Example
async function BlogPosts() {
  const posts = await db.posts.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
  });

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}`,
      },
      {
        type: "heading",
        content: "5. Web Components Finally Find Their Footing",
      },
      {
        type: "paragraph",
        content:
          "After years of being overshadowed by framework-specific component models, Web Components have found their niche. They're now widely used for design system primitives — the foundational building blocks that need to work across different frameworks and technologies.",
      },
      {
        type: "paragraph",
        content:
          "Major companies like GitHub, Adobe, and Salesforce have built their design systems on Web Components, proving that standards-based components can deliver excellent performance and developer experience. The introduction of Declarative Shadow DOM has solved the server rendering challenge that previously held Web Components back.",
      },
      {
        type: "heading",
        content: "6. Progressive Web Apps Become the Default",
      },
      {
        type: "paragraph",
        content:
          "Progressive Web Apps (PWAs) have moved from being a nice-to-have to the default approach for many web applications. With improved browser APIs, better offline support, and closer integration with operating systems, PWAs now offer experiences that are nearly indistinguishable from native applications.",
      },
      {
        type: "heading",
        content: "7. API-First Development and the Composable Web",
      },
      {
        type: "paragraph",
        content:
          "The API-first approach has become the standard for building modern web applications. By designing APIs before implementing the frontend, teams can work more efficiently in parallel and create more flexible, composable architectures.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// API-First: OpenAPI Spec Driven Development
const apiSpec = {
  openapi: '3.1.0',
  paths: {
    '/api/posts': {
      get: {
        summary: 'List all posts',
        parameters: [
          { name: 'page', in: 'query', schema: { type: 'integer' } },
          { name: 'limit', in: 'query', schema: { type: 'integer' } }
        ],
        responses: {
          '200': { description: 'Successful response' }
        }
      }
    }
  }
};`,
      },
      { type: "heading", content: "8. Accessibility as a First Requirement" },
      {
        type: "paragraph",
        content:
          "Accessibility is no longer an afterthought or a nice-to-have feature. With increasing legislation worldwide (including the European Accessibility Act taking effect) and growing awareness, accessibility has become a first-class requirement in every web project.",
      },
      {
        type: "paragraph",
        content:
          'Modern frameworks and tooling are making accessibility easier to implement. Automated testing tools can now catch up to 50% of accessibility issues, while AI-powered tools can suggest fixes and generate accessible alternatives for complex UI patterns. The key shift is that accessibility is being "baked in" rather than "bolted on."',
      },
      {
        type: "heading",
        content: "9. Performance Optimization Through Automation",
      },
      {
        type: "paragraph",
        content:
          "Build tools and frameworks are increasingly automating performance optimizations that developers previously had to implement manually. Image optimization, code splitting, tree shaking, and resource prioritization are now handled automatically by modern build systems.",
      },
      {
        type: "heading",
        content: "10. Sustainability in Web Development",
      },
      {
        type: "paragraph",
        content:
          "A lesser-discussed but growing trend is sustainable web development. As awareness of the environmental impact of digital infrastructure grows, developers are considering the carbon footprint of their applications. This includes optimizing data transfer, reducing unnecessary computation, choosing green hosting providers, and designing efficient user experiences.",
      },
      {
        type: "list",
        items: [
          "Carbon-aware computing schedules non-urgent tasks during low-carbon periods",
          "Efficient coding practices reduce server compute requirements",
          "Optimized assets decrease data transfer and energy consumption",
          "Green hosting providers use renewable energy for their data centers",
        ],
      },
      {
        type: "heading",
        content: "Conclusion: The Integrated Future of Web Development",
      },
      {
        type: "paragraph",
        content:
          "The trends shaping web development in 2025 share a common theme: integration. The boundaries between frontend and backend, web and native, development and design are blurring. The most successful developers will be those who can navigate this increasingly integrated landscape while maintaining a focus on performance, accessibility, and user experience.",
      },
      {
        type: "paragraph",
        content:
          "Whether you're a seasoned developer or just starting your journey, staying informed about these trends will help you make better technology decisions and build more impactful web applications. The future of web development is exciting, and we're all part of shaping it.",
      },
    ],
    tags: [
      "Web Development",
      "JavaScript",
      "WebAssembly",
      "Edge Computing",
      "Tech Trends",
      "Performance",
    ],
    comments: [
      {
        id: 1,
        author: "Full Phil",
        avatar: "FP",
        date: "June 5, 2025",
        content:
          "Great article! The section on WebAssembly was particularly insightful. I've been experimenting with Wasm for some data visualization projects and the performance improvements are remarkable. Looking forward to seeing how WASI evolves.",
        replies: [
          {
            id: 2,
            author: "Joshua A.",
            avatar: "JA",
            date: "June 5, 2025",
            content:
              "Thanks Phil! Wasm really is a game-changer for compute-heavy visualizations. WASI is definitely one to watch — it could unify how we think about runtime environments.",
          },
        ],
      },
      {
        id: 3,
        author: "Sarah Chen",
        avatar: "SC",
        date: "June 4, 2025",
        content:
          "I'd love to see a deeper dive into server components. The React Server Components model is interesting but the mental model shift is significant. Would you consider a follow-up article covering migration strategies?",
        replies: [],
      },
      {
        id: 4,
        author: "Marcus Obi",
        avatar: "MO",
        date: "June 4, 2025",
        content:
          "The sustainability section resonated with me. We recently optimized our image pipeline and reduced our CDN bandwidth by 60%. Small changes can have a huge environmental impact when you're serving millions of requests.",
        replies: [],
      },
    ],
  },
};

function generateFallbackContent(title: string): ArticleSection[] {
  return [
    {
      type: "paragraph",
      content: `This comprehensive article explores the key concepts and practical applications of "${title}". Drawing from real-world experience and industry best practices, we'll cover everything you need to know to stay ahead in today's rapidly evolving digital landscape.`,
    },
    { type: "heading", content: "Understanding the Fundamentals" },
    {
      type: "paragraph",
      content:
        "Before diving into advanced topics, it's important to establish a solid understanding of the core concepts. The fundamentals serve as the building blocks for everything we'll discuss in this article, and having a clear grasp of these principles will help you apply the advanced techniques more effectively.",
    },
    {
      type: "paragraph",
      content:
        "The industry has seen significant shifts in recent years, with new tools, methodologies, and best practices emerging at a rapid pace. Staying current requires continuous learning and a willingness to adapt your approach as the landscape evolves.",
    },
    { type: "heading", content: "Key Strategies and Best Practices" },
    {
      type: "paragraph",
      content:
        "Implementing effective strategies requires a thoughtful approach that considers both short-term goals and long-term sustainability. Here are the key practices that industry leaders consistently recommend:",
    },
    {
      type: "list",
      items: [
        "Start with a clear understanding of your goals and constraints",
        "Build incrementally, validating at each step",
        "Prioritize user experience and accessibility from the beginning",
        "Invest in automation to reduce repetitive work",
        "Measure outcomes and iterate based on data",
      ],
    },
    { type: "heading", content: "Practical Implementation" },
    {
      type: "paragraph",
      content:
        "Theory is important, but practical implementation is where the real value lies. Let's look at how to apply these concepts in a real-world scenario.",
    },
    {
      type: "code",
      language: "typescript",
      content: `// Example implementation pattern
interface Config {
  strategy: string;
  options: Record<string, unknown>;
}

function initialize(config: Config) {
  console.log(\`Initializing with strategy: \${config.strategy}\`);
  // Implementation details...
  return { success: true };
}`,
    },
    { type: "heading", content: "Measuring Success" },
    {
      type: "paragraph",
      content:
        "The effectiveness of any approach should be measured against clear metrics. Establishing key performance indicators (KPIs) early in the process ensures that you can track progress and make data-driven decisions about future improvements.",
    },
    { type: "heading", content: "Looking Ahead" },
    {
      type: "paragraph",
      content:
        "As we look to the future, it's clear that this field will continue to evolve rapidly. By building a strong foundation now and staying committed to continuous learning, you'll be well-positioned to adapt to whatever changes come next.",
    },
    {
      type: "paragraph",
      content:
        "Whether you're just getting started or looking to refine your existing approach, the strategies discussed in this article provide a solid framework for success. Remember that the best approach is one that's tailored to your specific needs and constraints.",
    },
  ];
}

function generateFallbackTags(category: string): string[] {
  const tagsByCategory: Record<string, string[]> = {
    Development: [
      "Web Development",
      "JavaScript",
      "TypeScript",
      "Best Practices",
      "Performance",
    ],
    Design: [
      "UI Design",
      "UX Design",
      "Design Systems",
      "User Experience",
      "Visual Design",
    ],
    Mobile: [
      "Mobile Development",
      "iOS",
      "Android",
      "Cross-Platform",
      "Mobile UX",
    ],
    Marketing: [
      "Digital Marketing",
      "SEO",
      "Content Strategy",
      "Analytics",
      "Growth",
    ],
  };
  return tagsByCategory[category] || ["Technology", "Innovation", "Industry"];
}

function generateFallbackComments(): ArticleComment[] {
  return [
    {
      id: 1,
      author: "Alex Rivera",
      avatar: "AR",
      date: "2 days ago",
      content:
        "Really insightful article! I've been looking for a comprehensive resource on this topic and this covers everything I needed. The practical examples were especially helpful.",
      replies: [
        {
          id: 2,
          author: "Joshua A.",
          avatar: "JA",
          date: "1 day ago",
          content:
            "Thanks Alex! Glad you found it useful. Feel free to reach out if you have any follow-up questions.",
        },
      ],
    },
    {
      id: 3,
      author: "Priya Sharma",
      avatar: "PS",
      date: "3 days ago",
      content:
        "Great breakdown of the key concepts. I've shared this with my team — it aligns perfectly with the direction we're heading in our current project.",
      replies: [],
    },
  ];
}

export function getArticleDetail(
  slug: string,
  title: string,
  category: string
): ArticleDetail {
  if (articleDetailsMap[slug]) {
    return articleDetailsMap[slug];
  }

  return {
    slug,
    content: generateFallbackContent(title),
    tags: generateFallbackTags(category),
    comments: generateFallbackComments(),
  };
}
