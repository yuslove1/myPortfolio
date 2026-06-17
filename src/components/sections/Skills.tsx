const skillGroups = [
  {
    category: "Frontend",
    icon: "⬡",
    skills: [
      { name: "React.js / Next.js 14", level: 82 },
      { name: "TypeScript", level: 70 },
      { name: "React Native", level: 78 },
      { name: "Tailwind CSS / SCSS", level: 85 },
      { name: "Framer Motion", level: 65 },
    ],
  },
  {
    category: "Backend & Data",
    icon: "◈",
    skills: [
      { name: "Node.js + Express", level: 68 },
      { name: "PostgreSQL", level: 62 },
      { name: "Prisma ORM", level: 65 },
      { name: "REST APIs / GraphQL", level: 70 },
      { name: "Axios", level: 75 },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "◇",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Figma", level: 72 },
      { name: "Postman", level: 70 },
      { name: "Vercel / Deployment", level: 75 },
    ],
  },
  {
    category: "IT & Security",
    icon: "⬡",
    skills: [
      { name: "Microsoft 365", level: 80 },
      { name: "Windows OS & Networking", level: 78 },
      { name: "Sophos (Endpoint Sec.)", level: 65 },
      { name: "ISC2 CC (Certified)", level: 90 },
      { name: "SC-300 (In Progress)", level: 45 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-white/75 font-inter">{name}</span>
        <span className="text-xs text-white/30 font-inter">{level}%</span>
      </div>
      <div className="h-1 rounded-full bg-white/8 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-electric-500 to-electric-300"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-electric-400 text-sm font-medium tracking-widest uppercase font-inter mb-4">
            Skills
          </p>
          <h2 className="font-sora text-4xl font-bold text-white">
            What I bring to the table
          </h2>
          <p className="text-white/50 mt-3 max-w-xl font-inter">
            Frontend-first, but comfortable across the stack. I combine UI craft
            with backend fundamentals, product thinking, and IT/security
            knowledge   useful whether you need an engineer, a versatile
            team member, or someone who understands systems end-to-end.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl border border-white/6 bg-navy-800/50 card-lift"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-electric-400 text-xl">{group.icon}</span>
                <h3 className="font-sora font-semibold text-white text-sm">
                  {group.category}
                </h3>
              </div>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="mt-10 flex flex-wrap gap-2">
          {[
            "Next.js 14",
            "React Native",
            "TypeScript",
            "Tailwind CSS",
            "SCSS",
            "Framer Motion",
            "Bootstrap",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma ORM",
            "GraphQL",
            "REST APIs",
            "Axios",
            "Git",
            "Figma",
            "Postman",
            "Microsoft 365",
            "Sophos",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg border border-white/8 bg-white/4 text-white/60 text-xs font-inter hover:border-electric-500/40 hover:text-white/80 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
