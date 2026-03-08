import { CheckCircle } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>

          <div className="space-y-5 text-gray-500 leading-relaxed">
            <p>
              I&apos;m a passionate digital creator based in San Francisco with a background in both Design and development. My
              journey in the digital world began over 5 years ago when I discovered my passion for creating beautiful interfaces
              that solve real problems.
            </p>
            <p>
              After graduating with a degree in Computer Science from Stanford University, I spent three years at a leading tech company
              honing my development skills before transitioning to a design-focused approach where I learned to bridge the gap between
              technical functionality and aesthetic appeal.
            </p>
            <p>
              Today, my work is characterized by its intentional presence, taking time to think digital products that not only
              look great but also deliver exceptional user experiences and business results. My approach combines technical expertise with
              creative problem-solving, ensuring that every project I tackle is both visually stunning and strategically sound.
            </p>
            <p>
              When I&apos;m not designing or coding, you&apos;ll find me hiking in the mountains, experimenting with photography, or exploring the
              latest advancements in technology. I believe in continuous learning and regularly attend industry conferences and workshops.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-gray-700 font-semibold mb-4">
              My work philosophy centers on these core principles:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-primary mt-0.5 shrink-0"
                />
                <span className="text-gray-500">
                  <span className="font-medium text-gray-700">User-Centered Design:</span> I believe that successful digital products start with a deep understanding of the people who will use
                  them.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-primary mt-0.5 shrink-0"
                />
                <span className="text-gray-500">
                  <span className="font-medium text-gray-700">Clean Code:</span> Clean, efficient code and thoughtful architecture are the foundation of everything I build.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-primary mt-0.5 shrink-0"
                />
                <span className="text-gray-500">
                  <span className="font-medium text-gray-700">Strategic Thinking:</span> Every design decision and line of code should serve a clear business purpose and contribute to
                  achieving measurable goals.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
