/**
 * Fixed, full-viewport black backdrop with two soft accent-green radial
 * "mist" glows (top-right + bottom-left). This is the app's signature
 * atmosphere — it sits behind everything so glass surfaces have something to
 * frost over.
 */
export default function AtmosphereBackground() {
  return (
    <div aria-hidden className="atmosphere">
      <div className="atmosphere__glow atmosphere__glow--tr" />
      <div className="atmosphere__glow atmosphere__glow--bl" />
    </div>
  );
}
