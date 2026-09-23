import { GITHUB_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative mx-auto max-w-content px-5 pb-12 pt-6">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-ink-faint sm:flex-row">
        <p>© {new Date().getFullYear()} Qlue. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a href="#top" className="transition-colors hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
