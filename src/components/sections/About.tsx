import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";

const timeline = [
  {
    year: "Jun 2025 – May 2026",
    role: "IT Support Officer (NYSC)",
    org: "UAC Foods Dairies Plant",
    desc: "Managing corporate IT infrastructure at a large-scale manufacturing plant , troubleshooting hardware/software issues, supporting Microsoft 365 environments, and maintaining network uptime for daily operations.",
  },
  {
    year: "Nov 2025 – Present",
    role: "Frontend Developer Intern",
    org: "CartOnce · Remote",
    desc: "Building and iterating on production UI features using React and Next.js. Working within a product team to deliver responsive, accessible interfaces with clean component architecture.",
  },
  {
    year: "2023 – Present",
    role: "Freelance Frontend Developer",
    org: "Self-employed · Lagos",
    desc: "Delivered full websites and web apps for clients across various industries , from real estate to children's events. Handling everything from UI design to deployment and email integrations.",
  },
  {
    year: "2016 – 2017",
    role: "IT Support Technician",
    org: "Simpleboss Communication · Ikeja",
    desc: "Early-career IT support role , handling hardware repairs, network setup, and frontline technical support. Sparked my interest in both systems and software.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 lg:px-16 max-w-2xl">
      <Reveal>
        <p className="text-rust-500 text-sm font-medium tracking-widest uppercase font-mono mb-4">
          // about
        </p>
        <h2 className="font-fraunces text-3xl font-medium text-ink mb-6 leading-tight">
          Developer and IT professional who builds for the real world.
        </h2>
        <div className="space-y-4 text-ink-500 font-inter leading-relaxed">
          <p>
            I&apos;ve spent 2+ years building production-grade web and mobile
            applications while managing corporate IT infrastructure. I know
            what it means for software to actually work under real
            conditions , not just on a demo machine.
          </p>
          <p>
            My stack spans React, Next.js 14, TypeScript, and React Native on
            the frontend. I&apos;m now investing deliberately in the backend ,
            Node.js, PostgreSQL, Prisma ORM , so I can own a feature from
            database to browser, not just the last mile of it.
          </p>
          <p>
            I&apos;m ISC2 Certified in Cybersecurity and actively working
            toward SC-300. My IT background gives me perspective most
            frontend devs don&apos;t have: I understand how systems behave in
            production, and why reliability matters as much as aesthetics.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:adesinayusuf0@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink/12 text-ink-500 hover:text-ink hover:border-ink/30 text-sm font-inter transition-colors"
          >
            <Mail size={14} /> adesinayusuf0@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/yusufadesina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink/12 text-ink-500 hover:text-ink hover:border-ink/30 text-sm font-inter transition-colors"
          >
            <LinkedinIcon size={14} /> LinkedIn
          </a>
          <a
            href="https://github.com/yuslove1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink/12 text-ink-500 hover:text-ink hover:border-ink/30 text-sm font-inter transition-colors"
          >
            <GithubIcon size={14} /> github.com/yuslove1
          </a>
        </div>
      </Reveal>

      <div className="mt-16">
        <h3 className="text-xs font-medium text-ink-300 uppercase tracking-widest font-mono mb-2">
          experience
        </h3>
        <div className="divide-y divide-ink/8 border-t border-ink/8">
          {timeline.map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="py-6 grid sm:grid-cols-[9rem_1fr] gap-x-6 gap-y-2">
                <span className="text-xs font-mono text-ink-300 pt-1">
                  {item.year}
                </span>
                <div>
                  <h4 className="font-fraunces font-medium text-ink text-lg">
                    {item.role}
                  </h4>
                  <p className="text-rust-500 text-xs font-mono mb-2">
                    {item.org}
                  </p>
                  <p className="text-ink-500 text-sm font-inter leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
