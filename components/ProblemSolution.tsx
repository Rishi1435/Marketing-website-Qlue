import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PROBLEMS, SOLUTIONS } from "@/lib/constants";

export default function ProblemSolution() {
  return (
    <section id="problem" className="relative mx-auto max-w-content px-5 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="The gap"
          title="Interview prep today is broken"
          subtitle="Landing the offer takes practice with a real interviewer — most students never get that."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Reveal delay={0.05}>
          <GlassCard interactive className="h-full p-7 sm:p-9">
            <h3 className="text-xl font-bold text-white">What&apos;s broken</h3>
            <ul className="mt-5 space-y-4">
              {PROBLEMS.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full"
                    style={{ background: "#FF375F" }}
                  />
                  <span className="text-ink-muted">
                    <span className="font-semibold text-white">
                      {item.title}.
                    </span>{" "}
                    {item.body}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.12}>
          <GlassCard interactive className="h-full p-7 sm:p-9">
            <h3 className="text-xl font-bold text-white">
              How Qlue solves it
            </h3>
            <ul className="mt-5 space-y-4">
              {SOLUTIONS.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full"
                    style={{ background: "#34D399" }}
                  />
                  <span className="text-ink-muted">
                    <span className="font-semibold text-white">
                      {item.title}.
                    </span>{" "}
                    {item.body}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
