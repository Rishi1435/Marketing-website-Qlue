"use client";

import { motion, useReducedMotion } from "framer-motion";
import GlassButton from "./GlassButton";
import GlassCard from "./GlassCard";
import { DOWNLOAD_URL } from "@/lib/constants";

const HIGHLIGHTS = ["Voice-first", "Resume-aware", "Free for students"];

// Uneven delays so the waveform bars ripple organically rather than in sync.
const WAVE_DELAYS = [
  0, 120, 260, 80, 340, 180, 420, 60, 300, 140, 380, 220, 40, 320, 200, 100,
  360, 160,
];

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: {
      default: { type: "spring" as const, stiffness: 80, damping: 18, delay },
      opacity: { duration: 0.6, ease: "easeOut" as const, delay },
    },
  });

  return (
    <section
      id="top"
      className="relative mx-auto grid min-h-[92vh] max-w-content items-center gap-12 px-5 pb-20 pt-28 lg:grid-cols-2 lg:gap-10"
    >
      {/* Copy */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <motion.span
          {...rise(0.05)}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-qlue-green"
        >
          AI Voice Mock Interviews
        </motion.span>
        <motion.h1
          {...rise(0.12)}
          className="wordmark-glow text-6xl font-bold tracking-tight text-white sm:text-7xl"
        >
          Qlue
        </motion.h1>
        <motion.p
          {...rise(0.2)}
          className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl"
        >
          AI-powered voice mock interviews that adapt to your resume. Speak your
          answers, field real follow-ups, and walk in ready.
        </motion.p>

        <motion.div
          {...rise(0.26)}
          className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
        >
          {HIGHLIGHTS.map((h) => (
            <span
              key={h}
              className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-ink-muted"
            >
              {h}
            </span>
          ))}
        </motion.div>

        <motion.div
          {...rise(0.34)}
          className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
        >
          <GlassButton
            href={DOWNLOAD_URL}
            variant="primary"
            className="w-full sm:w-auto"
          >
            Download for Android
          </GlassButton>
          <GlassButton
            href="#problem"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            See how it works
          </GlassButton>
        </motion.div>
      </div>

      {/* Live interview preview */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 18, delay: 0.4 }}
        className="w-full"
      >
        <GlassCard className="mx-auto w-full max-w-md p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="live-dot" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Live interview
              </span>
            </div>
            <span
              className="rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
              style={{ borderColor: "#0A84FF55", color: "#0A84FF" }}
            >
              Resume
            </span>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-qlue-green">
              Interviewer
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-white">
              “Walk me through the project on your resume you’re proudest of.”
            </p>
          </div>

          <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
            <div className="wave" aria-hidden>
              {WAVE_DELAYS.map((d, i) => (
                <span key={i} style={{ animationDelay: `${d}ms` }} />
              ))}
            </div>
            <span className="text-xs font-medium text-ink-faint">
              You’re answering…
            </span>
          </div>

          <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-qlue-green">
              Adaptive follow-up
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-white">
              “Nice — what was the hardest trade-off you had to make there?”
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
