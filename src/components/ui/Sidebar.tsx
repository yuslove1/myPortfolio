"use client";
import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { useActiveSection } from "@/lib/useActiveSection";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Credentials", id: "credentials" },
  { label: "Contact", id: "contact" },
];

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  return (
    <>
      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b border-ink/8">
        <div className="flex items-center justify-between px-6 py-4">
          <a href="#" className="font-fraunces text-lg font-medium text-ink">
            Yusuf Adesina
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-ink/70 hover:text-ink"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-ink/8 px-6 py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-ink/70 hover:text-ink text-sm font-inter"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 mt-5 pt-5 border-t border-ink/8 text-ink-500">
              <a href="https://github.com/yuslove1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-ink transition-colors">
                <GithubIcon size={18} />
              </a>
              <a href="https://linkedin.com/in/yusufadesina" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-ink transition-colors">
                <LinkedinIcon size={18} />
              </a>
              <a href="mailto:adesinayusuf0@gmail.com" aria-label="Email" className="hover:text-ink transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Desktop fixed sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:fixed lg:inset-y-0 lg:left-0 lg:w-80 xl:w-[22rem] px-12 py-16">
        <div>
          <a href="#" className="font-fraunces text-2xl font-medium text-ink block mb-2">
            Yusuf Adesina
          </a>
          <p className="text-rust-500 font-mono text-sm mb-6">
            Software Engineer , Frontend → Backend
          </p>
          <p className="text-ink-500 text-sm leading-relaxed max-w-xs mb-10">
            Frontend-rooted developer based in Lagos, building toward
            full-stack and backend engineering.
          </p>

          <nav aria-label="Section navigation">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`group flex items-center gap-3 text-xs font-mono tracking-widest transition-colors ${
                      active === link.id
                        ? "text-ink"
                        : "text-ink-300 hover:text-ink-500"
                    }`}
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        active === link.id
                          ? "w-8 bg-ink"
                          : "w-4 bg-ink-300 group-hover:w-6 group-hover:bg-ink-500"
                      }`}
                    />
                    {link.label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-6 text-sm font-medium text-ink border-b border-ink/30 hover:border-ink pb-0.5 font-inter transition-colors"
          >
            Download Résumé
          </a>
          <div className="flex items-center gap-4 text-ink-500">
            <a href="https://github.com/yuslove1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-ink transition-colors">
              <GithubIcon size={18} />
            </a>
            <a href="https://linkedin.com/in/yusufadesina" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-ink transition-colors">
              <LinkedinIcon size={18} />
            </a>
            <a href="mailto:adesinayusuf0@gmail.com" aria-label="Email" className="hover:text-ink transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
