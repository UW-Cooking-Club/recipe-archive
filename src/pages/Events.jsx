import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import PageHero from "@components/PageHero";
import EventCard from "@components/events/EventCard";

const placeholderUpcoming = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  name: "[Event Name]",
  description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
  date: "[date]",
  image: `https://placehold.co/300x200/e2e8f0/475569?text=Event+${i + 1}`,
}));

const placeholderPast = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  image: `https://placehold.co/200x150/d1d5db/6b7280?text=Past+${i + 1}`,
}));

function Events() {
  const [page, setPage] = useState(1);
  const totalPages = 3;

  return (
    <>
      <PageHero title="Our Events" />

      {/* Upcoming Events */}
      <section className="bg-cream py-10 px-8">
        <h2 className="font-heading text-3xl text-primary text-center mb-8">Upcoming events</h2>

        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
            {placeholderUpcoming.map((event) => (
              <EventCard key={event.id} {...event} />
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
        </div>

        <hr className="max-w-4xl mx-auto border-primary border-t-2 mt-10 mb-8" />

        {/* Past Events */}
        <h2 className="font-heading text-3xl text-gray-dark text-center mb-8">Past Events</h2>
      </section>

      <section className="bg-dark py-8 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {placeholderPast.map((event) => (
            <div key={event.id} className="bg-gray-400 rounded h-32" />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8 text-white font-body">
          <button className="hover:opacity-60" aria-label="First page">
            <FaAngleDoubleLeft />
          </button>
          <button className="hover:opacity-60" aria-label="Previous page">
            <FaChevronLeft />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-2 ${page === i + 1 ? "underline font-bold" : "hover:opacity-60"}`}
            >
              {i + 1}
            </button>
          ))}
          <span>...</span>
          <button className="hover:opacity-60" aria-label="Next page">
            <FaChevronRight />
          </button>
          <button className="hover:opacity-60" aria-label="Last page">
            <FaAngleDoubleRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default Events;
