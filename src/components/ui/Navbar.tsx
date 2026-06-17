"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-sora font-bold text-lg tracking-tight text-white"
        >
          YA<span className="text-electric-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-inter"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-500 hover:bg-electric-400 text-white text-sm font-medium transition-colors duration-200"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all"></span>
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all"></span>
          <span className="block w-5 h-0.5 bg-current transition-all"></span>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-800 border-t border-white/5 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm font-inter"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-4 inline-flex w-full justify-center px-4 py-2 rounded-lg bg-electric-500 text-white text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
