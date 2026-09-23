import type { CSSProperties, ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Enables the desktop hover lift + brightness (spring easing). */
  interactive?: boolean;
}

/**
 * The core glass surface used across the whole site: layered translucent
 * gradient, hairline border, grounded shadow, a specular top edge, and a soft
 * light bloom in the top-left corner. Matches the app's glass_card.dart.
 */
export default function GlassCard({
  children,
  className = "",
  style,
  interactive = false,
}: GlassCardProps) {
  return (
    <div
      className={`glass-card ${interactive ? "glass-card--interactive" : ""} ${className}`}
      style={style}
    >
      <span aria-hidden className="glass-card__specular" />
      <span aria-hidden className="glass-card__corner-glow" />
      <div className="glass-card__content">{children}</div>
    </div>
  );
}
