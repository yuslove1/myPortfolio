import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";

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
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Nodemailer"],
    status: "Live",
    links: { github: null, live: "https://aakidsparties.com" },
  },
  {
    featured: false,
    tag: "Client Work",
    title: "Sheda Solutions",
    tagline: "Real estate landing page",
    description:
      "Responsive real estate landing page built for Sheda, a property-tech company. Clean, mobile-first design with smooth UI and fast load times. Also built the companion React Native mobile app.",
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
      "A navigation app built for Lagos commuters , AI-powered route suggestions, fare estimates, and commuter tips using Leaflet.js and Openrouteservice API. Designed for the chaotic, real-world conditions of Lagos transport.",
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
    stack: ["React Native", "Next.js", "TypeScript", "Redux", "Axios", "SCSS", "PWA"],
    status: "Completed",
    links: { github: "https://github.com/yuslove1", live: null },
  },
];

function statusColor(status: string) {
  if (status === "Live") return "text-moss-600 bg-moss-100 border-moss-600/20";
  if (status === "In Progress")
    return "text-amber-500 bg-amber-100 border-amber-500/20";
  return "text-ink-500 bg-ink/5 border-ink/10";
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-16 max-w-2xl">
      <Reveal className="mb-12">
        <p className="text-rust-500 text-sm font-medium tracking-widest uppercase font-mono mb-4">
          // projects
        </p>
        <h2 className="font-fraunces text-3xl font-medium text-ink">
          Shipped, not just started
        </h2>
        <p className="text-ink-500 mt-3 font-inter leading-relaxed">
          A mix of client work, startup tools, and personal builds. Every
          project here solved a real problem , for a real user.
        </p>
      </Reveal>

      {/* Featured project */}
      <Reveal>
        <div className="border-l-2 border-rust-500 pl-6 mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-2.5 py-1 rounded-full bg-rust-100 text-rust-500 text-xs font-medium font-mono">
              {featured.tag}
            </span>
            <span
              className={`px-2.5 py-1 rounded-full text-xs font-medium font-mono border ${statusColor(
                featured.status
              )}`}
            >
              {featured.status}
            </span>
          </div>
          <h3 className="font-fraunces text-2xl font-medium text-ink mb-1">
            {featured.title}
          </h3>
          <p className="text-rust-500 font-medium mb-4 font-inter text-sm">
            {featured.tagline}
          </p>
          <p className="text-ink-500 leading-relaxed font-inter mb-5 text-sm">
            {featured.description}
          </p>
          <ul className="space-y-2 mb-6">
            {(featured.highlights ?? []).map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-rust-500 flex-shrink-0" />
                <span className="text-sm text-ink-500 font-inter leading-relaxed">
                  {h}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-6">
            {featured.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-full bg-ink/[0.04] border border-ink/8 text-ink-700 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-5">
            {featured.links.live && (
              <a
                href={featured.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1.5 text-sm text-ink hover:text-rust-500 font-inter font-medium"
              >
                View Live Site <ArrowUpRight size={14} />
              </a>
            )}
            {featured.links.github && (
              <a
                href={featured.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink font-inter"
              >
                <GithubIcon size={14} /> GitHub
              </a>
            )}
          </div>
        </div>
      </Reveal>

      {/* Other projects , list rows */}
      <h3 className="text-xs font-medium text-ink-300 uppercase tracking-widest font-mono mb-2">
        more projects
      </h3>
      <div className="divide-y divide-ink/8 border-t border-ink/8">
        {others.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.04}>
            <div className="py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h4 className="font-fraunces font-medium text-ink text-lg">
                  {project.title}
                </h4>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-mono border ${statusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-rust-500 text-sm font-inter mb-2">
                {project.tagline}
              </p>
              <p className="text-ink-500 text-sm leading-relaxed font-inter mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-full bg-ink/[0.03] border border-ink/6 text-ink-500 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-1 text-xs text-ink-500 hover:text-ink font-inter"
                  >
                    <GithubIcon size={12} /> GitHub
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-1 text-xs text-rust-500 hover:text-rust-600 font-inter"
                  >
                    Live Site <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
