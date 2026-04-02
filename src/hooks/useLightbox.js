import { useState, useEffect, useCallback } from "react";

export function useLightbox(photos) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => {
    if (!photos?.length) return;
    setLightboxIndex((prev) => (prev + 1) % photos.length);
  }, [photos]);
  const goPrev = useCallback(() => {
    if (!photos?.length) return;
    setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, close, goNext, goPrev]);

  return { lightboxIndex, setLightboxIndex, close, goNext, goPrev };
}
