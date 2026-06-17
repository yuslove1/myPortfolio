export default function About() {
  const timeline = [
    {
      year: "Jun 2025 – May 2026",
      role: "IT Support Officer (NYSC)",
      org: "UAC Foods Dairies Plant",
      desc: "Managing corporate IT infrastructure at a large-scale manufacturing plant   troubleshooting hardware/software issues, supporting Microsoft 365 environments, and maintaining network uptime for daily operations.",
      color: "amber",
    },
    {
      year: "Nov 2025 – Present",
      role: "Frontend Developer Intern",
      org: "CartOnce · Remote",
      desc: "Building and iterating on production UI features using React and Next.js. Working within a product team to deliver responsive, accessible interfaces with clean component architecture.",
      color: "electric",
    },
    {
      year: "2023 – Present",
      role: "Freelance Frontend Developer",
      org: "Self-employed · Lagos",
      desc: "Delivered full websites and web apps for clients across various industries   from real estate to children's events. Handling everything from UI design to deployment and email integrations.",
      color: "electric",
    },
    {
      year: "2016 – 2017",
      role: "IT Support Technician",
      org: "Simpleboss Communication · Ikeja",
      desc: "Early-career IT support role   handling hardware repairs, network setup, and frontline technical support. Sparked my interest in both systems and software.",
      color: "amber",
    },
  ];

  return (
    <section id="about" className="py-24 bg-navy-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left   copy */}
          <div>
            <p className="text-electric-400 text-sm font-medium tracking-widest uppercase font-inter mb-4">
              About
            </p>
            <h2 className="font-sora text-4xl font-bold text-white mb-6 leading-tight">
              Developer and IT professional
              <br />
              who builds for the real world.
            </h2>
            <div className="space-y-4 text-white/60 font-inter leading-relaxed">
              <p>
                I&apos;ve spent 2+ years building production-grade web and mobile
                applications while managing corporate IT infrastructure. I know
                what it means for software to actually work under real conditions
                  not just on a demo machine.
              </p>
              <p>
                My stack spans React, Next.js 14, TypeScript, React Native on the
                frontend, and Node.js, PostgreSQL, Prisma ORM on the backend. I
                pick the right tool, build it properly, and ship it. Currently
                interning at CartOnce while completing my NYSC posting at UAC
                Foods.
              </p>
              <p>
                I&apos;m ISC2 Certified in Cybersecurity and actively working
                toward SC-300. My IT background gives me perspective most
                frontend devs don&apos;t have: I understand how systems behave
                in production, and why reliability matters as much as aesthetics.
              </p>
            </div>

            {/* Contact links */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:adesinayusuf0@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/4 text-white/60 hover:text-white hover:border-electric-500/40 text-sm font-inter transition-colors"
              >
                ✉ adesinayusuf0@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/yusufadesina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/4 text-white/60 hover:text-white hover:border-electric-500/40 text-sm font-inter transition-colors"
              >
                in LinkedIn
              </a>
              <a
                href="https://github.com/yuslove1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/4 text-white/60 hover:text-white hover:border-electric-500/40 text-sm font-inter transition-colors"
              >
                ⌥ github.com/yuslove1
              </a>
            </div>
          </div>

          {/* Right   timeline */}
          <div className="space-y-4">
            <h3 className="text-xs font-medium text-white/30 uppercase tracking-widest font-inter mb-6">
              Experience
            </h3>
            {timeline.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-xl border border-white/6 bg-navy-800/40 card-lift"
              >
                <div
                  className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${
                    item.color === "electric"
                      ? "bg-electric-400"
                      : "bg-amber-400"
                  }`}
                />
                <div>
                  <span className="text-xs font-medium text-white/40 font-inter">
                    {item.year}
                  </span>
                  <h4 className="font-sora font-semibold text-white mt-0.5">
                    {item.role}
                  </h4>
                  <p className="text-electric-300 text-xs font-inter mb-2">
                    {item.org}
                  </p>
                  <p className="text-white/55 text-sm font-inter leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
