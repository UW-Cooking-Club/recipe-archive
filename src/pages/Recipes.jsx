import { useState, useMemo } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import PageHero from "@components/PageHero";
import RecipeCard from "@components/recipes/RecipeCard";
import { recipes } from "../data/recipes";
import { events } from "../data/events";

function Recipes() {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const allTags = useMemo(() => {
    const tagSet = new Set();
    recipes.forEach((r) => r.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, []);

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch = recipe.name.toLowerCase().includes(search.toLowerCase());
      const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => recipe.tags.includes(tag));
      const matchesEvent = !selectedEvent || recipe.eventId === selectedEvent;
      return matchesSearch && matchesTags && matchesEvent;
    });
  }, [search, selectedTags, selectedEvent]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  return (
    <>
      <PageHero title="Recipe Archive" />

      <section className="bg-cream py-8 px-8">
        {/* Search bar */}
        <div className="max-w-4xl mx-auto flex items-center bg-gray-300 rounded-lg overflow-hidden mb-4">
          <FaSearch className="text-gray-600 ml-4" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search recipes..."
            className="flex-1 bg-transparent px-4 py-3 font-body text-sm outline-none"
          />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-3 transition-colors ${showFilters ? "text-primary" : "text-gray-600"}`}
            aria-label="Filter"
          >
            <FaBars />
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="max-w-4xl mx-auto mb-6 p-4 bg-white rounded-lg space-y-4">
            {/* Event filter */}
            <div>
              <h3 className="font-heading text-sm text-gray-dark mb-2">Event</h3>
              <div className="flex flex-wrap gap-2">
                {events.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                    className={`px-3 py-1 rounded-full font-body text-sm transition-colors ${
                      selectedEvent === event.id
                        ? "bg-yellow text-gray-dark"
                        : "bg-gray-200 text-gray-dark hover:bg-gray-300"
                    }`}
                  >
                    {event.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Tag filter */}
            <div>
              <h3 className="font-heading text-sm text-gray-dark mb-2">Term</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full font-body text-sm capitalize transition-colors ${
                      selectedTags.includes(tag)
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-dark hover:bg-gray-300"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {(selectedTags.length > 0 || selectedEvent) && (
              <button
                onClick={() => {
                  setSelectedTags([]);
                  setSelectedEvent(null);
                }}
                className="text-sm font-body text-primary hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* Recipe grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} name={recipe.name} image={recipe.image} slug={recipe.slug} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="font-body text-gray-500">No recipes found. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Recipes;
