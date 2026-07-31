export default function Footer() {
  return (
    <footer className="px-6 sm:px-12 lg:px-16 py-10 border-t border-ink/8">
      <div className="max-w-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-ink-300 text-xs font-mono">
          built with next.js &amp; tailwind css
        </p>
        <p className="text-ink-300 text-xs font-mono">
          © {new Date().getFullYear()} Yusuf Adesina
        </p>
      </div>
    </footer>
  );
}
