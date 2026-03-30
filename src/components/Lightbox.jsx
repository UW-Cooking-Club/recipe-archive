import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

function useLightbox(photos) {
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

function Lightbox({ photos, index, onClose, onNext, onPrev, alt = "Photo" }) {
  if (index === null || !photos?.length) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center" onClick={onClose}>
      <button
        className="absolute top-4 right-4 text-white text-2xl hover:opacity-70 transition-opacity"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close"
      >
        <FaTimes />
      </button>
      {photos.length > 1 && (
        <button
          className="absolute left-4 text-white text-3xl hover:opacity-70 transition-opacity"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous photo"
        >
          <FaChevronLeft />
        </button>
      )}
      <img
        src={photos[index]}
        alt={`${alt} photo ${index + 1}`}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
      {photos.length > 1 && (
        <button
          className="absolute right-4 text-white text-3xl hover:opacity-70 transition-opacity"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next photo"
        >
          <FaChevronRight />
        </button>
      )}
      <p className="absolute bottom-4 text-white font-body text-sm">
        {index + 1} / {photos.length}
      </p>
    </div>
  );
}

export { useLightbox };
export default Lightbox;
