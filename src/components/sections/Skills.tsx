import { LayoutGrid, Database, Wrench, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const skillGroups = [
  {
    category: "Frontend",
    icon: LayoutGrid,
    skills: [
      { name: "React.js / Next.js 14", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "React Native", level: "core" },
      { name: "Tailwind CSS / SCSS", level: "core" },
      { name: "Framer Motion", level: "growing" },
    ],
  },
  {
    category: "Backend & Data",
    icon: Database,
    skills: [
      { name: "Node.js + Express", level: "growing" },
      { name: "PostgreSQL", level: "growing" },
      { name: "Prisma ORM", level: "growing" },
      { name: "REST APIs / GraphQL", level: "growing" },
      { name: "Axios", level: "core" },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: "core" },
      { name: "Figma", level: "core" },
      { name: "Postman", level: "core" },
      { name: "Vercel / Deployment", level: "core" },
    ],
  },
  {
    category: "IT & Security",
    icon: ShieldCheck,
    skills: [
      { name: "Microsoft 365", level: "core" },
      { name: "Windows OS & Networking", level: "core" },
      { name: "Sophos (Endpoint Sec.)", level: "growing" },
      { name: "ISC2 CC (Certified)", level: "core" },
      { name: "SC-300 (In Progress)", level: "growing" },
    ],
  },
];

function SkillPill({ name, level }: { name: string; level: string }) {
  const growing = level === "growing";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-inter mr-2 mb-2 ${
        growing
          ? "border border-dashed border-ink/20 text-ink-500"
          : "bg-ink/[0.04] border border-ink/8 text-ink-700"
      }`}
    >
      {growing && <span className="w-1.5 h-1.5 rounded-full bg-rust-500/70" />}
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-12 lg:px-16 max-w-2xl bg-paper-100/60">
      <Reveal className="mb-12">
        <p className="text-rust-500 text-sm font-medium tracking-widest uppercase font-mono mb-4">
          // skills
        </p>
        <h2 className="font-fraunces text-3xl font-medium text-ink">
          What I bring to the table
        </h2>
        <p className="text-ink-500 mt-3 font-inter leading-relaxed">
          Frontend-first, but deliberately building toward full-stack. Solid
          tags below are where I&apos;m confident today; dashed tags mark
          what I&apos;m actively deepening right now.
        </p>
      </Reveal>

      <div className="divide-y divide-ink/8 border-t border-ink/8">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <div className="py-6 grid sm:grid-cols-[10rem_1fr] gap-x-6 gap-y-3">
              <div className="flex items-center gap-2.5 text-ink">
                <group.icon size={15} className="text-rust-500" />
                <h3 className="font-fraunces font-medium text-sm">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap">
                {group.skills.map((skill) => (
                  <SkillPill key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
