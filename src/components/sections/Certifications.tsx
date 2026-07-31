import { ShieldCheck, KeyRound, Smartphone, Code2, GraduationCap, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const certs = [
  {
    name: "ISC2 Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    status: "certified",
    year: "2026",
    description:
      "Industry-recognized certification covering security principles, access controls, network security, and risk identification. The baseline credential for a security-aware engineering mindset.",
    icon: ShieldCheck,
  },
  {
    name: "SC-300: Microsoft Identity & Access Administrator",
    issuer: "Microsoft",
    status: "in-progress",
    year: "In Progress",
    description:
      "Managing identity infrastructure in Azure AD , authentication flows, conditional access policies, and privileged identity management.",
    icon: KeyRound,
  },
  {
    name: "ALX ProDev Front-End",
    issuer: "ALX Africa",
    status: "certified",
    year: "Mar 2024",
    description:
      "4-month intensive program covering advanced frontend development, React Native mobile engineering, and cross-platform app development. Capstone: Airbnb Clone.",
    icon: Smartphone,
  },
  {
    name: "ALX Front-End Development",
    issuer: "ALX Africa",
    status: "certified",
    year: "2023",
    description:
      "Foundational program in frontend engineering covering HTML, CSS, JavaScript, React, responsive design, and modern web development workflows.",
    icon: Code2,
  },
];

const education = [
  {
    degree: "BSc(Ed) Computer Science",
    school: "Nigeria",
    note: "Academic CS foundations , algorithms, data structures, and software engineering principles",
  },
  {
    degree: "National Diploma, Computer Engineering",
    school: "Nigeria",
    note: "Hardware, electronics, networking, and systems , the physical layer of computing",
  },
];

function statusBadge(status: string) {
  if (status === "certified")
    return "bg-moss-100 text-moss-600 border-moss-600/20";
  return "bg-amber-100 text-amber-500 border-amber-500/20";
}

export default function Certifications() {
  return (
    <section id="credentials" className="py-24 px-6 sm:px-12 lg:px-16 max-w-2xl bg-paper-100/60">
      <Reveal className="mb-12">
        <p className="text-rust-500 text-sm font-medium tracking-widest uppercase font-mono mb-4">
          // credentials
        </p>
        <h2 className="font-fraunces text-3xl font-medium text-ink">
          Certifications & Education
        </h2>
        <p className="text-ink-500 mt-3 font-inter leading-relaxed">
          Structured learning that shapes how I think about security,
          architecture, and building reliable software.
        </p>
      </Reveal>

      <div className="divide-y divide-ink/8 border-t border-ink/8 mb-12">
        {certs.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.05}>
            <div className="py-6 flex gap-4">
              <span className="mt-0.5 inline-flex w-9 h-9 rounded-lg bg-rust-100 items-center justify-center text-rust-500 flex-shrink-0">
                <cert.icon size={16} />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium font-mono border ${statusBadge(
                      cert.status
                    )}`}
                  >
                    {cert.status === "certified" && <Check size={10} />}
                    {cert.status === "certified" ? "Certified" : "In Progress"}
                  </span>
                  <span className="text-ink-300 text-xs font-mono">
                    {cert.year}
                  </span>
                </div>
                <h3 className="font-fraunces font-medium text-ink text-base mb-1 leading-snug">
                  {cert.name}
                </h3>
                <p className="text-rust-500 text-xs font-mono mb-2">
                  {cert.issuer}
                </p>
                <p className="text-ink-500 text-sm font-inter leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div>
        <h3 className="text-xs font-medium text-ink-300 uppercase tracking-widest font-mono mb-2">
          academic background
        </h3>
        <div className="divide-y divide-ink/8 border-t border-ink/8">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.05}>
              <div className="py-5 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-rust-100 flex items-center justify-center flex-shrink-0 text-rust-500">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <h4 className="font-fraunces font-medium text-ink text-sm">
                    {edu.degree}
                  </h4>
                  <p className="text-ink-500 text-xs font-inter mt-0.5">
                    {edu.note}
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
