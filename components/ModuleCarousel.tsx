"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import PhoneFrame from "./PhoneFrame";
import { MODULES, type QlueModule } from "@/lib/constants";

const AUTO_MS = 5000;

function ScreenPlaceholder({ module }: { module: QlueModule }) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center"
      style={{
        background: `linear-gradient(165deg, ${module.accent}26 0%, #050505 68%)`,
      }}
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl"
        style={{
          background: `${module.accent}33`,
          border: `1px solid ${module.accent}55`,
        }}
      >
        <span className="text-xl font-bold text-white">
          {module.name.charAt(0)}
        </span>
      </div>
      <span className="text-base font-bold text-white">{module.name}</span>
      <span className="max-w-[85%] text-[10px] font-semibold uppercase leading-relaxed tracking-wider text-ink-faint">
        [Placeholder — swap for real screenshot]
      </span>
    </div>
  );
}

export default function ModuleCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const count = MODULES.length;
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tablistRef = useRef<HTMLDivElement | null>(null);

  const go = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count],
  );

  // Auto-advance (paused on hover/focus or when reduced motion is on).
  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => setIndex((p) => (p + 1) % count), AUTO_MS);
    return () => clearTimeout(t);
  }, [index, paused, reduce, count]);

  // Keep the active tab centered by scrolling the tab strip HORIZONTALLY
  // only. scrollIntoView would scroll the whole page vertically (yanking
  // visitors down to the carousel on mount), so we scroll the container itself.
  useEffect(() => {
    const container = tablistRef.current;
    const tab = tabRefs.current[index];
    if (!container || !tab) return;
    const cRect = container.getBoundingClientRect();
    const tRect = tab.getBoundingClientRect();
    const delta =
      tRect.left - cRect.left - (container.clientWidth - tab.clientWidth) / 2;
    container.scrollTo({
      left: container.scrollLeft + delta,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [index, reduce]);

  const active = MODULES[index];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Module tabs */}
      <div
        ref={tablistRef}
        role="tablist"
        aria-label="Interview modules"
        className="no-scrollbar mb-10 flex gap-2 overflow-x-auto pb-1"
      >
        {MODULES.map((m, i) => {
          const activeTab = i === index;
          return (
            <button
              key={m.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              aria-selected={activeTab}
              onClick={() => go(i)}
              className="whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
              style={{
                borderColor: activeTab ? m.accent : "rgba(255,255,255,0.12)",
                color: activeTab ? "#ffffff" : "#A3A3A3",
                background: activeTab ? `${m.accent}22` : "transparent",
              }}
            >
              {m.name}
            </button>
          );
        })}
      </div>

      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Copy */}
        <div className="order-2 min-h-[220px] md:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: active.accent }}
              >
                {String(index + 1).padStart(2, "0")} · Module
              </p>
              <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                {active.name}
              </h3>
              <p
                className="mt-2 text-lg font-semibold"
                style={{ color: active.accent }}
              >
                {active.tagline}
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Phone */}
        <div className="order-1 flex justify-center md:order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <PhoneFrame glowColor={active.accent}>
                <ScreenPlaceholder module={active} />
              </PhoneFrame>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-12 flex items-center justify-center gap-5">
        <button
          onClick={() => go(index - 1)}
          aria-label="Previous module"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition-colors hover:bg-white/10"
        >
          ‹
        </button>
        <div className="flex items-center gap-2">
          {MODULES.map((m, i) => (
            <button
              key={m.id}
              onClick={() => go(i)}
              aria-label={`Go to ${m.name}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === index ? 24 : 8,
                background: i === index ? m.accent : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => go(index + 1)}
          aria-label="Next module"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition-colors hover:bg-white/10"
        >
          ›
        </button>
      </div>
    </div>
  );
}

