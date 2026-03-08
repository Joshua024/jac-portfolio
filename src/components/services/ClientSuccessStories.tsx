import { Star } from "lucide-react";

const stories = [
  {
    content:
      "The UI/UX design service have transformed our product. User engagement increased by 40%, and our conversion rate improved significantly. The team took time to understand our users and created an intuitive interface that perfectly balances aesthetics and functionality.",
    name: "Alexandra Reynolds",
    role: "Product Manager, TechVision",
    rating: 5,
  },
  {
    content:
      "Our e-commerce website development project was delivered on time and exceeded our expectations. Sales increased 65% in the first quarter after launch and the custom features have made managing our online store incredibly efficient. Comprehensive service.",
    name: "Marcus Henderson",
    role: "Founder, Henderson & Co.",
    rating: 5,
  },
  {
    content:
      "The mobile app development team created a solution that perfectly aligned with our business needs. The app has received excellent reviews from our customers, and the ongoing support has been invaluable. I highly recommend their services.",
    name: "Olivia Nakamura",
    role: "Director, International Digital Verse",
    rating: 5,
  },
];

export default function ClientSuccessStories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Client Success Stories
          </h2>
          <p className="text-gray-500 mt-3">
            Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-7 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: story.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                &ldquo;{story.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {story.name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">
                    {story.name}
                  </div>
                  <div className="text-xs text-gray-400">{story.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
