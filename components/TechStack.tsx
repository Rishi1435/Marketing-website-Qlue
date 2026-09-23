import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { TECH_STACK } from "@/lib/constants";

export default function TechStack() {
  return (
    <section id="tech" className="relative mx-auto max-w-content px-5 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Under the hood"
          title="Built on a real-time AI stack"
          subtitle="Voice in, voice out — powered by production infrastructure, not a demo."
        />
      </Reveal>

      <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
        {TECH_STACK.map((tech, i) => (
          <Reveal key={tech.name} delay={i * 0.05}>
            <GlassCard interactive className="px-5 py-4" style={{ borderRadius: 18 }}>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-2.5 w-2.5 flex-none rounded-full"
                  style={{ background: tech.color }}
                />
                <div>
                  <p className="text-sm font-bold text-white">{tech.name}</p>
                  <p className="text-xs text-ink-muted">{tech.role}</p>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
