import GlassCard from "./GlassCard";
import GlassButton from "./GlassButton";
import Reveal from "./Reveal";
import { DOWNLOAD_URL } from "@/lib/constants";

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
          <div className="mt-9 flex justify-center">
            <GlassButton
              href={DOWNLOAD_URL}
              variant="primary"
              className="!px-8 !py-4 !text-base"
            >
              Get Qlue
            </GlassButton>
          </div>
          <p className="mt-4 text-xs text-ink-faint">Android · APK download</p>
        </GlassCard>
      </Reveal>
    </section>
  );
}
