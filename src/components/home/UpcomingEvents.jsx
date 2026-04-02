import { Link } from "react-router-dom";
import Lightbox from "@components/Lightbox";
import { useLightbox } from "../../hooks/useLightbox";
import { events } from "../../data/events";
import panSticker from "@assets/pan_sticker.svg";

function UpcomingEvents() {
  const upcomingEvent = events.find((e) => e.status === "upcoming");
  const { lightboxIndex, setLightboxIndex, close, goNext, goPrev } = useLightbox(upcomingEvent?.photos);

  if (!upcomingEvent) return null;

  const formatDate = (dateStr) => {
    const d = new Date(dateStr + "T00:00:00");
    const weekday = d.toLocaleDateString("en-US", { weekday: "long" });
    const month = d.toLocaleDateString("en-US", { month: "long" });
    const day = d.getDate();
    const suffix = ["th", "st", "nd", "rd"][[11, 12, 13].includes(day % 100) ? 0 : Math.min(day % 10, 4)] || "th";
    return `${weekday}, ${month} ${day}${suffix}`;
  };

  return (
    <section className="relative bg-dark py-12 px-8">
      <img src={panSticker} alt="" className="absolute -top-28 -right-8 w-72 hidden md:block" />
      <h2 className="relative font-fun text-6xl text-white text-center mb-8 underline">
        Check Out Our
        <br />
        Upcoming Event!
      </h2>

      <div className="max-w-6xl mx-auto">
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
          <p className="font-body text-sm text-gray-300 max-w-2xl mx-auto mb-4 whitespace-pre-line">
            {upcomingEvent.description}
          </p>

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

      <Lightbox
        photos={upcomingEvent.photos}
        index={lightboxIndex}
        onClose={close}
        onNext={goNext}
        onPrev={goPrev}
        alt={upcomingEvent.name}
      />
    </section>
  );
}

export default UpcomingEvents;
