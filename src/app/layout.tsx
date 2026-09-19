import type { Metadata } from "next";
import { Public_Sans, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yusuf Adesina , Software Engineer, Frontend → Backend",
  description:
    "Frontend-rooted software engineer based in Lagos, Nigeria, building toward full-stack and backend engineering. React, Next.js, TypeScript on the front; Node.js, PostgreSQL, and systems fundamentals underneath. ISC2 CC certified.",
  keywords: [
    "Yusuf Adesina",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Lagos",
    "Nigeria",
  ],
  openGraph: {
    title: "Yusuf Adesina , Software Engineer, Frontend → Backend",
    description:
      "Frontend-rooted, building toward backend. React, Next.js, TypeScript, Node.js, PostgreSQL. Based in Lagos, Nigeria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-paper text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
