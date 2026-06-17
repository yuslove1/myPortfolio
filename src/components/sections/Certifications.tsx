const certs = [
  {
    name: "ISC2 Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    status: "certified",
    year: "2026",
    description:
      "Industry-recognized certification covering security principles, access controls, network security, and risk identification. The baseline credential for a security-aware engineering mindset.",
    icon: "🛡️",
  },
  {
    name: "SC-300: Microsoft Identity & Access Administrator",
    issuer: "Microsoft",
    status: "in-progress",
    year: "In Progress",
    description:
      "Managing identity infrastructure in Azure AD   authentication flows, conditional access policies, and privileged identity management.",
    icon: "🪪",
  },
  {
    name: "ALX ProDev Front-End",
    issuer: "ALX Africa",
    status: "certified",
    year: "Mar 2024",
    description:
      "4-month intensive program covering advanced frontend development, React Native mobile engineering, and cross-platform app development. Capstone: Airbnb Clone.",
    icon: "📱",
  },
  {
    name: "ALX Front-End Development",
    issuer: "ALX Africa",
    status: "certified",
    year: "2023",
    description:
      "Foundational program in frontend engineering covering HTML, CSS, JavaScript, React, responsive design, and modern web development workflows.",
    icon: "💻",
  },
];

const education = [
  {
    degree: "BSc(Ed) Computer Science",
    school: "Nigeria",
    note: "Academic CS foundations   algorithms, data structures, and software engineering principles",
  },
  {
    degree: "National Diploma, Computer Engineering",
    school: "Nigeria",
    note: "Hardware, electronics, networking, and systems   the physical layer of computing",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-electric-400 text-sm font-medium tracking-widest uppercase font-inter mb-4">
            Credentials
          </p>
          <h2 className="font-sora text-4xl font-bold text-white">
            Certifications & Education
          </h2>
          <p className="text-white/50 mt-3 max-w-xl font-inter">
            Structured learning that shapes how I think about security,
            architecture, and building reliable software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="relative rounded-2xl border bg-navy-800/40 p-6 card-lift overflow-hidden"
              style={{
                borderColor:
                  cert.status === "certified"
                    ? "rgba(37,99,235,0.3)"
                    : cert.status === "in-progress"
                    ? "rgba(245,158,11,0.2)"
                    : "rgba(255,255,255,0.06)",
              }}
            >
              {cert.status === "certified" && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric-500/8 rounded-full blur-2xl pointer-events-none" />
              )}
              <div className="text-3xl mb-4">{cert.icon}</div>

              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`px-2 py-0.5 rounded text-xs font-medium font-inter ${
                    cert.status === "certified"
                      ? "bg-green-500/15 text-green-400 border border-green-500/20"
                      : cert.status === "in-progress"
                      ? "bg-amber-400/10 text-amber-400 border border-amber-400/20"
                      : "bg-white/5 text-white/40 border border-white/8"
                  }`}
                >
                  {cert.status === "certified"
                    ? "✓ Certified"
                    : cert.status === "in-progress"
                    ? "In Progress"
                    : "Upcoming"}
                </span>
                <span className="text-white/30 text-xs font-inter">
                  {cert.year}
                </span>
              </div>

              <h3 className="font-sora font-semibold text-white text-sm mb-1 leading-snug">
                {cert.name}
              </h3>
              <p className="text-electric-300 text-xs font-inter mb-3">
                {cert.issuer}
              </p>
              <p className="text-white/50 text-sm font-inter leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xs font-medium text-white/30 uppercase tracking-widest font-inter mb-6">
            Academic Background
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/6 bg-navy-800/30"
              >
                <div className="w-8 h-8 rounded-lg bg-electric-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-electric-400 text-sm">🎓</span>
                </div>
                <div>
                  <h4 className="font-sora font-semibold text-white text-sm">
                    {edu.degree}
                  </h4>
                  <p className="text-white/40 text-xs font-inter mt-0.5">
                    {edu.note}
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
