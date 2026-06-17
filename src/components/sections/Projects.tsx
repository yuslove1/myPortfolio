const projects = [
  {
    featured: true,
    tag: "Client Work",
    title: "AA Kids Parties",
    tagline: "Children's workshops & events booking platform",
    description:
      "A full-featured booking platform for a children's events company. Built with Next.js 14 and TypeScript, it features 30+ filterable workshops, a WhatsApp enquiry/booking widget, admin dashboard, and email notifications via Nodemailer. Achieved Lighthouse scores of 95+ across performance, accessibility, and SEO.",
    highlights: [
      "30+ filterable workshops with dynamic category and age-range filtering",
      "WhatsApp booking and enquiries widget integrated into the UI",
      "Admin dashboard for managing bookings and workshop listings",
      "Email notifications via Nodemailer on booking submission",
      "Lighthouse 95+ across performance, accessibility, and SEO",
      "Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Nodemailer"],
    status: "Live",
    links: {
      github: null,
      live: "https://aakidsparties.com",
    },
  },
  {
    featured: false,
    tag: "Client Work",
    title: "Sheda Solutions",
    tagline: "Real estate landing page",
    description:
      "Responsive real estate landing page built for Sheda, a property-tech company. Clean, mobile-first design with smooth UI and fast load times. Also built the companion React Native mobile app.",
    highlights: [],
    stack: ["HTML", "CSS", "JavaScript", "React Native"],
    status: "Live",
    links: { github: null, live: "https://sheda.app" },
  },
  {
    featured: false,
    tag: "Personal Project",
    title: "itDesk",
    tagline: "Internal IT operations tool",
    description:
      "A Kanban-style IT operations dashboard built for managing daily logs, handover notes, and task tracking. Includes a manager dashboard and JWT-based authentication. Full-stack: Next.js, Node.js, Express, PostgreSQL with Prisma ORM.",
    highlights: [],
    stack: ["Next.js", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "JWT"],
    status: "Completed",
    links: { github: "https://github.com/yuslove1", live: null },
  },
  {
    featured: false,
    tag: "Personal Project · In Progress",
    title: "Ona",
    tagline: "AI-powered Lagos transit navigator",
    description:
      "A navigation app built for Lagos commuters   AI-powered route suggestions, fare estimates, and commuter tips using Leaflet.js and Openrouteservice API. Designed for the chaotic, real-world conditions of Lagos transport.",
    highlights: [],
    stack: ["Next.js", "Tailwind CSS", "Leaflet.js", "Openrouteservice API"],
    status: "In Progress",
    links: { github: "https://github.com/yuslove1", live: null },
  },
  {
    featured: false,
    tag: "Personal Project",
    title: "Brentfield",
    tagline: "Estate gate-code automation & resident portal",
    description:
      "A PWA for automating daily gate-code distribution in a residential estate. Features OTP verification, admin panel, WhatsApp bot integration, and built on Next.js 15 with Supabase as the backend.",
    highlights: [],
    stack: ["Next.js 15", "TypeScript", "Supabase", "WhatsApp Bot", "PWA"],
    status: "Completed",
    links: { github: "https://github.com/yuslove1", live: null },
  },
  {
    featured: false,
    tag: "ALX ProDev Capstone",
    title: "Airbnb Clone",
    tagline: "Cross-platform Airbnb-style app",
    description:
      "Full-stack Airbnb clone built as the ALX ProDev capstone project. Cross-platform (React Native mobile + Next.js web), with Redux for state management, offline capabilities, and PWA support.",
    highlights: [],
    stack: ["React Native", "Next.js", "TypeScript", "Redux", "Axios", "SCSS", "PWA"],
    status: "Completed",
    links: { github: "https://github.com/yuslove1", live: null },
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-navy-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-electric-400 text-sm font-medium tracking-widest uppercase font-inter mb-4">
            Projects
          </p>
          <h2 className="font-sora text-4xl font-bold text-white">
            Shipped, not just started
          </h2>
          <p className="text-white/50 mt-3 max-w-xl font-inter">
            A mix of client work, startup tools, and personal builds. Every
            project here solved a real problem   for a real user.
          </p>
        </div>

        <div className="space-y-8">
          {/* Featured project */}
          {featured.map((project) => (
            <div
              key={project.title}
              className="relative rounded-2xl border border-electric-500/25 bg-gradient-to-br from-navy-800 to-navy-900 p-8 overflow-hidden card-lift"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-electric-500/8 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="px-2.5 py-1 rounded-md bg-electric-500/15 text-electric-300 text-xs font-medium font-inter border border-electric-500/20">
                    {project.tag}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 text-xs font-medium font-inter border border-green-500/20">
                    {project.status}
                  </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-sora text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-amber-400 font-medium mb-4 font-inter">
                      {project.tagline}
                    </p>
                    <p className="text-white/60 leading-relaxed font-inter mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-white/60 text-xs font-inter"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-500 hover:bg-electric-400 text-white text-sm font-inter transition-colors"
                        >
                          View Live Site →
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 hover:border-white/30 text-white/70 hover:text-white text-sm font-inter transition-colors"
                        >
                          GitHub →
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-medium text-white/40 uppercase tracking-widest font-inter mb-4">
                      What I Built
                    </h4>
                    <ul className="space-y-3">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-electric-400 flex-shrink-0" />
                          <span className="text-sm text-white/65 font-inter leading-relaxed">
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Other projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-white/6 bg-navy-800/40 p-6 card-lift flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-white/6 text-white/50 text-xs font-medium font-inter border border-white/8">
                    {project.tag}
                  </span>
                  <span
                    className={`text-xs font-medium font-inter ${
                      project.status === "Live"
                        ? "text-green-400"
                        : project.status === "In Progress"
                        ? "text-amber-400"
                        : "text-white/40"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="font-sora font-semibold text-white text-lg mb-1">
                  {project.title}
                </h3>
                <p className="text-electric-300 text-sm font-inter mb-3">
                  {project.tagline}
                </p>
                <p className="text-white/50 text-sm leading-relaxed font-inter mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/4 border border-white/6 text-white/50 text-xs font-inter"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/50 hover:text-white font-inter transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-electric-400 hover:text-electric-300 font-inter transition-colors"
                    >
                      Live Site →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
