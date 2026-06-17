import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yusuf Adesina   Frontend & Fullstack Developer · Lagos",
  description:
    "Frontend and fullstack developer with 2+ years building production web and mobile apps. React, Next.js 14, TypeScript, React Native. Based in Lagos, Nigeria. ISC2 CC certified.",
  keywords: [
    "Yusuf Adesina",
    "Frontend Developer",
    "Fullstack Developer",
    "React Native",
    "Next.js",
    "TypeScript",
    "Lagos",
    "Nigeria",
    "IT Support",
    "Software Engineer",
  ],
  openGraph: {
    title: "Yusuf Adesina   Frontend & Fullstack Developer",
    description:
      "Building production-grade web and mobile apps from Lagos. React, Next.js, TypeScript, Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-navy-900 text-white font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
