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
  const [selectedEvents, setSelectedEvents] = useState([]);

  const allTags = useMemo(() => {
    const tagSet = new Set();
    recipes.forEach((r) => r.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, []);

  // Map each term tag to its event IDs (via recipes)
  const tagToEventIds = useMemo(() => {
    const map = {};
    allTags.forEach((tag) => {
      const eventIds = new Set();
      recipes.forEach((r) => {
        if (r.tags.includes(tag)) eventIds.add(r.eventId);
      });
      map[tag] = Array.from(eventIds);
    });
    return map;
  }, [allTags]);

  // Only show past events that have recipes
  const eventsWithRecipes = useMemo(() => {
    const idsWithRecipes = new Set(recipes.map((r) => r.eventId));
    return events.filter((e) => idsWithRecipes.has(e.id));
  }, []);

  const toggleTag = (tag) => {
    const eventIdsForTag = tagToEventIds[tag] || [];

    if (selectedTags.includes(tag)) {
      // Deselecting term — remove the term and its events
      setSelectedTags((prev) => prev.filter((t) => t !== tag));
      setSelectedEvents((prev) => prev.filter((id) => !eventIdsForTag.includes(id)));
    } else {
      // Selecting term — add the term and all its events
      setSelectedTags((prev) => [...prev, tag]);
      setSelectedEvents((prev) => [...new Set([...prev, ...eventIdsForTag])]);
    }
  };

  const toggleEvent = (eventId) => {
    if (selectedEvents.includes(eventId)) {
      // Deselecting event — also deselect any term that contained it
      setSelectedEvents((prev) => prev.filter((id) => id !== eventId));
      const tagsToRemove = selectedTags.filter((tag) => {
        const eventIdsForTag = tagToEventIds[tag] || [];
        return eventIdsForTag.includes(eventId);
      });
      if (tagsToRemove.length > 0) {
        setSelectedTags((prev) => prev.filter((t) => !tagsToRemove.includes(t)));
      }
    } else {
      // Selecting event
      const newSelectedEvents = [...selectedEvents, eventId];
      setSelectedEvents(newSelectedEvents);

      // Check if any term now has all its events selected — if so, select that term
      const tagsToAdd = allTags.filter((tag) => {
        if (selectedTags.includes(tag)) return false; // Already selected
        const eventIdsForTag = tagToEventIds[tag] || [];
        return eventIdsForTag.every((id) => newSelectedEvents.includes(id));
      });
      if (tagsToAdd.length > 0) {
        setSelectedTags((prev) => [...prev, ...tagsToAdd]);
      }
    }
  };

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch = recipe.name.toLowerCase().includes(search.toLowerCase());
      const matchesEvent = selectedEvents.length === 0 || selectedEvents.includes(recipe.eventId);
      return matchesSearch && matchesEvent;
    });
  }, [search, selectedEvents]);

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
            {/* Term filter */}
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

            {/* Event filter */}
            <div>
              <h3 className="font-heading text-sm text-gray-dark mb-2">Event</h3>
              <div className="flex flex-wrap gap-2">
                {eventsWithRecipes.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => toggleEvent(event.id)}
                    className={`px-3 py-1 rounded-full font-body text-sm transition-colors ${
                      selectedEvents.includes(event.id)
                        ? "bg-yellow text-gray-dark"
                        : "bg-gray-200 text-gray-dark hover:bg-gray-300"
                    }`}
                  >
                    {event.name}
                  </button>
                ))}
              </div>
            </div>

            {(selectedTags.length > 0 || selectedEvents.length > 0) && (
              <button
                onClick={() => {
                  setSelectedTags([]);
                  setSelectedEvents([]);
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
