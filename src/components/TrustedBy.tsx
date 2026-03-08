import { Globe, ShoppingBag, Film, Music } from "lucide-react";

const companies = [
  { name: "Google", icon: Globe },
  { name: "Amazon", icon: ShoppingBag },
  { name: "Netflix", icon: Film },
  { name: "Spotify", icon: Music },
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400 mb-8">
          Trusted by innovative companies
        </p>
        <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-2 text-gray-300 hover:text-gray-400 transition-colors"
            >
              <company.icon size={24} strokeWidth={1.5} />
              <span className="text-lg font-semibold tracking-wide">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
