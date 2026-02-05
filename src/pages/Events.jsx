import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageHero from "@components/PageHero";
import EventCard from "@components/events/EventCard";
import { events } from "../data/events";

function Events() {
  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const pastEvents = events.filter((e) => e.status === "past");

  return (
    <>
      <PageHero title="Our Events" />

      {/* Upcoming Events */}
      <section className="bg-cream py-10 px-8">
        <h2 className="font-heading text-3xl text-primary text-center mb-8">Upcoming events</h2>

        <div className="max-w-5xl mx-auto relative">
          {upcomingEvents.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>

              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-dark text-2xl hover:opacity-60"
                aria-label="Previous"
              >
                <FaChevronLeft />
              </button>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-dark text-2xl hover:opacity-60"
                aria-label="Next"
              >
                <FaChevronRight />
              </button>
            </>
          ) : (
            <p className="font-body text-gray-dark text-center">No upcoming events — stay tuned!</p>
          )}
        </div>

        <hr className="max-w-4xl mx-auto border-primary border-t-2 mt-10 mb-8" />

        {/* Past Events */}
        <h2 className="font-heading text-3xl text-gray-dark text-center mb-8">Past Events</h2>
      </section>

      <section className="bg-dark py-8 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {pastEvents.map((event) => (
            <Link key={event.id} to={`/events/${event.slug}`} className="group relative overflow-hidden rounded h-40">
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
                  <h3 className="font-heading text-base text-white">{event.name}</h3>
                  <p className="font-body text-xs text-gray-300">
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
    </>
  );
}

export default Events;
