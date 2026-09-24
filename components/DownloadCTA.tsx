import GlassCard from "./GlassCard";
import GlassButton from "./GlassButton";
import Reveal from "./Reveal";
import { DOWNLOAD_URL, WEB_APP_URL } from "@/lib/constants";

export default function DownloadCTA() {
  return (
    <section id="download" className="relative mx-auto max-w-content px-5 py-24">
      <Reveal>
        <GlassCard interactive className="px-7 py-16 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Practice like it&apos;s the real thing.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
            Free, voice-first, and tuned to your resume. Get Qlue and walk into
            your next interview ready.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <GlassButton
              href={DOWNLOAD_URL}
              variant="primary"
              className="w-full !px-8 !py-4 !text-base sm:w-auto"
            >
              Get Qlue
            </GlassButton>
            <GlassButton
              href={WEB_APP_URL}
              variant="secondary"
              external
              className="w-full !px-8 !py-4 !text-base sm:w-auto"
            >
              Open web app
            </GlassButton>
          </div>
          <p className="mt-4 text-xs text-ink-faint">
            Android APK · or use Qlue in your browser
          </p>
        </GlassCard>
      </Reveal>
    </section>
  );
}
