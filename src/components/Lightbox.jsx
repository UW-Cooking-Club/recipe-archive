import { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

function getFocusableButtons(container) {
  if (!container) return [];
  return Array.from(container.querySelectorAll("button")).filter((el) => !el.disabled);
}

function Lightbox({ photos, index, onClose, onNext, onPrev, alt = "Photo" }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const returnFocusRef = useRef(null);

  useEffect(() => {
    if (index === null || !photos?.length) {
      const restore = returnFocusRef.current;
      returnFocusRef.current = null;
      if (restore && typeof restore.focus === "function") {
        requestAnimationFrame(() => restore.focus());
      }
      return;
    }

    if (returnFocusRef.current === null) {
      returnFocusRef.current = document.activeElement;
    }
    const id = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });
    return () => cancelAnimationFrame(id);
  }, [index, photos]);

  const handleDialogKeyDown = (e) => {
    if (e.key !== "Tab" || index === null) return;
    const focusables = getFocusableButtons(dialogRef.current);
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else if (document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  if (index === null || !photos?.length) return null;

  const label = `${alt} — enlarged photo`;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
      onKeyDown={handleDialogKeyDown}
    >
      <button
        ref={closeButtonRef}
        type="button"
        className="absolute top-4 right-4 text-white text-2xl hover:opacity-70 transition-opacity"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
      >
        <FaTimes />
      </button>
      {photos.length > 1 && (
        <button
          type="button"
          className="absolute left-4 text-white text-3xl hover:opacity-70 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
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
          type="button"
          className="absolute right-4 text-white text-3xl hover:opacity-70 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next photo"
        >
          <FaChevronRight />
        </button>
      )}
      <p className="absolute bottom-4 text-white font-body text-sm" aria-live="polite">
        {index + 1} / {photos.length}
      </p>
    </div>
  );
}

export default Lightbox;
