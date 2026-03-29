import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { events } from "../../data/events";
import panSticker from "@assets/pan_sticker.svg";

function UpcomingEvents() {
  const upcomingEvent = events.find((e) => e.status === "upcoming");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => {
    if (!upcomingEvent) return;
    setLightboxIndex((prev) => (prev + 1) % upcomingEvent.photos.length);
  }, [upcomingEvent]);
  const goPrev = useCallback(() => {
    if (!upcomingEvent) return;
    setLightboxIndex((prev) => (prev - 1 + upcomingEvent.photos.length) % upcomingEvent.photos.length);
  }, [upcomingEvent]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  if (!upcomingEvent) return null;

  const formatDate = (dateStr) => {
    const d = new Date(dateStr + "T00:00:00");
    const weekday = d.toLocaleDateString("en-US", { weekday: "long" });
    const month = d.toLocaleDateString("en-US", { month: "long" });
    const day = d.getDate();
    const suffix = ["th", "st", "nd", "rd"][([11, 12, 13].includes(day % 100) ? 0 : Math.min(day % 10, 4))] || "th";
    return `${weekday}, ${month} ${day}${suffix}`;
  };

  return (
    <section className="relative bg-dark py-12 px-8">
      <img src={panSticker} alt="" className="absolute -top-28 -right-8 w-72 z-10" />
      <h2 className="font-fun text-6xl text-white text-center mb-8 underline">Check Out Our<br />Upcoming Event!</h2>

      <div className="max-w-4xl mx-auto">
        {/* Photos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {upcomingEvent.photos.slice(0, 4).map((photo, i) => (
            <img
              key={i}
              src={photo}
              alt={`${upcomingEvent.name} photo ${i + 1}`}
              className="w-full h-64 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
              loading="lazy"
              onClick={() => setLightboxIndex(i)}
            />
          ))}
        </div>

        {/* Info */}
        <div className="text-center">
          <h3 className="font-heading text-5xl text-white mb-1">{upcomingEvent.name}</h3>
          <p className="font-body text-sm text-white font-bold mb-3">{formatDate(upcomingEvent.date)}</p>
          <p className="font-body text-sm text-gray-300 max-w-2xl mx-auto mb-4 whitespace-pre-line">{upcomingEvent.description}</p>

          <div className="flex flex-wrap justify-center gap-3">
            {upcomingEvent.ticketsUrl && (
              <a
                href={upcomingEvent.ticketsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white font-body font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Get Tickets
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center" onClick={closeLightbox}>
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:opacity-70 transition-opacity"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <FaTimes />
          </button>
          {upcomingEvent.photos.length > 1 && (
            <button
              className="absolute left-4 text-white text-3xl hover:opacity-70 transition-opacity"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous photo"
            >
              <FaChevronLeft />
            </button>
          )}
          <img
            src={upcomingEvent.photos[lightboxIndex]}
            alt={`${upcomingEvent.name} photo ${lightboxIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          {upcomingEvent.photos.length > 1 && (
            <button
              className="absolute right-4 text-white text-3xl hover:opacity-70 transition-opacity"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next photo"
            >
              <FaChevronRight />
            </button>
          )}
          <p className="absolute bottom-4 text-white font-body text-sm">
            {lightboxIndex + 1} / {upcomingEvent.photos.length}
          </p>
        </div>
      )}
    </section>
  );
}

export default UpcomingEvents;
