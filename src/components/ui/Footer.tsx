export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-sora font-bold text-white">
          YA<span className="text-electric-400">.</span>
        </div>
        <p className="text-white/25 text-xs font-inter text-center">
          Built with Next.js & Tailwind CSS · Hosted on Vercel
        </p>
        <p className="text-white/25 text-xs font-inter">
          © {new Date().getFullYear()} Yusuf Adesina
        </p>
      </div>
    </footer>
  );
}
