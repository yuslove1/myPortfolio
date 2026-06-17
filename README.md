# Yusuf Adesina — Portfolio

A modern, dark-themed developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Designed to showcase projects, skills, certifications, and professional experience with a clean, production-grade UI.

🔗 **Live:** [Coming Soon](#) &nbsp;|&nbsp; 📧 **Email:** adesinayusuf0@gmail.com &nbsp;|&nbsp; 💼 **LinkedIn:** [yusufadesina](https://linkedin.com/in/yusufadesina)

---

## ✨ Features

- **Single-page layout** with smooth scroll navigation and scroll-reveal animations
- **Responsive design** — fully optimized for mobile, tablet, and desktop
- **Dark theme** with a custom navy/electric-blue color palette
- **Glassmorphism navbar** with backdrop blur on scroll
- **Interactive skill bars** organized by category (Frontend, Backend, Tools, IT & Security)
- **Featured project showcase** with highlights, tech stack badges, and live/GitHub links
- **Experience timeline** with color-coded role indicators
- **Certifications & education** section with status badges (Certified / In Progress)
- **Contact form** with email, LinkedIn, and GitHub links
- **Custom scrollbar**, glow effects, and card hover animations
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
│   │       ├── Navbar.tsx         # Fixed navbar with mobile hamburger menu
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

The portfolio uses a custom design system defined through Tailwind config and CSS custom properties:

| Token             | Value       | Usage                       |
| ----------------- | ----------- | --------------------------- |
| `navy-950`        | `#060d1a`   | Page background             |
| `navy-900`        | `#0b1426`   | Section alternate background|
| `navy-800`        | `#111e35`   | Card backgrounds            |
| `electric-500`    | `#2563eb`   | Primary accent / CTAs       |
| `amber-400`       | `#f59e0b`   | Secondary accent / highlights|

**Typography:** Sora (headings) · Inter (body text)

---

## 📄 Sections Overview

| Section          | Description                                                       |
| ---------------- | ----------------------------------------------------------------- |
| **Hero**         | Headline, tagline, CTAs (View Work / Download CV), and quick stats|
| **About**        | Professional bio with experience timeline                         |
| **Skills**       | Categorized skill bars + tech stack badges                         |
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
