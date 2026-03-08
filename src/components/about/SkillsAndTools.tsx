import {
  Figma,
  Code,
  Palette,
  PenTool,
  Monitor,
  Box,
  Database,
  GitBranch,
  Cloud,
  Container,
  Users,
  MessageSquare,
  Lightbulb,
  Clock,
  Heart,
  Handshake,
  Mic,
  Shuffle,
} from "lucide-react";

const designSkills = [
  { name: "UI/UX Design", icon: Monitor },
  { name: "Wireframing", icon: PenTool },
  { name: "Figma", icon: Figma },
  { name: "Adobe XD", icon: Palette },
  { name: "Photoshop", icon: Box },
  { name: "Illustrator", icon: PenTool },
];

const devSkills = [
  { name: "HTML5", icon: Code, color: "bg-orange-100 text-orange-600" },
  { name: "CSS3/SASS", icon: Code, color: "bg-blue-100 text-blue-600" },
  { name: "JavaScript", icon: Code, color: "bg-yellow-100 text-yellow-600" },
  { name: "React", icon: Code, color: "bg-cyan-100 text-cyan-600" },
  { name: "Vue.js", icon: Code, color: "bg-green-100 text-green-600" },
  { name: "Node.js", icon: Code, color: "bg-lime-100 text-lime-600" },
  { name: "MongoDB", icon: Database, color: "bg-green-100 text-green-600" },
  { name: "SQL", icon: Database, color: "bg-blue-100 text-blue-600" },
  { name: "Git", icon: GitBranch, color: "bg-red-100 text-red-600" },
  { name: "Python", icon: Code, color: "bg-indigo-100 text-indigo-600" },
  { name: "AWS", icon: Cloud, color: "bg-orange-100 text-orange-600" },
  { name: "Docker", icon: Container, color: "bg-blue-100 text-blue-600" },
];

const softSkills = [
  { name: "Team Leadership", icon: Users },
  { name: "Communication", icon: MessageSquare },
  { name: "Problem-Solving", icon: Lightbulb },
  { name: "Time Management", icon: Clock },
  { name: "Client Relations", icon: Handshake },
  { name: "Public Speaking", icon: Mic },
  { name: "Adaptability", icon: Shuffle },
  { name: "Empathy", icon: Heart },
];

export default function SkillsAndTools() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Skills &amp; Tools</h2>
          <p className="text-gray-500 mt-3">
            The technologies and methodologies I use to bring ideas to life
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-14">
          {/* Design */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Palette size={20} className="text-primary" />
              Design
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {designSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <skill.icon size={22} className="text-primary" />
                  </div>
                  <span className="text-xs font-medium text-gray-600 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Development */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Code size={20} className="text-primary" />
              Development
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {devSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${skill.color}`}
                  >
                    <skill.icon size={22} />
                  </div>
                  <span className="text-xs font-medium text-gray-600 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Heart size={20} className="text-primary" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <skill.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
