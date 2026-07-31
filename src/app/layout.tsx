import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yusuf Adesina — Software Engineer, Frontend → Backend",
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
    title: "Yusuf Adesina — Software Engineer, Frontend → Backend",
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
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-paper text-ink font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
