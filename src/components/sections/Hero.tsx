"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Circle } from "lucide-react";

const stats = [
  { value: "2+", label: "Years building products" },
  { value: "6+", label: "Projects shipped" },
  { value: "ISC2 CC", label: "Security certified" },
  { value: "Lagos", label: "Based in Nigeria" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden grain">
      <span
        aria-hidden="true"
        className="font-fraunces italic pointer-events-none select-none absolute -top-10 right-[4%] text-[13rem] leading-none text-ink/[0.04]"
      >
        01
      </span>

      <div className="relative px-6 sm:px-12 lg:px-16 py-24 w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-moss-600/25 bg-moss-100 mb-8">
            <Circle size={7} className="fill-moss-600 text-moss-600 animate-pulse" />
            <span className="text-xs font-medium text-moss-600 font-mono tracking-tight">
              open to new opportunities
            </span>
          </div>

          <h1 className="font-fraunces text-4xl sm:text-5xl font-medium leading-[1.12] tracking-tight mb-6 text-ink">
            I build interfaces people trust , and I&apos;m going{" "}
            <span className="italic text-rust-500">deeper</span> into the
            systems behind them.
          </h1>

          <p className="text-ink-500 text-lg leading-relaxed mb-10 font-inter">
            I&apos;m <span className="text-ink font-medium">Yusuf Adesina</span>,
            a frontend-rooted software engineer and IT Support Officer based in{" "}
            <span className="text-ink font-medium">Lagos, Nigeria</span>,
            currently deepening my backend and systems skills , React and
            Next.js on the surface, Node.js and PostgreSQL underneath.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink hover:bg-rust-500 text-paper font-medium font-inter transition-colors duration-200"
            >
              View My Work
              <ArrowUpRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink/20 hover:border-ink text-ink font-medium font-inter transition-colors duration-200"
            >
              Download Résumé
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-8 pt-8 border-t border-ink/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-mono font-semibold text-xl text-ink">
                  {stat.value}
                </div>
                <div className="text-xs text-ink-500 font-inter mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
