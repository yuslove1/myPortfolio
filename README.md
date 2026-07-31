# Yusuf Adesina — Portfolio

A warm, editorial-style developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Designed to showcase projects, skills, certifications, and professional experience with a clean, content-first UI.

🔗 **Live:** [Coming Soon](#) &nbsp;|&nbsp; 📧 **Email:** adesinayusuf0@gmail.com &nbsp;|&nbsp; 💼 **LinkedIn:** [yusufadesina](https://linkedin.com/in/yusufadesina)

---

## ✨ Features

- **Single-page layout** with smooth scroll navigation and Framer Motion scroll-reveal animations
- **Responsive design** — fully optimized for mobile, tablet, and desktop
- **Editorial-light theme** with a warm paper/ink palette, Fraunces serif headings, and monospace accents
- **Backdrop-blurred navbar** that appears on scroll
- **Categorized skill tags** organized by category (Frontend, Backend & Data, Tools, IT & Security), marking core vs. actively-growing skills
- **Featured project showcase** with highlights, tech stack badges, and live/GitHub links
- **Experience timeline** with color-coded role indicators
- **Certifications & education** section with status badges (Certified / In Progress)
- **Contact form** with email, LinkedIn, and GitHub links
- **Custom scrollbar**, subtle paper-grain texture, and card hover lift
- **SEO optimized** with Open Graph meta tags, semantic HTML, and descriptive metadata

---

## 🛠 Tech Stack

| Layer       | Technologies                                          |
| ----------- | ----------------------------------------------------- |
| Framework   | Next.js 14 (App Router)                               |
| Language    | TypeScript                                            |
| Styling     | Tailwind CSS, custom CSS (globals.css)                |
| Fonts       | Inter, Sora (Google Fonts via `next/font`)            |
| Animations  | CSS transitions, custom `useScrollReveal` hook        |
| Linting     | ESLint (eslint-config-next)                           |

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css        # Design tokens, utility classes, custom scrollbar
│   │   ├── layout.tsx         # Root layout with fonts, metadata, and SEO
│   │   └── page.tsx           # Home page assembling all sections
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx           # Landing section with CTA and stats
│   │   │   ├── About.tsx          # Bio, experience timeline, and contact links
│   │   │   ├── Skills.tsx         # Skill bars grouped by category + tech badges
│   │   │   ├── Projects.tsx       # Featured + grid project cards
│   │   │   ├── Certifications.tsx # Certs and education cards
│   │   │   └── Contact.tsx        # Contact form and direct links
│   │   └── ui/
│   │       ├── Sidebar.tsx        # Fixed left sidebar nav (desktop) + mobile top bar
│   │       └── Footer.tsx         # Site footer
│   └── lib/
│       └── useScrollReveal.ts # Intersection Observer hook for scroll animations
├── tailwind.config.ts         # Extended theme with custom colors
├── next.config.mjs            # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/yuslove1/myPortfolio.git
cd myPortfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Design System

The portfolio uses a warm, editorial-light design system defined through Tailwind config and CSS custom properties:

| Token             | Value       | Usage                              |
| ----------------- | ----------- | ----------------------------------- |
| `paper`           | `#faf6ef`   | Page background                     |
| `paper-100`       | `#f5efe3`   | Section alternate background        |
| `ink`             | `#1c1b19`   | Primary text                        |
| `ink-500`         | `#6e675c`   | Muted text                          |
| `rust-500`        | `#b8481e`   | Primary accent / CTAs               |
| `moss-600`        | `#2f6f52`   | Success / "live" status accent      |
| `amber-500`       | `#b8860b`   | "In progress" status accent         |

**Typography:** Fraunces (display serif headings) · Inter (body text) · JetBrains Mono (labels, tags, dates)

**Icons:** [lucide-react](https://lucide.dev) · **Motion:** [Framer Motion](https://www.framer.com/motion/) for scroll reveals

---

## 📄 Sections Overview

| Section          | Description                                                       |
| ---------------- | ----------------------------------------------------------------- |
| **Hero**         | Headline, tagline, CTAs (View Work / Download CV), and quick stats|
| **About**        | Professional bio with experience timeline                         |
| **Skills**       | Categorized skill tags (core vs. actively growing)                 |
| **Projects**     | Featured project card + project grid with live/GitHub links        |
| **Certifications** | ISC2 CC, SC-300, ALX certifications + education background      |
| **Contact**      | Contact form + direct email, LinkedIn, and GitHub links            |

---

## 📦 Deployment

This is a standard Next.js app that can be deployed to:

- [**Vercel**](https://vercel.com) (recommended) — zero-config deployment for Next.js
- [**Netlify**](https://netlify.com) — with the Next.js adapter
- Any Node.js hosting that supports `npm run build` and `npm start`

---

## 📝 License

This project is private and intended as a personal portfolio for **Yusuf Adesina**.

---

## 🤝 Contact

- **Email:** [adesinayusuf0@gmail.com](mailto:adesinayusuf0@gmail.com)
- **LinkedIn:** [linkedin.com/in/yusufadesina](https://linkedin.com/in/yusufadesina)
- **GitHub:** [github.com/yuslove1](https://github.com/yuslove1)
