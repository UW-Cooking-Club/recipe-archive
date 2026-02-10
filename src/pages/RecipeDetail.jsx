import { useParams, Link, useLocation } from "react-router-dom";
import { FaChevronLeft, FaStar, FaRegStar } from "react-icons/fa";
import { recipes } from "../data/recipes";
import { events } from "../data/events";

function RecipeDetail() {
  const { slug } = useParams();
  const location = useLocation();
  const fromEvent = location.state?.from === "event";
  const backLabel = fromEvent ? `Back to ${location.state?.eventName || "Event"}` : "Back to Recipes";
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-gray-dark mb-4">Recipe Not Found</h1>
          <Link to="/recipes" className="font-body text-primary hover:underline">
            Back to Recipe Archive
          </Link>
        </div>
      </div>
    );
  }

  const recipeEventIds = Array.isArray(recipe.eventId) ? recipe.eventId : [recipe.eventId];
  const recipeEvents = recipeEventIds.map((id) => events.find((e) => e.id === id)).filter(Boolean);

  const hasGroupedIngredients =
    recipe.ingredients.length > 0 && typeof recipe.ingredients[0] === "object" && recipe.ingredients[0].group;

  const stars = Array.from({ length: 5 }, (_, i) => i < recipe.difficulty);

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-8">
        {/* Back button */}
        <Link
          to={fromEvent && location.state?.eventSlug ? `/events/${location.state.eventSlug}` : "/recipes"}
          className="inline-flex items-center gap-2 font-body text-sm text-gray-dark hover:text-primary transition-colors mb-4"
        >
          <FaChevronLeft className="text-xs" />
          {backLabel}
        </Link>

        <h1 className="font-heading text-4xl md:text-5xl text-gray-dark leading-tight">
          {recipe.name}
          {recipe.subtitle && (
            <span className="block text-2xl md:text-3xl text-gray-dark/70 font-heading">{recipe.subtitle}</span>
          )}
        </h1>

        {/* From: Event link(s) */}
        {recipeEvents.length > 0 && (
          <p className="font-body text-sm text-gray-dark mb-6">
            From:{" "}
            {recipeEvents.map((event, i) => (
              <span key={event.id}>
                {i > 0 && " & "}
                <Link to={`/events/${event.slug}`} className="text-primary font-medium hover:underline">
                  {event.name}
                </Link>
              </span>
            ))}
          </p>
        )}

        {/* Photo + Description row */}
        <div className="flex flex-col md:flex-row gap-6 mb-6 bg-white border border-gray-200 rounded-lg p-4">
          {recipe.image ? (
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full md:w-56 h-48 md:h-auto object-cover rounded"
              loading="lazy"
            />
          ) : (
            <div className="w-full md:w-56 h-48 bg-gray-300 flex items-center justify-center text-gray-500 font-body text-sm rounded">
              Photo coming soon
            </div>
          )}
          <div className="flex-1">
            <h3 className="font-heading text-lg text-gray-dark mb-2">Description</h3>
            <p className="font-body text-sm text-gray-dark leading-relaxed">{recipe.description}</p>
          </div>
        </div>

        {/* Difficulty */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-heading text-sm text-gray-dark">Difficulty Level: {recipe.difficulty}/5</span>
          <div className="flex gap-0.5">
            {stars.map((filled, i) =>
              filled ? (
                <FaStar key={i} className="text-yellow text-sm" />
              ) : (
                <FaRegStar key={i} className="text-yellow text-sm" />
              )
            )}
          </div>
        </div>

        {/* Time & Serving row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center">
            <p className="font-heading text-xs text-gray-dark underline">Prep Time</p>
            <p className="font-body text-sm text-gray-dark">{recipe.prepTime || "—"}</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-xs text-gray-dark underline">Cooking Time</p>
            <p className="font-body text-sm text-gray-dark">{recipe.cookTime || "—"}</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-xs text-gray-dark underline">Total Time</p>
            <p className="font-body text-sm text-gray-dark">{recipe.totalTime || "—"}</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-xs text-gray-dark underline">Serving Size</p>
            <p className="font-body text-sm text-gray-dark">{recipe.servings}</p>
          </div>
        </div>

        {/* Equipment + Ingredients row */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Equipment */}
          {recipe.equipment && recipe.equipment.length > 0 && (
            <div className="border border-gray-300 rounded-lg p-5">
              <h2 className="font-heading text-lg text-gray-dark underline mb-3">Equipment</h2>
              <ul className="space-y-1.5">
                {recipe.equipment.map((item, i) => (
                  <li key={i} className="font-body text-sm text-gray-dark flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ingredients */}
          <div className="border border-gray-300 rounded-lg p-5">
            <h2 className="font-heading text-lg text-gray-dark underline mb-3">Ingredients</h2>
            {hasGroupedIngredients ? (
              recipe.ingredients.map((group, gi) => (
                <div key={gi} className={gi > 0 ? "mt-4" : ""}>
                  <h3 className="font-heading text-sm text-primary mb-1">{group.group}</h3>
                  <ul className="space-y-1.5">
                    {group.items.map((item, i) => (
                      <li key={i} className="font-body text-sm text-gray-dark flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <ul className="space-y-1.5">
                {recipe.ingredients.map((item, i) => (
                  <li key={i} className="font-body text-sm text-gray-dark flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Procedure */}
        <div className="border border-gray-300 rounded-lg p-6 mb-8">
          <h2 className="font-heading text-xl text-gray-dark text-center underline mb-6">Procedure</h2>
          <ol className="space-y-5">
            {recipe.instructions.map((step, i) => (
              <li key={i} className="font-body text-sm text-gray-dark flex items-start gap-3">
                <span className="font-heading text-base text-gray-dark shrink-0">{i + 1}.</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
