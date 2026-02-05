import { Link } from "react-router-dom";

function EventCard({ event }) {
  const formatDate = (dateStr) => {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Link to={`/events/${event.slug}`} className="text-center group">
      <div className="relative overflow-hidden rounded">
        {event.coverImage ? (
          <img
            src={event.coverImage}
            alt={event.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
          />
        ) : (
          <div className="w-full h-48 bg-gray-300" />
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-dark/70 px-3 py-2">
          <h3 className="font-heading text-lg text-white">{event.name}</h3>
          <p className="font-body text-xs text-gray-300 mt-1">
            {event.description}
          </p>
        </div>
      </div>
      <p className="font-body text-sm text-gray-dark mt-2">
        {formatDate(event.date)}
      </p>
    </Link>
  );
}

export default EventCard;
