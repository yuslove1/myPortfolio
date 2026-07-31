"use client";
import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "adesinayusuf0@gmail.com",
    href: "mailto:adesinayusuf0@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/yusufadesina",
    href: "https://linkedin.com/in/yusufadesina",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/yuslove1",
    href: "https://github.com/yuslove1",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Integrate with Formspree, EmailJS, or your preferred service
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 lg:px-16 max-w-2xl">
      <Reveal>
        <p className="text-rust-500 text-sm font-medium tracking-widest uppercase font-mono mb-4">
          // contact
        </p>
        <h2 className="font-fraunces text-3xl font-medium text-ink mb-6">
          Let&apos;s build something worth using.
        </h2>
        <p className="text-ink-500 leading-relaxed font-inter mb-8">
          Whether you&apos;re looking for a frontend developer, need IT
          support, or have a project idea , I&apos;m open to conversations
          that lead somewhere real. Based in Lagos but happy to work
          remotely.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-ink/12 hover:border-rust-500/40 text-ink-700 hover:text-ink text-sm font-inter transition-colors"
            >
              <contact.icon size={14} className="text-rust-500" />
              {contact.value}
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        {status === "sent" ? (
          <div className="flex flex-col items-start text-left py-4">
            <div className="w-14 h-14 rounded-full bg-moss-100 border border-moss-600/20 flex items-center justify-center mb-5 text-moss-600">
              <Check size={22} />
            </div>
            <h3 className="font-fraunces text-xl font-medium text-ink mb-2">
              Message sent
            </h3>
            <p className="text-ink-500 font-inter text-sm">
              I&apos;ll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
            <div>
              <label className="block text-xs text-ink-500 font-mono mb-2 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-white border border-ink/12 text-ink placeholder-ink/30 font-inter text-sm focus:outline-none focus:border-rust-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-ink-500 font-mono mb-2 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-white border border-ink/12 text-ink placeholder-ink/30 font-inter text-sm focus:outline-none focus:border-rust-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-ink-500 font-mono mb-2 uppercase tracking-wider">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                placeholder="What are you working on? What do you need?"
                className="w-full px-4 py-3 rounded-xl bg-white border border-ink/12 text-ink placeholder-ink/30 font-inter text-sm focus:outline-none focus:border-rust-500/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-3 rounded-xl bg-ink hover:bg-rust-500 disabled:opacity-60 text-paper font-medium font-inter transition-colors"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            <p className="text-xs text-ink-300 font-inter">
              Or reach out directly on LinkedIn for a faster response
            </p>
          </form>
        )}
      </Reveal>
    </section>
  );
}
