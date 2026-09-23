import type { CSSProperties, ReactNode } from "react";

interface PhoneFrameProps {
  /** Screen content — a real screenshot or a styled placeholder. */
  children?: ReactNode;
  className?: string;
  /** Optional accent glow bloomed behind the device. */
  glowColor?: string;
}

/**
 * CSS-only device shell: thin metal bezel, glossy edge highlight, centered
 * punch-hole camera, ~9:19.5 screen. No brand assets. Drop any node into the
 * screen via `children`.
 */
export default function PhoneFrame({
  children,
  className = "",
  glowColor,
}: PhoneFrameProps) {
  const style = glowColor
    ? ({ "--phone-glow": glowColor } as CSSProperties)
    : undefined;

  return (
    <div className={`phone-frame ${className}`} style={style}>
      <div className="phone-frame__metal">
        <div className="phone-frame__screen">
          <span aria-hidden className="phone-frame__camera" />
          {children}
        </div>
      </div>
    </div>
  );
}
