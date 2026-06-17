export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center trust-grid overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric-500/30 bg-electric-500/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-medium text-electric-300 font-inter">
              Open to new opportunities
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-sora text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
            Building things
            <br />
            that <span className="gradient-text">actually work.</span>
            <br />
          </h1>

          {/* Sub-copy */}
          <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl font-inter">
            I&apos;m <span className="text-white font-medium">Yusuf Adesina</span>   frontend &
            fullstack developer and IT Support Officer based in{" "}
            <span className="text-amber-400 font-medium">Lagos, Nigeria</span>.
            I build clean, production-grade web and mobile products that solve real problems.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-electric-500 hover:bg-electric-400 text-white font-medium transition-all duration-200 glow-blue"
            >
              View My Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:border-white/30 text-white/80 hover:text-white font-medium transition-all duration-200"
            >
              Download CV
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-16 flex flex-wrap gap-8 pt-8 border-t border-white/8">
            {[
              { value: "2+", label: "Years building products" },
              { value: "6+", label: "Projects shipped" },
              { value: "ISC2 CC", label: "Security certified" },
              { value: "Lagos", label: "Based in Nigeria" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-sora font-bold text-2xl text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-white/40 font-inter mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
