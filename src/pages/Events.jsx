import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaTimes, FaImages } from "react-icons/fa";
import PageHero from "@components/PageHero";
import eventsBanner from "@assets/events_banner.jpg";
import instagramIcon from "@assets/Instagram_Icon.webp";
import { events } from "../data/events";

function Events() {
  const upcomingEvent = events.find((e) => e.status === "upcoming");
  const pastEvents = events
    .filter((e) => e.status === "past")
    .sort((a, b) => new Date(b.date) - new Date(a.date));

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

  const formatDate = (dateStr) => {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      <PageHero image={eventsBanner} alt="Our Events" />

      {/* Upcoming Event */}
      <section className="bg-cream py-10 px-8">
        <h2 className="font-heading text-3xl text-primary text-center mb-8">Upcoming Event</h2>

        <div className="max-w-4xl mx-auto">
          {upcomingEvent ? (
            <div>
              {/* Event photos grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {upcomingEvent.photos.map((photo, i) => (
                  <img
                    key={i}
                    src={photo}
                    alt={`${upcomingEvent.name} photo ${i + 1}`}
                    className="w-full h-64 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setLightboxIndex(i)}
                  />
                ))}
              </div>

              {/* Event info */}
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl text-gray-dark mb-2">{upcomingEvent.name}</h3>
                <p className="font-body text-sm text-gray-dark mb-1">{formatDate(upcomingEvent.date)}</p>
                {upcomingEvent.location && (
                  <p className="font-body text-sm text-gray-dark mb-3">{upcomingEvent.location}</p>
                )}
                <p className="font-body text-sm text-gray-dark max-w-2xl mx-auto mb-4 whitespace-pre-line">
                  {upcomingEvent.description}
                </p>
              </div>

              {/* Times */}
              {upcomingEvent.times && (
                <div className="text-center mb-4">
                  <p className="font-body text-sm font-bold text-gray-dark mb-1">Class Times:</p>
                  <div className="font-body text-sm text-gray-dark space-y-0.5">
                    {upcomingEvent.times.map((time, i) => (
                      <p key={i}>{time}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Tickets */}
              {upcomingEvent.ticketsUrl && (
                <div className="text-center mt-4">
                  <a
                    href={upcomingEvent.ticketsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white font-body font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Get Tickets
                  </a>
                </div>
              )}
            </div>
          ) : (
            <p className="font-body text-gray-dark text-center">No upcoming events — stay tuned!</p>
          )}
        </div>

      </section>

      {/* Past Events banner bar */}
      <section className="bg-primary px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h2 className="font-heading text-3xl text-white italic">Past Events</h2>
          <a
            href="https://docs.google.com/document/d/1zsh7RrDI0WKiW7BtNzg9S-hFcpxBy_LEXkuJGpTfDIA/edit?tab=t.0#heading=h.wyxw4y7t9pw6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-dark font-body font-semibold text-sm px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            <FaImages className="text-base" />
            See Gallery
          </a>
        </div>
      </section>

      <section className="bg-dark py-6 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pastEvents.map((event) => (
            <Link key={event.id} to={`/events/${event.slug}`} className="group relative overflow-hidden rounded h-72">
              {event.coverImage ? (
                <img
                  src={event.coverImage}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gray-500" />
              )}
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/60 transition-colors flex items-end p-3">
                <div>
                  <h3 className="font-heading text-lg text-white">{event.name}</h3>
                  <p className="font-body text-sm text-gray-300">
                    {new Date(event.date + "T00:00:00").toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stay updated / Instagram CTA */}
      <section className="bg-cream py-12 px-8">
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://www.instagram.com/uwcookingclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src={instagramIcon} alt="Instagram" className="h-16 md:h-20" />
          </a>
          <a
            href="https://www.instagram.com/uwcookingclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-fun text-2xl md:text-3xl text-primary hover:opacity-80 transition-opacity text-center"
          >
            Stay updated on our<br />next event!
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && upcomingEvent && (
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
    </>
  );
}

export default Events;
