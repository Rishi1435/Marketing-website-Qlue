import type { ReactNode } from "react";

interface GlassButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  ariaLabel?: string;
  /** Open in a new tab (external links). */
  external?: boolean;
}

/**
 * Pill-shaped glass button. Renders an anchor when `href` is provided,
 * otherwise a button. Primary carries the accent-green tint; secondary is a
 * neutral glass surface.
 */
export default function GlassButton({
  children,
  href,
  variant = "primary",
  className = "",
  ariaLabel,
  external = false,
}: GlassButtonProps) {
  const classes = `glass-button glass-button--${variant} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" aria-label={ariaLabel} className={classes}>
      {children}
    </button>
  );
}
