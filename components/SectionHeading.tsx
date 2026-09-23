import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  /** Eyebrow color — defaults to the accent green. */
  eyebrowColor?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  eyebrowColor = "#34D399",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow && (
        <p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.22em]"
          style={{ color: eyebrowColor }}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
