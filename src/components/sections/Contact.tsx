"use client";
import { useState } from "react";

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
    <section id="contact" className="py-24 bg-navy-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-electric-400 text-sm font-medium tracking-widest uppercase font-inter mb-4">
              Contact
            </p>
            <h2 className="font-sora text-4xl font-bold text-white mb-6">
              Let&apos;s build something
              <br />
              worth using.
            </h2>
            <p className="text-white/55 leading-relaxed font-inter mb-10">
              Whether you&apos;re looking for a frontend developer, need IT support,
              or have a project idea   I&apos;m open to conversations that lead
              somewhere real. Based in Lagos but happy to work remotely.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: "✉",
                  label: "Email",
                  value: "adesinayusuf0@gmail.com",
                  href: "mailto:adesinayusuf0@gmail.com",
                },
                {
                  icon: "in",
                  label: "LinkedIn",
                  value: "linkedin.com/in/yusufadesina",
                  href: "https://linkedin.com/in/yusufadesina",
                },
                {
                  icon: "⌥",
                  label: "GitHub",
                  value: "github.com/yuslove1",
                  href: "https://github.com/yuslove1",
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/6 bg-navy-800/30 hover:border-electric-500/30 hover:bg-navy-800/60 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center text-electric-400 font-mono text-sm flex-shrink-0 group-hover:bg-electric-500/20 transition-colors">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/40 font-inter">
                      {contact.label}
                    </div>
                    <div className="text-sm text-white/75 font-inter group-hover:text-white transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right   form */}
          <div>
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-2xl mb-6">
                  ✓
                </div>
                <h3 className="font-sora text-2xl font-bold text-white mb-3">
                  Message sent
                </h3>
                <p className="text-white/50 font-inter">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs text-white/40 font-inter mb-2 uppercase tracking-wider">
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
                    className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-white/8 text-white placeholder-white/25 font-inter text-sm focus:outline-none focus:border-electric-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 font-inter mb-2 uppercase tracking-wider">
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
                    className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-white/8 text-white placeholder-white/25 font-inter text-sm focus:outline-none focus:border-electric-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 font-inter mb-2 uppercase tracking-wider">
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
                    className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-white/8 text-white placeholder-white/25 font-inter text-sm focus:outline-none focus:border-electric-500/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 rounded-xl bg-electric-500 hover:bg-electric-400 disabled:opacity-60 text-white font-medium font-inter transition-colors"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
                <p className="text-xs text-white/25 font-inter text-center">
                  Or reach out directly on LinkedIn for a faster response
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
