import {
  Globe,
  ShoppingBag,
  Film,
  Music,
  Cpu,
  Cloud,
  Smartphone,
  Zap,
  Layers,
  Code,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  ShoppingBag,
  Film,
  Music,
  Cpu,
  Cloud,
  Smartphone,
  Zap,
  Layers,
  Code,
};

interface TrustedCompany {
  id: string;
  name: string;
  icon: string;
}

interface Props {
  companies?: TrustedCompany[];
}

const defaultCompanies: TrustedCompany[] = [
  { id: "1", name: "Google", icon: "Globe" },
  { id: "2", name: "Amazon", icon: "ShoppingBag" },
  { id: "3", name: "Netflix", icon: "Film" },
  { id: "4", name: "Spotify", icon: "Music" },
];

export default function TrustedBy({ companies = defaultCompanies }: Props) {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400 mb-8">
          Trusted by innovative companies
        </p>
        <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
          {companies.map((company) => {
            const Icon = iconMap[company.icon] || Globe;
            return (
              <div
                key={company.id}
                className="flex items-center gap-2 text-gray-300 hover:text-gray-400 transition-colors"
              >
                <Icon size={24} strokeWidth={1.5} />
                <span className="text-lg font-semibold tracking-wide">
                  {company.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
