import { useParams, Link } from "react-router-dom";
import { FaChevronLeft, FaStar, FaRegStar } from "react-icons/fa";
import Lightbox, { useLightbox } from "@components/Lightbox";
import { events } from "../data/events";
import { recipes, getEventIds } from "../data/recipes";

function EventDetail() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);
  const { lightboxIndex, setLightboxIndex, close, goNext, goPrev } = useLightbox(
    event?.photos
  );

  if (!event) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-gray-dark mb-4">Event Not Found</h1>
          <Link to="/events" className="font-body text-primary hover:underline">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const eventRecipes = recipes.filter((r) => getEventIds(r).includes(event.id));

  const formatDate = (dateStr) => {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-8 md:pt-24">
        {/* Back button */}
        <Link
          to="/events"
          className="inline-flex items-center gap-2 font-body text-sm text-gray-dark hover:text-primary transition-colors mb-4"
        >
          <FaChevronLeft className="text-xs" />
          Back to Events
        </Link>

        <h1 className="font-heading text-4xl md:text-5xl text-gray-dark leading-tight mb-6">{event.name}</h1>

        {/* Cover photo */}
        {event.coverImage && (
          <div className="mb-4">
            <img src={event.coverImage} alt={event.name} className="w-full rounded-lg" />
          </div>
        )}

        {/* Date + optional Collab */}
        <div className="flex flex-wrap gap-x-8 gap-y-1 mb-6 font-body text-sm text-gray-dark">
          <p>
            <span className="font-bold">Date:</span> {formatDate(event.date)}
          </p>
          {event.collab && (
            <p>
              <span className="font-bold">Collab:</span> {event.collab}
            </p>
          )}
        </div>

        <hr className="border-gray-300 mb-6" />

        {/* Recipes Cooked */}
        {eventRecipes.length > 0 && (
          <div className="mb-8">
            <h2 className="font-heading text-lg text-gray-dark text-center underline mb-6">Recipes Cooked</h2>

            <div className="space-y-6">
              {eventRecipes.map((recipe) => {
                const stars = Array.from({ length: 5 }, (_, i) => i < recipe.difficulty);

                return (
                  <Link
                    key={recipe.id}
                    to={`/recipes/${recipe.slug}`}
                    state={{ from: "event", eventName: event.name, eventSlug: event.slug }}
                    className="block hover:bg-white/50 rounded-lg transition-colors"
                  >
                    <div className="flex flex-col md:flex-row gap-4 p-2">
                      <div className="shrink-0">
                        <h3 className="font-heading text-base text-gray-dark mb-2">{recipe.name}</h3>
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="w-full md:w-52 h-36 object-cover rounded"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col justify-center font-body text-sm text-gray-dark space-y-1">
                        <p>
                          <span className="font-bold">Prep Time:</span> {recipe.prepTime || "—"}
                        </p>
                        <p>
                          <span className="font-bold">Cooking Time:</span> {recipe.cookTime || "—"}
                        </p>
                        <p>
                          <span className="font-bold">Total Time:</span> {recipe.totalTime || "—"}
                        </p>
                        <div className="flex items-center gap-1">
                          <span className="font-bold">Difficulty Level:</span> {recipe.difficulty}/5
                          <div className="flex gap-0.5 ml-1">
                            {stars.map((filled, i) =>
                              filled ? (
                                <FaStar key={i} className="text-yellow text-xs" />
                              ) : (
                                <FaRegStar key={i} className="text-yellow text-xs" />
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <hr className="border-gray-300 mb-6" />

        {/* Class Photos */}
        {event.photos.length > 0 && (
          <div className="mb-8">
            <h2 className="font-heading text-lg text-gray-dark text-center mb-6">
              {event.googlePhotos ? (
                <a
                  href={event.googlePhotos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >
                  Class Photos
                </a>
              ) : (
                <span className="underline">Class Photos</span>
              )}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {event.photos.map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt={`${event.name} photo ${i + 1}`}
                  className="w-full h-40 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setLightboxIndex(i)}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <Lightbox
        photos={event.photos}
        index={lightboxIndex}
        onClose={close}
        onNext={goNext}
        onPrev={goPrev}
        alt={event.name}
      />
    </div>
  );
}

export default EventDetail;
