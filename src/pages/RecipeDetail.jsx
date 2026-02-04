import { useParams, Link } from "react-router-dom";
import { FaClock, FaUtensils, FaArrowLeft } from "react-icons/fa";
import { recipes } from "../data/recipes";
import { events } from "../data/events";

function RecipeDetail() {
  const { slug } = useParams();
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

  const event = events.find((e) => e.id === recipe.eventId);

  // Check if ingredients are grouped (array of objects with group/items)
  const hasGroupedIngredients =
    recipe.ingredients.length > 0 && typeof recipe.ingredients[0] === "object" && recipe.ingredients[0].group;

  return (
    <div className="bg-cream">
      {/* Hero Image */}
      <div className="relative h-[350px] md:h-[400px]">
        <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/50 flex items-end">
          <div className="w-full px-8 py-6 md:px-16 md:py-10">
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-1">{recipe.name}</h1>
            {recipe.subtitle && <p className="font-body text-white/80 text-lg mb-2">{recipe.subtitle}</p>}
            <p className="font-body text-white/90 text-sm md:text-base max-w-2xl">{recipe.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Back link */}
        <div className="pt-6">
          <Link to="/recipes" className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline">
            <FaArrowLeft className="text-xs" /> Back to Recipe Archive
          </Link>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-6 items-center bg-white rounded-lg px-6 py-4 mt-4">
          <div className="flex items-center gap-2">
            <FaUtensils className="text-primary text-sm" />
            <span className="font-body text-gray-dark text-sm">{recipe.servings}</span>
          </div>
          {recipe.prepTime && (
            <div className="flex items-center gap-2">
              <FaClock className="text-primary text-sm" />
              <span className="font-body text-gray-dark text-sm">Prep: {recipe.prepTime}</span>
            </div>
          )}
          {recipe.cookTime && (
            <div className="flex items-center gap-2">
              <FaClock className="text-primary text-sm" />
              <span className="font-body text-gray-dark text-sm">Cook: {recipe.cookTime}</span>
            </div>
          )}
          {event && (
            <div className="flex items-center gap-2 ml-auto">
              <span className="font-body text-gray-dark text-sm">
                From: <span className="text-primary font-medium">{event.name}</span>
              </span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {recipe.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-sage/30 text-gray-dark font-body text-xs rounded-full capitalize">
              {tag}
            </span>
          ))}
        </div>

        {/* Ingredients & Instructions */}
        <div className="grid md:grid-cols-2 gap-6 mt-8 pb-12">
          {/* Ingredients */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="font-heading text-2xl text-primary mb-4">Ingredients</h2>
            {hasGroupedIngredients ? (
              recipe.ingredients.map((group, gi) => (
                <div key={gi} className={gi > 0 ? "mt-4" : ""}>
                  <h3 className="font-heading text-lg text-gray-dark mb-2">{group.group}</h3>
                  <ul className="space-y-1.5">
                    {group.items.map((item, i) => (
                      <li key={i} className="font-body text-gray-dark text-sm flex items-start">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <ul className="space-y-1.5">
                {recipe.ingredients.map((item, i) => (
                  <li key={i} className="font-body text-gray-dark text-sm flex items-start">
                    <span className="text-primary mr-2 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="font-heading text-2xl text-primary mb-4">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="font-body text-gray-dark text-sm flex items-start gap-3">
                  <span className="font-heading text-lg text-primary shrink-0 leading-5">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Source attribution */}
        {recipe.source?.name && (
          <div className="pb-8 -mt-4">
            <p className="font-body text-gray-dark text-xs">
              Recipe by:{" "}
              {recipe.source.url ? (
                <a
                  href={recipe.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {recipe.source.name}
                </a>
              ) : (
                <span className="text-primary">{recipe.source.name}</span>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeDetail;
