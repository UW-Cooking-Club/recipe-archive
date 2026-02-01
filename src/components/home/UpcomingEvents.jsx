import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const placeholderEvents = [
  {
    id: 1,
    name: "[event name]",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    image: "https://placehold.co/300x200/e2e8f0/475569?text=Event+1",
  },
  {
    id: 2,
    name: "[event name]",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    image: "https://placehold.co/300x200/e2e8f0/475569?text=Event+2",
  },
  {
    id: 3,
    name: "[event name]",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    image: "https://placehold.co/300x200/e2e8f0/475569?text=Event+3",
  },
];

function UpcomingEvents() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 2;

  return (
    <section className="bg-dark py-12 px-8">
      <h2 className="font-heading text-3xl text-white text-center mb-8 underline">Check Out Our Upcoming Events!</h2>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderEvents.map((event) => (
            <div key={event.id} className="text-center">
              <img src={event.image} alt={event.name} className="w-full h-48 object-cover rounded" />
              <h3 className="font-heading text-lg text-white mt-3">{event.name}</h3>
              <p className="font-body text-xs text-gray-300 mt-1">{event.description}</p>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            className="text-white hover:opacity-80"
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full ${i === currentPage ? "bg-white" : "bg-gray-500"}`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            className="text-white hover:opacity-80"
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
