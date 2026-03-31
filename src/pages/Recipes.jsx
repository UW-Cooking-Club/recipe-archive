import { useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import PageHero from "@components/PageHero";
import RecipeCard from "@components/recipes/RecipeCard";
import recipesBanner from "@assets/recipes_banner.jpg";
import { recipes, getEventIds, getSearchableText } from "../data/recipes";
import { events } from "../data/events";

function Recipes() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("q") || "";
  const showFilters = searchParams.get("filters") === "1";
  const selectedTags = useMemo(() => {
    const raw = searchParams.get("tags");
    return raw ? raw.split(",") : [];
  }, [searchParams]);
  const selectedEvents = useMemo(() => {
    const raw = searchParams.get("events");
    return raw ? raw.split(",") : [];
  }, [searchParams]);
  const selectedCuisines = useMemo(() => {
    const raw = searchParams.get("cuisines");
    return raw ? raw.split(",") : [];
  }, [searchParams]);

  const updateParams = useCallback(
    (updates) => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          Object.entries(updates).forEach(([key, value]) => {
            if (value === null || value === "" || (Array.isArray(value) && value.length === 0)) {
              next.delete(key);
            } else {
              next.set(key, Array.isArray(value) ? value.join(",") : value);
            }
          });
          return next;
        },
        { replace: true }
      );
    },
    [setSearchParams]
  );

  const allTags = useMemo(() => {
    const tagSet = new Set();
    recipes.forEach((r) => r.tags.forEach((t) => tagSet.add(t)));
    const seasonOrder = { Winter: 0, Spring: 1, Fall: 2 };
    return Array.from(tagSet).sort((a, b) => {
      const [seasonA, yearA] = a.split(" ");
      const [seasonB, yearB] = b.split(" ");
      if (yearA !== yearB) return Number(yearB) - Number(yearA);
      return seasonOrder[seasonB] - seasonOrder[seasonA];
    });
  }, []);

  // Map each term to its event IDs
  const tagToEventIds = useMemo(() => {
    const map = {};
    allTags.forEach((tag) => { map[tag] = []; });
    events.forEach((event) => {
      if (map[event.term]) map[event.term].push(event.id);
    });
    return map;
  }, [allTags]);

  // Only show events that have recipes, newest first
  const eventsWithRecipes = useMemo(() => {
    const idsWithRecipes = new Set(recipes.flatMap((r) => getEventIds(r)));
    return events.filter((e) => idsWithRecipes.has(e.id)).sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  const searchIndex = useMemo(() => {
    return recipes.map((recipe) => ({
      recipe,
      text: getSearchableText(recipe),
    }));
  }, []);

  const allCuisines = useMemo(() => {
    const cuisineSet = new Set();
    recipes.forEach((r) => { if (r.cuisine) cuisineSet.add(r.cuisine); });
    return Array.from(cuisineSet).sort();
  }, []);

  const toggleCuisine = (cuisine) => {
    const next = selectedCuisines.includes(cuisine)
      ? selectedCuisines.filter((c) => c !== cuisine)
      : [...selectedCuisines, cuisine];
    updateParams({ cuisines: next });
  };

  const toggleTag = (tag) => {
    const eventIdsForTag = tagToEventIds[tag] || [];

    if (selectedTags.includes(tag)) {
      // Deselecting term — remove the term, but only remove events not needed by other selected terms
      const newTags = selectedTags.filter((t) => t !== tag);
      const eventIdsStillNeeded = new Set(
        newTags.flatMap((t) => tagToEventIds[t] || [])
      );
      const newEvents = selectedEvents.filter(
        (id) => !eventIdsForTag.includes(id) || eventIdsStillNeeded.has(id)
      );
      updateParams({ tags: newTags, events: newEvents });
    } else {
      // Selecting term — add the term and all its events
      const newTags = [...selectedTags, tag];
      const newEvents = [...new Set([...selectedEvents, ...eventIdsForTag])];
      updateParams({ tags: newTags, events: newEvents });
    }
  };

  const toggleEvent = (eventId) => {
    if (selectedEvents.includes(eventId)) {
      // Deselecting event — also deselect any term that contained it
      const newEvents = selectedEvents.filter((id) => id !== eventId);
      const tagsToRemove = selectedTags.filter((tag) => {
        const eventIdsForTag = tagToEventIds[tag] || [];
        return eventIdsForTag.includes(eventId);
      });
      const newTags = tagsToRemove.length > 0 ? selectedTags.filter((t) => !tagsToRemove.includes(t)) : selectedTags;
      updateParams({ tags: newTags, events: newEvents });
    } else {
      // Selecting event
      const newEvents = [...selectedEvents, eventId];

      // Check if any term now has all its events selected — if so, select that term
      const tagsToAdd = allTags.filter((tag) => {
        if (selectedTags.includes(tag)) return false;
        const eventIdsForTag = tagToEventIds[tag] || [];
        return eventIdsForTag.every((id) => newEvents.includes(id));
      });
      const newTags = tagsToAdd.length > 0 ? [...selectedTags, ...tagsToAdd] : selectedTags;
      updateParams({ tags: newTags, events: newEvents });
    }
  };

  const filteredRecipes = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return searchIndex
      .filter(({ recipe, text }) => {
        const matchesSearch = !search || text.includes(lowerSearch);
        const matchesEvent =
          selectedEvents.length === 0 || getEventIds(recipe).some((id) => selectedEvents.includes(id));
        const matchesCuisine =
          selectedCuisines.length === 0 || selectedCuisines.includes(recipe.cuisine);
        return matchesSearch && matchesEvent && matchesCuisine;
      })
      .map(({ recipe }) => recipe)
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [search, selectedEvents, selectedCuisines, searchIndex]);

  return (
    <>
      <PageHero image={recipesBanner} alt="Recipe Archive" title="Recipe Archive" />

      <section className="bg-cream py-8 px-8">
        {/* Search bar */}
        <div className="max-w-6xl mx-auto flex items-center bg-gray-300 rounded-lg overflow-hidden mb-4">
          <FaSearch className="text-gray-600 ml-4" />
          <input
            type="text"
            value={search}
            onChange={(e) => updateParams({ q: e.target.value })}
            placeholder="Search recipes..."
            className="flex-1 bg-transparent px-4 py-3 font-body text-sm outline-none"
          />
          <button
            onClick={() => updateParams({ filters: showFilters ? null : "1" })}
            className={`px-4 py-3 transition-colors ${showFilters ? "text-primary" : "text-gray-600"}`}
            aria-label="Filter"
          >
            <FaBars />
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="max-w-6xl mx-auto mb-6 p-4 bg-white rounded-lg space-y-4">
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

            {/* Cuisine filter */}
            <div>
              <h3 className="font-heading text-sm text-gray-dark mb-2">Cuisine</h3>
              <div className="flex flex-wrap gap-2">
                {allCuisines.map((cuisine) => (
                  <button
                    key={cuisine}
                    onClick={() => toggleCuisine(cuisine)}
                    className={`px-3 py-1 rounded-full font-body text-sm transition-colors ${
                      selectedCuisines.includes(cuisine)
                        ? "bg-sage text-white"
                        : "bg-gray-200 text-gray-dark hover:bg-gray-300"
                    }`}
                  >
                    {cuisine}
                  </button>
                ))}
              </div>
            </div>

            {(selectedTags.length > 0 || selectedEvents.length > 0 || selectedCuisines.length > 0) && (
              <button
                onClick={() => updateParams({ tags: [], events: [], cuisines: [] })}
                className="text-sm font-body text-primary hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* Recipe grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
