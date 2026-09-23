import GlassCard from "./GlassCard";
import GlassButton from "./GlassButton";
import { DOWNLOAD_URL, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <GlassCard className="w-full max-w-content" style={{ borderRadius: 9999 }}>
        <div className="flex items-center justify-between gap-4 px-5 py-3">
          <a
            href="#top"
            className="text-lg font-bold tracking-tight text-white"
            aria-label="Qlue — home"
          >
            Qlue
          </a>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <GlassButton
            href={DOWNLOAD_URL}
            className="!px-4 !py-2 !text-sm"
            ariaLabel="Download Qlue"
          >
            Download
          </GlassButton>
        </div>
      </GlassCard>
    </header>
  );
}
