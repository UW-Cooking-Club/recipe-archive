import { useState } from "react";

/**
 * Full-width page hero: reserves aspect ratio (less CLS), cream placeholder, fade-in when loaded.
 * Uses fetchPriority="high" so the browser prioritizes the LCP image on inner pages.
 * Remounts when `src` changes (via `key`) so reused instances fade in the new banner.
 */
function HeroBannerImageInner({ src, alt, fetchPriority = "high" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full overflow-hidden bg-cream aspect-21/9">
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        fetchPriority={fetchPriority}
        decoding="async"
        loading="eager"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  );
}

function HeroBannerImage(props) {
  return <HeroBannerImageInner key={props.src} {...props} />;
}

export default HeroBannerImage;
